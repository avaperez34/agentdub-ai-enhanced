import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function Signal067() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/intelligence">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors">
              <ArrowLeft size={18} />
              Back to Intelligence
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded">
              SIGNAL #067
            </span>
            <span className="text-xs text-muted-foreground">Feb 6, 2026</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Qatar NPC Launches Enterprise AI Transformation Initiative with Microsoft Partnership
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Government-scale AI deployment moving from policy to operational implementation
          </p>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-accent/20 text-accent text-sm font-medium">
              Government Implementation
            </span>
            <span className="px-3 py-1 rounded bg-secondary text-secondary-foreground text-sm">
              Impact: 8.7/10
            </span>
            <span className="px-3 py-1 rounded bg-secondary text-secondary-foreground text-sm">
              Horizon: 1-2 years
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-6">
            At Web Summit Qatar 2026, Qatar's National Planning Council (NPC) announced a comprehensive AI transformation initiative anchored on three strategic priorities. The initiative represents a significant shift from policy announcements to operational AI deployment across government institutions.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Three Strategic Priorities</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">1. Scaling Microsoft 365 Copilot Adoption</h3>
          <p className="text-muted-foreground mb-4">
            The NPC is rolling out Microsoft 365 Copilot across all government departments. This AI-powered assistant integrates directly into familiar Microsoft applications, enabling employees to leverage AI without extensive training or workflow disruption. The focus is on rapid, organization-wide adoption through existing tools.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">2. Enhancing Operational Efficiency Through AI Tools</h3>
          <p className="text-muted-foreground mb-4">
            Beyond Copilot, the NPC is deploying specialized AI tools designed to automate repeatable processes and streamline workflows. Key focus areas include document processing, data analysis, scheduling, and inter-departmental coordination. The goal is to reduce manual effort and accelerate decision-making cycles.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">3. Cementing NPC as AI Frontier Organization</h3>
          <p className="text-muted-foreground mb-4">
            The NPC aims to position itself as a regional leader in government AI adoption. This includes establishing clear governance frameworks, training programs, and best practice documentation that can be shared across GCC government entities. The initiative signals Qatar's commitment to AI-driven governance modernization.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Implementation Framework</h2>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Clear Governance Frameworks</h3>
          <p className="text-muted-foreground mb-4">
            The initiative includes explicit governance structures defining:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Data access and security protocols for AI systems</li>
            <li>Decision-making authority for AI-assisted processes</li>
            <li>Audit and compliance requirements</li>
            <li>Employee training and capability development</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6">Employee Empowerment</h3>
          <p className="text-muted-foreground mb-4">
            Employees are empowered to streamline routine tasks and boost productivity within familiar Microsoft 365 applications. The approach emphasizes augmentation rather than replacement, positioning AI as a tool to enhance human capability rather than eliminate roles.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Strategic Alignment</h3>
          <p className="text-muted-foreground mb-4">
            The initiative aligns with Qatar's broader national development strategies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Qatar National Vision 2030 - Digital transformation as core pillar</li>
            <li>Third National Development Strategy 2024-2030 - Government modernization</li>
            <li>Digital Government Strategy - Citizen-centric service delivery</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Significance for GCC</h2>
          <p className="text-muted-foreground mb-6">
            This initiative demonstrates that GCC governments are moving beyond policy discussions to operational AI implementation. Key implications:
          </p>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li><strong>Government as Early Adopter:</strong> Public sector leading private sector in AI adoption maturity</li>
            <li><strong>Standardization:</strong> Government-led initiatives establishing baseline AI practices across sectors</li>
            <li><strong>Talent Development:</strong> Large-scale government training creating AI-literate workforce</li>
            <li><strong>Regional Leadership:</strong> Qatar positioning itself as AI governance innovator within GCC</li>
            <li><strong>Vendor Partnerships:</strong> Strategic technology partnerships (Microsoft) enabling rapid deployment</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Outlook</h2>
          <p className="text-muted-foreground mb-6">
            The Qatar NPC initiative represents a maturation of GCC AI strategy from theoretical frameworks to practical deployment. As government operations become AI-augmented, the region will likely see cascading adoption across private sector, education, and healthcare. The governance frameworks established by the NPC may become templates for other GCC entities and regional governments.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-8 border-t border-border">
          <ShareButton
            title="Qatar NPC Launches Enterprise AI Transformation Initiative with Microsoft Partnership"
            url={`${typeof window !== 'undefined' ? window.location.origin : ''}/signals/067`}
          />
          <Button variant="outline" size="sm">
            <Bookmark size={16} className="mr-2" />
            Save Signal
          </Button>
        </div>
      </div>
    </div>
  );
}
