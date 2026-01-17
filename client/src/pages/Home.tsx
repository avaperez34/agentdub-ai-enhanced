import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowRight, Zap, Shield, TrendingUp, Search } from "lucide-react";
import { useLocation } from "wouter";
import { AIComputeTracker } from "@/components/AIComputeTracker";
import AnimatedParticles from "@/components/AnimatedParticles";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const { trackButtonClick } = useAnalytics();
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  // Scroll indicator state
  const [signalsScrollIndex, setSignalsScrollIndex] = useState(0);
  const [newsScrollIndex, setNewsScrollIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  
  const signalsScrollRef = useRef<HTMLDivElement>(null);
  const newsScrollRef = useRef<HTMLDivElement>(null);
  
  // Check if user has seen swipe hint before
  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenSwipeHint');
    if (!hasSeenHint && window.innerWidth < 768) {
      setShowSwipeHint(true);
      setTimeout(() => {
        setShowSwipeHint(false);
        localStorage.setItem('hasSeenSwipeHint', 'true');
      }, 3000);
    }
  }, []);
  
  // Dynamic timestamp from latest content
  const latestContentDate = "January 16, 2026"; // Will be computed from actual content dates
  
  // Track scroll position for indicators
  useEffect(() => {
    const handleSignalsScroll = () => {
      if (signalsScrollRef.current) {
        const scrollLeft = signalsScrollRef.current.scrollLeft;
        const cardWidth = signalsScrollRef.current.offsetWidth * 0.85; // 85vw per card
        const index = Math.round(scrollLeft / cardWidth);
        setSignalsScrollIndex(Math.min(Math.max(index, 0), 2));
      }
    };
    
    const handleNewsScroll = () => {
      if (newsScrollRef.current) {
        const scrollLeft = newsScrollRef.current.scrollLeft;
        const cardWidth = newsScrollRef.current.offsetWidth * 0.85;
        const index = Math.round(scrollLeft / cardWidth);
        setNewsScrollIndex(Math.min(Math.max(index, 0), 2));
      }
    };
    
    const signalsEl = signalsScrollRef.current;
    const newsEl = newsScrollRef.current;
    
    if (signalsEl) {
      signalsEl.addEventListener('scroll', handleSignalsScroll);
    }
    if (newsEl) {
      newsEl.addEventListener('scroll', handleNewsScroll);
    }
    
    return () => {
      if (signalsEl) {
        signalsEl.removeEventListener('scroll', handleSignalsScroll);
      }
      if (newsEl) {
        newsEl.removeEventListener('scroll', handleNewsScroll);
      }
    };
  }, []);
  
  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlayPaused) return;
    
    const interval = setInterval(() => {
      // Auto-advance signals carousel
      if (signalsScrollRef.current) {
        const nextIndex = (signalsScrollIndex + 1) % 3;
        scrollToCard(signalsScrollRef.current, nextIndex);
      }
      
      // Auto-advance news carousel
      if (newsScrollRef.current) {
        const nextIndex = (newsScrollIndex + 1) % 3;
        scrollToCard(newsScrollRef.current, nextIndex);
      }
    }, 5000); // 5 seconds
    
    return () => clearInterval(interval);
  }, [signalsScrollIndex, newsScrollIndex, isAutoPlayPaused]);
  
  // Function to scroll to specific card
  const scrollToCard = (container: HTMLDivElement, index: number) => {
    const cardWidth = container.offsetWidth * 0.85; // 85vw per card
    const gap = 24; // gap-6 = 24px
    const scrollLeft = index * (cardWidth + gap);
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };
  
  // Handle dot click
  const handleDotClick = (index: number, type: 'signals' | 'news') => {
    setIsAutoPlayPaused(true);
    if (type === 'signals' && signalsScrollRef.current) {
      scrollToCard(signalsScrollRef.current, index);
    } else if (type === 'news' && newsScrollRef.current) {
      scrollToCard(newsScrollRef.current, index);
    }
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlayPaused(false), 10000);
  };
  
  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 10000);
  };
  
  // Helper to check if content is new (within 48 hours)
  const isNewContent = (dateString: string) => {
    const contentDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now.getTime() - contentDate.getTime()) / (1000 * 60 * 60);
    return diffHours <= 48;
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark navy with tech aesthetic */}
      <section className="relative py-20 px-4 overflow-hidden bg-[#0a1628]">
        {/* Animated Particles */}
        <AnimatedParticles />
        
        {/* Tech circuit board background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h20M30 10v20M30 30h20M50 30v20M50 50h20" stroke="#3b82f6" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="10" r="2" fill="#10b981"/>
                <circle cx="30" cy="30" r="2" fill="#10b981"/>
                <circle cx="50" cy="30" r="2" fill="#10b981"/>
                <circle cx="50" cy="50" r="2" fill="#10b981"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* AgentDubai Title with glow */}
          <div className="mb-12">
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              AgentDubai
            </h1>
          </div>
          
          {/* Big Search Bar with glowing effect */}
          <div className="mb-8">
            <form onSubmit={handleSearch}>
              <div className="relative group max-w-3xl mx-auto">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search signals and news across the GCC..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-8 py-6 text-lg rounded-full border-2 border-blue-500/50 bg-[#1a2942] text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-400 hover:border-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-500 text-white rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-200 font-medium text-lg"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Description Text - Under Search Bar */}
          <div className="mb-12">
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Intelligence on AI Agents & Digital Transformation in the Gulf Cooperation Council
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Platform: agentdub.ai
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
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
                className="w-full sm:w-auto border-2 border-blue-500/50 text-white hover:bg-blue-500/10 hover:border-blue-400"
                onClick={() => trackButtonClick('explore_directory_home', '/directory')}
              >
                Explore Directory
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Compute Power Tracker */}
      <AIComputeTracker />

      {/* Latest Intelligence Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Latest Intelligence</h2>
            <p className="text-xl text-muted-foreground mb-2">
              Fresh signals and breaking news from the GCC AI ecosystem
            </p>
            <p className="text-sm text-muted-foreground/70">
              Last updated: {latestContentDate}
            </p>
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
            <div ref={signalsScrollRef} onTouchStart={handleUserInteraction} onScroll={handleUserInteraction} className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 relative">
              {showSwipeHint && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden animate-pulse pointer-events-none">
                  <div className="bg-accent text-accent-foreground px-3 py-2 rounded-r-lg shadow-lg flex items-center gap-2">
                    <ArrowRight size={16} />
                    <span className="text-sm font-medium">Swipe</span>
                  </div>
                </div>
              )}
              {/* Signal #022 */}
              <Link href="/signals/022" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #022</span>
                    {isNewContent('2026-01-16') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 16, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">UAE Retains #1 Global AI Adoption</h3>
                  <p className="text-muted-foreground mb-4">Microsoft AI Diffusion Report confirms UAE leads world in AI adoption with comprehensive infrastructure, policy framework, and deployment velocity.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-medium">Impact: 8.8/10</span>
                    <span className="text-muted-foreground">🇦🇪 UAE</span>
                  </div>
                </div>
              </Link>

              {/* Signal #023 */}
              <Link href="/signals/023" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #023</span>
                    {isNewContent('2026-01-16') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 16, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">World Government Summit 2026 Dubai</h3>
                  <p className="text-muted-foreground mb-4">35 heads of state converge in Dubai for AI governance discussions with IBM, Google DeepMind CEOs—positioning UAE as global AI policy hub.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-medium">Impact: 8.5/10</span>
                    <span className="text-muted-foreground">🇦🇪 UAE</span>
                  </div>
                </div>
              </Link>

              {/* Signal #021 */}
              <Link href="/signals/021" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">SIGNAL #021</span>
                    {isNewContent('2026-01-15') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 15, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kuwait International AI Conference</h3>
                  <p className="text-muted-foreground mb-4">First regional AI conference signals Kuwait's entry into GCC AI race with focus on education, healthcare, and government transformation.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-medium">Impact: 6.5/10</span>
                    <span className="text-muted-foreground">🇰🇼 Kuwait</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Scroll indicators for mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index, 'signals')}
                  className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                    index === signalsScrollIndex ? 'bg-accent w-4' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to signal ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Latest News</h3>
              <Link href="/news">
                <Button variant="outline" size="sm">
                  View All News
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div ref={newsScrollRef} onTouchStart={handleUserInteraction} onScroll={handleUserInteraction} className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {/* News Article #010 */}
              <Link href="/news/010" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    {isNewContent('2026-01-16') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Jan 16, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">UAE #1 in Global AI Adoption</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Microsoft AI Diffusion Report confirms UAE leads world in AI adoption metrics
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">UAE</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary">5 min read</span>
                  </div>
                </div>
              </Link>

              {/* News Article #001 */}
              <Link href="/news/001" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    {isNewContent('2026-01-15') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
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
              <Link href="/news/002" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent">NEWS</span>
                    {isNewContent('2026-01-15') && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium animate-pulse">NEW</span>
                    )}
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
            </div>
            {/* Scroll indicators for mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index, 'news')}
                  className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                    index === newsScrollIndex ? 'bg-accent w-4' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
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
