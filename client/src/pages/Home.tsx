import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowRight } from "lucide-react";
import { allSignals } from "@/data/content";
import { FREE_SIGNAL_ID } from "@shared/const";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const { trackButtonClick } = useAnalytics();
  const signalsScrollRef = useRef<HTMLDivElement>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [signalsScrollIndex, setSignalsScrollIndex] = useState(0);

  const handleUserInteraction = () => {
    setShowSwipeHint(false);
  };

  const handleDotClick = (index: number) => {
    if (signalsScrollRef.current) {
      const scrollAmount = index * (signalsScrollRef.current.offsetWidth + 24);
      signalsScrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

      {/* Search Section */}
      <section className="py-12 px-4 bg-card border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search signals and news across the GCC..."
              className="w-full px-6 py-4 rounded-full bg-background border-2 border-border focus:border-accent focus:outline-none transition-colors"
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => trackButtonClick('search_home', '/')}
            >
              Search
            </Button>
          </div>
          <div className="text-center mt-6">
            <Link href="/intelligence">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Explore Intelligence
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* GCC AI Compute Landscape */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">GCC AI Compute Landscape</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comparative analysis of AI infrastructure capacity across the Gulf region—from sovereign deployments to AgentDubai's intelligence platform evolution
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Saudi Arabia */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="font-bold text-lg">Saudi Arabia (NEOM)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">300K NVIDIA Blackwell chips infrastructure</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Infrastructure</span><br /><span className="font-bold">300,000 GPUs</span></div>
                <div><span className="text-muted-foreground">Compute Power</span><br /><span className="font-bold">2.5 PetaFLOPS</span></div>
                <div><span className="text-muted-foreground">Daily Capacity</span><br /><span className="font-bold">~500B tokens/day</span></div>
                <div><span className="text-muted-foreground">Relative Scale</span><br /><span className="font-bold">100%</span></div>
              </div>
            </div>

            {/* UAE */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <h3 className="font-bold text-lg">UAE (TII ACE)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Technology Innovation Institute sovereign AI</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Infrastructure</span><br /><span className="font-bold">~150,000 GPUs</span></div>
                <div><span className="text-muted-foreground">Compute Power</span><br /><span className="font-bold">1.2 PetaFLOPS</span></div>
                <div><span className="text-muted-foreground">Daily Capacity</span><br /><span className="font-bold">~250B tokens/day</span></div>
                <div><span className="text-muted-foreground">Relative Scale</span><br /><span className="font-bold">48%</span></div>
              </div>
            </div>

            {/* Qatar */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="font-bold text-lg">Qatar (Pax Silica)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Strategic AI infrastructure partnership</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Infrastructure</span><br /><span className="font-bold">~80,000 GPUs</span></div>
                <div><span className="text-muted-foreground">Compute Power</span><br /><span className="font-bold">0.6 PetaFLOPS</span></div>
                <div><span className="text-muted-foreground">Daily Capacity</span><br /><span className="font-bold">~120B tokens/day</span></div>
                <div><span className="text-muted-foreground">Relative Scale</span><br /><span className="font-bold">24%</span></div>
              </div>
            </div>

            {/* AgentDubai Current */}
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-bold text-lg">AgentDubai (Current)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">API-based intelligence platform</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Infrastructure</span><br /><span className="font-bold">API Access</span></div>
                <div><span className="text-muted-foreground">Compute Power</span><br /><span className="font-bold">~0.001 PetaFLOPS</span></div>
                <div><span className="text-muted-foreground">Daily Capacity</span><br /><span className="font-bold">~50M tokens/day</span></div>
                <div><span className="text-muted-foreground">Relative Scale</span><br /><span className="font-bold">2%</span></div>
              </div>
            </div>

            {/* AgentDubai 2026 Target */}
            <div className="p-6 rounded-lg bg-card border border-accent/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-bold text-lg">AgentDubai (2026 Target)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Proprietary agent with dedicated infrastructure</p>
              <div className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">Infrastructure</span><br /><span className="font-bold">5,000+ GPUs</span></div>
                <div><span className="text-muted-foreground">Compute Power</span><br /><span className="font-bold">0.05 PetaFLOPS</span></div>
                <div><span className="text-muted-foreground">Daily Capacity</span><br /><span className="font-bold">~10B tokens/day</span></div>
                <div><span className="text-muted-foreground">Relative Scale</span><br /><span className="font-bold">15%</span></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-secondary/50 border border-border rounded-lg p-6 max-w-2xl">
              <p className="text-muted-foreground mb-4">
                <strong>Note:</strong> Metrics are estimates based on publicly announced infrastructure investments and deployment reports. AgentDubai's 2026 target reflects planned transition to proprietary agent architecture with dedicated compute resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Intelligence Section */}
      <section className="py-20 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">Latest Intelligence</h2>
            <p className="text-muted-foreground">Fresh signals and breaking news from the GCC AI ecosystem</p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: February 4, 2026</p>
          </div>

          {/* Latest Signals */}
          <div className="mb-16 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Latest Signals</h3>
              <Link href="/intelligence">
                <Button variant="outline" size="sm">
                  View All Signals
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div ref={signalsScrollRef} onTouchStart={handleUserInteraction} onScroll={handleUserInteraction} className="flex md:grid md:grid-cols-1 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 relative">
              {showSwipeHint && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden animate-pulse pointer-events-none">
                  <div className="bg-accent text-accent-foreground px-3 py-2 rounded-r-lg shadow-lg flex items-center gap-2">
                    <ArrowRight size={16} />
                    <span className="text-sm font-medium">Swipe</span>
                  </div>
                </div>
              )}
              {/* FREE SIGNAL - DYNAMICALLY LOADED WITH FULL REPORT */}
              {allSignals.find(s => s.id === FREE_SIGNAL_ID) && (() => {
                const signal = allSignals.find(s => s.id === FREE_SIGNAL_ID)!;
                return (
                  <Link href={`/signals/${FREE_SIGNAL_ID}`} className="flex-shrink-0 w-[95vw] md:w-full snap-center">
                    <div className="p-8 rounded-lg bg-background border-2 border-accent/70 hover:border-accent transition-all cursor-pointer h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent/20 to-transparent w-40 h-40 pointer-events-none" />
                      
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-mono text-accent font-bold">SIGNAL #{FREE_SIGNAL_ID}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-white font-bold animate-pulse">LATEST</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{new Date(signal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 leading-tight">{signal.title}</h3>
                      
                      {/* Full Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{signal.description}</p>
                      
                      {/* Scoring & Metadata Section */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-card rounded-lg border border-border">
                        {/* Impact Score */}
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-muted-foreground font-semibold mb-1">IMPACT SCORE</span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-accent">{signal.impact}</span>
                            <span className="text-xs text-muted-foreground">/10</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                            <div className="bg-accent h-1.5 rounded-full" style={{width: `${(signal.impact / 10) * 100}%`}} />
                          </div>
                        </div>
                        
                        {/* Sector */}
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-muted-foreground font-semibold mb-1">SECTOR</span>
                          <span className="text-sm font-bold text-foreground">{signal.sector}</span>
                        </div>
                        
                        {/* Time Horizon */}
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-muted-foreground font-semibold mb-1">HORIZON</span>
                          <span className="text-sm font-bold text-foreground">{signal.horizon}</span>
                        </div>
                        
                        {/* Region */}
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-muted-foreground font-semibold mb-1">REGION</span>
                          <span className="text-sm font-bold text-foreground">{signal.country}</span>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                        <span>Read Full Report</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </div>
            {/* Scroll indicators for mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                    index === signalsScrollIndex ? 'bg-accent w-4' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to signal ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why agentdub.ai Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why agentdub.ai</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Execution-Focused</h3>
              <p className="text-muted-foreground">
                We focus on real-world deployment, infrastructure, and governance—not hype. Our
                analysis cuts through the noise to deliver actionable intelligence.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Regional Expertise</h3>
              <p className="text-muted-foreground">
                Aligned with Dubai's ambition to lead in applied AI. We understand GCC-specific
                compliance, governance, and market dynamics.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
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
              agentdub.ai exists to document this shift—clearly, independently, and with a regional
              lens aligned with Dubai's ambition to lead in applied AI.
            </p>
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
