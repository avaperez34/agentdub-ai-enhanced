import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArrowLeft, Share2 } from "lucide-react";

export default function Signal001() {
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "Sentinel Signal #001 — Agentic AI deployed at scale in Abu Dhabi logistics (AgentDubai)"
  );

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12">
          <Link href="/intelligence">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Back to Intelligence
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Signal #001 — Agentic AI Deployed at Scale in Abu Dhabi Logistics
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            AD Ports Group has deployed large-scale agentic AI systems across its logistics
            operations and was officially recognised by <strong>Guinness World Records</strong> for
            operating the highest number of AI agents within a single logistics facility.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">Sector: Logistics / Infrastructure AI</Badge>
            <Badge variant="outline">Scope: Abu Dhabi, UAE</Badge>
            <Badge variant="outline">Impact: 8.5 / 10</Badge>
            <Badge variant="outline">Horizon: Immediate → 1–3y</Badge>
          </div>
        </section>

        {/* Content */}
        <section className="space-y-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Strategic Analysis</h2>
            <p className="text-muted-foreground leading-relaxed">
              This deployment demonstrates a shift from AI experimentation to operational autonomy.
              Hundreds of AI agents now coordinate, optimise, and execute logistics workflows in
              real time.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Second-Order Effects</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Enterprise AI in the UAE moves from pilot to baseline capability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Investors gain evidence of real operational AI at scale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Regulatory frameworks will increasingly need to address agent autonomy</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Outlook</h2>
            <p className="text-muted-foreground leading-relaxed">
              Within 12–36 months, similar agent-based systems are likely to expand into transport,
              utilities, and public services across the UAE and GCC.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Source</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://www.adportsgroup.com/en/news-and-media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  AD Ports Group — Official press release (Guinness World Records AI agents
                  deployment)
                </a>
              </li>
            </ul>

            {/* Share */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground py-2">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                <Share2 size={16} />
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                <Share2 size={16} />
                X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                <Share2 size={16} />
                Facebook
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} AgentDubai — Sentinel Signal #001
        </footer>
      </div>
    </div>
  );
}
