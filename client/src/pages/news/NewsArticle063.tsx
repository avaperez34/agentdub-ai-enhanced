import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle063() {
  const article = {
    id: "063",
    title: "Qatar Commits $20 Billion to AI Infrastructure with Brookfield - Signals Long-Term Commitment",
    date: "February 5, 2026",
    readTime: "6 min read",
    country: "Qatar",
    category: "Investment",
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
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              Qatar Investment Authority has announced a landmark $20 billion joint venture with Brookfield Asset Management for AI infrastructure development. This partnership represents a multi-decade commitment to building foundational AI systems and positions Qatar as a critical node in the global AI infrastructure network.
            </p>

            <h2>Strategic Partnership with Global Infrastructure Operator</h2>
            <p>
              The partnership leverages Brookfield's global infrastructure expertise and operational track record combined with QIA's long-term investment horizon. This patient capital model enables competition with Silicon Valley and China in the AI infrastructure race—a domain traditionally dominated by venture-backed models with shorter investment timelines.
            </p>

            <p>
              Infrastructure plays require capital unavailable through traditional venture channels. Sovereign wealth funds can commit to decade-long buildout timelines, enabling infrastructure projects impossible in venture-backed models. QIA's multi-year investment horizon aligns with the foundational systems needed for regional AI ecosystem development.
            </p>

            <h2>Complementary to Existing Investments</h2>
            <p>
              This $20 billion commitment complements Qatar's existing $3 billion in investments in US-based AI startups and digital infrastructure projects. The dual approach—investing in both foundational infrastructure and innovative startups—creates a comprehensive AI ecosystem strategy.
            </p>

            <p>
              Strategic partnership with a global infrastructure operator accelerates execution and de-risks deployment. Brookfield's track record in managing large-scale infrastructure projects brings operational discipline and global best practices to Qatar's AI infrastructure ambitions.
            </p>

            <h2>Competing in Global AI Infrastructure Race</h2>
            <p>
              Qatar's commitment signals serious long-term positioning in the global AI infrastructure race. Combined with Oracle's $14 billion investment in Saudi Arabia and other GCC initiatives, the region is establishing itself as a major player in AI infrastructure development—competing directly with Silicon Valley and China.
            </p>

            <p>
              This represents a mega-trend of capital concentration in the Gulf for AI infrastructure and startup ecosystem development. Patient capital enables long-term thinking aligned with national strategies like Qatar's National Vision 2030.
            </p>

            <h2>Implications for the Region</h2>
            <p>
              The Brookfield partnership demonstrates Qatar's commitment to moving beyond AI strategy to execution phase. With infrastructure backing from sovereign wealth funds and operational expertise from global operators, Qatar is positioning itself as a premium AI development destination.
            </p>

            <p>
              This investment model—combining patient capital with global operational expertise—may become the template for other GCC countries looking to build world-class AI infrastructure. The success of this partnership could accelerate AI infrastructure development across the entire region.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <ShareButton
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/news/063`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/news/062">
              <Button variant="outline">← Previous Article</Button>
            </Link>
            <Link href="/news">
              <Button variant="outline">View All News →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
