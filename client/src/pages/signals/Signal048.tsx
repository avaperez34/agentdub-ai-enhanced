import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Signal048() {
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
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Defense & Security
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Saudi Arabia
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Impact: 8.6
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Saudi Arabia Outlines Five Defense AI Priorities for 2026
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 30, 2026</time>
            <span>•</span>
            <span>Horizon: 1–2y</span>
          </div>

          <ShareButton
            title="Saudi Arabia Outlines Five Defense AI Priorities for 2026"
            description="Saudi Arabia outlined defense artificial intelligence priorities for 2026, concentrating on five specific outcomes."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded">
            <p className="text-lg font-semibold mb-2 text-foreground">Signal Summary</p>
            <p className="text-foreground">
              Saudi Arabia outlined defense artificial intelligence priorities for 2026, concentrating on five specific outcomes. Decisive goal set for Kingdom to achieve in 2026. Saudi officials overseeing this strategy. Represents formalization of defense AI roadmap.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Strategic Context</h2>
          <p className="text-foreground">
            Saudi Arabia has formalized its defense AI strategy with five specific priorities for 2026, marking a significant milestone in the Kingdom's military modernization under Vision 2030. This structured approach signals the integration of artificial intelligence across defense procurement, operations, and strategic planning.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Priorities</h2>
          <p className="text-foreground">
            While the specific five outcomes remain under official review, the priorities likely encompass:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>Autonomous Systems:</strong> Development and deployment of unmanned aerial vehicles (UAVs), ground vehicles, and maritime platforms</li>
            <li><strong>Intelligence Analysis:</strong> AI-powered threat detection, pattern recognition, and predictive analytics for national security</li>
            <li><strong>Logistics Optimization:</strong> Supply chain management, maintenance prediction, and resource allocation</li>
            <li><strong>Cyber Defense:</strong> AI-driven cybersecurity systems for critical infrastructure protection</li>
            <li><strong>Decision Support Systems:</strong> Command and control systems enhanced with AI for real-time situational awareness</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Institutional Framework</h2>
          <p className="text-foreground">
            The defense AI priorities align with HUMAIN's role as the Kingdom's core AI and defense-technology platform. This follows the recent SAMI-NVIDIA AI defense lab launch in Riyadh, creating an integrated ecosystem for military AI development.
          </p>
          <p className="text-foreground">
            Saudi officials have been designated to oversee this strategy, ensuring coordination across military branches, defense contractors, and research institutions. The decisive goal set for 2026 suggests specific deployment milestones or operational capabilities to be achieved within the year.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Regional Implications</h2>
          <p className="text-foreground">
            This formalization positions Saudi Arabia as the regional defense AI leader, complementing UAE's focus on AI infrastructure and Qatar's emphasis on AI governance. The Kingdom's approach integrates indigenous AI capability development (through HUMAIN and ALLAM models) with strategic partnerships (NVIDIA, international defense contractors).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Investment & Timeline</h2>
          <p className="text-foreground">
            The defense AI priorities are backed by Saudi Arabia's broader $1 trillion investment in AI infrastructure. The 1-2 year horizon indicates near-term deployment expectations, with 2026 serving as a critical milestone year for demonstrating operational AI capabilities in defense contexts.
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Why This Matters</h3>
            <p className="text-foreground mb-4">
              Saudi Arabia's formalized defense AI strategy represents the convergence of military modernization, technological sovereignty, and regional security dynamics. The five-priority framework provides a structured roadmap for AI integration across defense operations, moving beyond experimental deployments to systematic adoption.
            </p>
            <p className="text-foreground">
              For the GCC region, this signals an AI-driven military transformation that will reshape defense procurement, operational doctrines, and strategic capabilities. The Kingdom's approach—combining indigenous platforms (HUMAIN) with international partnerships (NVIDIA)—offers a model for other nations seeking defense AI sovereignty while leveraging global technology ecosystems.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related Intelligence</h3>
            <div className="grid gap-4">
              <Link href="/intelligence/signal-046">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">HUMAIN ONE Agentic AI Operating System</h4>
                  <p className="text-sm text-muted-foreground mt-1">Saudi Arabia's indigenous AI platform development</p>
                </div>
              </Link>
              <Link href="/intelligence/signal-045">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">HUMAIN's $1.2B Saudi AI Data Center Framework</h4>
                  <p className="text-sm text-muted-foreground mt-1">Infrastructure supporting defense AI deployment</p>
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
