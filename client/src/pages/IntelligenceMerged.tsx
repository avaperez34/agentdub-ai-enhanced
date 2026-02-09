import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Share2, Building2, Users, AlertTriangle, TrendingUp, GitCompare, Search, Filter, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { SignalComparison } from "@/components/SignalComparison";
import { allSignals, allNews } from "@/data/content";

export default function Intelligence() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"signals" | "all">("all");
  const itemsPerPage = 12;

  // Combine all items as Intelligence Signals
  const combinedItems = useMemo(() => {
    const signals = allSignals.map(signal => ({
      ...signal,
      type: "signal" as const,
      date: signal.date,
      excerpt: signal.description,
      readTime: "3-5 min",
    }));

    const news = allNews.map(article => ({
      id: article.id,
      title: article.title,
      description: article.excerpt,
      excerpt: article.excerpt,
      category: article.category,
      country: article.country || "GCC-Wide",
      date: article.date,
      readTime: article.readTime,
      type: "signal" as const,
      impact: 7.5,
      sector: article.category,
    }));

    return [...signals, ...news];
  }, []);

  // Filter and search
  const filteredItems = useMemo(() => {
    let items = combinedItems;

    // All items are now signals, no filtering needed
    // if (viewMode === "signals") {
    //   items = items.filter(item => item.type === "signal");
    // }

    // Filter by category
    if (selectedCategory !== "all") {
      items = items.filter(item => 
        item.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        item.country?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search
    if (searchQuery) {
      items = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "latest") {
      items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "impact" && items[0]?.impact) {
      items.sort((a, b) => (b.impact || 0) - (a.impact || 0));
    }

    return items;
  }, [combinedItems, selectedCategory, searchQuery, sortBy, viewMode]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    combinedItems.forEach(item => {
      if (item.category) cats.add(item.category);
      if (item.country) cats.add(item.country);
    });
    return Array.from(cats).sort();
  }, [combinedItems]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Intelligence Signals & News</h1>
          <p className="text-xl text-muted-foreground">
            Real-time AI insights, market signals, and strategic intelligence for the GCC region
          </p>
        </div>
      </section>

      {/* Toolbar & Filters */}
      <section className="py-6 px-4 bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          {/* No view mode toggle needed - all items are signals */}

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Input
                placeholder="Search signals and news..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setCurrentPage(1);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="impact">Highest Impact</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {paginatedItems.length} of {filteredItems.length} items
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {paginatedItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {paginatedItems.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all group"
                  >
                    {/* Type Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="default">
                        Intelligence Signal
                      </Badge>
                      {item.impact && (
                        <Badge variant="outline">
                          Impact: {item.impact.toFixed(1)}
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.country && (
                        <Badge variant="outline" className="text-xs">
                          {item.country}
                        </Badge>
                      )}
                      {item.category && (
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        {item.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {item.readTime}
                          </span>
                        )}
                      </div>
                      <Link href={item.type === "signal" ? `/signals/${item.id}` : `/news/${item.id}`}>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft size={16} />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No items found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
