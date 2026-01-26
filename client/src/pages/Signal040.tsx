import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";

export default function Signal040() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Intelligence
          </Button>
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-accent">SIGNAL #040</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Jan 25, 2026</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-accent">GCC-Wide</span>
          </div>
          <ShareButton
            title="Signal #040: GCC Compute Sovereignty Imperative — 400K-500K GPUs Required by 2028"
            description="Strategy& (PwC) forecasts GCC will need 400,000-500,000 GPUs by 2028 for AI sovereignty—2-2.5x xAI's Colossus supercomputer. Region on track to export compute power."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          GCC Compute Sovereignty Imperative — 400K-500K GPUs Required by 2028
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Strategy& (PwC) forecasts GCC will need 400,000-500,000 GPUs by 2028 for AI sovereignty—2-2.5x xAI's Colossus supercomputer (200K GPUs). Demand driven by real-time inference, local model training (Allam, Falcon, Fanar), and fine-tuning global models. Region on track to not only meet local demand but export compute power.
        </p>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Impact Score</div>
            <div className="text-2xl font-bold text-accent">9.5/10</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Category</div>
            <div className="font-medium">Infrastructure</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Horizon</div>
            <div className="font-medium">1–3y</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Sector</div>
            <div className="font-medium">Infrastructure</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>The Compute Imperative</h2>
          <p>
            The Gulf's AI journey is entering a transformative phase. AI is shifting from experimentation to scale, agentic systems are proliferating, and Gulf nations are building AI ecosystems featuring homegrown champions and local models, such as KSA's Allam, UAE's Falcon, and Qatar's Fanar.
          </p>
          <p>
            This phase of AI development requires a critical enabler: <strong>sovereign compute processing power at scale</strong>. Strategy& (PwC) analysis reveals that the region will need <strong>400,000–500,000 GPUs by 2028</strong>.
          </p>

          <h2>Context: Unprecedented Scale</h2>
          <p>
            To understand the magnitude of this demand:
          </p>
          <ul>
            <li><strong>xAI's Colossus</strong> currently uses 200,000 GPUs (with trajectory towards 1,000,000)</li>
            <li><strong>GCC's 400K-500K GPU requirement</strong> is 2-2.5x the current largest supercomputer</li>
            <li>This positions the GCC as one of the world's largest AI compute hubs</li>
          </ul>

          <h2>Demand Drivers</h2>
          <p>
            The greatest demand for compute power will come from three sources:
          </p>
          <ol>
            <li><strong>Real-time, low-latency inference</strong> (largest demand) — AI models processing data in production environments</li>
            <li><strong>Local model training</strong> — Building sovereign models like Allam, Falcon, and Fanar</li>
            <li><strong>Fine-tuning global models</strong> — Adapting international models for regional and sector-specific applications</li>
          </ol>
          <p>
            Data sovereignty mandates require that government, regulated industries, and critical infrastructure use local compute—creating structural demand that cannot be met by cloud providers alone.
          </p>

          <h2>Export Ambitions</h2>
          <p>
            With initiatives such as KSA's HUMAIN AI data center and UAE's Stargate project, the region is on track to not only meet local GPU demand, but also <strong>export compute power</strong>—positioning the GCC as a global AI infrastructure hub.
          </p>

          <h2>Strategic Risks</h2>
          <p>
            Strategy& identifies five critical risks to compute sovereignty:
          </p>
          <ol>
            <li><strong>Supply Chain Vulnerability:</strong> GPUs shipped gradually over years, vulnerable to export controls and geopolitical shifts</li>
            <li><strong>Technology Refresh Cycles:</strong> Each refresh renews dependence on external supply chains (NVIDIA, AMD, Cerebras)</li>
            <li><strong>Demand Volatility:</strong> Rapid changes in AI adoption could create overcapacity or shortages</li>
            <li><strong>Energy Constraints:</strong> Rising energy demand from AI workloads could strain energy systems</li>
            <li><strong>Capacity Allocation:</strong> Critical government/security workloads crowded out by commercial/export demand</li>
          </ol>

          <h2>Mitigation Strategies</h2>
          <p>
            Gulf governments can address these risks through multi-layered strategies:
          </p>
          <ul>
            <li><strong>Secure Supply Chains:</strong> Maintain GPU reserves, diversify vendors, long-term contracts with chipmakers</li>
            <li><strong>Local Ecosystem:</strong> Build semiconductor design/manufacturing capabilities (KSA's Alat, National Semiconductor Hub)</li>
            <li><strong>Regional Cooperation:</strong> Gulf-wide compute infrastructure initiative (like EU's HPC Joint Undertaking)</li>
            <li><strong>Capacity Governance:</strong> Allocation rules to preserve capacity for essential applications</li>
            <li><strong>Continuous Forecasting:</strong> Compute usage observatories integrated with energy planning</li>
          </ul>

          <h2>Investment Angle</h2>
          <p>
            <strong>Semiconductor Supply Chain Localization:</strong> Opportunities in design, manufacturing, data center operations, and GPU reserves management. KSA's Alat and National Semiconductor Hub initiatives signal serious commitment to reducing external dependencies.
          </p>
          <p>
            <strong>Energy Infrastructure for AI:</strong> Cooling systems, power generation, grid optimization—rising energy demand from 400K-500K GPUs will require massive infrastructure investment.
          </p>
          <p>
            <strong>Compute-as-a-Service Platforms:</strong> Leveraging GCC sovereign capacity for export to regions with compute shortages or data sovereignty concerns.
          </p>

          <h2>Premium Intelligence</h2>
          <p className="p-6 rounded-lg bg-accent/10 border border-accent/20">
            <strong>Unlock Full Analysis:</strong> Detailed breakdown of GPU demand by country, sector-specific compute requirements, energy infrastructure investment forecasts, and semiconductor supply chain opportunities. Access premium Sentinel briefs covering compute sovereignty frameworks and regional cooperation models.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/premium">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Premium Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
