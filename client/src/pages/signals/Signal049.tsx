import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Signal049() {
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
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Government Services
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Qatar
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Impact: 8.4
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Qatar Launches Agentic AI for Customs — First GCC Government Deployment
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 27, 2026</time>
            <span>•</span>
            <span>Horizon: 1–2y</span>
          </div>

          <ShareButton
            title="Qatar Launches Agentic AI for Customs — First GCC Government Deployment"
            description="Qatar General Authority of Customs launched AI services package including agentic AI for autonomous customs decision-making."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded">
            <p className="text-lg font-semibold mb-2 text-foreground">Signal Summary</p>
            <p className="text-foreground">
              Qatar General Authority of Customs (GAC) launched AI services package including agentic AI for autonomous customs decision-making. Inaugurated by Minister of Finance Ali bin Ahmed Al Kuwari. Represents first government deployment of agentic AI in GCC.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Historic Government AI Deployment</h2>
          <p className="text-foreground">
            Qatar's General Authority of Customs has become the first GCC government entity to deploy agentic AI—artificial intelligence systems capable of autonomous decision-making and action-taking. This milestone, inaugurated by Minister of Finance HE Ali bin Ahmed Al Kuwari as part of International Customs Day celebrations, marks the transition of agentic AI from enterprise experimentation to government operations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">AI Services Package</h2>
          <p className="text-foreground">
            The comprehensive AI services package includes four core components:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>HSsify (Smart Harmonized System Classification Tool):</strong> Transforms documents into intelligent decisions within customs declarations, providing accurate classification from first data entry</li>
            <li><strong>Pre-Classification Service:</strong> Self-service feature enabling users to request expert opinions while supporting customs officers with smart suggestions for faster, more accurate decisions</li>
            <li><strong>Agentic AI:</strong> Shifts systems from traditional command execution to intelligent, autonomous decision-making and action-taking</li>
            <li><strong>Smart Virtual Assistant:</strong> Provides instant, data-driven responses based on customs information, making access more efficient</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Operational Scale</h2>
          <p className="text-foreground">
            Qatar's customs authority operates at significant scale, providing the data foundation necessary for effective AI deployment:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>6.8 million customs declarations</strong> processed in 2025 via Al-Nadeeb system</li>
            <li><strong>QR4 billion in revenues</strong> generated through customs operations</li>
            <li><strong>4,822 seizure reports</strong> recorded, including narcotics and counterfeit goods</li>
            <li><strong>First GCC entity</strong> to integrate with customs data exchange platform</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Strategic Alignment</h2>
          <p className="text-foreground">
            The AI deployment aligns with GAC's Strategic Plan (2024-2030), which aims to build a pioneering customs authority delivering smart and secure services. Chairman of GAC, HE Ahmed bin Abdullah Al Jamal, emphasized that the initiative contributes to "consolidating the State of Qatar's position as a leading and secure destination for trade and investment."
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Regional Leadership</h2>
          <p className="text-foreground">
            Qatar currently chairs the Executive Council of the GCC Customs Union Authority, positioning the country to influence regional customs integration. The successful deployment of agentic AI in Qatar's customs operations could serve as a model for other GCC nations seeking to modernize trade facilitation infrastructure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">From Enterprise to Government</h2>
          <p className="text-foreground">
            This deployment represents a critical transition point for agentic AI technology. While enterprises across the GCC have been experimenting with autonomous AI systems, Qatar's customs authority demonstrates that government agencies can successfully deploy these systems for high-stakes operations involving compliance, security, and revenue generation.
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Why This Matters</h3>
            <p className="text-foreground mb-4">
              Qatar's deployment of agentic AI in customs operations establishes a precedent for government adoption of autonomous AI systems across the GCC. Unlike advisory AI tools that provide recommendations for human decision-makers, agentic AI takes autonomous actions—classifying goods, making compliance determinations, and executing transactions.
            </p>
            <p className="text-foreground">
              This shift from "command execution" to "intelligent autonomous action" in a government context signals confidence in AI reliability, governance frameworks, and accountability structures. For the broader GCC region, Qatar's customs deployment offers a tested model for applying agentic AI to government services, potentially accelerating adoption in immigration, licensing, permitting, and other high-volume administrative functions.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related Intelligence</h3>
            <div className="grid gap-4">
              <Link href="/intelligence/signal-050">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Saudi Arabia Deploys Agentic AI for Tourism</h4>
                  <p className="text-sm text-muted-foreground mt-1">Autonomous journey orchestration in consumer sector</p>
                </div>
              </Link>
              <Link href="/intelligence/signal-047">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Qatar Investment Authority Backs d-Matrix</h4>
                  <p className="text-sm text-muted-foreground mt-1">Qatar's broader AI infrastructure strategy</p>
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
