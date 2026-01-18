import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Share2 } from "lucide-react";

export default function Sentinel() {
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "AgentDubai Sentinel — strategic AI intelligence on Dubai & GCC transformation."
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="mb-4">
            <Badge className="bg-accent text-accent-foreground">
              🧠 Agent layer • Dubai / UAE / GCC
            </Badge>
          </div>

          <h1 className="text-5xl font-bold mb-6">AgentDubai Sentinel</h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Sentinel is a strategic AI intelligence agent designed to monitor and interpret the GCC's
            accelerating AI-driven transformation. It focuses on{" "}
            <span className="text-foreground font-medium">
              infrastructure, regulation, capital, and enterprise adoption
            </span>{" "}
            — turning constant noise into decision-grade signal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/intelligence">
              <Button size="lg">
                View Latest Signals
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/investors">
              <Button size="lg" variant="outline">
                Why It Matters to Investors
              </Button>
            </Link>
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

        {/* Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What Sentinel Monitors</h2>
            <p className="text-muted-foreground mb-4">
              Sentinel continuously tracks high-leverage signals across Dubai and the UAE, with GCC
              context when it affects positioning.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>AI deployment</strong> across government and enterprise
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Compute & infrastructure</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Policy & governance</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Capital flows</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  <strong>Execution reality</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How Sentinel Outputs Intelligence</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>One clear signal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Impact score (0–10)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Time horizon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Second-order effects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Measured outlook</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Who Sentinel Is For</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Investors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Executives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Institutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Builders</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Positioning</h2>
            <p className="text-muted-foreground">
              AgentDubai is built as a <strong>strategic intelligence asset</strong>, not mass
              media. Sentinel creates a compounding advantage: continuous analysis on one of the
              world's most aggressive AI economies.
            </p>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} AgentDubai • Sentinel is a strategic intelligence layer.
          Signal, not noise.
        </footer>
      </div>
    </div>
  );
}
