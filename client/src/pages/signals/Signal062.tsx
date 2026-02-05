import { Link } from "wouter";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function Signal062() {
  const signal = {
    id: "062",
    title: "IMF Chief: AI Could Boost GCC Non-Oil GDP by 2.8 Percent - Largest Diversification Opportunity",
    date: "February 5, 2026",
    impact: 9.4,
    horizon: "2-3 years",
    country: "GCC",
    sector: "Economic Policy",
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
            <h2>IMF's Assessment of AI Opportunity for GCC</h2>
            <p>
              At the World Government Summit in Dubai on February 3, 2026, IMF Managing Director Kristalina Georgieva highlighted that artificial intelligence could boost GCC non-oil GDP by up to 2.8 percent. This represents the largest opportunity for economic diversification away from hydrocarbon dependency in the region's modern history.
            </p>

            <h2>UAE Leading Global AI Adoption</h2>
            <p>
              The UAE leads globally with 64% of its working-age population using AI—the highest rate worldwide. This demonstrates the region's readiness for AI-driven transformation and the population's embrace of AI technologies. IMF estimates show that AI could fuel global productivity by 0.8 percentage points per year, with GCC benefiting even more significantly.
            </p>

            <h2>Economic Diversification Imperative</h2>
            <p>
              For economies long dependent on oil exports, AI presents an enormous opportunity to build new sources of growth and economic resilience. The 2.8% potential boost to non-oil GDP is substantial and could fundamentally reshape GCC economies, reducing vulnerability to oil price fluctuations and creating sustainable, knowledge-based growth.
            </p>

            <h2>Policy Framework Requirements</h2>
            <p>
              Georgieva emphasized that capturing this opportunity requires coordinated policy frameworks across three dimensions:
            </p>

            <ul>
              <li>Macro policies supporting investment and innovation while not encouraging automation at expense of people</li>
              <li>Guardrails ensuring AI safety, fairness, and trustworthiness without stifling innovation</li>
              <li>Cooperation and partnerships enabling knowledge transfer and data sharing across governments and organizations</li>
            </ul>

            <h2>Labor Market Disruption</h2>
            <p>
              The IMF also warned that 40% of jobs globally will be impacted by AI (60% in advanced economies), with young people and the middle class hit hardest by disruption. Countries with strong digital infrastructure, skilled labor forces, and robust regulatory frameworks will capture the largest and fastest benefits. Those without may fall behind.
            </p>

            <p>
              This makes policy coordination and workforce development critical for ensuring that GCC economies capture AI's benefits broadly rather than concentrating gains among a small segment of the population.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this signal</p>
            <ShareButton
              title={signal.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/062`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/signals/061">
              <Button variant="outline">← Previous Signal</Button>
            </Link>
            <Link href="/signals/063">
              <Button variant="outline">Next Signal →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
