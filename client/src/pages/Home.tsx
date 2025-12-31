import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Intelligence on AI Agents & Digital Transformation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Independent editorial platform dedicated to the rise of AI agents, autonomous
                systems, and applied artificial intelligence shaping the next phase of digital
                transformation across Dubai and the Gulf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/directory">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Directory
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent/30 mb-4">AI</div>
                <p className="text-muted-foreground">Strategic Intelligence Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AgentDub Section */}
      <section className="py-20 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why AgentDub.ai</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Execution-Focused</h3>
              <p className="text-muted-foreground">
                We focus on real-world deployment, infrastructure, and governance—not hype. Our
                analysis cuts through the noise to deliver actionable intelligence.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Regional Expertise</h3>
              <p className="text-muted-foreground">
                Aligned with Dubai's ambition to lead in applied AI. We understand GCC-specific
                compliance, governance, and market dynamics.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all">
              <TrendingUp className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Independent Intelligence</h3>
              <p className="text-muted-foreground">
                Concise, high-signal analysis for founders, investors, executives, and
                institutions. No vendor bias—just clear thinking.
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 border border-border rounded-lg p-8 text-center">
            <p className="text-lg text-foreground mb-4">
              AI agents are moving from experimentation into real-world deployment. This transition
              raises fundamental questions around trust, control, scalability, and economic impact.
            </p>
            <p className="text-muted-foreground">
              AgentDub.ai exists to document this shift—clearly, independently, and with a regional
              lens aligned with Dubai's ambition to lead in applied AI.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AI Players Directory</h2>
            <p className="text-xl text-muted-foreground">
              Strategic intelligence directory with GCC readiness scoring and Sentinel briefs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold mb-3">Comprehensive Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Track enterprise AI agents, automation platforms, and specialized tools across
                multiple categories and deployment models.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 25-point readiness scoring system</li>
                <li>✓ GCC compliance indicators</li>
                <li>✓ Sector-specific analysis</li>
                <li>✓ Deployment model support</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold mb-3">Intelligent Filtering</h3>
              <p className="text-muted-foreground mb-4">
                Find the right tools for your use case with advanced filtering and sorting
                capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Filter by category, sector, deployment</li>
                <li>✓ GCC compliance filtering</li>
                <li>✓ Search across all attributes</li>
                <li>✓ Sort by readiness score or name</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/directory">
              <Button size="lg">
                Browse AI Players
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">AgentDub.ai</h4>
              <p className="text-sm text-muted-foreground">
                Independent intelligence on AI agents and digital transformation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/directory">Directory</Link>
                </li>
                <li>
                  <Link href="/sentinel">Sentinel</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/intelligence">Intelligence</Link>
                </li>
                <li>
                  <Link href="/investors">Investors</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://x.com/agentdub_ai" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/groups/16471003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AgentDub.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
