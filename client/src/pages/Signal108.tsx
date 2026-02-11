import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal108() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "108",
    title: "NEOM AI Data Center - $5B DataVolt Investment Marks Saudi Arabia's Infrastructure Pivot",
    description: "DataVolt partnership with NEOM announced $5 billion initial investment (Feb 2025) to develop region's first net-zero AI data center, operational by 2026. Marks historic pivot from futuristic city concept (The Line) to AI infrastructure hub. Saudi Public Investment Fund strategy revamp focusing on renewable energy and AI data centers instead of tourism and urban design.",
    fullContent: `NEOM's transformation from futuristic urban development project to AI infrastructure hub represents a fundamental strategic pivot for Saudi Arabia's Public Investment Fund. The $5 billion DataVolt partnership signals a decisive shift toward computational infrastructure as the foundation for economic diversification.

Key Strategic Developments:

1. Infrastructure Transformation:
   - Net-zero AI data center operational by 2026
   - First facility in region with full renewable energy integration
   - Capacity to support large-scale AI model training and deployment
   - Integration with Saudi Arabia's abundant renewable energy resources

2. Strategic Pivot from The Line:
   - The Line's 170km scope being repurposed as AI data center hub
   - Shift from tourism and urban design to computational infrastructure
   - Leverages existing land, power, and connectivity investments
   - Positions NEOM as regional AI computing powerhouse

3. Saudi Arabia's Broader AI Infrastructure Strategy:
   - $40 billion AI fund with foreign partners announced
   - Complementary to existing sovereign AI infrastructure investments
   - Positions Saudi Arabia as alternative to Western cloud providers
   - Reduces dependency on US and Chinese computing infrastructure

4. Implementation Timeline:
   - Q1-Q2 2026: Initial data center operational
   - Q3-Q4 2026: Capacity expansion to 2+ gigawatts
   - 2027: Full integration with national AI infrastructure
   - 2028+: Regional expansion and partnerships

Competitive Advantages:

- Abundant renewable energy (solar, wind capacity)
- Strategic geographic position for Middle East, Europe, Asia connectivity
- Government backing and regulatory support
- Integration with Vision 2030 economic diversification goals
- Cost-effective compute compared to Western alternatives

Risk Factors:

- Execution timeline for net-zero certification
- Attracting global AI workloads to Saudi Arabia
- Geopolitical considerations for Western companies
- Competing with established US and European data centers
- Regulatory and compliance frameworks

Opportunities:

- Position Saudi Arabia as global AI infrastructure leader
- Create competitive advantage in AI model training costs
- Attract international AI companies and research institutions
- Build domestic AI talent and expertise
- Generate substantial foreign exchange through compute services
- Establish Saudi Arabia as bridge between East and West AI ecosystems`,
    country: "Saudi Arabia",
    sector: "Infrastructure",
    date: "2026-02-10",
    impact: 9.0,
    horizon: "1-2y",
    category: "infrastructure"
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
