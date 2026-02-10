import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ArrowRight, Zap, Shield, TrendingUp, Search } from "lucide-react";
import { useLocation } from "wouter";
import { AIComputeTracker } from "@/components/AIComputeTracker";
import AnimatedParticles from "@/components/AnimatedParticles";
import { PremiumLock } from "@/components/PremiumLock";
import { WaitlistModal } from "@/components/WaitlistModal";

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
  const [showWaitlist, setShowWaitlist] = useState(false);
  
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
  const latestContentDate = "February 4, 2026"; // Will be computed from actual content dates
  
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
            <Link href="/intelligence">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0"
                onClick={() => trackButtonClick('explore_intelligence', '/intelligence')}
              >
                Explore Intelligence
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Compute Power Tracker */}
      <AIComputeTracker />

      {/* Latest Intelligence Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-teal-900/20 via-transparent to-transparent pointer-events-none" />
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
              {/* Signal #073 - NEW */}
              <Link href="/signals/073" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border-2 border-accent/70 hover:border-accent transition-all cursor-pointer h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent/20 to-transparent w-32 h-32 pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #073</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold animate-pulse">NEW</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 8, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Abu Dhabi Dialogue Adopts AI-Driven Labour Mobility Roadmap - Digital Credentials & Smart Compliance</h3>
                  <p className="text-muted-foreground mb-4">8th Abu Dhabi Dialogue brings together 17 Asian labour-sending nations and 6 GCC states to adopt AI-driven worker mobility roadmap. Interoperable digital credential wallets, risk-based e-inspection platforms, and wage-theft detection systems.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.6/10</span>
                    <span className="text-muted-foreground">🌏 GCC & Asia</span>
                  </div>
                </div>
              </Link>

              {/* Signal #072 - PREMIUM LOCKED */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border-2 border-accent/70 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent/20 to-transparent w-32 h-32 pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #072</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold animate-pulse">NEW</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 8, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Qatar Investment Authority Expands Fund of Funds to $3B with AI Compute Access - Venture Acceleration</h3>
                  <p className="text-muted-foreground mb-4">QIA tripled Fund of Funds program to $3 billion and introduced subsidized AI computing power access through Qai. Program deployed capital to 12 firms with commitments ranging $50M-$150M+ per fund. Strategic move to attract global founders.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.4/10</span>
                    <span className="text-muted-foreground">🇶🇦 Qatar</span>
                  </div>
                  <button onClick={() => setShowWaitlist(true)} className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg flex items-center justify-center hover:bg-black/40 transition-all">
                    <div className="text-center">
                      <p className="text-white font-bold mb-2">Premium Content</p>
                      <p className="text-sm text-gray-300">Join waitlist for full access</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Signal #071 - PREMIUM LOCKED */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border-2 border-accent/70 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent/20 to-transparent w-32 h-32 pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #071</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500 text-white font-bold animate-pulse">NEW</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 9, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Deloitte GenAI Adoption Survey Reveals C-Suite Ambition-Execution Gap in GCC - Enterprise Implementation Challenges</h3>
                  <p className="text-muted-foreground mb-4">Deloitte 2026 GenAI Adoption Survey captures C-suite approaches to enterprise GenAI across UAE, KSA, and GCC. Key finding: momentum building but adoption remains uneven. Distinct maturity levels emerging between organizations.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 7.8/10</span>
                    <span className="text-muted-foreground">📊 Enterprise</span>
                  </div>
                  <button onClick={() => setShowWaitlist(true)} className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg flex items-center justify-center hover:bg-black/40 transition-all">
                    <div className="text-center">
                      <p className="text-white font-bold mb-2">Premium Content</p>
                      <p className="text-sm text-gray-300">Join waitlist for full access</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Signal #070 - PREMIUM LOCKED */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 h-full relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #070</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 7, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Russia Pivots to GCC for AI Partnerships - Strategic Diversification Amid Sanctions</h3>
                  <p className="text-muted-foreground mb-4">Russia establishing formal AI cooperation framework with UAE and broader GCC. Focus on financial management, digital governance, and smart infrastructure. UAE-Russia trade reached record $12B in 2025.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.2/10</span>
                    <span className="text-muted-foreground">🇷🇺 Russia & UAE</span>
                  </div>
                  <button onClick={() => setShowWaitlist(true)} className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg flex items-center justify-center hover:bg-black/40 transition-all">
                    <div className="text-center">
                      <p className="text-white font-bold mb-2">Premium Content</p>
                      <p className="text-sm text-gray-300">Join waitlist for full access</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Signal #069 - BREAKING - PREMIUM LOCKED */}
              <div className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border-2 border-accent/70 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent/20 to-transparent w-32 h-32 pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #069</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white font-bold animate-pulse">BREAKING</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 7, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">GCC Secretary General Announces Unified AI Governance Framework - Historic Regional Alignment</h3>
                  <p className="text-muted-foreground mb-4">All six GCC member states adopt unified AI governance standards. Coordinated approach to data sovereignty, regulatory frameworks, and cross-border AI deployment. Positioning GCC as alternative AI hub.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 9.1/10</span>
                    <span className="text-muted-foreground">🌍 GCC</span>
                  </div>
                  <button onClick={() => setShowWaitlist(true)} className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg flex items-center justify-center hover:bg-black/40 transition-all">
                    <div className="text-center">
                      <p className="text-white font-bold mb-2">Premium Content</p>
                      <p className="text-sm text-gray-300">Join waitlist for full access</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Signal #068 */}
              <Link href="/signals/068" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #068</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 7, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">MIT Analysis: GCC Enters New Era of AI Self-Governance - From Ownership to Infrastructure</h3>
                  <p className="text-muted-foreground mb-4">GCC transitioning from defensive AI posturing to systematic economic integration. Sovereign compute infrastructure, Arabic-first models, and dual-track procurement enabling regional AI leadership.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.7/10</span>
                    <span className="text-muted-foreground">🌍 GCC</span>
                  </div>
                </div>
              </Link>

              {/* Signal #067 */}
              <Link href="/signals/067" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #067</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 7, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Qatar NPC Launches Enterprise AI Transformation - Microsoft 365 Copilot at Scale</h3>
                  <p className="text-muted-foreground mb-4">Qatar National Planning Council deploying AI across all government departments. Microsoft partnership enabling rapid adoption. Government becoming model for enterprise AI implementation in GCC.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.3/10</span>
                    <span className="text-muted-foreground">🇶🇦 Qatar</span>
                  </div>
                </div>
              </Link>

              {/* Signal #063 */}
              <Link href="/signals/063" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #063</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 5, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Qatar Commits $20 Billion to AI Infrastructure with Brookfield Partnership</h3>
                  <p className="text-muted-foreground mb-4">Qatar Investment Authority announces $20 billion joint venture with Brookfield Asset Management for AI infrastructure. Patient capital model enabling competition with Silicon Valley and China in AI infrastructure race.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 9.5/10</span>
                    <span className="text-muted-foreground">🇶🇦 Qatar</span>
                  </div>
                </div>
              </Link>

              {/* Signal #062 */}
              <Link href="/signals/062" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #062</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 5, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">IMF Chief: AI Could Boost GCC Non-Oil GDP by 2.8% - Largest Economic Opportunity</h3>
                  <p className="text-muted-foreground mb-4">IMF Managing Director highlights AI could boost GCC non-oil GDP by 2.8 percent. UAE leads globally with 64% of workforce using AI. Economic diversification imperative for GCC economies.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 9.2/10</span>
                    <span className="text-muted-foreground">🌍 GCC</span>
                  </div>
                </div>
              </Link>

              {/* Signal #061 */}
              <Link href="/signals/061" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #061</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 5, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">BCG Study: 39% of GCC Organizations Now AI Leaders - Public Sector Emerging</h3>
                  <p className="text-muted-foreground mb-4">BCG Build for the Future 2026 study reveals 39% of GCC organizations now AI Leaders. Public Sector jumping 5 positions to rank second in maturity. Agentic AI projected to drive future growth.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 9.3/10</span>
                    <span className="text-muted-foreground">🌍 GCC</span>
                  </div>
                </div>
              </Link>

              {/* Signal #057 */}
              <Link href="/signals/057" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #057</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 3, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kuwait Launches First Sovereign AI Data Center with NVIDIA H200</h3>
                  <p className="text-muted-foreground mb-4">Kuwait inaugurated sovereign AI-enabled data center through Ooredoo-NVIDIA partnership. Features H200 Tensor Core GPU enabling Arabic LLM development and zero-latency sovereign computing.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 9.0/10</span>
                    <span className="text-muted-foreground">🇰🇼 Kuwait</span>
                  </div>
                </div>
              </Link>

              {/* Signal #056 */}
              <Link href="/signals/056" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #056</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 3, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bahrain Formalizes AI in Diplomatic Work — First GCC Country</h3>
                  <p className="text-muted-foreground mb-4">Bahrain Ministry of Foreign Affairs held AI diplomacy session at Diplomatic Forum 2026. First GCC country to integrate AI into foreign policy operations covering geopolitical dimensions.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.4/10</span>
                    <span className="text-muted-foreground">🇧🇭 Bahrain</span>
                  </div>
                </div>
              </Link>

              {/* Signal #055 */}
              <Link href="/signals/055" className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                <div className="p-6 rounded-lg bg-card border border-accent/50 hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-accent font-bold">SIGNAL #055</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">Feb 3, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Oman's Methodical AI Approach — Strategy Over Speed</h3>
                  <p className="text-muted-foreground mb-4">Oman launched AI pilot projects in healthcare, justice, education. Methodical approach prioritizes strategy, governance, solid foundations over speed, contrasting with rapid deployment elsewhere.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-accent font-bold">Impact: 8.3/10</span>
                    <span className="text-muted-foreground">🇴🇲 Oman</span>
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

        </div>
      </section>

      {/* Why agentdub.ai Section */}
      <section className="py-20 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why agentdub.ai</h2>

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
              <h4 className="font-bold mb-4">agentdub.ai</h4>
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
            <p>© {new Date().getFullYear()} agentdub.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </div>
  );
}
