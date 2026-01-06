import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Share2 } from "lucide-react";

const signals = [
  {
    id: "001",
    title: "Agentic AI Deployed at Scale in Abu Dhabi Logistics",
    description:
      "AD Ports Group has deployed large-scale autonomous AI agents across its logistics operations in Abu Dhabi, marking a transition from AI pilots to production-level execution inside core national infrastructure.",
    sector: "Infrastructure",
    impact: 8.2,
    horizon: "3–7y",
    country: "UAE",
  },
  {
    id: "002",
    title: "AI Service Agents Embedded in Dubai Utility Operations",
    description:
      "Dubai Electricity and Water Authority (DEWA) has embedded AI-driven service agents into live customer and internal utility workflows, demonstrating production-grade agent deployment inside a regulated public infrastructure environment.",
    sector: "Regulation",
    impact: 7.4,
    horizon: "1–3y",
    country: "UAE",
  },
  {
    id: "003",
    title: "Agentic AI Embedded into Saudi Government Service Delivery",
    description:
      "Saudi Arabia is integrating AI-driven automation into government service delivery, moving beyond pilots toward execution-layer workflows with institutional governance.",
    sector: "GovTech",
    impact: 8.0,
    horizon: "3–7y",
    country: "Saudi Arabia",
  },
  {
    id: "004",
    title: "NEOM's AI-Powered Cognitive City Infrastructure",
    description:
      "Saudi Arabia's $500B NEOM project deploys unprecedented AI infrastructure, positioning the Kingdom as a global leader in cognitive city development with implications for the entire GCC.",
    sector: "Smart Cities",
    impact: 9.2,
    horizon: "5–10y",
    country: "Saudi Arabia",
  },
  {
    id: "005",
    title: "Qatar's AI-Driven Legacy Infrastructure Post-World Cup",
    description:
      "Qatar repurposes $200B World Cup infrastructure with AI systems for stadium management, transportation, and smart city operations, creating an event-driven AI blueprint.",
    sector: "Smart Infrastructure",
    impact: 7.2,
    horizon: "3–5y",
    country: "Qatar",
  },
];

export default function Intelligence() {
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "AgentDub.ai — Intelligence feed (Sentinel Signals)."
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Intelligence</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            The live feed of <strong>AgentDub Sentinel Signals</strong> — structured, repeatable
            analysis designed for decision-makers. Each signal provides clear intelligence on
            Dubai & GCC AI transformation.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline">Dubai / UAE / GCC</Badge>
            <Badge variant="outline">AI • Infrastructure • Regulation • Capital</Badge>
            <Badge variant="outline">Signal, not noise</Badge>
          </div>

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
        </section>

        {/* Signals Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {signals.map((signal) => (
            <div
              key={signal.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  Signal #{signal.id}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {signal.sector}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Impact: {signal.impact}/10
                </Badge>
              </div>

              <h2 className="text-lg font-bold mb-3 leading-tight">{signal.title}</h2>

              <p className="text-muted-foreground mb-6 flex-grow">{signal.description}</p>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Link href={`/signals/${signal.id}`}>
                  <Button size="sm" className="w-full">
                    Read Signal
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/sentinel">
                  <Button size="sm" variant="outline">
                    About Sentinel
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} AgentDub.ai • Intelligence feed powered by Sentinel
          Signals.
        </footer>
      </div>
    </div>
  );
}
