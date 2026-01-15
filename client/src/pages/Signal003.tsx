import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, Share2 } from "lucide-react";

export default function Signal003() {
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "Sentinel Signal #003 — Saudi government service delivery goes agentic (AgentDubai)."
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
            Signal #003 — Agentic AI Embedded into Saudi Government Service Delivery
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Saudi Arabia is integrating AI-driven systems into citizen-facing government service
            delivery, moving beyond pilots toward execution-layer automation inside institutional
            workflows.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">Signal #003</Badge>
            <Badge variant="outline">Country: Saudi Arabia (KSA)</Badge>
            <Badge variant="outline">Sector: GovTech</Badge>
            <Badge variant="outline">Impact: 8.0/10</Badge>
            <Badge variant="outline">Horizon: 3–7y</Badge>
          </div>
        </section>

        {/* Content */}
        <section className="space-y-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What Happened</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Across Saudi national digital platforms and public-sector service delivery, AI-driven
              automation is being embedded into workflows such as service routing, case triage, and
              decision support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While many disclosures don't use the marketing term "AI agents", the behavior is
              functionally agentic: systems act across steps, coordinate tasks, and reduce manual
              handling in routine processes.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>
                  <strong>Government is a high-friction environment</strong> — adoption implies
                  governance readiness and institutional confidence.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>
                  <strong>Execution-layer AI is sticky</strong> — once embedded, it compounds into
                  standards, procurement, and operating models.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>
                  <strong>GCC pattern confirmation</strong> — UAE and KSA are both operationalising
                  AI as infrastructure.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Second-Order Effects</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Procurement accelerates for orchestration, identity, and audit tooling.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Pressure rises on legacy process vendors and manual-heavy BPO models.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>
                  Standards emerge around agent governance, logging, and human-in-the-loop
                  controls.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Outlook</h2>
            <p className="text-muted-foreground leading-relaxed">
              Expect increased formalisation: policy frameworks, audit expectations, and
              integration patterns that make agentic automation repeatable across ministries and
              regulated workflows.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Source Note (Transparency)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This signal is derived from a convergence of public disclosures and institutional
              direction across Saudi Arabia, including government digital platforms, SDAIA strategy
              and execution frameworks, and enterprise/integrator material describing automation
              inside service delivery. It reflects a pattern of deployment rather than a single
              announcement.
            </p>

            {/* Share */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
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
          © {new Date().getFullYear()} AgentDubai • Sentinel Signals are structured intelligence:
          signal, not noise.
        </footer>
      </div>
    </div>
  );
}
