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

function extractText(el: Element | null): string {
  if (!el) return "";
  return el.textContent?.trim() ?? "";
}

function extractImage(item: Element): string | undefined {
  // Try media:content, media:thumbnail, enclosure, or img in description
  const media = item.getElementsByTagName("media:content")[0] ??
    item.getElementsByTagName("media:thumbnail")[0];
  if (media) {
    const url = media.getAttribute("url");
    if (url) return url;
  }
  const enclosure = item.getElementsByTagName("enclosure")[0];
  if (enclosure?.getAttribute("type")?.startsWith("image/")) {
    return enclosure.getAttribute("url") ?? undefined;
  }
  // Try to find image in content:encoded or description
  const content = extractText(item.getElementsByTagName("content:encoded")[0]) ||
    extractText(item.getElementsByTagName("description")[0]);
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
  if (imgMatch) return imgMatch[1];
  return undefined;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

async function fetchFeed(source: { name: string; url: string }): Promise<Article[]> {
  try {
    console.log(`Fetching ${source.name}: ${source.url}`);
    const res = await fetch(source.url, {
      headers: { 
        "User-Agent": "Mozilla/5.0 (compatible; ContestorBot/1.0)",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(10000),
    });
    console.log(`${source.name} status: ${res.status}`);
    if (!res.ok) return [];
    const xml = await res.text();
    console.log(`${source.name} xml length: ${xml.length}`);
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    if (!doc) return [];

    const items = doc.getElementsByTagName("item");
    const entries = doc.getElementsByTagName("entry"); // Atom feeds
    const nodes = items.length > 0 ? items : entries;

    const articles: Article[] = [];
    for (let i = 0; i < Math.min(nodes.length, 10); i++) {
      const item = nodes[i];
      const title = extractText(item.getElementsByTagName("title")[0]);
      const link = extractText(item.getElementsByTagName("link")[0]) ||
        item.getElementsByTagName("link")[0]?.getAttribute("href") || "";
      const pubDate = extractText(item.getElementsByTagName("pubDate")[0]) ||
        extractText(item.getElementsByTagName("published")[0]) ||
        extractText(item.getElementsByTagName("updated")[0]) || "";
      const descRaw = extractText(item.getElementsByTagName("description")[0]) ||
        extractText(item.getElementsByTagName("summary")[0]) || "";
      const description = stripHtml(descRaw).slice(0, 300);
      const image = extractImage(item);

      if (title && link) {
        articles.push({ title, link, source: source.name, pubDate, description, image });
      }
    }
    return articles;
  } catch {
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

    // Sort by date descending
    articles.sort((a, b) => {
      const da = new Date(a.pubDate).getTime() || 0;
      const db = new Date(b.pubDate).getTime() || 0;
      return db - da;
    });

    const limited = articles.slice(0, 30);

    return new Response(JSON.stringify(limited), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
