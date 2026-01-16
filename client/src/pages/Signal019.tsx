import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Signal019() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Signal #019 - Oman AI Investment Surge",
          url: window.location.href,
        })
        .catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Intelligence
          </Button>
        </Link>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default">Capital & Announcements</Badge>
              <Badge variant="secondary">Oman</Badge>
              <Badge variant="secondary">AI</Badge>
              <Badge variant="secondary">Investment</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Oman's AI Ecosystem Reaches $169M Investment Across 46 Companies — Sultanate Pursues Niche AI Strategy
            </h1>
            <div className="flex items-center justify-between text-muted-foreground mb-4">
              <div className="flex items-center gap-4">
                <span>January 16, 2026</span>
                <span>•</span>
                <span className="font-semibold text-accent">Impact: 7.8/10</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">Executive Summary</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Oman's artificial intelligence sector has attracted $169 million in investment across 46 companies, according to January 2026 data from the Sultanate's Ministry of Transport, Communications and Information Technology. The investment surge reflects Oman's strategy to position itself as a niche AI player, focusing on sector-specific applications (logistics, energy, tourism) rather than competing directly with Saudi Arabia's infrastructure scale or the UAE's hyperscaler partnerships. The 46-company ecosystem includes startups, research labs, and enterprise AI divisions, concentrated in Muscat and the Duqm Special Economic Zone.
            </p>
            <p className="text-foreground leading-relaxed">
              Oman's approach differs from its larger Gulf neighbors. While Saudi Arabia builds 480-megawatt data centers and the UAE joins Pax Silica, Oman is cultivating a lean AI ecosystem tailored to national priorities: port automation (Duqm, Salalah), oil and gas optimization (Petroleum Development Oman), and tourism personalization (Oman Tourism Development Company). This niche strategy acknowledges Oman's smaller economy and energy constraints while leveraging its geographic position on key shipping lanes and its reputation for political stability.
            </p>
          </div>

          {/* What Happened */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What Happened</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Ministry of Transport, Communications and Information Technology reported that Oman's AI sector has attracted $169 million in cumulative investment, distributed across 46 companies operating in the Sultanate. The figure includes venture capital, government grants, corporate R&D budgets, and international partnerships. While modest compared to Saudi Arabia's multi-billion-dollar AI investments or the UAE's $100 billion annual AI spending, the $169 million represents significant progress for a country with a GDP of approximately $115 billion.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The 46 companies span multiple sectors, with concentrations in logistics AI (port automation, supply chain optimization), energy AI (predictive maintenance for oil and gas infrastructure), and tourism AI (personalized travel recommendations, heritage site management). Many companies operate in the Duqm Special Economic Zone, which offers tax incentives, streamlined regulations, and proximity to Oman's deep-water port—a strategic asset for logistics AI applications.
            </p>
            <p className="text-foreground leading-relaxed">
              Oman's AI strategy emphasizes practical applications over research moonshots. The government has prioritized AI projects that deliver measurable economic impact: reducing port turnaround times, minimizing oil field downtime, increasing tourism revenue. This pragmatic approach reflects Oman's fiscal constraints (budget deficits, debt servicing) and the need to demonstrate ROI on technology investments to secure continued funding.
            </p>
          </section>

          {/* Strategic Context */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Strategic Context</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Oman's niche AI strategy is a response to competitive realities. The Sultanate cannot match Saudi Arabia's infrastructure spending (Hexagon Data Center: 480 MW, $10 billion economic impact) or the UAE's hyperscaler partnerships (G42, Pax Silica membership). Instead, Oman is focusing on sector-specific AI where its geographic and economic advantages create defensible positions. Port automation at Duqm and Salalah leverages Oman's location on the Indian Ocean shipping lanes. Energy AI builds on Petroleum Development Oman's decades of operational data. Tourism AI capitalizes on Oman's cultural heritage and natural landscapes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The $169 million investment figure, while modest, suggests that Oman is attracting capital despite regional competition. This indicates that investors see value in Oman's niche positioning—either as a lower-cost alternative to Saudi Arabia and the UAE or as a specialist in specific AI applications. The 46-company ecosystem is also significant: it suggests a critical mass of AI talent, infrastructure, and institutional knowledge that can sustain long-term growth.
            </p>
            <p className="text-foreground leading-relaxed">
              Oman's political stability is an underappreciated asset. While the Sultanate lacks the energy abundance of Saudi Arabia or the financial firepower of the UAE, it offers predictable governance, low geopolitical risk, and a reputation for neutrality. These factors matter for long-term AI investments, where regulatory uncertainty and political volatility can derail projects. Oman's stability may attract AI companies seeking a low-risk base for regional operations.
            </p>
          </section>

          {/* Investment Angle */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Investment Angle</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For logistics AI investors, Oman's port infrastructure presents opportunities. Duqm and Salalah are deep-water ports with capacity for expansion, and the government is investing in automation to reduce turnaround times and increase throughput. AI applications—predictive maintenance, container routing optimization, demand forecasting—can deliver measurable ROI in this context. Companies offering port automation software, sensor networks, and data analytics platforms will find receptive customers in Oman.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Energy AI investors should note Petroleum Development Oman's (PDO) focus on operational efficiency. PDO operates mature oil fields where production costs are rising and output is declining. AI-driven predictive maintenance, reservoir modeling, and drilling optimization can extend field lifespans and reduce costs. This creates demand for specialized AI tools tailored to oil and gas operations, a niche market where Oman's decades of operational data provide a competitive advantage.
            </p>
            <p className="text-foreground leading-relaxed">
              Tourism AI investors may find opportunities in Oman's push to diversify its economy. The Oman Tourism Development Company is investing in digital platforms to attract visitors and personalize travel experiences. AI applications—recommendation engines, chatbots, heritage site management—can enhance visitor satisfaction and increase revenue. While the tourism market is smaller than logistics or energy, it offers higher margins and aligns with Oman's long-term economic diversification goals.
            </p>
          </section>

          {/* Key Metrics */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Investment Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Investment</span>
                    <span className="font-semibold">$169M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Companies</span>
                    <span className="font-semibold">46</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Source</span>
                    <span className="font-semibold text-right">Ministry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-semibold">2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Focus Areas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Logistics AI</span>
                    <span className="font-semibold text-right">Ports</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Energy AI</span>
                    <span className="font-semibold text-right">Oil & Gas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tourism AI</span>
                    <span className="font-semibold text-right">Personalization</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Strategy</span>
                    <span className="font-semibold text-right">Niche</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Bottom Line */}
          <div className="bg-secondary/50 border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Oman's $169 million AI investment across 46 companies reflects a pragmatic, niche-focused strategy that acknowledges the Sultanate's smaller economy and energy constraints. Rather than competing with Saudi Arabia's infrastructure scale or the UAE's hyperscaler partnerships, Oman is cultivating sector-specific AI applications in logistics, energy, and tourism—areas where its geographic position, operational data, and political stability create defensible advantages. This approach is realistic and potentially sustainable, but it requires execution discipline and continued investment to deliver measurable economic impact.
            </p>
            <p className="text-foreground leading-relaxed">
              The success of Oman's AI strategy depends on three factors: demonstrating ROI in priority sectors (port automation, oil field optimization, tourism personalization), attracting follow-on investment to scale successful pilots, and building institutional capacity (AI talent, research infrastructure, regulatory frameworks). If Oman executes on all three, it becomes a model for smaller economies seeking to participate in the AI economy without matching the capital intensity of larger neighbors. If it falters, the $169 million becomes a sunk cost and the 46-company ecosystem fragments. The next 24 months will reveal which outcome prevails.
            </p>
          </div>

          {/* Sources */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Sources</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-muted-foreground">1.</span>
                <a
                  href="https://www.zawya.com/en/economy/gcc/ai-emerges-as-key-growth-segment-in-oman-mhnz7s5b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Zawya - "AI emerges as key growth segment in Oman" (January 2026)
                </a>
              </div>
            </div>
          </section>

          {/* Premium CTA */}
          <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Want Deeper Analysis?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get access to our full intelligence reports, proprietary GCC AI readiness scoring, and weekly Sentinel briefs delivered to your inbox.
            </p>
            <a
              href="https://agentdubai.gumroad.com/l/gcc-ai-directory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Premium Plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
