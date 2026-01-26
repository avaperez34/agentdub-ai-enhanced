import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";

export default function Signal039() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Intelligence
          </Button>
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-accent">SIGNAL #039</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Jan 23, 2026</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-accent">GCC-Wide</span>
          </div>
          <ShareButton
            title="Signal #039: GCC Maintains Investment Momentum Despite Geopolitical Headwinds"
            description="93% of GCC CEOs expect economic growth to strengthen despite geopolitical tensions being #1 concern. Saudi Arabia and UAE rank among top 10 global investment destinations."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          GCC Maintains Investment Momentum Despite Geopolitical Headwinds — 'Investing Through Uncertainty'
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          93% of GCC CEOs expect economic growth to strengthen (vs. 55% globally) despite geopolitical tensions being #1 concern. Saudi Arabia and UAE rank among top 10 global investment destinations for CEOs over next 12 months. 88% of Middle East CEOs planning to invest outside domestic territories (highest globally), with 75% staying within Middle East—signaling deeper regional integration.
        </p>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Impact Score</div>
            <div className="text-2xl font-bold text-accent">8.5/10</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Category</div>
            <div className="font-medium">Strategy</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Horizon</div>
            <div className="font-medium">1–2y</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Sector</div>
            <div className="font-medium">Investment</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>The Confidence Paradox</h2>
          <p>
            PwC's 29th Global CEO Survey reveals a striking paradox: Middle East CEOs remain among the most confident globally, with 88% expecting economic growth to strengthen in their own territories, and an even higher 93% across the GCC. This compares to just 55% of CEOs globally who share similar optimism.
          </p>
          <p>
            Yet geopolitical conflict remains the region's most significant concern, directly shaping boardroom decision-making. The key insight: CEOs are not waiting for stability—they are "investing through uncertainty rather than wait for stability."
          </p>

          <h2>Investment Resilience</h2>
          <p>
            The data reveals unprecedented investment momentum:
          </p>
          <ul>
            <li><strong>88% of Middle East CEOs</strong> planning to invest outside domestic territories (highest globally)</li>
            <li><strong>75% of outbound investment</strong> stays within Middle East—signaling deeper regional integration</li>
            <li><strong>Saudi Arabia and UAE</strong> rank among top 10 global investment destinations for CEOs over next 12 months</li>
            <li><strong>60% of CEOs</strong> say they can lead effectively through disruption</li>
            <li><strong>42% indicate</strong> they can create new business opportunities from disruptions</li>
          </ul>

          <h2>Disciplined Confidence</h2>
          <p>
            Hani Ashkar, Territory Senior Partner at PwC Middle East, explains: "These findings reflect the strong underlying confidence we are seeing across the Middle East. CEOs in the region are resilient and are ready to deploy capital for long-term growth."
          </p>
          <p>
            Mona Abou Hana, Chief Corporate and Network Officer at PwC Middle East, adds: "Middle East CEOs are not deterred by global risk, they are planning through it. What stands out is the discipline behind their confidence. Leaders across the region are investing with intention in AI, cybersecurity and new capabilities because they understand that resilience today is built through action."
          </p>

          <h2>Geopolitical Context</h2>
          <p>
            The survey was conducted against a backdrop of heightened geopolitical tensions:
          </p>
          <ul>
            <li>US-Iran tensions and potential for prolonged conflict</li>
            <li>Saudi-UAE rivalry intensifying (recent "mudslinging" campaign)</li>
            <li>Global trade fragmentation and supply chain disruptions</li>
            <li>Regional security concerns (Gulf Shield 2026 exercises)</li>
          </ul>
          <p>
            Despite these headwinds, GCC CEOs are demonstrating "strategic patience" and viewing tensions as "risk-management challenges" rather than reasons to halt investment.
          </p>

          <h2>Investment Angle</h2>
          <p>
            <strong>Contrarian Capital Deployment Opportunity:</strong> GCC is consolidating as an "investment through uncertainty" hub. While global investors retreat during geopolitical volatility, GCC CEOs are deploying capital with discipline—creating valuation gaps between perceived risk and fundamental strength.
          </p>
          <p>
            <strong>Regional Integration Deepening:</strong> 75% of outbound investment staying within Middle East signals a structural shift toward intra-regional capital flows, reducing dependence on Western capital markets and creating self-sustaining growth momentum.
          </p>
          <p>
            <strong>Geopolitical Risk Premium:</strong> Assets trading at discount due to geopolitical concerns may offer asymmetric upside as CEOs demonstrate ability to "lead through disruption" and "create opportunities from disruptions."
          </p>

          <h2>Premium Intelligence</h2>
          <p className="p-6 rounded-lg bg-accent/10 border border-accent/20">
            <strong>Unlock Full Analysis:</strong> Detailed breakdown of CEO investment priorities by sector, M&A targets, AI deployment strategies, and sector expansion patterns. Access premium Sentinel briefs covering geopolitical risk scenarios, capital allocation frameworks, and regional integration trends.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/premium">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Premium Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
