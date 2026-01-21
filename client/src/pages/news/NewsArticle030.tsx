import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle030() {
  const articleTitle = "SIRBAI Launches Middle East's First AI-Powered Autonomous Drone Swarm at UMEX 2026";
  const articleUrl = `${window.location.origin}/news/030`;

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
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                Defense
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 20, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              SIRBAI Launches Middle East's First AI-Powered Autonomous Drone Swarm at UMEX 2026
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              UAE-based SIRBAI unveils region's first AI-powered autonomous drone swarm technology at UMEX 2026, developed by 40+ engineers with Technology Innovation Institute backing. Marks UAE's entry into defense AI sector.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="SIRBAI launches Middle East's first AI-powered autonomous drone swarm technology at UMEX 2026 in Abu Dhabi"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Historic Launch at UMEX 2026</h2>
            <p>
              SIRBAI announced the official launch of the Middle East's first AI-powered autonomous drone swarm technology at UMEX 2026 on January 20, 2026, marking the company's entry into the defense technology sector. UMEX (Unmanned Systems Exhibition) serves as a global platform for unmanned systems and autonomous capabilities, making it an ideal venue for this groundbreaking announcement.
            </p>
            <p>
              Designed for unmanned aerial systems (UAS), the platform enables multiple drones to operate collaboratively with a high degree of autonomy, even in complex and contested environments. As the first company in the region to offer this advanced capability, SIRBAI is set to redefine the modern battlefield with innovative and scalable autonomous technology.
            </p>

            <h2>Technology Innovation Institute Backing</h2>
            <p>
              SIRBAI enters the market as a leader in defense autonomy and intelligent swarm technologies. Developed by over 40 engineers specializing in AI, autonomy, and robotics, SIRBAI builds on advanced research developed in Abu Dhabi, including capabilities originating from the Technology Innovation Institute (TII).
            </p>
            <p>
              Dr. Najwa Aaraj, Chief Executive Officer at TII, stated: "The launch of SIRBAI's next-generation swarm technology marks an important milestone for the region's defense technology ecosystem. By combining advanced AI with autonomous drone operations, SIRBAI is setting a new benchmark for resilient, operator-centric mission systems. TII is proud to support this achievement, which reflects our shared commitment to delivering advanced technologies that strengthen national security and enhance defense capabilities globally."
            </p>

            <h2>Operator-Friendly Autonomous Swarm Operations</h2>
            <p>
              The launch introduces a scalable, operator-friendly approach to autonomous swarm operations, supporting defense missions ranging from surveillance and protection to advanced manned-unmanned teaming. By integrating AI-driven mission planning, distributed decision-making, and real-time coordination, SIRBAI's platform reduces operator workload while improving mission effectiveness and resilience.
            </p>
            <p>
              The modular, end-to-end system consolidates mission planning, command, and swarm execution into a single platform, accelerating decision cycles and enabling efficient control of drone fleets with lower cognitive burden on operators.
            </p>

            <h2>Bridging Human Intent and Autonomous Execution</h2>
            <p>
              Dr. Dario Albani, Chief Technology Officer at SIRBAI, explained: "SIRBAI bridges the gap between human intent and autonomous mission execution, enabling seamless coordination across manned and unmanned systems. Our platform ensures resilient autonomy, continuous information flow, and agile response in rapidly changing and demanding environments. By keeping operators and autonomous assets connected and working together, SIRBAI delivers the reliability and operational advantage needed for modern missions."
            </p>
            <p>
              This human-machine teaming approach represents a significant advancement over traditional drone operations, where operators must manually control each unit or rely on pre-programmed flight paths with limited adaptability.
            </p>

            <h2>Designed for Contested Environments</h2>
            <p>
              Designed for operational impact and future-ready scalability, SIRBAI's technology integrates seamlessly across a wide range of platforms, from compact tactical drones to advanced unmanned combat aerial vehicles (UCAVs). Built for contested and GPS-denied environments, the system uses resilient navigation to sustain coordinated swarm operations under jamming or degraded connectivity, while maintaining operator oversight when required.
            </p>
            <p>
              This capability is particularly relevant for modern warfare scenarios where electronic warfare and GPS jamming are increasingly common. SIRBAI's platform ensures mission continuity even when traditional navigation and communication systems are compromised.
            </p>

            <h2>Software-First Model and Security Assurance</h2>
            <p>
              SIRBAI's mission is to help nations develop secure and resilient defense systems through practical, AI-enabled autonomous swarm technology. Its software-first model and fully in-house technology stack enable rapid capability development, high security assurance, and operational flexibility across deployment environments.
            </p>
            <p>
              The in-house development approach addresses a critical concern for defense customers: supply chain security and the ability to customize systems for specific national requirements without dependence on foreign technology providers.
            </p>

            <h2>UAE's Entry into Defense AI Sector</h2>
            <p>
              SIRBAI's launch marks the UAE's strategic entry into the defense AI sector with indigenous technology capabilities. This move aligns with broader GCC efforts to develop sovereign defense capabilities and reduce dependence on traditional arms suppliers.
            </p>
            <p>
              The timing is significant: as global defense budgets increasingly prioritize unmanned systems and AI-enabled capabilities, the UAE is positioning itself not just as a customer but as a developer and potential exporter of advanced defense technology.
            </p>

            <h2>Investment Angle</h2>
            <p>
              SIRBAI's launch represents the UAE's strategic entry into the high-value defense AI sector with indigenous technology, backed by Technology Innovation Institute (TII) and developed by 40+ specialized engineers. This government backing signals long-term commitment and reduces technology development risk.
            </p>
            <p>
              The defense drone swarm market is projected to grow significantly as militaries worldwide seek force multiplication capabilities. SIRBAI's first-mover advantage in the Middle East positions it well to capture regional demand, particularly as GCC nations prioritize sovereign defense capabilities.
            </p>
            <p>
              The software-first model and in-house technology stack create opportunities for rapid iteration and customization, potentially enabling SIRBAI to serve multiple regional customers with tailored solutions. This approach also addresses supply chain security concerns that are increasingly important for defense procurement.
            </p>
            <p>
              For investors, SIRBAI's emergence demonstrates the UAE's shift from AI consumer to AI producer in specialized high-value sectors. The company's focus on contested and GPS-denied environments addresses real operational needs, suggesting strong product-market fit beyond technology demonstration.
            </p>
            <p>
              Potential exit opportunities include acquisition by larger defense primes seeking to enter the Middle East market, regional consolidation as other GCC nations develop similar capabilities, or continued growth as an independent platform serving multiple national customers.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
