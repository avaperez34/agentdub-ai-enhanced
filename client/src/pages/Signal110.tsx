import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal110() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "110",
    title: "Qatar AI Infrastructure Boom - $20B Brookfield Partnership & Cheap Power Advantage",
    description: "Qatar's AI company Qai and investment firm Brookfield announced $20 billion strategic joint venture (Dec 2025) to establish AI infrastructure and services hub. Qatar Investment Authority making strategic investments in US AI chip startups with $500 billion US investment plan over 10 years.",
    fullContent: `Qatar's emergence as a major player in global AI infrastructure represents a strategic pivot from energy-dependent economy to computational infrastructure leadership. The $20 billion Brookfield partnership signals sustained commitment to AI infrastructure development.

Strategic Developments:

1. Brookfield Partnership:
   - $20 billion joint venture announced December 2025
   - Focus on AI infrastructure and services hub development
   - Integration with Qatar's existing energy infrastructure
   - Timeline for operational deployment: 2026-2027

2. Competitive Advantages:
   - Abundant cheap power from natural gas resources
   - Targeting 1.5-2 gigawatt AI data center capacity by 2030
   - Strategic geographic position for Middle East, Europe, Asia connectivity
   - Government backing and regulatory support

3. Venture Capital Strategy:
   - Qatar Investment Authority investing in US AI chip startups
   - $500 billion US investment plan over 10 years
   - Diversification into AI hardware and software ecosystems
   - Strategic positioning in global AI value chain

4. Research and Innovation:
   - Qatar Center for Artificial Intelligence (QCAI) advancing research
   - Germany-Qatar deep-tech innovation hub in Doha
   - Focus on AI research across full spectrum
   - Building local AI expertise and capabilities

Implementation Timeline:

- Q1-Q2 2026: Infrastructure planning and site preparation
- Q3-Q4 2026: Initial data center deployment
- 2027: Capacity expansion to 1+ gigawatt
- 2028+: Regional expansion and international partnerships

Economic Impact:

- Diversification away from energy-dependent economy
- Creation of high-value technology sector
- Attraction of international AI companies and talent
- Generation of substantial foreign exchange through compute services
- Development of local AI expertise and research capacity

Competitive Positioning:

- Alternative to Western data center providers
- Cost-competitive with US and European facilities
- Strategic bridge between East and West AI ecosystems
- Leveraging energy resources as competitive advantage
- Building long-term AI infrastructure leadership

Opportunities:

- Establish Qatar as regional AI infrastructure hub
- Create competitive advantage in AI model training costs
- Attract international AI research institutions
- Build domestic AI talent and expertise
- Generate revenue streams from compute services
- Position Qatar as global AI infrastructure player

Challenges:

- Competing with established global data center operators
- Attracting Western companies amid geopolitical considerations
- Building operational expertise in AI infrastructure
- Regulatory and compliance frameworks
- Talent acquisition and retention`,
    country: "Qatar",
    sector: "Infrastructure",
    date: "2026-02-10",
    impact: 8.5,
    horizon: "2-3y",
    category: "investment"
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
