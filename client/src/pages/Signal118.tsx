import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal118() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "118",
    title: "DCO Digital Cooperation - GCC Leadership in Global Digital Governance",
    description: "Digital Co-operation Organisation General Assembly in Kuwait with GCC states leading digital transformation agenda. Kuwait held presidency (2025), Saudi Arabia taking 2027 presidency. Focus on digital skills, misinformation combat, and responsible AI adoption across 16 member states.",
    fullContent: `The Digital Co-operation Organisation (DCO) represents a critical pivot point in global digital governance. The recent General Assembly in Kuwait showcased GCC states emerging as central actors in shaping international digital policy frameworks.

Key Developments:

1. GCC Leadership Position: Kuwait's presidency during 2025 and Saudi Arabia's confirmed 2027 presidency signal sustained regional influence in global digital governance structures. This represents a strategic shift from observer status to active leadership roles.

2. Policy Focus Areas:
   - Digital Skills Development: Comprehensive programs targeting workforce readiness for AI-driven economies
   - Misinformation & Content Moderation: Establishing regional standards for responsible digital information ecosystems
   - Responsible AI Adoption: Framework development for ethical AI deployment across member states
   - Cross-border Digital Cooperation: Harmonizing digital regulations across 16 member states

3. Strategic Implications:
   - Positions GCC as bridge between Western and Eastern digital governance approaches
   - Establishes precedent for regional coordination on AI policy
   - Creates institutional framework for long-term digital transformation initiatives
   - Strengthens GCC soft power in global technology governance

4. Implementation Timeline:
   - Q1-Q2 2026: Digital skills framework rollout
   - Q3 2026: Misinformation combat protocols finalized
   - Q4 2026: Responsible AI guidelines adoption
   - 2027: Saudi Arabia assumes presidency with expanded mandate

Risk Factors:
   - Coordination challenges across diverse regulatory environments
   - Resource allocation for implementation
   - Balancing innovation with governance requirements
   - International alignment on standards

Opportunities:
   - Position GCC as global leader in responsible AI governance
   - Create competitive advantage in digital talent attraction
   - Establish regional digital economy standards
   - Build institutional capacity for long-term digital leadership`,
    country: "Kuwait, Saudi Arabia, GCC",
    sector: "Digital Governance",
    date: "2026-02-10",
    impact: 8.0,
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
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
              >
                <Twitter size={18} className="mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
              >
                <Copy size={18} className="mr-2" />
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// Add proper TypeScript typing
declare global {
  interface Signal {
    id: string;
    title: string;
    description: string;
    fullContent: string;
    country: string;
    sector: string;
    date: string;
    impact: number;
    horizon: string;
    category: string;
  }
}
