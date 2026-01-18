import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle024() {
  const articleTitle = "Qatar and UAE Join US-Led Pax Silica: Historic Shift from Hydrocarbon to Silicon Statecraft";
  const articleUrl = `${window.location.origin}/news/024`;

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
              <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                Geopolitics
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 12, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Qatar & UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Qatar and UAE Join US-Led Pax Silica: Historic Shift from Hydrocarbon to Silicon Statecraft
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Qatar and UAE join US-led Pax Silica initiative to secure AI and semiconductor supply chains, marking strategic pivot from hydrocarbon-centric security to silicon statecraft. Positions Gulf states as critical nodes in global AI economic order.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                url={articleUrl}
                description="Qatar and UAE join US-led Pax Silica initiative, marking historic shift from hydrocarbon to silicon statecraft and securing AI supply chains."
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>From Energy Security to Technology Security</h2>
            <p>
              In a development with profound geopolitical implications, Qatar and the United Arab Emirates are joining Pax Silica, a US-led initiative aimed at securing artificial intelligence and semiconductor supply chains. Qatar signed the declaration on January 12, 2026, with the UAE following on January 15. This marks what Undersecretary of State for Economic Affairs Jacob Helberg describes as a historic shift "from hydrocarbon-centric security to silicon statecraft"—a recognition that control over silicon, data, and computing power is becoming as strategically important as control over oil once was.
            </p>

            <p>
              The inclusion of Qatar and UAE in Pax Silica reflects a deliberate US effort to bring Israel and Arab partners into a shared, technology-focused economic framework, despite the Middle East's long history of political divisions. For the two Gulf states, whose strategic importance has historically been tied to oil and gas production, this represents a fundamental repositioning in the global technology landscape.
            </p>

            <h2>What is Pax Silica?</h2>
            <p>
              Pax Silica is designed to safeguard the entire technology supply chain, spanning critical minerals (lithium, rare earth elements), advanced manufacturing, computing capacity, and data infrastructure. Unlike traditional military or political alliances, Pax Silica is structured around economic and industrial capacity rather than shared defense commitments. Membership is determined by what each country can contribute across the technology value chain.
            </p>

            <p>
              Helberg described the initiative as a "coalition of capabilities," signaling a more flexible approach to international cooperation that prioritizes resilience and interoperability over formal treaty structures. Qatar and UAE join an existing group that includes Israel, Japan, South Korea, Singapore, the United Kingdom, and Australia—all countries bringing distinct industrial and technological strengths to the table.
            </p>

            <h2>Strategic Implications for the Gulf</h2>
            <p>
              For Qatar and the UAE, Pax Silica membership provides several strategic benefits. First, it secures access to critical AI and semiconductor supply chains at a time when these technologies are increasingly subject to export controls and geopolitical competition. Second, it positions the Gulf states as trusted partners in the US technology ecosystem, potentially attracting investment and partnerships that might otherwise flow to other regions.
            </p>

            <p>
              Third, it accelerates the Gulf's transition from energy-dependent economies toward technology-driven growth models. Both Qatar and UAE have invested heavily in AI, data centers, and advanced manufacturing in recent years as part of broader economic diversification drives. Pax Silica membership validates these investments and provides access to expertise, technologies, and markets that can accelerate the transition.
            </p>

            <h2>Coalition of Capabilities</h2>
            <p>
              The "coalition of capabilities" model is particularly well-suited to the Gulf states' strengths. Qatar and UAE bring substantial financial resources, strategic geographic positioning, energy infrastructure that can power AI data centers, and growing technical capabilities. The UAE's investments in AI model development and Qatar's focus on AI adoption demonstrate that both countries are developing capabilities beyond simply hosting infrastructure.
            </p>

            <p>
              This model also allows for specialization rather than requiring each member to excel across all dimensions. Qatar might focus on AI adoption and applications while UAE emphasizes infrastructure and model development, with both contributing to the alliance's overall capability.
            </p>

            <h2>Critical Minerals and Supply Chain Security</h2>
            <p>
              The timing of Qatar and UAE's accession to Pax Silica coincides with the Future Minerals Forum in Riyadh (January 13-15, 2026), a Saudi government-led conference focused on minerals and supply chains. Critical minerals like lithium and rare earth elements are essential inputs for semiconductors, batteries, and other advanced technologies, making them a central concern for Pax Silica's agenda.
            </p>

            <p>
              The Gulf states' financial resources and investment vehicles (sovereign wealth funds, development funds) position them to play significant roles in securing critical mineral supply chains. This could include investments in mining operations, processing facilities, and recycling technologies across multiple continents.
            </p>

            <h2>India-Middle East-Europe Corridor</h2>
            <p>
              Among the projects under discussion within Pax Silica is the India-Middle East-Europe Corridor, which has been promoted by Washington as a way to boost regional integration and expand America's economic footprint. This corridor would use advanced US technology to modernize trade and logistics routes, linking manufacturing hubs, data infrastructure, and transportation networks across regions that have traditionally been weakly connected.
            </p>

            <p>
              For Qatar and UAE, participation in this corridor offers opportunities to position themselves as logistics and technology hubs connecting East and West. The corridor could channel data flows, technology transfers, and trade through Gulf infrastructure, generating economic activity and strategic influence.
            </p>

            <h2>Fort Foundry One and AI Cooperation</h2>
            <p>
              US and Israeli officials plan to launch a Pax Silica-linked Strategic Framework that includes "Fort Foundry One," an industrial park in Israel intended to accelerate technology and manufacturing projects aligned with the initiative's goals. Additionally, discussions are under way on closer AI cooperation, with a memorandum of understanding tentatively planned for January 16, 2026.
            </p>

            <p>
              These concrete projects demonstrate that Pax Silica is intended to be operational rather than merely symbolic. For Gulf participants, involvement in these projects provides opportunities to access cutting-edge technologies, build technical capabilities, and establish partnerships with leading technology companies and research institutions.
            </p>

            <h2>Geopolitical Context</h2>
            <p>
              The expansion of Pax Silica into the Gulf occurs against a backdrop of intensifying technology competition between the United States and China. By joining a US-led technology alliance, Qatar and UAE are making strategic choices about which technology ecosystem to align with—choices that will shape their AI capabilities, supply chain access, and geopolitical positioning for decades.
            </p>

            <p>
              However, both countries have maintained pragmatic relationships with multiple powers, including China. The challenge will be balancing Pax Silica commitments with other relationships, particularly as technology competition intensifies and choices become more binary.
            </p>

            <h2>Path Forward</h2>
            <p>
              Pax Silica is expected to focus in 2026 on expanding membership, developing strategic projects to secure supply chains, and coordinating policies to protect critical infrastructure and sensitive technologies. For Qatar and UAE, success will require translating membership into concrete benefits—technology access, investment flows, partnership opportunities—while contributing meaningfully to the alliance's collective capabilities.
            </p>

            <p>
              The shift from hydrocarbon statecraft to silicon statecraft represents a fundamental transformation in how the Gulf states project power and secure prosperity. Pax Silica membership is both a recognition of progress already made and a commitment to accelerate the transition toward technology-driven futures.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link href="/news">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to News
                </Button>
              </Link>
              <Link href="/premium">
                <Button>View Premium Plans</Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
