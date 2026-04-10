import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (data as Article[]).slice(0, 3);
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

const ServicesGrid = () => {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["ai-news-home"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-foreground">Latest AI News</h2>
          <Link to="/news" className="text-sm text-primary hover:underline">
            View all →
          </Link>
        </div>

        {isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="w-full h-48" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {articles && articles.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <a
                key={`${article.link}-${i}`}
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
                      <span className="text-xs text-muted-foreground">
                        {formatDate(article.pubDate)}
                      </span>
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
                    Read more <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
