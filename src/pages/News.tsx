import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

interface Article {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  description: string;
  image?: string;
}

const fetchNews = async (): Promise<Article[]> => {
  const { data, error } = await supabase.functions.invoke("fetch-ai-news");
  if (error) throw error;
  return data as Article[];
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const NewsCard = ({ article }: { article: Article }) => (
  <a
    href={article.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
  >
    {article.image && (
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {article.source}
        </span>
        {article.pubDate && (
          <time dateTime={article.pubDate} className="text-xs text-muted-foreground">
            {formatDate(article.pubDate)}
          </time>
        )}
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 flex-1">
        {article.title}
      </h3>
      {article.description && (
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
          {article.description}
        </p>
      )}
      <span className="text-xs text-primary flex items-center gap-1 mt-auto">
        Read more <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </span>
    </div>
  </a>
);

const LoadingSkeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
        <Skeleton className="w-full h-48" />
        <div className="p-5 space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

const News = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["ai-news"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="AI News & Insights"
        description="Stay up to date with the latest AI developments, curated from leading technology publications by Contestor Estonia."
        canonical="/news"
      />
      <Navbar />

      <main className="flex-1">
        <section className="bg-hero text-hero-foreground py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">AI News & Insights</h1>
            <p className="text-sm text-hero-foreground/70 max-w-2xl">
              Stay up to date with the latest developments in artificial intelligence,
              curated from leading technology publications.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {isLoading && <LoadingSkeleton />}

            {error && (
              <div className="text-center py-12">
                <p className="text-sm text-muted-foreground">
                  Unable to load news at the moment. Please try again later.
                </p>
              </div>
            )}

            {articles && articles.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, i) => (
                  <NewsCard key={`${article.link}-${i}`} article={article} />
                ))}
              </div>
            )}

            {articles && articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-sm text-muted-foreground">No news articles available right now.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
