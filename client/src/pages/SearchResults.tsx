import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, FileText, Newspaper } from "lucide-react";
import { allSignals, allArticles } from "@/data/content";
import AnimatedParticles from "@/components/AnimatedParticles";

export default function SearchResults() {
  const [location] = useLocation();
  // Use window.location.search to get query parameters (wouter's useLocation doesn't include query string)
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  // Search across signals and news with improved word-level matching
  const searchResults = useMemo(() => {
    if (!query.trim()) return { signals: [], articles: [], total: 0 };

    const lowerQuery = query.toLowerCase();
    // Split query into individual words for partial matching
    const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 0);
    
    // Helper function to check if any query word matches the text
    const matchesAnyWord = (text: string) => {
      const lowerText = text.toLowerCase();
      return queryWords.some(word => lowerText.includes(word));
    };
    
    const matchedSignals = allSignals.filter(signal =>
      matchesAnyWord(signal.title) ||
      matchesAnyWord(signal.description) ||
      matchesAnyWord(signal.sector) ||
      matchesAnyWord(signal.country)
    );

    const matchedArticles = allArticles.filter(article =>
      matchesAnyWord(article.title) ||
      matchesAnyWord(article.excerpt) ||
      matchesAnyWord(article.category) ||
      matchesAnyWord(article.country)
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

  // Helper function to highlight matching keywords
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    const parts: { text: string; highlight: boolean }[] = [];
    let currentIndex = 0;
    
    // Find all matches
    const matches: { start: number; end: number; word: string }[] = [];
    queryWords.forEach(word => {
      const regex = new RegExp(word, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({ start: match.index, end: match.index + match[0].length, word: match[0] });
      }
    });
    
    // Sort matches by start position
    matches.sort((a, b) => a.start - b.start);
    
    // Build parts array
    matches.forEach(match => {
      if (match.start > currentIndex) {
        parts.push({ text: text.slice(currentIndex, match.start), highlight: false });
      }
      parts.push({ text: match.word, highlight: true });
      currentIndex = match.end;
    });
    
    if (currentIndex < text.length) {
      parts.push({ text: text.slice(currentIndex), highlight: false });
    }
    
    return (
      <>
        {parts.map((part, index) => 
          part.highlight ? (
            <span key={index} className="bg-blue-500/30 text-blue-200 px-1 rounded">
              {part.text}
            </span>
          ) : (
            part.text
          )
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Navy Hero Section with Search */}
      <section className="relative py-12 px-4 overflow-hidden bg-[#0a1628]">
        {/* Animated Particles */}
        <AnimatedParticles />
        
        {/* Tech circuit board background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-search" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h20M30 10v20M30 30h20M50 30v20M50 50h20" stroke="#3b82f6" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="10" r="2" fill="#10b981"/>
                <circle cx="30" cy="30" r="2" fill="#10b981"/>
                <circle cx="50" cy="30" r="2" fill="#10b981"/>
                <circle cx="50" cy="50" r="2" fill="#10b981"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-search)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 text-gray-300 hover:text-white hover:bg-blue-500/10">
              ← Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6 text-white">Search Results</h1>

          {/* Search Bar with glowing effect - Matching Homepage */}
          <div className="mb-6">
            <div className="mb-3">
              <h2 className="text-lg font-semibold">
                <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                  AgentDubai
                </span>
                <span className="text-gray-400 ml-2">Search</span>
              </h2>
            </div>
            <form onSubmit={handleSearch}>
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search signals and news across the GCC..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full px-8 py-4 text-lg rounded-full border-2 border-blue-500/50 bg-[#1a2942] text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-400 hover:border-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 text-white rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-200 font-medium"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {query && (
            <p className="text-gray-300">
              Found <strong className="text-white">{searchResults.total}</strong> results for "<strong className="text-white">{query}</strong>"
            </p>
          )}
        </div>
      </section>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{highlightText(signal.title, query)}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {highlightText(signal.description, query)}
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
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{highlightText(article.title, query)}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {highlightText(article.excerpt, query)}
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
