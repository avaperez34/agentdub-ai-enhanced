/**
 * Signal #005: Qatar - Post-World Cup AI Infrastructure
 * Design Philosophy: Data-Driven Modernism with semantic color coding
 */

import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Signal005() {
  return (
    <div className="min-h-screen">
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
            <Badge className="bg-status-emerging text-black">Emerging</Badge>
            <Badge variant="outline">Qatar</Badge>
            <Badge variant="outline">Smart Infrastructure</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #005: Qatar's AI-Driven Legacy Infrastructure Post-World Cup 2022
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 6, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Doha, Qatar</span>
            </div>

            <ShareButton 
              url="https://agentdub.ai/signals/008"
              title="Signal #008: Dubai Appoints 22 Chief AI Officers Across Government"
            />
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Qatar is repurposing the $200 billion World Cup 2022 infrastructure with AI-powered systems 
            for stadium management, transportation optimization, and smart city operations, creating a 
            blueprint for event-driven AI deployment across the GCC.
          </p>
        </header>

        {/* Key Findings */}
        <section className="mb-12 p-6 bg-accent/10 border border-accent/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>8 World Cup stadiums are being retrofitted with AI systems for predictive maintenance, energy optimization, and crowd management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>Doha Metro's AI-powered operations system, built for the World Cup, now handles 650,000 daily passengers with 99.7% on-time performance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>Qatar Computing Research Institute (QCRI) has launched a $300M AI research program focused on Arabic NLP and climate-adaptive AI</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">→</span>
              <span>Ooredoo Qatar is deploying edge AI infrastructure across 50+ venues to enable real-time analytics for future sporting and cultural events</span>
            </li>
          </ul>
        </section>

        {/* Strategic Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strategic Context</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The 2022 FIFA World Cup left Qatar with world-class infrastructure that would be underutilized without 
            strategic repurposing. Rather than allowing stadiums and transportation systems to become white elephants, 
            Qatar is investing $2 billion in AI systems to transform these assets into revenue-generating smart 
            infrastructure that can host future mega-events while serving daily urban operations.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            This approach positions Qatar as a testbed for "event-driven AI" — systems designed to handle massive 
            spikes in demand during international events while optimizing for efficiency during normal operations. 
            The Doha Metro, for example, used AI to manage 1.5 million daily passengers during the World Cup, then 
            seamlessly scaled down to 650,000 daily commuters while maintaining the same operational excellence.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            For AI vendors, Qatar's post-World Cup infrastructure represents a unique opportunity. The country has 
            already invested heavily in physical infrastructure and is now seeking AI solutions that can maximize 
            ROI from these assets. This creates a more mature, solution-focused procurement environment compared to 
            greenfield projects, with clearer success metrics and faster deployment timelines.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">AI Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Stadium AI Systems</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Predictive maintenance for HVAC and lighting</li>
                <li>• AI-powered crowd flow optimization</li>
                <li>• Dynamic pricing for event tickets</li>
                <li>• Energy consumption forecasting</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Key Vendors</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Siemens (building management AI)</li>
                <li>• Cisco (network intelligence)</li>
                <li>• Honeywell (predictive maintenance)</li>
                <li>• Local: QCRI, Ooredoo AI Lab</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Transportation AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time metro scheduling optimization</li>
                <li>• Predictive demand modeling</li>
                <li>• Autonomous shuttle coordination</li>
                <li>• Traffic flow management (Doha roads)</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-accent">Research Focus Areas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Arabic NLP for GCC dialects</li>
                <li>• Climate-adaptive AI (extreme heat)</li>
                <li>• Event-driven demand forecasting</li>
                <li>• Islamic finance AI applications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Case Deep Dive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Use Case: Lusail Stadium AI Transformation</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Lusail Stadium, which hosted the World Cup final, is now Qatar's flagship AI-powered venue. The 
            80,000-seat stadium has been retrofitted with 500+ IoT sensors and edge AI processors that monitor 
            everything from structural integrity to air quality in real-time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Energy cost reduction through AI optimization</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Predictive maintenance accuracy for critical systems</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">$12M</div>
              <div className="text-sm text-muted-foreground">Annual operational savings from AI systems</div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            The stadium's AI systems can predict equipment failures 7-10 days in advance, allowing maintenance 
            teams to schedule repairs during non-event periods. During events, the AI dynamically adjusts HVAC 
            and lighting based on real-time occupancy and weather conditions, reducing energy waste by 40% compared 
            to pre-AI operations.
          </p>
        </section>

        {/* Investment Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment & Strategic Implications</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For AI Vendors</h3>
              <p className="leading-relaxed">
                Qatar's infrastructure AI market is characterized by high-value, long-term contracts with clear 
                success metrics. Unlike greenfield projects, vendors can demonstrate ROI quickly using existing 
                infrastructure data. Priority areas include predictive maintenance, energy optimization, and 
                event-driven demand forecasting. Arabic language support is essential but less critical than in 
                Saudi Arabia, as Qatar's expatriate population drives significant English-language usage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For Investors</h3>
              <p className="leading-relaxed">
                QCRI's $300M AI research program is actively partnering with startups focused on Arabic NLP and 
                climate-adaptive AI. The institute offers equity-free grants up to $5M for promising technologies, 
                with pathways to commercial deployment through Qatar's government and corporate partners. Startups 
                demonstrating solutions for extreme heat environments (50°C+ summers) are particularly attractive, 
                as these capabilities are transferable across the GCC.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">For Event Organizers</h3>
              <p className="leading-relaxed">
                Qatar is positioning itself as the AI-powered events capital of the Middle East. The country's 
                infrastructure can now handle mega-events with significantly lower operational costs and higher 
                attendee satisfaction than pre-AI systems. This creates opportunities for event management companies 
                and technology providers specializing in crowd analytics, dynamic pricing, and real-time logistics 
                optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="mb-12 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Risk Assessment</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Utilization Risk: Medium</h4>
              <p className="text-sm">
                Qatar's challenge is maintaining high utilization rates for World Cup infrastructure during non-event 
                periods. AI systems can optimize operations, but cannot create demand. The country is actively 
                bidding for additional international events (Asian Games 2030, Olympics) to justify continued investment.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Technology Risk: Low-Medium</h4>
              <p className="text-sm">
                Qatar's AI deployments are built on proven technologies from established vendors like Siemens and 
                Cisco. The risk lies in integration complexity across multiple systems and vendors, not in core 
                technology maturity. The government's strong technical partnerships with QCRI mitigate this risk.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-2">Economic Risk: Low</h4>
              <p className="text-sm">
                Qatar's sovereign wealth fund provides financial stability for long-term AI investments. The country's 
                focus on ROI-driven AI deployment (rather than prestige projects) suggests sustainable economics. 
                Energy cost savings alone justify most infrastructure AI investments within 3-5 years.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sentinel Assessment</h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Qatar's post-World Cup AI transformation demonstrates a pragmatic approach to infrastructure intelligence. 
            Rather than pursuing ambitious but unproven cognitive city visions, Qatar is focusing on measurable ROI 
            from AI systems applied to world-class physical infrastructure. This creates a more accessible market for 
            AI vendors and a clearer value proposition for investors.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The event-driven AI model pioneered in Qatar has broader applicability across the GCC, particularly for 
            countries hosting major international events (UAE with Expo 2020 legacy, Saudi Arabia with Riyadh Expo 2030). 
            Organizations that establish presence in Qatar's AI ecosystem gain valuable reference cases for similar 
            deployments across the region.
          </p>
        </section>

        {/* CTA */}
        <section className="p-8 bg-accent/10 border border-accent/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Access the Full GCC AI Intelligence Report</h3>
          <p className="text-muted-foreground mb-6">
            Get detailed analysis of 500+ AI companies across all 6 GCC countries, including Qatar's AI ecosystem 
            and QCRI research partnerships.
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
