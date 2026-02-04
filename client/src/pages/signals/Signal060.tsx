import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function Signal060() {
  const signal = {
    id: "060",
    title: "GCC Sovereign Wealth Funds Lead Global AI Infrastructure Investment Wave",
    date: "February 4, 2026",
    impact: 9.1,
    horizon: "2–4 years",
    country: "UAE, Saudi Arabia, Qatar",
    sector: "Capital & Investment",
    category: "Investment Trends",
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

            <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Published</p>
                <p className="font-medium text-foreground">{signal.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Impact Score</p>
                <p className="font-medium text-accent text-lg">{signal.impact}/10</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Time Horizon</p>
                <p className="font-medium text-foreground">{signal.horizon}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Overview</h2>
            <p>
              Sovereign wealth funds from the UAE, Saudi Arabia, and Qatar are backing artificial intelligence with patient, long-term capital, fundamentally reshaping the global AI infrastructure investment landscape. This represents a historic shift in how AI infrastructure is financed and deployed globally.
            </p>

            <h2>Key Metrics</h2>
            <ul>
              <li>
                <strong>Investment Scale:</strong> GCC AI data center investment expected to exceed $5 billion in 2026 alone.
              </li>
              <li>
                <strong>Capital Horizon:</strong> Decades-long investment horizon compared to traditional venture capital timelines (typically 7-10 years).
              </li>
              <li>
                <strong>Global Ranking:</strong> Stanford University AI Index ranks GCC among top globally in AI vibrancy.
              </li>
              <li>
                <strong>Infrastructure Focus:</strong> Patient capital enables buildout of foundational systems impossible to finance through traditional channels.
              </li>
            </ul>

            <h2>Strategic Advantages</h2>
            <p>
              The GCC's sovereign wealth fund model offers several advantages over traditional venture capital:
            </p>

            <ul>
              <li>
                <strong>Patient Capital:</strong> Decades-long investment horizons enable infrastructure plays that generate returns over 10-20 year periods.
              </li>
              <li>
                <strong>Regulatory Transparency:</strong> Stable regulatory environment and transparent governance attract global founders and operators.
              </li>
              <li>
                <strong>Ecosystem Effects:</strong> Large-scale infrastructure investment creates network effects and attracts complementary investments.
              </li>
              <li>
                <strong>Alternative Model:</strong> Positioning GCC as alternative to Silicon Valley and China for AI infrastructure.
              </li>
            </ul>

            <h2>Investment Implications</h2>
            <p>
              This mega-trend represents a fundamental shift in how AI infrastructure is built and financed globally. Rather than relying solely on venture capital and startup ecosystems, the GCC is deploying sovereign capital to build foundational systems: data centers, research facilities, and supply chain infrastructure for AI chips.
            </p>

            <p>
              For investors and entrepreneurs, this represents both opportunity and competition. The GCC's patient capital model enables infrastructure plays and long-term bets that traditional VC cannot support. Simultaneously, the concentration of capital in the GCC creates a powerful alternative hub to Silicon Valley and China.
            </p>

            <p>
              The investment model aligns with Vision 2030 and similar national strategies, suggesting sustained commitment over decades. This long-term thinking creates a stable environment for building transformative AI infrastructure and companies.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this signal</p>
            <ShareButton
              title={signal.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/060`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/signals/059">
              <Button variant="outline">← Previous Signal</Button>
            </Link>
            <Link href="/intelligence">
              <Button variant="outline">Back to Intelligence →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
