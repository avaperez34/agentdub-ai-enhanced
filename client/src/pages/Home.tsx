import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { AIComputeTracker } from "@/components/AIComputeTracker";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const { trackButtonClick } = useAnalytics();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                  AgentDubai
                </h1>
                <p className="text-lg text-muted-foreground mb-1">
                  Intelligence on AI Agents & Digital Transformation in the Gulf Cooperation Council
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Platform: agentdub.ai
                </p>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Independent editorial platform dedicated to the rise of AI agents, autonomous
                systems, and applied artificial intelligence shaping the next phase of digital
                transformation across Dubai and the Gulf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/premium">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90"
                    onClick={() => trackButtonClick('view_premium_home', '/premium')}
                  >
                    View Premium Plans
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/directory">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => trackButtonClick('explore_directory_home', '/directory')}
                  >
                    Explore Directory
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent/30 mb-4">AI</div>
                <p className="text-muted-foreground">Strategic Intelligence Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Compute Power Tracker */}
      <AIComputeTracker />

      {/* Latest Intelligence Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Intelligence</h2>
            <p className="text-xl text-muted-foreground">
              Fresh signals and breaking news from the GCC AI ecosystem
            </p>
          </div>

          {/* Latest Signals */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Latest Signals</h3>
              <Link href="/intelligence">
                <Button variant="outline" size="sm">
                  View All Signals
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Signal #013 */}
              <Link href="/signals/013">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #013</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Saudi Arabia Launches 480-MW Hexagon Data Center</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    World's largest government-owned data center positions Kingdom in global compute race
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">Saudi Arabia</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">Impact: 9.0</span>
                  </div>
                </div>
              </Link>

              {/* Signal #015 */}
              <Link href="/signals/015">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #015</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">UAE Joins US-Led Pax Silica Alliance</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strategic partnership secures AI supply chains and strengthens UAE-US technology cooperation
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">UAE</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">Impact: 8.9</span>
                  </div>
                </div>
              </Link>

              {/* Signal #018 */}
              <Link href="/signals/018">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #018</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 14, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Qatar Joins Pax Silica - Central Role in AI Economic Order</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    US declares Qatar will shape emerging AI-era economic order through strategic energy and tech positioning
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">Qatar</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">Impact: 8.7</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Latest News</h3>
              <Link href="/news">
                <Button variant="outline" size="sm">
                  View All News
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* News Article #001 */}
              <Link href="/news/001">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">19% of GCC Organizations Deploy Agentic AI in Production</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    World Economic Forum reports GCC leads global agentic AI implementation
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">GCC-Wide</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">5 min read</span>
                  </div>
                </div>
              </Link>

              {/* News Article #002 */}
              <Link href="/news/002">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">IHC Partners with US Investment Arm for AI Boom</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Abu Dhabi's IHC strengthens UAE-US bilateral relations in AI-led technology sector
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">UAE</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">4 min read</span>
                  </div>
                </div>
              </Link>

              {/* News Article #005 */}
              <Link href="/news/005">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">ITC Infotech Launches Digital & AI Engineering Hub in Riyadh</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    15 years of Middle East operations culminates in new AI capabilities hub for Saudi Arabia
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">Saudi Arabia</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">3 min read</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AgentDub Section */}
      <section className="py-20 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why AgentDubai</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Execution-Focused</h3>
              <p className="text-muted-foreground">
                We focus on real-world deployment, infrastructure, and governance—not hype. Our
                analysis cuts through the noise to deliver actionable intelligence.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Regional Expertise</h3>
              <p className="text-muted-foreground">
                Aligned with Dubai's ambition to lead in applied AI. We understand GCC-specific
                compliance, governance, and market dynamics.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Independent Intelligence</h3>
              <p className="text-muted-foreground">
                Concise, high-signal analysis for founders, investors, executives, and
                institutions. No vendor bias—just clear thinking.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 border border-border rounded-lg p-8 text-center">
            <p className="text-lg text-foreground mb-4">
              AI agents are moving from experimentation into real-world deployment. This transition
              raises fundamental questions around trust, control, scalability, and economic impact.
            </p>
            <p className="text-muted-foreground">
              AgentDubai exists to document this shift—clearly, independently, and with a regional
              lens aligned with Dubai's ambition to lead in applied AI.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AI Players Directory</h2>
            <p className="text-xl text-muted-foreground">
              Strategic intelligence directory with GCC readiness scoring and Sentinel briefs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold mb-3">Comprehensive Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Track enterprise AI agents, automation platforms, and specialized tools across
                multiple categories and deployment models.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 25-point readiness scoring system</li>
                <li>✓ GCC compliance indicators</li>
                <li>✓ Sector-specific analysis</li>
                <li>✓ Deployment model support</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold mb-3">Intelligent Filtering</h3>
              <p className="text-muted-foreground mb-4">
                Find the right tools for your use case with advanced filtering and sorting
                capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Filter by category, sector, deployment</li>
                <li>✓ GCC compliance filtering</li>
                <li>✓ Search across all attributes</li>
                <li>✓ Sort by readiness score or name</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/directory">
              <Button size="lg">
                Browse AI Players
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">AgentDubai</h4>
              <p className="text-sm text-muted-foreground">
                Independent intelligence on AI agents and digital transformation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/directory">Directory</Link>
                </li>
                <li>
                  <Link href="/sentinel">Sentinel</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/intelligence">Intelligence</Link>
                </li>
                <li>
                  <Link href="/investors">Investors</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <a href="https://x.com/agentdub_ai" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/groups/16471003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AgentDubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
