import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle029() {
  const articleTitle = "G42 to Receive Advanced AI Chips Within Months, Expands to 5GW Data Center";
  const articleUrl = `${window.location.origin}/news/029`;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/news">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to News
          </Button>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Infrastructure
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 20, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              G42 to Receive Advanced AI Chips Within Months, Expands to 5GW Data Center
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              UAE's G42 expects first shipments of Nvidia, AMD, and Cerebras chips within months. Abu Dhabi data center expansion from 200MW to 5GW signals massive AI infrastructure build-out as part of OpenAI Stargate initiative.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="G42 to receive advanced AI chips from Nvidia, AMD, and Cerebras within months, expanding Abu Dhabi data center to 5GW"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Advanced Chip Shipments Arriving Within Months</h2>
            <p>
              G42, the United Arab Emirates' leading artificial intelligence company, expects the first shipments of some of the world's most advanced chips to arrive in the country within months, Chief Executive Officer Peng Xiao announced in an interview with Bloomberg TV in Davos on January 20, 2026.
            </p>
            <p>
              The deliveries will include chips from Nvidia Corp., Advanced Micro Devices Inc., and US startup Cerebras Systems Inc., bolstering G42's efforts to become a major player in global AI technology. This follows the November 2025 US approval of the sale of tens of thousands of advanced AI chips to G42 and Saudi Arabia's Humain, despite political concerns about technology transfer.
            </p>

            <h2>Massive Data Center Expansion: 200MW to 5GW</h2>
            <p>
              The first 200 megawatts of capacity from a major data center build-out in Abu Dhabi is set to come online "in the next couple of months," Xiao said. G42 plans to add between 200MW and 500MW of capacity each quarter, eventually expanding the site to as much as 5 gigawatts over the coming years.
            </p>
            <p>
              This unprecedented scale of expansion positions Abu Dhabi as a global AI infrastructure hub. The project is part of an overseas expansion of OpenAI's Stargate initiative, aimed at developing large-scale AI infrastructure outside the United States.
            </p>

            <h2>Supply Struggling to Meet Demand</h2>
            <p>
              Addressing concerns about potential overcapacity in the global rush to build data centers, Xiao dismissed such worries, particularly when it comes to the computing required to run AI models for users. "The supply will struggle to keep up with the demand," he stated, signaling confidence in the long-term viability of massive infrastructure investments.
            </p>
            <p>
              The Middle East has become a magnet for tech groups such as ChatGPT-maker OpenAI and Microsoft Corp., drawn by deep pools of capital and relatively cheap energy for computing. G42's expansion reflects this broader trend of AI infrastructure moving to regions with favorable energy economics.
            </p>

            <h2>Pax Silica and US-UAE Technology Partnership</h2>
            <p>
              Weeks after the US chip approval, the UAE signed the Pax Silica pact with the United States, committing to closer cooperation on technology supply chains. This agreement reduces geopolitical risk for investors and signals a strategic alignment between the UAE and US on AI infrastructure development.
            </p>
            <p>
              The Pax Silica framework positions the UAE as a trusted partner in the global AI supply chain, potentially opening doors for additional technology transfers and partnerships that were previously constrained by security concerns.
            </p>

            <h2>G42's Central Role in UAE AI Strategy</h2>
            <p>
              G42, chaired by the UAE's national security adviser Sheikh Tahnoon bin Zayed Al Nahyan, plays a central role in the country's push to become a global AI player. The company struck a $1.5 billion partnership with Microsoft and, alongside sovereign wealth fund Mubadala Investment Co., is a founding partner of MGX, an AI-focused investment vehicle.
            </p>
            <p>
              MGX has already made headlines by helping bankroll Trump's $100 billion AI plan, demonstrating the UAE's willingness to deploy capital at scale to secure a position in the global AI ecosystem.
            </p>

            <h2>Regional Competition and Cooperation</h2>
            <p>
              The UAE's AI ambitions come as regional peers like Saudi Arabia and Qatar also ramp up investments. Xiao downplayed talk of rivalry, calling the broader regional push a reflection of global demand rather than zero-sum competition.
            </p>
            <p>
              However, nuances are emerging. Speaking at Davos, the Qatar Investment Authority's CEO signaled a more selective approach to AI investments this year, while Mubadala's chief expressed "a lot of conviction" in the sector. These differing strategies suggest that while all GCC states are investing in AI, their approaches and risk appetites vary significantly.
            </p>

            <h2>Investment Angle</h2>
            <p>
              G42's massive infrastructure build-out from 200MW to 5GW represents one of the largest AI data center expansions globally, signaling the UAE's serious commitment to AI leadership. The quarterly addition of 200-500MW capacity creates a predictable growth trajectory for investors and partners.
            </p>
            <p>
              The US chip approval and Pax Silica pact significantly reduce geopolitical risk, addressing one of the primary concerns for investors in UAE AI infrastructure. The partnership with Microsoft ($1.5B), Mubadala, and MGX creates a strong ecosystem with deep capital reserves and strategic alignment.
            </p>
            <p>
              For technology companies, G42's expansion creates opportunities in data center infrastructure, cooling systems, power management, and AI software platforms. The company's role as a founding partner of MGX also positions it as a potential investor and strategic partner for AI startups and scale-ups looking to enter the Middle East market.
            </p>
            <p>
              The CEO's confidence that "supply will struggle to keep up with demand" suggests that concerns about AI infrastructure overcapacity may be overblown, at least in the near to medium term. This creates a favorable environment for infrastructure investors willing to deploy capital at scale.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
