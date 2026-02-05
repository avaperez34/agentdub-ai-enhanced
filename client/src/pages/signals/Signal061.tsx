import { Link } from "wouter";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function Signal061() {
  const signal = {
    id: "061",
    title: "BCG Study: 39% of GCC Organizations Now AI Leaders - Public Sector Emerging as Unexpected Leader",
    date: "February 5, 2026",
    impact: 9.3,
    horizon: "1-2 years",
    country: "GCC",
    sector: "Organizational Maturity",
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
            <h2>GCC AI Adoption Accelerating Rapidly</h2>
            <p>
              The BCG Build for the Future 2026 study reveals that 39% of GCC organizations now qualify as AI Leaders, matching the global average of 40%. This represents significant acceleration in AI adoption across the region, with marked shift from AI Laggards to AI Leaders.
            </p>

            <h2>Scaling Organizations Driving Growth</h2>
            <p>
              The most significant finding is a +14 percentage point increase in Scaling organizations (compared to +8 globally), indicating that more GCC organizations are expanding their AI initiatives from limited programs to widespread deployment. This acceleration suggests the region is moving from experimentation to execution phase.
            </p>

            <p>
              UAE and Saudi Arabia stand out with 40-42% AI Leaders, above global peers. Qatar's trajectory is particularly promising, with growing Emerging organizations (+10 percentage points vs 2024), indicating a strong pipeline of organizations moving toward AI leadership.
            </p>

            <h2>Public Sector Emerging as Unexpected Leader</h2>
            <p>
              Perhaps the most surprising finding is that the Public Sector has jumped 5 positions since 2021 to rank second in AI maturity—outpacing global peers in a sector traditionally slow to change. This reflects ambitious cost-saving and productivity-enhancement initiatives across the region, coupled with national data and digital strategies already impacting government entities and their services.
            </p>

            <h2>Industry-Specific Trends</h2>
            <p>
              TMT (Technology, Media, Telco) maintains its lead with +6 percentage points annual growth. Industrial Goods, Travel, Infrastructure, and Healthcare are showing significant maturity gains. However, Energy and Consumer Goods are losing ground relative to other industries, with just 25% of organizations classified as AI Leaders.
            </p>

            <h2>Agentic AI as Future Growth Engine</h2>
            <p>
              Agentic AI is expected to drive future growth, with value contribution projected to increase from 17% to 29% of AI-driven value by 2028. This represents a fundamental shift in how organizations will deploy AI, moving from analytical tools to autonomous agents capable of executing complex tasks.
            </p>

            <h2>Performance Gap Widening</h2>
            <p>
              AI Leaders are delivering +2.2 percentage points higher revenue growth and +2.6 percentage points increased cost reduction compared to AI Laggards. This widening performance gap suggests that early movers in AI adoption are capturing disproportionate value.
            </p>

            <p>
              However, underlying enablers like technology platforms, data infrastructure, operating model, and people capabilities continue to lag, constraining the ability to scale AI adoption. Closing this gap between outcome-driven capabilities and foundational enablers will be critical for sustained transformation.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this signal</p>
            <ShareButton
              title={signal.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/061`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/intelligence">
              <Button variant="outline">← Back to Intelligence</Button>
            </Link>
            <Link href="/signals/062">
              <Button variant="outline">Next Signal →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
