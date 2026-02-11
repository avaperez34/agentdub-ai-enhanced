import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal111() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "111",
    title: "Saudi Arabia Integrates AI Across All Vision 2030 Goals - Mandatory AI Education & SDAIA Leadership",
    description: "Saudi Arabia embedding artificial intelligence across all 96 Vision 2030 goals (66 direct/indirect integration points) as national economic diversification strategy. AI taught as core subject in all public schools starting 2025-26 academic year, creating long-term talent pipeline.",
    fullContent: `Saudi Arabia's systematic integration of AI across all Vision 2030 goals represents the most comprehensive national AI strategy in the GCC. This approach positions AI not as isolated initiative but as foundational element of economic transformation.

Strategic Integration Framework:

1. Vision 2030 AI Alignment:
   - AI embedded across all 96 Vision 2030 goals
   - 66 direct and indirect AI integration points identified
   - Systematic approach to AI-driven economic diversification
   - Long-term strategic alignment through 2030

2. Education and Talent Development:
   - AI taught as core subject in all public schools (2025-26 academic year)
   - Creating long-term talent pipeline for AI-driven economy
   - Mandatory AI curriculum for university undergraduates
   - Government and private sector workforce training programs

3. National Strategy for Data and AI (NSDAI):
   - Six strategic initiatives across key sectors
   - Systematic deployment across government and private sector
   - Integration with Vision 2030 implementation timeline
   - Coordination across all ministries and agencies

4. Institutional Leadership:
   - Saudi Data & Artificial Intelligence Authority (SDAIA) leading implementation
   - Microsoft partnership expanding workforce AI training
   - Government-wide AI adoption and capability building
   - Private sector alignment with national strategy

Implementation Initiatives:

- School Curriculum: AI as core subject from primary through secondary education
- University Programs: Mandatory AI curriculum for all undergraduates
- Government Training: Workforce upskilling across all ministries
- Private Sector: Microsoft partnership for corporate AI training
- Research: SDAIA leading AI research and development initiatives

Labor Market Signals:

- 173+ open AI jobs in Saudi Arabia
- Massive talent demand signaling economic shift
- Competitive salaries attracting regional and international talent
- Shortage of qualified AI professionals despite training initiatives

Strategic Implications:

- AI becoming inextricable from national security, defense, and foreign policy
- Positions Saudi Arabia as global reference point for applied AI in regulated sectors
- Creates competitive advantage through systematic national approach
- Establishes Saudi Arabia as AI leader by 2030

Economic Impact:

- AI-driven productivity gains across all economic sectors
- New job creation in AI and related fields
- Attraction of international AI companies and investment
- Development of domestic AI expertise and capabilities
- Long-term economic diversification away from oil

Opportunities:

- Position Saudi Arabia as global AI leader by 2030
- Create competitive advantage in AI-driven sectors
- Attract international AI talent and companies
- Build world-class AI research and development capacity
- Establish Saudi Arabia as bridge between East and West AI ecosystems
- Generate substantial economic value from AI integration

Challenges:

- Rapid workforce transformation and upskilling
- Building advanced AI research and development capacity
- Retaining trained talent in competitive market
- Balancing international talent with local workforce development
- Regulatory and compliance frameworks for AI deployment`,
    country: "Saudi Arabia",
    sector: "Strategy",
    date: "2026-02-10",
    impact: 8.5,
    horizon: "3-5y",
    category: "strategy"
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out: ${signal.title}`;
    
    if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Intelligence
          </Button>
        </Link>

        <article className="max-w-none">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6 leading-tight">{signal.title}</h1>
            
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border border-border mb-8">
              {/* Impact Score */}
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold mb-2">IMPACT SCORE</span>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-accent">{signal.impact}</span>
                  <span className="text-xs text-muted-foreground">/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-3">
                  <div className="bg-accent h-2 rounded-full" style={{width: `${(signal.impact / 10) * 100}%`}} />
                </div>
              </div>
              
              {/* Sector */}
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold mb-2">SECTOR</span>
                <span className="text-sm font-bold text-foreground">{signal.sector}</span>
              </div>
              
              {/* Time Horizon */}
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold mb-2">HORIZON</span>
                <span className="text-sm font-bold text-foreground">{signal.horizon}</span>
              </div>
              
              {/* Region */}
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold mb-2">REGION</span>
                <span className="text-sm font-bold text-foreground">{signal.country}</span>
              </div>
            </div>
            
            {/* Date */}
            <div className="text-sm text-muted-foreground">
              Published: {new Date(signal.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-8 pb-8 border-b border-border">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {signal.description}
            </p>
          </div>
          
          {/* Full Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed text-base">
              {signal.fullContent}
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-12 mb-8">
            <h3 className="text-lg font-semibold mb-4">Share this signal</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin size={16} className="mr-2" />
                Share on LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
              >
                <Twitter size={16} className="mr-2" />
                Share on X
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
              >
                <Copy size={16} className="mr-2" />
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
