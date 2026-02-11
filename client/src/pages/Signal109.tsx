import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal109() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "109",
    title: "UAE AI Talent Crisis - 90% of Roles Unfilled Despite 59.4% Global Adoption Leadership",
    description: "United Arab Emirates leads global AI adoption with 59.4% of workforce using AI tools, yet faces critical talent shortage with 90% of digital and AI roles hardest to fill across GCC. Digital Dubai launching comprehensive AI skills program with Microsoft to upskill government workforce.",
    fullContent: `The UAE presents a paradoxical challenge: global leadership in AI adoption coupled with severe talent scarcity. This mismatch between ambition and execution capacity defines the region's AI transformation challenge in 2026.

Current Talent Landscape:

1. Adoption Leadership:
   - 59.4% of UAE workforce using AI tools (highest globally)
   - 87% of UAE employers prioritizing tech literacy and AI skills in hiring
   - 13% of UAE workforce actively using Coursera for training (highest in region)
   - Widespread GenAI integration across government and private sectors

2. Critical Talent Shortage:
   - 90% of digital and AI roles hardest to fill across GCC
   - 172+ open AI jobs in Dubai alone
   - Competitive salaries attracting regional talent
   - Insufficient local talent pipeline to meet demand

3. Government Response:
   - Digital Dubai launching comprehensive AI skills program with Microsoft
   - Microsoft Elevate UAE initiative building future-ready workforce
   - AI literacy and readiness programs across government
   - Integration of AI training into education system

4. Skills Gap Analysis:
   - Gap between adoption ambition and execution capability
   - Limited domestic AI expertise and research capacity
   - Dependency on international talent and expertise
   - Need for rapid workforce transformation

Implementation Initiatives:

- Microsoft Partnership: Government-wide AI skills training
- Coursera Integration: Online learning platform for AI certifications
- University Programs: AI curriculum development and implementation
- Corporate Training: Private sector AI upskilling initiatives
- Talent Attraction: Competitive compensation for international AI professionals

Opportunities:

- Position UAE as regional AI talent hub
- Create competitive advantage through rapid workforce development
- Attract international AI talent with attractive packages
- Build long-term AI expertise and research capacity
- Establish UAE as bridge between global AI talent markets
- Develop AI-native workforce for future innovation

Challenges:

- Rapid training and capability building timeline
- Retaining trained talent in competitive market
- Balancing international talent with local workforce development
- Building advanced AI research and development capacity
- Competing with developed nations for top talent

Strategic Implications:

The UAE's ability to resolve this talent crisis will determine its success in AI-driven economic transformation. Current initiatives suggest recognition of urgency, but execution speed will be critical for maintaining adoption leadership while building sustainable local expertise.`,
    country: "United Arab Emirates",
    sector: "Talent & Workforce",
    date: "2026-02-10",
    impact: 8.0,
    horizon: "2-3y",
    category: "adoption"
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
