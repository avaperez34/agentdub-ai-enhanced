/**
 * Signal #010: GCC Commits $100B Annually to AI Infrastructure
 * Design Philosophy: Execution & Sovereign Grade - Infrastructure Era
 */

import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Signal010() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/intelligence">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Intelligence
          </button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-blue-600 text-white">Execution & Sovereign Grade</Badge>
            <Badge variant="outline">GCC-Wide</Badge>
            <Badge variant="outline">Infrastructure</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #010: GCC Commits $100B Annually to AI Infrastructure - Sovereign Compute Era Begins
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 12, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>GCC Region</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Impact Score: 24/25</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Middle East commits to invest $100 billion annually by 2026 in AI infrastructure. Qatar and UAE join US-led Pax Silica initiative. Stargate's $500B data center signals GCC's transformation into a global AI inference hub powered by sovereign compute capacity.
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The GCC is executing a coordinated strategy to become the world's AI infrastructure backbone. With $100 billion in annual investment commitments, participation in the US-led Pax Silica technology supply chain initiative, and projects like Stargate's $500B data center, the region is positioning itself as a global supplier of AI inference capacity. This represents a fundamental shift from energy exports to compute exports.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <div className="text-3xl font-bold text-blue-600">$100B</div>
              <div className="text-sm text-muted-foreground">Annual Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$500B</div>
              <div className="text-sm text-muted-foreground">Stargate Project</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">3-7y</div>
              <div className="text-sm text-muted-foreground">Timeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">9.5/10</div>
              <div className="text-sm text-muted-foreground">Impact Score</div>
            </div>
          </div>
        </section>

        {/* The Infrastructure Play */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">From Petro-States to Compute States</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Middle East is leveraging its energy abundance to build gigawatt-scale AI computing infrastructure. This strategic pivot transforms the GCC from energy exporters to compute capacity providers, positioning the region as a critical node in the global AI supply chain. The convergence of cheap energy, sovereign capital, and strategic location creates a unique competitive advantage.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">The Sovereign Compute Thesis</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <div>
                  <p className="font-medium mb-1">Energy Advantage</p>
                  <p className="text-muted-foreground">GCC states produce electricity at $0.02-0.04/kWh, compared to $0.10-0.15/kWh in Western markets. AI inference workloads are energy-intensive, making the GCC cost-competitive for large-scale deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <div>
                  <p className="font-medium mb-1">Capital Availability</p>
                  <p className="text-muted-foreground">Sovereign wealth funds (PIF, Mubadala, QIA) can deploy patient capital at scale without quarterly earnings pressure. This enables infrastructure investments with 10-15 year payback periods.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <div>
                  <p className="font-medium mb-1">Strategic Location</p>
                  <p className="text-muted-foreground">Geographic position between Europe, Asia, and Africa provides low-latency access to 3+ billion people. Submarine cable infrastructure connects GCC to global internet backbone.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <div>
                  <p className="font-medium mb-1">Regulatory Alignment</p>
                  <p className="text-muted-foreground">Governments actively supporting AI infrastructure through streamlined permitting, tax incentives, and data sovereignty frameworks aligned with international standards.</p>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-muted-foreground my-8">
            "The GCC is becoming a major supplier of AI inference through gigawatt-scale computing infrastructure. This is petro-compute: converting energy abundance into computational capacity."
            <footer className="text-sm mt-2 not-italic">— Silicon, Not Oil: Why the U.S. Needs the Gulf for AI</footer>
          </blockquote>
        </section>

        {/* Pax Silica */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pax Silica: The New Tech Alliance</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Qatar and UAE are joining the US-led "Pax Silica" initiative, a technology supply chain alliance aimed at moving the Middle East toward a tech-driven economy. The initiative focuses on semiconductor supply chains, AI infrastructure, and advanced manufacturing. This represents a strategic alignment between US technology leadership and GCC capital and energy resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">What Pax Silica Enables</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Preferential access to US semiconductor technology and manufacturing equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Joint investment in AI chip design and fabrication facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Streamlined export controls for advanced AI hardware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Technology transfer agreements for critical infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Strategic Implications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>GCC becomes critical node in US-led technology supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Reduces dependence on Chinese semiconductor manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Positions GCC as neutral ground for global AI infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Accelerates technology transfer and knowledge building</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stargate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Stargate: The $500B Catalyst</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Stargate project—a $500 billion data center initiative announced by OpenAI, SoftBank, and Oracle—signals unprecedented capital deployment into GCC AI infrastructure. While project details remain limited, the scale suggests a multi-country, multi-decade buildout of hyperscale AI training and inference facilities powered by GCC energy resources.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Stargate Project Scope (Estimated)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$500B</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5-10 GW</div>
                <div className="text-sm text-muted-foreground">Power Capacity</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10-15y</div>
                <div className="text-sm text-muted-foreground">Build Timeline</div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            The project's scale exceeds the combined market capitalization of most GCC-listed technology companies. It represents a bet that AI inference demand will continue growing exponentially, requiring massive compute capacity located near cheap energy sources. The GCC's combination of sovereign capital, energy abundance, and strategic location makes it the logical choice for this infrastructure buildout.
          </p>
        </section>

        {/* Investment Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment & Business Implications</h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For Infrastructure Providers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Companies providing data center construction, cooling systems, power distribution, and network infrastructure will see unprecedented demand. The $100B annual investment creates a multi-year pipeline of projects requiring specialized expertise in hyperscale deployment.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Data Center Construction</Badge>
                <Badge variant="outline" className="text-xs">Cooling Systems</Badge>
                <Badge variant="outline" className="text-xs">Power Infrastructure</Badge>
                <Badge variant="outline" className="text-xs">Network Equipment</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For AI Companies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Access to low-cost compute capacity in the GCC creates opportunity for AI companies to scale inference workloads economically. Companies building large language models, computer vision systems, and recommendation engines can leverage GCC infrastructure to reduce operational costs by 40-60% compared to Western cloud providers.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Cost Reduction</Badge>
                <Badge variant="outline" className="text-xs">Scale Economics</Badge>
                <Badge variant="outline" className="text-xs">Inference Optimization</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For Energy Companies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The shift from energy exports to compute exports creates new revenue streams for GCC energy companies. AI data centers require dedicated power plants, creating demand for long-term power purchase agreements (PPAs) and integrated energy-compute infrastructure projects.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Power PPAs</Badge>
                <Badge variant="outline" className="text-xs">Integrated Infrastructure</Badge>
                <Badge variant="outline" className="text-xs">Renewable Energy</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Get the Full GCC AI Intelligence Report</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access detailed profiles of 500+ AI companies across the GCC, including infrastructure providers, sovereign AI initiatives, and GCC readiness scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/directory">
                <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Explore Directory
                </button>
              </Link>
              <a
                href="https://agentdub.gumroad.com/l/gcc-ai-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-card border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-block"
              >
                Buy Full Report ($299)
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
