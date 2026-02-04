import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle059() {
  const article = {
    id: "059",
    title: "PwC Highlights Turning AI Ambition Into Action as Key Economic Priority for GCC in 2026",
    date: "February 4, 2026",
    readTime: "7 min read",
    country: "GCC",
    category: "Strategy",
    source: "PwC Middle East",
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
              In its comprehensive analysis of five GCC economic themes to watch in 2026, PwC identifies "Turning AI Ambition Into Action" as a critical priority for the region. While GCC governments have articulated ambitious AI strategies, 2026 will be the year where these visions translate into tangible infrastructure, policy implementation, and economic outcomes.
            </p>

            <h2>From Strategy to Execution</h2>
            <p>
              The analysis highlights Saudi Arabia's HUMAIN program as a flagship example of this transition from strategy to execution. The program is constructing new data center capacity and integrating infrastructure to support both AI development and deployment at scale. This represents a fundamental shift from planning to implementation.
            </p>

            <p>
              PwC notes that the GCC's approach to AI differs fundamentally from traditional tech hubs. Rather than relying solely on venture capital and startup ecosystems, the region is leveraging sovereign wealth funds, government backing, and long-term investment horizons to build foundational AI infrastructure.
            </p>

            <h2>Integrated Economic Strategy</h2>
            <p>
              The report also connects AI development to broader economic diversification efforts, including critical minerals processing and battery metals refining—essential for AI chip manufacturing and energy infrastructure. This integrated approach ensures that AI development is not isolated but deeply connected to national economic objectives.
            </p>

            <p>
              This patient capital model enables the development of data centers, research facilities, and supply chain infrastructure that would be difficult to finance through traditional venture capital channels. The long-term investment horizon aligns with Vision 2030 and similar national strategies.
            </p>

            <h2>Regional Implications</h2>
            <p>
              For investors and entrepreneurs, this transition from ambition to action represents both opportunity and validation. The GCC's commitment to turning AI ambition into concrete infrastructure and economic outcomes creates a stable, long-term environment for building transformative AI companies and infrastructure.
            </p>

            <p>
              PwC's analysis suggests that 2026 will be a defining year for the GCC's AI transformation. As governments move from strategy to execution, the region's competitive position in the global AI landscape will become increasingly clear.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <ShareButton
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/news/059`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/news/058">
              <Button variant="outline">← Previous Article</Button>
            </Link>
            <Link href="/news/060">
              <Button variant="outline">Next Article →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
