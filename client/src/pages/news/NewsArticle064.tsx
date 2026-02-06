import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";
import { Streamdown } from "streamdown";

export default function NewsArticle064() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono bg-accent/20 text-accent px-2 py-1 rounded">
                  NEWS
                </span>
                <span className="text-xs text-muted-foreground">Feb 6, 2026</span>
              </div>
              <h1 className="text-4xl font-bold mb-3">
                GCC Secretary General Announces $150B AI Investment Commitment - $260B Annual Target by 2030
              </h1>
              <p className="text-lg text-muted-foreground">
                All six GCC member states aligned on unified AI strategy with unprecedented investment scale
              </p>
            </div>
            <ShareButton 
              title="GCC Secretary General Announces $150B AI Investment Commitment"
              url="https://agentdub.ai/news/064"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <div className="bg-card border border-border rounded-lg p-6 mb-8 flex items-center gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Reading Time</div>
              <div className="text-lg font-semibold">6 minutes</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Category</div>
              <div className="text-lg font-semibold">Strategic Policy</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Scope</div>
              <div className="text-lg font-semibold">GCC-wide</div>
            </div>
          </div>

          <Streamdown>
## Historic GCC Alignment on AI Strategy

His Excellency Jasem Mohamed Albudaiwi, Secretary General of the Gulf Cooperation Council, affirmed that all GCC member states have adopted ambitious national strategies in Artificial Intelligence and the digital economy. This represents a watershed moment for the region—unprecedented alignment across all six member states (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman) on AI as a strategic priority.

## Investment Commitment

**Immediate Investment:** $150 billion in AI-related investments and infrastructure development

**Long-term Target:** $260 billion annual contribution to GCC economy by 2030

These figures represent the largest coordinated AI investment commitment in the Middle East and position the GCC as a global hub for AI development and deployment.

## Unified National Strategies

Rather than competing, GCC member states have adopted a coordinated approach:

- All six nations have comprehensive national AI strategies
- Regulatory frameworks aligned across the region
- Shared infrastructure standards for interoperability
- Coordinated talent development initiatives
- Joint international partnerships

This coordination removes friction and accelerates standards adoption across the entire region, creating a unified market for AI solutions and services.

## Strategic Rationale

The GCC's AI investment is driven by several factors:

**Economic Diversification:** AI positioned as cornerstone of post-oil economic transformation

**Global Competitiveness:** Ensuring GCC remains globally competitive in AI development and deployment

**Talent Attraction:** $260B annual contribution will drive talent attraction and innovation ecosystem development

**Regulatory Clarity:** Coordinated national strategies create predictable environment for investment

**Geopolitical Positioning:** GCC asserting leadership in AI development alongside China and the United States

## GCC-DCO Collaboration

The GCC has strengthened strategic partnerships, particularly with the Digital Cooperation Organisation (DCO). Recent achievements include:

- Development of regulatory frameworks for the ICT sector
- Provision of technical consultations and studies
- Launch of Women's Empowerment Framework in ICT
- E-Waste Management Framework implementation
- Specialized publications highlighting evolving digital landscape

## What This Means

The GCC Secretary General's announcement represents a watershed moment for AI in the Gulf region. With all six member states aligned on ambitious AI strategies and $150 billion in committed investment, the GCC is positioning itself as a global AI hub.

**For Organizations:**
- Unprecedented opportunities to deploy AI solutions in unified market
- Predictable regulatory environment across six nations
- Access to sovereign cloud infrastructure and data governance frameworks
- Talent pool growing rapidly across the region
- Patient capital from sovereign wealth funds enabling long-term partnerships

**For Investors:**
- GCC positioned as alternative to Silicon Valley and China for AI infrastructure
- Sovereign wealth funds deploying patient capital for long-term returns
- Regulatory clarity enabling confident investment decisions
- Diversified opportunities across six member states

**For Policymakers:**
- Coordinated approach removes friction and accelerates standards
- Shared infrastructure reduces duplication and costs
- Unified talent development strategy strengthens regional competitiveness
- International partnerships amplified through regional coordination

## The Path Forward

The $260 billion annual contribution target by 2030 signals that AI is no longer a peripheral initiative but a central pillar of GCC economic strategy. Organizations, investors, and policymakers should prepare for rapid acceleration of AI adoption across the region.

The Gulf is not following the global AI trend—it's setting it.
          </Streamdown>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Source:</strong> GCC General Secretariat, February 5, 2026 | 5th General Assembly of the Digital Cooperation Organisation, Kuwait City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
