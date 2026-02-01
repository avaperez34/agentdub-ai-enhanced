import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Signal051() {
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
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Infrastructure
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              UAE, Qatar, Saudi Arabia
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              Impact: 9.5
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            GCC Sovereign Wealth Funds Deploy $3.6 Trillion for AI Infrastructure Access
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 31, 2026</time>
            <span>•</span>
            <span>Horizon: 2–4y</span>
          </div>

          <ShareButton
            title="GCC Sovereign Wealth Funds Deploy $3.6 Trillion for AI Infrastructure Access"
            description="UAE, Qatar, and Saudi Arabia invested $3.6 trillion in US AI infrastructure for GPU access. Historic pivot from 'Black Gold' to 'Silicon Gold.'"
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8 rounded">
            <p className="text-lg font-semibold mb-2 text-foreground">Signal Summary</p>
            <p className="text-foreground">
              UAE, Qatar, and Saudi Arabia invested $3.6 trillion in US AI infrastructure for GPU access. Historic pivot from "Black Gold" to "Silicon Gold." Represents largest sovereign AI infrastructure investment in history. Secures compute capacity for next decade of AI development.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Historic Infrastructure Investment</h2>
          <p className="text-foreground">
            The United Arab Emirates, Qatar, and Saudi Arabia have collectively deployed $3.6 trillion in US AI infrastructure investments, marking the largest sovereign wealth fund commitment to artificial intelligence in history. This massive capital deployment represents a strategic pivot from hydrocarbon wealth ("Black Gold") to computational infrastructure ("Silicon Gold"), fundamentally reshaping the global AI landscape.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Investment Breakdown</h2>
          <p className="text-foreground">
            The $3.6 trillion investment is distributed across the three Gulf nations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>UAE: $1.4 trillion</strong> — Largest single-nation AI infrastructure investment</li>
            <li><strong>Qatar: $1.2 trillion</strong> — Strategic positioning in AI inference layer</li>
            <li><strong>Saudi Arabia: $1 trillion</strong> — Complementing indigenous platform development</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">NVIDIA Ecosystem at Scale</h2>
          <p className="text-foreground">
            The investment secures access to the complete NVIDIA ecosystem, including millions of Blackwell GPUs—the most advanced AI accelerators currently available. Abu Dhabi alone has ordered 500,000 NVIDIA units, representing one of the largest single GPU orders in history. This scale of procurement ensures the GCC nations have guaranteed access to cutting-edge compute capacity for the next decade of AI development.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">UAE Data Center Expansion</h2>
          <p className="text-foreground">
            The UAE's infrastructure buildout is proceeding at unprecedented scale:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>250 MW live capacity</strong> currently operational</li>
            <li><strong>5.5 GW under development</strong> — 22x expansion from current capacity</li>
            <li><strong>Khazna Data Center:</strong> 500 MW hyperscale facility</li>
            <li><strong>MBR Solar Park (DEWA):</strong> 100 MW AI-optimized data center</li>
            <li><strong>Masdar:</strong> 40 MW sustainable AI infrastructure</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Strategic Objectives</h2>
          <p className="text-foreground">
            This massive investment serves multiple strategic objectives for the GCC nations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>Compute Sovereignty:</strong> Reduces dependency on Western cloud providers (AWS, Azure, Google Cloud)</li>
            <li><strong>Indigenous AI Development:</strong> Enables training of large language models and foundation models domestically</li>
            <li><strong>Economic Diversification:</strong> Positions AI infrastructure as post-oil revenue source</li>
            <li><strong>Geopolitical Positioning:</strong> Establishes GCC as global AI infrastructure hub</li>
            <li><strong>Long-term Capacity Security:</strong> Guarantees access to scarce compute resources through 2035+</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">From Black Gold to Silicon Gold</h2>
          <p className="text-foreground">
            The $3.6 trillion deployment represents a fundamental transformation in how Gulf sovereign wealth funds view strategic infrastructure. Just as oil and gas pipelines, refineries, and export terminals defined 20th-century Gulf infrastructure, AI data centers, GPU clusters, and high-speed interconnects are emerging as the critical infrastructure of the 21st century.
          </p>
          <p className="text-foreground">
            This transition is not merely financial—it reflects a recognition that computational power is becoming as strategically important as energy resources. Nations that control AI infrastructure will shape the development, deployment, and governance of artificial intelligence systems globally.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Global AI Infrastructure Hub</h2>
          <p className="text-foreground">
            The scale of investment positions the GCC as a global AI infrastructure hub, potentially rivaling traditional tech centers in the United States and China. With guaranteed access to millions of advanced GPUs and gigawatts of data center capacity, the region can offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Competitive pricing for AI model training and inference</li>
            <li>Geographic diversity for redundancy and latency optimization</li>
            <li>Regulatory environments designed to attract AI companies</li>
            <li>Integration with regional markets across MENA and South Asia</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Timeline & Deployment</h2>
          <p className="text-foreground">
            The 2-4 year horizon reflects the time required to construct hyperscale data centers, install GPU clusters, and establish operational capabilities. Major milestones include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>2026:</strong> First wave of Blackwell GPU deliveries, initial hyperscale facilities operational</li>
            <li><strong>2027-2028:</strong> Majority of 5.5 GW UAE capacity comes online, regional interconnection established</li>
            <li><strong>2029-2030:</strong> Full ecosystem operational, indigenous AI models trained at scale</li>
          </ul>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Why This Matters</h3>
            <p className="text-foreground mb-4">
              The $3.6 trillion GCC investment in AI infrastructure represents the largest sovereign commitment to artificial intelligence in history, fundamentally altering the global distribution of computational power. This is not venture capital or speculative investment—it is strategic infrastructure deployment comparable to the construction of oil refineries, ports, and telecommunications networks that defined previous economic eras.
            </p>
            <p className="text-foreground mb-4">
              For the GCC region, this investment secures computational sovereignty for the next decade, enabling indigenous AI development without dependency on Western cloud providers. The scale of GPU procurement (millions of NVIDIA Blackwell units) and data center capacity (5.5 GW under development in UAE alone) positions the Gulf as a global AI infrastructure hub, potentially rivaling Silicon Valley and Shenzhen.
            </p>
            <p className="text-foreground">
              Globally, this shifts the center of gravity for AI infrastructure eastward. Nations and companies seeking access to cutting-edge compute capacity will increasingly look to the GCC, not just California or Beijing. The "Black Gold to Silicon Gold" transition is not metaphorical—it represents a generational transformation in how the Gulf nations position themselves in the global economy.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related Intelligence</h3>
            <div className="grid gap-4">
              <Link href="/intelligence/signal-045">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">HUMAIN's $1.2B Saudi AI Data Center Framework</h4>
                  <p className="text-sm text-muted-foreground mt-1">Institutional-grade AI infrastructure platforms</p>
                </div>
              </Link>
              <Link href="/intelligence/signal-047">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Qatar Investment Authority Backs d-Matrix</h4>
                  <p className="text-sm text-muted-foreground mt-1">Strategic AI inference infrastructure investment</p>
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
