import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Signal013() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Signal #013 - Saudi Arabia Launches World's Largest Government Data Center",
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
              <Badge variant="default">Infrastructure</Badge>
              <Badge variant="secondary">Saudi Arabia</Badge>
              <Badge variant="secondary">Data Centers</Badge>
              <Badge variant="secondary">Vision 2030</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Saudi Arabia Launches 480-MW Hexagon Data Center — World's Largest Government-Owned Facility Positions Kingdom in Global Compute Race
            </h1>
            <div className="flex items-center justify-between text-muted-foreground mb-4">
              <div className="flex items-center gap-4">
                <span>January 16, 2026</span>
                <span>•</span>
                <span className="font-semibold text-accent">Impact: 9.0/10</span>
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
              On January 2, 2026, Saudi Arabia's Data and AI Authority (SDAIA) unveiled the Hexagon Data Center in Riyadh—a 480-megawatt, 30+ million square foot facility certified at Tier IV reliability. Billed as the world's largest government-owned data center, Hexagon anchors the Kingdom's Vision 2030 digital strategy, delivering sovereign compute infrastructure for AI model training, cloud services, and national digital platforms. The facility employs direct liquid cooling, hybrid thermal management, and renewable energy to achieve LEED Gold sustainability standards while targeting 99.995% uptime.
            </p>
            <p className="text-foreground leading-relaxed">
              SDAIA projects the center will generate SAR 10 billion ($2.7 billion) in cumulative economic impact and SAR 1.8 billion ($480 million) in annual operational savings. Beyond raw capacity, Hexagon signals Saudi Arabia's intent to compete with hyperscalers by owning the full stack—from power generation to AI inference—eliminating reliance on foreign cloud providers and positioning Riyadh as a regional compute hub for government, enterprise, and research workloads.
            </p>
          </div>

          {/* What Happened */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What Happened</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Hexagon Data Center opened on January 2, 2026, following years of planning under SDAIA's mandate to build technical sovereignty. The facility spans more than 30 million square feet in Riyadh and draws 480 megawatts of power—comparable to the energy consumption of a mid-sized city. It holds Tier IV certification from the Uptime Institute, the highest standard for fault tolerance, guaranteeing 99.995% availability through fully redundant power, cooling, and network systems.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The center also earned TIA-942 and ISO/IEC 22237 accreditations, as well as LEED Gold recognition from the U.S. Green Building Council. SDAIA emphasized that Hexagon employs direct liquid cooling and hybrid thermal systems to minimize power usage effectiveness (PUE), a critical metric for AI workloads that generate intense heat. Renewable energy sources—likely solar, given Saudi Arabia's grid mix—supplement grid power to reduce carbon intensity.
            </p>
            <p className="text-foreground leading-relaxed">
              Officials described Hexagon as the cornerstone of a planned domestic network of data centers designed to meet surging national demand for compute. The facility will support data-intensive applications across government ministries, strategic sectors (healthcare, education, public services), and commercial cloud tenants. SDAIA framed the launch as a milestone in Prince Mohammed bin Salman's goal to position Saudi Arabia as a global hub for advanced technologies.
            </p>
          </section>

          {/* Technical Architecture */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hexagon's 480-megawatt capacity places it among the world's largest single-site data centers, rivaling facilities operated by hyperscalers like AWS, Microsoft, and Google. The Tier IV certification requires 2N+1 redundancy—meaning every critical component (power feeds, cooling loops, network links) has at least two independent backups. This architecture delivers 99.995% uptime, translating to less than 26 minutes of unplanned downtime per year.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The facility's cooling strategy combines direct liquid cooling (DLC) for high-density AI racks and hybrid air/liquid systems for general-purpose servers. DLC circulates coolant directly to server components, removing heat at the source and enabling rack densities above 50 kilowatts—essential for GPU clusters used in large language model training. Hybrid systems handle lower-density workloads, optimizing energy efficiency across mixed compute profiles.
            </p>
            <p className="text-foreground leading-relaxed">
              Renewable energy integration reduces reliance on fossil fuels, aligning with Saudi Arabia's broader decarbonization commitments. While SDAIA did not disclose the renewable share, the Kingdom's solar capacity expansions suggest photovoltaic arrays likely contribute a meaningful portion of daytime power. The LEED Gold certification requires energy-efficient building materials, water conservation, and waste reduction—standards that extend beyond the IT equipment to the facility's physical envelope.
            </p>
          </section>

          {/* Strategic Implications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Strategic Implications</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hexagon represents a strategic bet on technical sovereignty. By owning and operating the infrastructure, Saudi Arabia avoids dependence on foreign cloud providers whose terms of service, data residency policies, and geopolitical alignments may conflict with national interests. Sovereign compute is particularly critical for AI model training, where proprietary datasets and algorithmic weights constitute strategic assets. Hexagon enables SDAIA to train large language models, computer vision systems, and specialized AI for Arabic language processing without exporting data or compute workloads abroad.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The facility also positions Saudi Arabia to compete in the regional cloud market. Neighboring countries—UAE, Qatar, Oman—are building their own data center capacity, but Hexagon's scale and government backing give Riyadh a first-mover advantage in offering low-latency, high-capacity compute to GCC enterprises. This is especially relevant for AI inference workloads, where milliseconds matter and proximity to end-users drives performance.
            </p>
            <p className="text-foreground leading-relaxed">
              Economically, SDAIA's projections of SAR 10 billion in cumulative impact and SAR 1.8 billion in annual savings hinge on displacing foreign cloud spend and attracting commercial tenants. If Hexagon captures even a fraction of Saudi Arabia's estimated $5 billion annual cloud services market, it will justify the capital expenditure while creating high-skill jobs in data center operations, network engineering, and AI infrastructure management.
            </p>
          </section>

          {/* Investment Angle */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Investment Angle</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For infrastructure investors, Hexagon signals Saudi Arabia's commitment to building the physical layer of the AI economy. The facility's 480-megawatt power draw creates demand for energy generation, transmission, and cooling equipment—opportunities for companies specializing in power distribution, renewable energy integration, and thermal management systems. The direct liquid cooling deployment, in particular, opens a market for specialized coolant suppliers, pump manufacturers, and heat exchanger vendors.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              AI-focused investors should note that Hexagon's capacity enables Saudi Arabia to train large-scale models domestically. This reduces reliance on foreign AI platforms (OpenAI, Anthropic, Google) and creates demand for local AI talent, model optimization services, and Arabic-language datasets. Companies that can provide AI infrastructure software—model serving platforms, distributed training frameworks, inference accelerators—will find a receptive market as SDAIA scales its AI ambitions.
            </p>
            <p className="text-foreground leading-relaxed">
              The broader GCC context matters too. Saudi Arabia's move pressures neighboring countries to accelerate their own data center investments or risk falling behind in the compute race. This dynamic benefits regional data center developers, fiber optic network providers, and submarine cable operators connecting the Gulf to global internet exchanges. Hexagon is not an isolated project—it's the opening move in a multi-year, multi-billion-dollar infrastructure buildout across the region.
            </p>
          </section>

          {/* GCC Ripple Effects */}
          <section>
            <h2 className="text-2xl font-bold mb-4">GCC Ripple Effects</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hexagon sets a new baseline for data center ambition in the Gulf. The UAE, which has positioned itself as a regional tech hub through Dubai Internet City and Abu Dhabi's AI investments, now faces direct competition from Riyadh. Qatar, fresh off UN recognition for its Digital Agenda 2030, will need to demonstrate comparable infrastructure to maintain its claim as a digital transformation leader. Smaller GCC states—Kuwait, Bahrain, Oman—may opt for partnerships or co-location agreements rather than building competing facilities, given the capital intensity and technical complexity.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The facility also has implications for regional AI model development. If Saudi Arabia succeeds in training competitive Arabic-language models on Hexagon's infrastructure, it could displace reliance on Western models that perform poorly on Gulf dialects, cultural context, and regulatory requirements. This would create a market for locally trained models, benefiting Saudi AI startups and research institutions while reducing the region's dependence on Silicon Valley.
            </p>
            <p className="text-foreground leading-relaxed">
              Energy dynamics are equally important. Hexagon's 480-megawatt draw is manageable for Saudi Arabia, which has abundant energy resources, but it underscores the tight coupling between AI ambitions and power availability. Countries without Saudi Arabia's energy surplus—such as Jordan or Lebanon—will struggle to compete in the AI infrastructure race unless they secure dedicated power sources or partner with energy-rich neighbors.
            </p>
          </section>

          {/* Key Metrics */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Infrastructure Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Power Capacity</span>
                    <span className="font-semibold">480 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Facility Size</span>
                    <span className="font-semibold">30M+ sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Uptime Guarantee</span>
                    <span className="font-semibold">99.995%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tier Certification</span>
                    <span className="font-semibold">Tier IV</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Economic Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumulative Impact</span>
                    <span className="font-semibold">SAR 10B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Savings</span>
                    <span className="font-semibold">SAR 1.8B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Launch Date</span>
                    <span className="font-semibold">Jan 2, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sustainability</span>
                    <span className="font-semibold">LEED Gold</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Bottom Line */}
          <div className="bg-secondary/50 border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hexagon is not just a data center—it's a declaration of intent. Saudi Arabia is signaling that it will own the infrastructure layer of the AI economy, from power generation to model training, rather than rent capacity from foreign hyperscalers. The facility's 480-megawatt capacity, Tier IV reliability, and renewable energy integration set a new standard for government-owned compute infrastructure, positioning Riyadh as a credible competitor to established cloud regions.
            </p>
            <p className="text-foreground leading-relaxed">
              The success of Hexagon depends on three factors: operational excellence (maintaining 99.995% uptime at scale), commercial traction (attracting enterprise and research tenants), and AI model development (demonstrating that sovereign infrastructure can produce competitive models). If SDAIA executes on all three, Hexagon becomes the blueprint for other nations seeking technical sovereignty. If it falters, the facility risks becoming an expensive monument to ambition—a cautionary tale of infrastructure built ahead of demand. The next 24 months will reveal which outcome prevails.
            </p>
          </div>

          {/* Sources */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Sources</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-muted-foreground">1.</span>
                <a
                  href="https://babl.ai/saudi-arabia-launches-480-mw-hexagon-data-center-positioning-kingdom-in-global-compute-race/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  BABL AI - "Saudi Arabia Launches 480-MW Hexagon Data Center, Positioning Kingdom in Global Compute Race" (January 16, 2026)
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
