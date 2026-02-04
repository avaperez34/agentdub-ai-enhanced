import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function Signal059() {
  const signal = {
    id: "059",
    title: "Saudi Arabia Accelerates HUMAIN Program Data Center Capacity for AI Sovereignty",
    date: "February 4, 2026",
    impact: 8.8,
    horizon: "1–2 years",
    country: "Saudi Arabia",
    sector: "Infrastructure",
    category: "Infrastructure Development",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-8">
          <Link href="/intelligence">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Intelligence
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">{signal.country}</Badge>
              <Badge variant="outline">{signal.sector}</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Published</p>
                <p className="font-medium text-foreground">{signal.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Impact Score</p>
                <p className="font-medium text-accent text-lg">{signal.impact}/10</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide mb-1">Time Horizon</p>
                <p className="font-medium text-foreground">{signal.horizon}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Overview</h2>
            <p>
              Saudi Arabia is advancing its national AI programme through the HUMAIN program, constructing new data center capacity and integrating infrastructure for AI development and deployment at scale. This represents a critical transition from AI strategy to execution phase, positioning Saudi Arabia as the regional AI infrastructure anchor.
            </p>

            <h2>Key Developments</h2>
            <ul>
              <li>
                <strong>Data Center Expansion:</strong> HUMAIN program constructing new data center capacity with integrated infrastructure for AI workloads.
              </li>
              <li>
                <strong>Vision 2030 Alignment:</strong> Infrastructure buildout directly supports broader Vision 2030 digital transformation objectives.
              </li>
              <li>
                <strong>Local Deployment Capability:</strong> Enables Saudi enterprises and government to develop, train, and deploy AI systems locally without external dependency.
              </li>
              <li>
                <strong>Supply Chain Integration:</strong> Integration with mining and critical minerals strategy creates vertically integrated AI economy.
              </li>
              <li>
                <strong>Data Sovereignty:</strong> Local capacity reduces dependency on external cloud providers and ensures data residency compliance.
              </li>
            </ul>

            <h2>Strategic Implications</h2>
            <p>
              The HUMAIN program represents Saudi Arabia's commitment to building AI infrastructure autonomously. By integrating data center capacity with critical minerals processing and battery metals refining, Saudi Arabia is creating a complete AI ecosystem that supports both infrastructure and supply chain needs.
            </p>

            <p>
              This approach differs from traditional cloud-first models. Instead, Saudi Arabia is building foundational systems that enable long-term AI sovereignty and reduce dependency on external providers. The integration with mining and critical minerals strategy is particularly significant, as it addresses the supply chain for AI chips and semiconductors.
            </p>

            <h2>Investment Implications</h2>
            <p>
              For investors, the HUMAIN program represents an infrastructure play with government backing and strategic integration into national economic objectives. The program's focus on data sovereignty and local capability creates opportunities for companies that can support infrastructure buildout and AI deployment.
            </p>

            <p>
              The long-term commitment evident in the program's integration with Vision 2030 and broader economic diversification strategy suggests sustained investment and market development over the next 5-10 years.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this signal</p>
            <ShareButton
              title={signal.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/059`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/signals/058">
              <Button variant="outline">← Previous Signal</Button>
            </Link>
            <Link href="/signals/060">
              <Button variant="outline">Next Signal →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
