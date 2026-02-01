import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Signal050() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Intelligence
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-6">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Tourism & Hospitality
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Saudi Arabia
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Impact: 9.0
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Saudi Arabia Deploys Agentic AI for Autonomous Tourism Management Under Vision 2030
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 27, 2026</time>
            <span>•</span>
            <span>Horizon: 1–2y</span>
          </div>

          <ShareButton
            title="Saudi Arabia Deploys Agentic AI for Autonomous Tourism Management"
            description="Saudi Arabia testing AI agents that autonomously manage entire travel journeys in real-time under Vision 2030."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded">
            <p className="text-lg font-semibold mb-2 text-foreground">Signal Summary</p>
            <p className="text-foreground">
              Saudi Arabia testing AI agents that autonomously manage entire travel journeys in real-time. Systems can re-plan itineraries, handle flight delays, coordinate hotels, and manage crowd bottlenecks without human intervention. Tourism positioned as proving ground for agentic AI under Vision 2030.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">From Theory to Operational Reality</h2>
          <p className="text-foreground">
            Saudi Arabia's tourism sector is testing whether agentic artificial intelligence can move from conference stages into the daily reality of millions of visitors. According to Federico Pienovi, CEO of APAC and MENA at Globant, "The transformation we're seeing in Saudi Arabia represents a fundamental shift from reactive 'advice-giving' systems to proactive 'action-taking' agents that can autonomously manage entire visitor journeys. This isn't theoretical anymore, it's operational reality."
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Autonomous Journey Orchestration</h2>
          <p className="text-foreground">
            The breakthrough capability is "autonomous journey orchestration"—AI systems that can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>Re-plan entire itineraries</strong> in real-time when disruptions occur</li>
            <li><strong>Pre-position staff</strong> where needed based on predictive analytics</li>
            <li><strong>Complete transactions</strong> on behalf of travelers without manual intervention</li>
            <li><strong>Coordinate across operators</strong> (airlines, hotels, transportation, events)</li>
            <li><strong>Handle disruptions autonomously</strong> (flight delays, crowd bottlenecks, rebookings)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Multi-Agent Collaboration</h2>
          <p className="text-foreground">
            Pienovi describes the vision: "Imagine a connected world where a guest-owned AI requests a trip tailored to budget and preferences; an airline agent responds with flights and disruption protocols; a hotel agent adds rooms, perks, and sustainability options; and a destination agent coordinates ground transportation, events, and local policies. This is not science fiction, it is what multi-agent collaboration looks like in the Agentic Tourism Era."
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Riyadh-Launched Unified Platform</h2>
          <p className="text-foreground">
            The Riyadh-launched initiative brings together major players to create a unified, standards-driven orchestration platform. This enables agents to act consistently "from inspiration to return," achieving true scale beyond isolated pilots. Saudi Arabia's giga-projects serve as living labs for this multi-agent deployment, offering controlled environments to test interoperability across multiple operators.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Tourism as Testing Ground</h2>
          <p className="text-foreground">
            Tourism differs from e-commerce or banking because journeys span multiple companies, platforms, and physical environments. No single operator controls the entire chain, making interoperability and protocols more essential than raw model capability. This complexity makes tourism an ideal proving ground for agentic AI systems that must coordinate across organizational boundaries.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Governance & Accountability Challenges</h2>
          <p className="text-foreground">
            Pienovi emphasizes that "Agentic AI requires entirely new governance frameworks, cross-functional oversight, and process redesign to avoid unintended actions while keeping humans 'on the loop.' When AI agents are making autonomous decisions affecting visitor safety and satisfaction, accountability structures become critical."
          </p>
          <p className="text-foreground">
            The shift introduces unfamiliar risks: unclear performance criteria, loss of executive sponsorship, and traditional tourism metrics that no longer suffice for agentic AI adoption. There's also structural risk that automation creates uneven value distribution, leaving some operators stranded while others capture demand.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Talent as Determining Variable</h2>
          <p className="text-foreground">
            "Technology is only as good as the people implementing and supervising it," Pienovi notes. The Kingdom must develop "not just users of AI systems, but architects and supervisors who understand how to design, implement, and optimize agentic workflows." Crucially, this is framed not as labor replacement but as "elevating human talent to focus on hospitality—those moments that matter."
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Vision 2030 Integration</h2>
          <p className="text-foreground">
            Saudi Arabia is positioning tourism as a proving ground for agentic AI under Vision 2030, demonstrating how government convening power, private sector innovation, and international partnerships can combine to produce a scalable model. If successful, agentic AI may become not just an experiment, but the operational backbone of Saudi Arabia's tourism ambitions.
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Why This Matters</h3>
            <p className="text-foreground mb-4">
              Saudi Arabia's deployment of agentic AI in tourism represents the first large-scale consumer-facing implementation of autonomous AI systems in the GCC. Unlike enterprise back-office automation or government administrative processes, tourism AI directly affects millions of visitors across complex, multi-operator journeys.
            </p>
            <p className="text-foreground">
              The success or failure of this deployment will determine whether agentic AI can scale beyond controlled enterprise environments into open consumer markets. For the broader GCC region, Saudi Arabia's tourism sector serves as a real-world laboratory for testing autonomous systems that must coordinate across organizational boundaries, handle unpredictable disruptions, and maintain human oversight without sacrificing speed or efficiency.
            </p>
            <p className="text-foreground">
              If the Kingdom achieves "autonomous journey orchestration" at scale, it establishes a template for applying agentic AI to other complex, multi-stakeholder sectors—healthcare, education, urban services—where no single entity controls the entire value chain.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related Intelligence</h3>
            <div className="grid gap-4">
              <Link href="/intelligence/signal-049">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Qatar Launches Agentic AI for Customs</h4>
                  <p className="text-sm text-muted-foreground mt-1">First GCC government deployment of autonomous AI</p>
                </div>
              </Link>
              <Link href="/intelligence/signal-046">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">HUMAIN ONE Agentic AI Operating System</h4>
                  <p className="text-sm text-muted-foreground mt-1">Enterprise agentic AI platform from Saudi Arabia</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/intelligence">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2" size={16} />
                Back to All Intelligence Signals
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
