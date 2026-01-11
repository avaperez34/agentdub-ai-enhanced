import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArrowLeft, Share2 } from "lucide-react";

export default function Signal002() {
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "Sentinel Signal #002 — AI service agents embedded in Dubai utility operations (AgentDubai)"
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
            Signal #002 — AI Service Agents Embedded in Dubai Utility Operations
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Dubai Electricity and Water Authority (DEWA) has deployed AI-driven service agents
            across customer engagement and internal workflows via its <strong>Rammas</strong>{" "}
            platform, embedding AI directly into operational service execution.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">Sector: Utilities / Public Services</Badge>
            <Badge variant="outline">Scope: Dubai, UAE</Badge>
            <Badge variant="outline">Impact: 7.9 / 10</Badge>
            <Badge variant="outline">Horizon: Immediate → 1–3y</Badge>
          </div>
        </section>

        {/* Content */}
        <section className="space-y-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Strategic Analysis</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These agents go beyond informational chat, interfacing with live service processes
              such as billing, service activation, and fault reporting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Deployment inside a regulated utility implies maturity in governance, reliability,
              and auditability.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Second-Order Effects</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Establishes a public-sector benchmark for AI agent deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Accelerates normalization of agent-based service automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>Increases pressure for formal governance frameworks</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Outlook</h2>
            <p className="text-muted-foreground leading-relaxed">
              Agent-based service execution is expected to expand across utilities and municipal
              services in the UAE over the next <strong>12–36 months</strong>, with a focus on
              resilience and accountability.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Source</h2>
            <p className="text-muted-foreground mb-6">
              DEWA — Official announcement and public documentation of the <strong>Rammas</strong>{" "}
              AI platform.
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
          © {new Date().getFullYear()} AgentDubai — Sentinel Signal #002
        </footer>
      </div>
    </div>
  );
}
