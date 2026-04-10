const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RSS_SOURCES = [
  { name: "VentureBeat AI", url: "https://venturebeat.com/category/ai/feed/" },
  { name: "Ars Technica", url: "https://feeds.arstechnica.com/arstechnica/index" },
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
  { name: "The Verge AI", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" },
  { name: "AI News", url: "https://artificialintelligence-news.com/feed/rss/" },
];

interface Article {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  description: string;
  image?: string;
}

function stripCdata(s: string): string {
  return s.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function getTagContent(xml: string, tag: string): string {
  // Match <tag>...</tag> or <tag><![CDATA[...]]></tag>
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = xml.match(re);
  if (!m) return "";
  return stripCdata(m[1].trim());
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

function extractImage(itemXml: string): string | undefined {
  // media:content or media:thumbnail
  const mediaMatch = itemXml.match(/<media:(?:content|thumbnail)[^>]+url=["']([^"']+)["']/i);
  if (mediaMatch) return mediaMatch[1];
  // enclosure with image type
  const encMatch = itemXml.match(/<enclosure[^>]+type=["']image\/[^"']+["'][^>]+url=["']([^"']+)["']/i);
  if (encMatch) return encMatch[1];
  const encMatch2 = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]+type=["']image/i);
  if (encMatch2) return encMatch2[1];
  // img in content
  const content = getTagContent(itemXml, "content:encoded") || getTagContent(itemXml, "description");
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) return imgMatch[1];
  return undefined;
}

function parseItems(xml: string): string[] {
  const items: string[] = [];
  const re = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) items.push(m[0]);
  if (items.length === 0) {
    // Try Atom <entry>
    const re2 = /<entry[\s>]([\s\S]*?)<\/entry>/gi;
    while ((m = re2.exec(xml)) !== null) items.push(m[0]);
  }
  return items;
}

function getLinkFromEntry(itemXml: string): string {
  // RSS <link>
  const linkContent = getTagContent(itemXml, "link");
  if (linkContent && linkContent.startsWith("http")) return linkContent;
  // Atom <link href="..."/>
  const hrefMatch = itemXml.match(/<link[^>]+href=["']([^"']+)["']/i);
  if (hrefMatch) return hrefMatch[1];
  return linkContent;
}

async function fetchFeed(source: { name: string; url: string }): Promise<Article[]> {
  try {
    const res = await fetch(source.url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ContestorBot/1.0)",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parseItems(xml).slice(0, 10);

    return items.map((itemXml) => {
      const title = stripHtml(getTagContent(itemXml, "title"));
      const link = getLinkFromEntry(itemXml);
      const pubDate = getTagContent(itemXml, "pubDate") ||
        getTagContent(itemXml, "published") ||
        getTagContent(itemXml, "updated") || "";
      const descRaw = getTagContent(itemXml, "description") ||
        getTagContent(itemXml, "summary") || "";
      const description = stripHtml(descRaw).slice(0, 300);
      const image = extractImage(itemXml);
      return { title, link, source: source.name, pubDate, description, image };
    }).filter((a) => a.title && a.link);
  } catch (err) {
    console.error(`Error fetching ${source.name}:`, err);
    return [];
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const results = await Promise.allSettled(RSS_SOURCES.map(fetchFeed));
    const articles: Article[] = results
      .filter((r): r is PromiseFulfilledResult<Article[]> => r.status === "fulfilled")
      .flatMap((r) => r.value);

    articles.sort((a, b) => {
      const da = new Date(a.pubDate).getTime() || 0;
      const db = new Date(b.pubDate).getTime() || 0;
      return db - da;
    });

    return new Response(JSON.stringify(articles.slice(0, 30)), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
