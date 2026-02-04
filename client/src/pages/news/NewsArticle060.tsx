import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle060() {
  const article = {
    id: "060",
    title: "GCC AI Data Center Market Poised for Explosive Growth as Sovereign Wealth Funds Double Down on Infrastructure",
    date: "February 4, 2026",
    readTime: "8 min read",
    country: "GCC",
    category: "Infrastructure",
    source: "Industry Analysis",
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
              New market research indicates that AI data center investment across the Gulf Cooperation Council is expected to exceed $5 billion in 2026, marking a significant acceleration in the region's infrastructure buildout. This investment wave is being driven primarily by sovereign wealth funds from the UAE, Saudi Arabia, and Qatar, which are deploying patient capital with decades-long investment horizons.
            </p>

            <h2>A Strategic Shift in Infrastructure Investment</h2>
            <p>
              The surge reflects a strategic shift in how the GCC is approaching AI development. Rather than waiting for private sector innovation to drive infrastructure development, governments are directly investing in the foundational systems needed to support AI innovation, deployment, and economic transformation.
            </p>

            <p>
              Industry analysts attribute this approach to several factors: the region's abundant capital, low energy costs, government commitment to AI-driven economic diversification, and the recognition that AI infrastructure is as critical to 21st-century economies as railroads were to 19th-century development.
            </p>

            <h2>Vertically Integrated AI Economy</h2>
            <p>
              The investment is not limited to data centers alone. The GCC is simultaneously developing supply chains for critical minerals, battery metals processing, and semiconductor manufacturing—all essential components of a vertically integrated AI economy. This comprehensive approach ensures that the region can support the entire AI value chain.
            </p>

            <p>
              By developing local capacity for semiconductor manufacturing and critical minerals processing, the GCC is reducing dependency on external suppliers and building a resilient, sovereign AI infrastructure. This vertical integration creates competitive advantages that isolated data center investments cannot match.
            </p>

            <h2>Global Implications</h2>
            <p>
              According to Stanford University's AI Index, the GCC already ranks among the top globally in AI vibrancy. With $5 billion+ in annual data center investment, the region is positioning itself to compete directly with Silicon Valley and China as a global AI hub.
            </p>

            <p>
              Venture capitalists and founders are taking notice. At Web Summit Qatar 2026, prominent investors highlighted the GCC as one of the world's most attractive regions for building AI companies, citing stable governance, transparent regulations, abundant capital, and visionary government leadership.
            </p>

            <h2>Long-Term Implications</h2>
            <p>
              This investment trajectory suggests that the GCC will emerge as a major global AI hub within the next 3-5 years. The combination of sovereign capital, infrastructure investment, and policy support creates an environment where transformative AI companies can be built at scale.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <ShareButton
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/news/060`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/news/059">
              <Button variant="outline">← Previous Article</Button>
            </Link>
            <Link href="/news">
              <Button variant="outline">Back to News →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
