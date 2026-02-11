import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal112() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "112",
    title: "GCC States Adopt Unified AI Strategy - Regional Coordination Drives $260B Economic Impact",
    description: "GCC Secretary General announced all six member states adopted ambitious national AI strategies at Digital Cooperation Organisation 5th General Assembly in Kuwait (Feb 5, 2026). AI technologies projected to add $150 billion to GCC economy with annual contribution reaching $260 billion by 2030.",
    fullContent: `The GCC's unified adoption of AI strategies represents a historic alignment on digital transformation. The February 2026 Digital Cooperation Organisation General Assembly in Kuwait marked a turning point in regional coordination on artificial intelligence policy and implementation.

Strategic Developments:

1. Unified Regional Commitment:
   - All six GCC member states adopted national AI strategies
   - Coordinated approach to AI governance and ethics frameworks
   - Emerging as competitive advantage in global AI landscape
   - Demonstrates historic alignment on digital transformation

2. Economic Impact Projections:
   - $150 billion immediate addition to GCC economy
   - $260 billion annual contribution by 2030
   - AI-driven productivity gains across all sectors
   - New job creation and economic diversification

3. Individual Country Initiatives:

   Kuwait:
   - National AI Strategy 2025-2028 launched
   - $800 million digital transformation allocation
   - Focus on government services and public sector efficiency

   Bahrain:
   - Training 50,000 citizens in AI by 2030
   - Labor Fund Tamkeen partnership with Microsoft
   - Bahrain Polytechnic collaboration for workforce development

   Saudi Arabia:
   - Vision 2030 AI integration across all 96 goals
   - Mandatory AI education in all public schools
   - SDAIA leading national AI strategy implementation

   UAE:
   - 59.4% workforce AI adoption (global leader)
   - Digital Dubai AI skills program with Microsoft
   - 172+ open AI jobs in Dubai

   Qatar:
   - $20 billion Brookfield AI infrastructure partnership
   - Qatar Center for Artificial Intelligence (QCAI) research
   - Deep-tech innovation hub with Germany

   Oman:
   - Healthcare, justice, education AI pilot programs
   - Real-world deployment across priority sectors
   - Strong governance and ethical frameworks

4. Governance and Ethics Frameworks:
   - Regional coordination on AI governance
   - Ethical AI deployment standards
   - Responsible AI adoption guidelines
   - Cross-border digital cooperation mechanisms

Implementation Timeline:

- Q1-Q2 2026: Digital skills framework rollout
- Q3 2026: Misinformation combat protocols finalized
- Q4 2026: Responsible AI guidelines adoption
- 2027: Saudi Arabia assumes DCO presidency with expanded mandate
- 2028-2030: Full implementation and economic realization

Strategic Implications:

- Positions GCC as unified player in global AI governance
- Establishes precedent for regional coordination on technology policy
- Creates institutional framework for long-term digital transformation
- Strengthens GCC soft power in global technology governance
- Bridges Western and Eastern approaches to AI governance

Competitive Advantages:

- Regional coordination reduces fragmentation
- Shared standards and frameworks improve efficiency
- Unified approach attracts international investment
- Positions GCC as alternative to Western-centric AI ecosystem
- Demonstrates commitment to responsible AI development

Opportunities:

- Position GCC as global leader in responsible AI governance
- Create competitive advantage in AI talent attraction
- Establish regional digital economy standards
- Build institutional capacity for long-term digital leadership
- Generate substantial economic value from AI integration
- Attract international AI companies and research institutions

Challenges:

- Coordination across diverse regulatory environments
- Resource allocation for implementation
- Balancing innovation with governance requirements
- International alignment on standards
- Building sufficient AI talent and expertise
- Retaining trained talent in competitive market

Long-term Vision:

The GCC's unified AI strategy positions the region for sustained leadership in applied AI development. By 2030, the region could generate $260 billion in annual AI-driven economic value while establishing itself as a global center for responsible AI governance and innovation.`,
    country: "Kuwait, Saudi Arabia, GCC",
    sector: "Regional Strategy",
    date: "2026-02-10",
    impact: 8.9,
    horizon: "2-3y",
    category: "governance"
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
