/**
 * Signal #004: Saudi Arabia - NEOM AI Integration
 * Design Philosophy: Data-Driven Modernism with semantic color coding
 */

import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Signal004() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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
            <Badge className="bg-status-ready text-white">Enterprise-Ready</Badge>
            <Badge variant="outline">Saudi Arabia</Badge>
            <Badge variant="outline">Smart Cities</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #004: NEOM's AI-Powered Cognitive City Infrastructure
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 6, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>NEOM, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Impact Score: 23/25</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Saudi Arabia's $500 billion NEOM megaproject is deploying an unprecedented AI infrastructure 
            that positions the Kingdom as a global leader in cognitive city development, with implications 
            for urban AI deployment across the GCC region.
          </p>
        </header>

        {/* Key Findings */}
        <section className="mb-12 p-6 bg-accent/10 border border-accent/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>NEOM has contracted with 15+ global AI vendors to build a unified cognitive infrastructure managing energy, transport, and public services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>The Line's AI backbone will process 90% of city operations autonomously by 2030, from traffic flow to waste management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>Saudi Arabia is establishing AI sovereignty requirements that mandate local data residency and Arabic language support for all NEOM vendors</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>NEOM Tech & Digital Company has launched a $1B AI fund targeting regional startups building GCC-compliant solutions</span>
            </li>
          </ul>
        </section>

        {/* Strategic Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strategic Context</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            NEOM represents Saudi Arabia's most ambitious Vision 2030 initiative, aiming to create a $500 billion 
            cognitive city that runs almost entirely on AI-powered systems. The project's scale and technological 
            ambition make it a critical testbed for enterprise AI deployment in extreme environments, from desert 
            heat to zero-carbon operations.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            The Kingdom's approach differs fundamentally from other smart city projects in Dubai or Singapore. 
            Rather than retrofitting AI into existing urban infrastructure, NEOM is building a greenfield cognitive 
            city where AI is embedded at the architectural level. This includes autonomous mobility networks, 
            predictive energy grids, and AI-driven environmental monitoring systems that operate without human intervention.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            For AI vendors and investors, NEOM's procurement requirements are reshaping the regional market. 
            The project mandates that all AI systems meet strict data sovereignty standards, support Arabic language 
            processing, and demonstrate compatibility with Islamic cultural values. These requirements are now 
            influencing AI product development across the GCC, as vendors recognize that NEOM compliance opens 
            doors to broader Saudi and Gulf markets.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">AI Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Cognitive Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Unified AI operating system (NEOM OS)</li>
                <li>• Edge computing network with 10,000+ nodes</li>
                <li>• Real-time data processing at 50 petabytes/day</li>
                <li>• Quantum-ready architecture for future scaling</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Key Vendors</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SenseTime (computer vision & surveillance)</li>
                <li>• Huawei (5G infrastructure & IoT)</li>
                <li>• IBM (Watson AI for public services)</li>
                <li>• Local: SDAIA, Mozn, Lean Technologies</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Use Cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Autonomous vehicle coordination (The Line)</li>
                <li>• Predictive maintenance for infrastructure</li>
                <li>• AI-driven energy optimization</li>
                <li>• Biometric identity & access control</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Compliance Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data residency in Saudi Arabia</li>
                <li>• Arabic NLP with 95%+ accuracy</li>
                <li>• Islamic finance compatibility</li>
                <li>• Gender-segregated AI services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment & Strategic Implications</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For AI Vendors</h3>
              <p className="leading-relaxed">
                NEOM's procurement pipeline represents $20B+ in AI contracts through 2030. Vendors that achieve 
                NEOM compliance gain a significant competitive advantage across Saudi Arabia's broader digital 
                transformation initiatives, including smart city projects in Riyadh, Jeddah, and the Red Sea Development. 
                The key barrier is meeting data sovereignty and Arabic language requirements, which currently exclude 
                many Western AI platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For Investors</h3>
              <p className="leading-relaxed">
                The NEOM Tech & Digital Company's $1B AI fund is actively seeking regional startups building 
                GCC-compliant AI solutions. Priority areas include Arabic NLP, Islamic fintech AI, autonomous 
                systems for extreme climates, and edge AI for distributed infrastructure. Early-stage companies 
                demonstrating NEOM compatibility are attracting 3-5x higher valuations than comparable non-compliant peers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For Enterprises</h3>
              <p className="leading-relaxed">
                NEOM's technology standards are becoming de facto requirements for enterprise AI deployment across 
                Saudi Arabia. Organizations planning digital transformation initiatives should evaluate their AI 
                vendors against NEOM compliance criteria to ensure future scalability and regulatory alignment. 
                This is particularly critical for sectors like banking, healthcare, and government services where 
                data sovereignty is non-negotiable.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="mb-12 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Risk Assessment</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Execution Risk: Medium-High</h4>
              <p className="text-sm">
                NEOM's timeline is aggressive, with Phase 1 completion targeted for 2026. Delays in AI infrastructure 
                deployment could cascade across dependent systems. However, Saudi Arabia's financial commitment and 
                political will significantly mitigate execution risk.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Technology Risk: Medium</h4>
              <p className="text-sm">
                Integrating 15+ AI vendors into a unified cognitive infrastructure presents significant technical 
                challenges. Interoperability issues and vendor lock-in risks are being addressed through open 
                standards and API-first architecture, but remain concerns.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Regulatory Risk: Low</h4>
              <p className="text-sm">
                As a sovereign project, NEOM has direct government backing and regulatory flexibility. The Kingdom's 
                AI governance framework is being designed around NEOM's requirements, reducing compliance uncertainty.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sentinel Assessment</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            NEOM represents a generational opportunity for AI vendors and investors willing to meet Saudi Arabia's 
            sovereignty and cultural requirements. The project's scale, financial backing, and strategic importance 
            make it a must-watch signal for anyone operating in the GCC AI ecosystem.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The cognitive city model being pioneered at NEOM will likely influence urban AI deployment across the 
            Middle East and beyond. Organizations that establish early presence in NEOM's vendor ecosystem are 
            positioning themselves for long-term growth in one of the world's fastest-expanding AI markets.
          </p>
        </section>

        {/* CTA */}
        <section className="p-8 bg-accent/10 border border-accent/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Access the Full GCC AI Intelligence Report</h3>
          <p className="text-muted-foreground mb-6">
            Get detailed analysis of 633 AI companies across all 6 GCC countries, including NEOM vendors 
            and Saudi Arabia's broader AI ecosystem.
          </p>
          <a
            href="https://agentdubai.gumroad.com/l/gcc-ai-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Buy Full Report - $299 →
            </button>
          </a>
        </section>
      </article>
    </div>
  );
}
