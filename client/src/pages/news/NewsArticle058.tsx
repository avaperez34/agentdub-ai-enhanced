import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle058() {
  const article = {
    id: "058",
    title: "Venture Capitalists Declare Qatar and GCC Best Places to Build AI at Web Summit 2026",
    date: "February 4, 2026",
    readTime: "6 min read",
    country: "Qatar",
    category: "Market Positioning",
    source: "Gulf Times",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-8">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">{article.country}</Badge>
              <Badge variant="outline">{article.category}</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide">Source: {article.source}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              At Web Summit Qatar 2026, prominent venture capitalists made a bold declaration: Qatar, Saudi Arabia, and the UAE now rank among the world's best places to build artificial intelligence companies. This represents a significant shift in how the global venture capital community views the Gulf region.
            </p>

            <h2>A Unique Ecosystem</h2>
            <p>
              Speaking on the sidelines of the conference, venture capitalists highlighted several competitive advantages that make the Gulf region attractive to founders and investors. The region's young population has embraced AI technology, creating a generation of "AI-native" users with strong adoption across consumer, prosumer, and business segments.
            </p>

            <p>
              Governments are pouring significant investment into infrastructure needed to drive the next wave of AI development, with some of the biggest AI facilities outside the US and China being constructed in the Gulf. This commitment to foundational infrastructure creates an environment where companies can scale rapidly without competing for limited resources.
            </p>

            <h2>Safety and Stability</h2>
            <p>
              Safety and social stability also contribute significantly to the region's attractiveness. Investors and founders appreciate the secure environment, transparent governance, and respect for rights. This combination of stability and ambition creates a unique value proposition for building transformative AI companies.
            </p>

            <p>
              The venture capital community also highlighted low energy costs, substantial infrastructure investment, and long-term government thinking as key advantages. The regulatory framework is transparent, supportive, and aligned with transitioning from hydrocarbon-based economies to technology-driven growth.
            </p>

            <h2>Global Recognition</h2>
            <p>
              According to Stanford University's AI Index, the Gulf region ranks among the top globally in AI vibrancy, with strong policy, ambitious governments, low energy costs, and ample capital to build infrastructure and invest in startups. This independent validation reinforces the venture capital community's assessment.
            </p>

            <p>
              The declaration at Web Summit Qatar 2026 signals a fundamental shift in how the global startup ecosystem views the Gulf region. Rather than being seen as a secondary market or a destination for late-stage capital, the GCC is now recognized as a primary hub for AI innovation and development.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <ShareButton
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/news/058`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/news/057">
              <Button variant="outline">← Previous Article</Button>
            </Link>
            <Link href="/news/059">
              <Button variant="outline">Next Article →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
