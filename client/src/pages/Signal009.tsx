/**
 * Signal #009: Middle East VC Hits Record $3.8B
 * Design Philosophy: Capital & Announcements - Funding Surge
 */

import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Signal009() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/intelligence">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Intelligence
          </button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-purple-600 text-white">Capital & Announcements</Badge>
            <Badge variant="outline">GCC-Wide</Badge>
            <Badge variant="outline">Venture Capital</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #009: Middle East VC Hits Record $3.8B - Saudi Captures 77% of November Funding
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 12, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>GCC Region</span>
            </div>
            $1
            <ShareButton 
              url="https://agentdub.ai/signals/009"
              title="Signal #009: Bahrain EDB Launches $50M AI Startup Fund"
            />
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Middle East venture capital surged 74% to $3.8 billion across 688 deals in 2025. AI-related funding jumped 204% to $817 million, with Saudi Arabia dominating the capital landscape and capturing the majority of late-stage rounds.
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 p-6 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Middle East venture capital market reached record levels in 2025, with $3.8 billion deployed across 688 deals—a 74% increase year-over-year. AI startups captured $817 million of this total, representing a 204% increase in AI-focused funding. Saudi Arabia emerged as the dominant force, capturing 77% of November 2025 funding and positioning itself as the region's venture capital hub.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <div className="text-3xl font-bold text-purple-600">$3.8B</div>
              <div className="text-sm text-muted-foreground">Total VC 2025</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">+74%</div>
              <div className="text-sm text-muted-foreground">YoY Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">$817M</div>
              <div className="text-sm text-muted-foreground">AI Funding</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">8.9/10</div>
              <div className="text-sm text-muted-foreground">Impact Score</div>
            </div>
          </div>
        </section>

        {/* The Numbers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Record Capital Deployment</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Middle East received $3.8 billion across 688 deals in 2025, marking a 74% increase compared to 2024. Almost half of the venture capital deployed in the region went to Saudi Arabia, signaling a fundamental shift in the regional investment landscape. AI-related company funding increased 204% year-over-year to $817 million, with AI moving from a "future narrative" to an "active investment theme."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">2025 Funding Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Saudi Arabia</span>
                    <span className="text-sm text-muted-foreground">~$1.9B (50%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">UAE</span>
                    <span className="text-sm text-muted-foreground">~$1.1B (29%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: "29%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Egypt</span>
                    <span className="text-sm text-muted-foreground">~$0.5B (13%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: "13%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Other GCC</span>
                    <span className="text-sm text-muted-foreground">~$0.3B (8%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">AI Funding Surge</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-sm">2024 AI Funding</span>
                  <span className="font-bold text-lg">$268M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-sm">2025 AI Funding</span>
                  <span className="font-bold text-lg text-purple-600">$817M</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm">YoY Growth</span>
                  <span className="font-bold text-lg text-emerald-600">+204%</span>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-purple-600 pl-6 italic text-muted-foreground my-8">
            "AI is moving from a future narrative to an active investment theme. The capital is following execution, not hype."
            <footer className="text-sm mt-2 not-italic">— Middle East VC Report 2025</footer>
          </blockquote>
        </section>

        {/* Saudi Dominance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Saudi Arabia's Capital Dominance</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Saudi Arabia captured 77% of November 2025 funding, with $176 million raised across just 14 deals. This concentration signals a shift from broad-based seed funding to focused late-stage investment in proven companies. The Kingdom's Public Investment Fund (PIF) and government-backed venture arms are actively deploying capital into AI infrastructure, enterprise software, and fintech.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">November 2025 Snapshot</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$176M</div>
                <div className="text-sm text-muted-foreground">Saudi Funding</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">14</div>
                <div className="text-sm text-muted-foreground">Deals Closed</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">77%</div>
                <div className="text-sm text-muted-foreground">Regional Share</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-emerald-500">↑</span>
                What's Working
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Government-backed venture funds providing patient capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Focus on late-stage rounds ($50M-$150M) for proven companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Strategic alignment with Vision 2030 priorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>International co-investment partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-500">⚠</span>
                Challenges Remain
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Early-stage funding still limited outside Saudi/UAE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Exit opportunities remain constrained (IPO/M&A)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Capital concentration in few sectors (fintech, AI, proptech)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Valuation expectations misaligned with global benchmarks</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment & Business Implications</h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For AI Startups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The surge in AI funding creates opportunity for startups with proven traction. However, capital is increasingly concentrated in late-stage rounds ($50M+) for companies demonstrating clear product-market fit and revenue growth. Early-stage AI companies should focus on reaching profitability milestones before seeking institutional capital.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Late-Stage Focus</Badge>
                <Badge variant="outline" className="text-xs">Revenue Traction Required</Badge>
                <Badge variant="outline" className="text-xs">Saudi/UAE Priority</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For Venture Funds</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                International VCs are increasing allocations to Middle East. Co-investment opportunities with government-backed funds (PIF, Mubadala, QIA) provide access to deal flow and local market knowledge. Focus on sectors aligned with national strategies: AI infrastructure, fintech, healthtech, and climate tech.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Co-Investment Model</Badge>
                <Badge variant="outline" className="text-xs">Strategic Alignment</Badge>
                <Badge variant="outline" className="text-xs">Local Partnerships</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For Corporate Investors</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                GCC corporates are increasingly active in venture investing, seeking strategic access to AI and digital transformation capabilities. Corporate venture capital (CVC) arms can leverage balance sheet strength to compete for late-stage deals and secure strategic partnerships with portfolio companies.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Strategic CVC</Badge>
                <Badge variant="outline" className="text-xs">Digital Transformation</Badge>
                <Badge variant="outline" className="text-xs">Partnership Focus</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Get the Full GCC AI Intelligence Report</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access detailed profiles of 500+ AI companies across the GCC, including funding history, investor networks, and GCC readiness scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/directory">
                <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Explore Directory
                </button>
              </Link>
              <a
                href="https://agentdubai.gumroad.com/l/gcc-ai-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-card border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-block"
              >
                Buy Full Report ($299)
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
