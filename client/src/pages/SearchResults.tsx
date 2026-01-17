import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, FileText, Newspaper } from "lucide-react";
import { allSignals, allArticles } from "@/data/content";

export default function SearchResults() {
  const [location] = useLocation();
  // Use window.location.search to get query parameters (wouter's useLocation doesn't include query string)
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  // Search across signals and news
  const searchResults = useMemo(() => {
    if (!query.trim()) return { signals: [], articles: [], total: 0 };

    const lowerQuery = query.toLowerCase();
    
    const matchedSignals = allSignals.filter(signal =>
      signal.title.toLowerCase().includes(lowerQuery) ||
      signal.description.toLowerCase().includes(lowerQuery) ||
      signal.sector.toLowerCase().includes(lowerQuery) ||
      signal.country.toLowerCase().includes(lowerQuery)
    );

    const matchedArticles = allArticles.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.category.toLowerCase().includes(lowerQuery) ||
      article.country.toLowerCase().includes(lowerQuery)
    );

    return {
      signals: matchedSignals,
      articles: matchedArticles,
      total: matchedSignals.length + matchedArticles.length
    };
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput.trim())}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6">
              ← Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6">Search Results</h1>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search signals and news..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </form>

          {query && (
            <p className="text-muted-foreground">
              Found <strong>{searchResults.total}</strong> results for "<strong>{query}</strong>"
            </p>
          )}
        </div>

        {/* Results */}
        {!query.trim() ? (
          <div className="text-center py-12">
            <Search className="mx-auto mb-4 text-muted-foreground" size={48} />
            <p className="text-xl text-muted-foreground">Enter a search query to find signals and news</p>
          </div>
        ) : searchResults.total === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No results found for "{query}"</p>
            <p className="text-muted-foreground">Try different keywords or browse our <Link href="/intelligence" className="text-accent hover:underline">Intelligence</Link> and <Link href="/news" className="text-accent hover:underline">News</Link> pages</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Signals Results */}
            {searchResults.signals.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-accent" size={24} />
                  <h2 className="text-2xl font-bold">Intelligence Signals ({searchResults.signals.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.signals.map((signal) => (
                    <Link key={signal.id} href={`/signals/${signal.id}`}>
                      <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="outline" className="text-xs">
                            Signal {signal.id}
                          </Badge>
                          <Badge className="bg-accent/10 text-accent border-accent/20">
                            Impact {signal.impact}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{signal.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {signal.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{signal.country}</span>
                          <span>{signal.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* News Results */}
            {searchResults.articles.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Newspaper className="text-purple-500" size={24} />
                  <h2 className="text-2xl font-bold">News Articles ({searchResults.articles.length})</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.articles.map((article) => (
                    <Link key={article.id} href={`/news/${article.id}`}>
                      <div className="p-6 rounded-lg bg-card border border-border hover:border-purple-500/50 transition-all cursor-pointer h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="outline" className="text-xs bg-purple-500/10 text-purple-500 border-purple-500/20">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime} min</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.country}</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        {searchResults.total > 0 && (
          <div className="mt-12 text-center p-8 rounded-lg bg-card border border-border">
            <h3 className="text-xl font-bold mb-4">Explore More Intelligence</h3>
            <p className="text-muted-foreground mb-6">
              Browse our full collection of signals and news articles
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/intelligence">
                <Button size="lg">
                  View All Signals
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link href="/news">
                <Button size="lg" variant="outline">
                  View All News
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
