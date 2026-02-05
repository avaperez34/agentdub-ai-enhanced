import { Link } from "wouter";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function Signal063() {
  const signal = {
    id: "063",
    title: "Qatar Commits $20 Billion to AI Infrastructure with Brookfield Asset Management",
    date: "February 5, 2026",
    impact: 9.0,
    horizon: "3-5 years",
    country: "Qatar",
    sector: "Capital & Infrastructure",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-8">
          <Link href="/intelligence">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Intelligence
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">{signal.country}</Badge>
              <Badge variant="outline">{signal.sector}</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-6">{signal.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wide">Impact Score</span>
                <span className="text-lg font-bold text-accent">{signal.impact}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>Horizon: {signal.horizon}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide">{signal.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Qatar's Strategic AI Infrastructure Commitment</h2>
            <p>
              Qatar Investment Authority has announced a landmark $20 billion joint venture with Brookfield Asset Management for AI infrastructure development. This partnership represents a multi-decade commitment to building foundational AI systems and positions Qatar as a critical node in the global AI infrastructure network.
            </p>

            <h2>Patient Capital Model</h2>
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

            <h2>Global AI Infrastructure Race</h2>
            <p>
              Qatar's commitment signals serious long-term positioning in the global AI infrastructure race. Combined with Oracle's $14 billion investment in Saudi Arabia and other GCC initiatives, the region is establishing itself as a major player in AI infrastructure development—competing directly with Silicon Valley and China.
            </p>

            <p>
              This represents a mega-trend of capital concentration in the Gulf for AI infrastructure and startup ecosystem development. Patient capital enables long-term thinking aligned with national strategies like Qatar's National Vision 2030.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this signal</p>
            <ShareButton
              title={signal.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/063`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/signals/062">
              <Button variant="outline">← Previous Signal</Button>
            </Link>
            <Link href="/intelligence">
              <Button variant="outline">View All Signals →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
