import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Agent {
  name: string;
  slug: string;
  website: string;
  category: string;
  sectors: string[];
  deployment: string[];
  gcc: {
    uae_compliant: boolean;
    saudi_compliant: boolean;
    qatar_sovereign_cloud_compatible: boolean;
    arabic_nlp_quality: string;
    local_support: string;
  };
  scores: {
    residency_hosting: number;
    arabic_support: number;
    deployment_model: number;
    security_enterprise: number;
    sector_fit: number;
  };
  badges: string[];
  sentinel_brief: string;
  risk_snapshot: string;
  adoption_outlook: string;
  recommended_use_case: string;
}

interface AgentsData {
  updated: string;
  agents: Agent[];
}

// Hardcoded 3 real companies from the full report
const STATIC_AGENTS: Agent[] = [
  {
    name: "G42",
    slug: "g42",
    website: "https://www.g42.ai/",
    category: "Enterprise AI",
    sectors: ["Technology", "Healthcare", "Government"],
    deployment: ["Cloud", "Hybrid"],
    gcc: {
      uae_compliant: true,
      saudi_compliant: true,
      qatar_sovereign_cloud_compatible: true,
      arabic_nlp_quality: "High",
      local_support: "Available"
    },
    scores: {
      residency_hosting: 5,
      arabic_support: 4,
      deployment_model: 5,
      security_enterprise: 5,
      sector_fit: 4
    },
    badges: ["Enterprise", "GovTech"],
    sentinel_brief: "National technology holding group, AI and cloud computing leader in UAE",
    risk_snapshot: "Tier 1 national champion with government backing",
    adoption_outlook: "Enterprise-Ready",
    recommended_use_case: "Large-scale AI infrastructure, government projects, healthcare AI"
  },
  {
    name: "SDAIA (Saudi Data & AI Authority)",
    slug: "sdaia",
    website: "https://sdaia.gov.sa/",
    category: "Government AI",
    sectors: ["Government", "Technology"],
    deployment: ["Hybrid", "On-Premise"],
    gcc: {
      uae_compliant: false,
      saudi_compliant: true,
      qatar_sovereign_cloud_compatible: false,
      arabic_nlp_quality: "Excellent",
      local_support: "Available"
    },
    scores: {
      residency_hosting: 5,
      arabic_support: 5,
      deployment_model: 5,
      security_enterprise: 5,
      sector_fit: 5
    },
    badges: ["Government", "Regulated"],
    sentinel_brief: "Saudi Data and AI Authority, national AI strategy and governance",
    risk_snapshot: "Government entity driving Vision 2030 AI initiatives",
    adoption_outlook: "Enterprise-Ready",
    recommended_use_case: "Government AI projects, national data governance, smart city initiatives"
  },
  {
    name: "Core42",
    slug: "core42",
    website: "https://core42.ai/",
    category: "Enterprise AI",
    sectors: ["Technology", "Cloud Services"],
    deployment: ["Cloud", "Hybrid"],
    gcc: {
      uae_compliant: true,
      saudi_compliant: true,
      qatar_sovereign_cloud_compatible: false,
      arabic_nlp_quality: "Medium",
      local_support: "Available"
    },
    scores: {
      residency_hosting: 5,
      arabic_support: 3,
      deployment_model: 5,
      security_enterprise: 5,
      sector_fit: 3
    },
    badges: ["Enterprise", "Cloud"],
    sentinel_brief: "G42's national-scale AI enablement and sovereign cloud services",
    risk_snapshot: "Tier 1 company, part of G42 ecosystem",
    adoption_outlook: "Enterprise-Ready",
    recommended_use_case: "Sovereign cloud infrastructure, AI model deployment, enterprise AI solutions"
  },
  {
    name: "HUMAIN",
    slug: "humain",
    website: "https://www.humain.com/",
    category: "Enterprise AI",
    sectors: ["Technology", "Government", "Cloud Services", "AI Infrastructure"],
    deployment: ["Cloud", "Hybrid", "On-Premise"],
    gcc: {
      uae_compliant: true,
      saudi_compliant: true,
      qatar_sovereign_cloud_compatible: true,
      arabic_nlp_quality: "Excellent",
      local_support: "Available"
    },
    scores: {
      residency_hosting: 5,
      arabic_support: 5,
      deployment_model: 5,
      security_enterprise: 5,
      sector_fit: 5
    },
    badges: ["Enterprise", "GovTech", "National Champion"],
    sentinel_brief: "Saudi Arabia's sovereign AI powerhouse, full-stack AI ecosystem from data centers to applications",
    risk_snapshot: "Tier 0 national champion, PIF-owned, $23B+ partnerships",
    adoption_outlook: "Enterprise-Ready",
    recommended_use_case: "Sovereign AI infrastructure, government AI projects, enterprise intelligence platforms"
  }
];

export default function Directory() {
  const { trackButtonClick, trackPurchaseIntent } = useAnalytics();
  const [agents] = useState<Agent[]>(STATIC_AGENTS);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [deploymentFilter, setDeploymentFilter] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");
  const [gccFilter, setGccFilter] = useState("");
  const [sortBy, setSortBy] = useState("score_desc");
  const [categories] = useState<string[]>(["Enterprise AI", "Government AI"]);
  const [deployments] = useState<string[]>(["Cloud", "Hybrid", "On-Premise"]);
  const [sectors] = useState<string[]>(["Technology", "Government", "Healthcare", "Cloud Services", "AI Infrastructure"]);

  // No need to load data - using static agents

  // Filter and sort agents
  useEffect(() => {
    let filtered = agents;

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.sectors.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter((a) => a.category === categoryFilter);
    }

    // Deployment filter
    if (deploymentFilter && deploymentFilter !== "all") {
      filtered = filtered.filter((a) => a.deployment.includes(deploymentFilter));
    }

    // Sector filter
    if (sectorFilter && sectorFilter !== "all") {
      filtered = filtered.filter((a) => a.sectors.includes(sectorFilter));
    }

    // GCC compliance filter
    if (gccFilter && gccFilter !== "any") {
      filtered = filtered.filter((a) => {
        if (gccFilter === "uae") return a.gcc.uae_compliant;
        if (gccFilter === "saudi") return a.gcc.saudi_compliant;
        if (gccFilter === "qatar") return a.gcc.qatar_sovereign_cloud_compatible;
        return true;
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      const scoreA = Object.values(a.scores).reduce((sum, val) => sum + val, 0);
      const scoreB = Object.values(b.scores).reduce((sum, val) => sum + val, 0);

      if (sortBy === "score_desc") return scoreB - scoreA;
      if (sortBy === "score_asc") return scoreA - scoreB;
      if (sortBy === "name_asc") return a.name.localeCompare(b.name);
      if (sortBy === "name_desc") return b.name.localeCompare(a.name);
      return 0;
    });

    setFilteredAgents(filtered);
  }, [agents, search, categoryFilter, deploymentFilter, sectorFilter, gccFilter, sortBy]);

  const getStatusColor = (outlook: string) => {
    if (outlook === "Enterprise-Ready") return "bg-status-ready text-white";
    if (outlook === "Emerging") return "bg-status-emerging text-black";
    return "bg-status-not-ready text-white";
  };

  const getTotalScore = (agent: Agent) => {
    return Object.values(agent.scores).reduce((sum, val) => sum + val, 0);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">AI Players Directory</h1>
          <p className="text-muted-foreground text-lg">
            Strategic intelligence directory of AI agents and enterprise tools with GCC readiness
            scoring.
          </p>
        </div>

        {/* Beta Version Notice */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-l-4 border-emerald-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-2xl">🚧</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 text-emerald-600 dark:text-emerald-400">Beta Version — Manual Curation</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                This directory is currently <strong>manually curated</strong> with a limited selection of verified AI companies. We're showcasing 4 entries as a preview of our intelligence methodology and scoring framework.
              </p>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                <strong>Full automation is coming.</strong> According to our <a href="/about" className="text-emerald-600 dark:text-emerald-400 underline hover:no-underline">roadmap</a>, we will develop our proprietary AI scraping agent during the Seed phase (post-MVP traction). This agent will automatically discover, verify, and score 500+ companies across the GCC, with real-time updates.
              </p>
              <p className="text-sm text-muted-foreground italic mb-4">
                AgentDubai grows alongside our funding milestones: <strong>Beta</strong> (manual curation) → <strong>Pre-seed</strong> (team building, subscription launch) → <strong>Seed</strong> (proprietary AI agent, full automation).
              </p>
              
              {/* Early Access Waitlist */}
              <div className="mt-4 pt-4 border-t border-emerald-500/30">
                <p className="text-sm font-semibold mb-2 text-emerald-600 dark:text-emerald-400">Get Notified When Full Directory Launches</p>
                <WaitlistForm source="directory" />
              </div>
            </div>
          </div>
        </div>

        {/* Free Version Notice & Buy Button */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Free Preview — 4 Results Shown</h3>
              <p className="text-muted-foreground">
                Access the complete directory with 500+ AI agents across GCC, detailed compliance data, and monthly updates.
              </p>
            </div>
            <a
              href="https://agentdubai.gumroad.com/l/gcc-ai-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
              onClick={() => {
                trackButtonClick('buy_full_report_directory', 'gumroad');
                trackPurchaseIntent('GCC AI Directory - Full Report', 299);
              }}
            >
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Buy Full Report →
              </button>
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Search
              </label>
              <Input
                placeholder="Search by name, category, sector..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Category
              </label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Deployment
              </label>
              <Select value={deploymentFilter} onValueChange={setDeploymentFilter}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="All deployments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All deployments</SelectItem>
                  {deployments.map((dep) => (
                    <SelectItem key={dep} value={dep}>
                      {dep}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Sector
              </label>
              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="All sectors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All sectors</SelectItem>
                  {sectors.map((sec) => (
                    <SelectItem key={sec} value={sec}>
                      {sec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                GCC Compliance
              </label>
              <Select value={gccFilter} onValueChange={setGccFilter}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="uae">UAE-compliant</SelectItem>
                  <SelectItem value="saudi">Saudi-compliant</SelectItem>
                  <SelectItem value="qatar">Qatar sovereign cloud</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score_desc">Score (High → Low)</SelectItem>
                  <SelectItem value="score_asc">Score (Low → High)</SelectItem>
                  <SelectItem value="name_asc">Name (A → Z)</SelectItem>
                  <SelectItem value="name_desc">Name (Z → A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="text-xs">
              0–10: Not Ready
            </Badge>
            <Badge variant="outline" className="text-xs">
              11–17: Emerging
            </Badge>
            <Badge variant="outline" className="text-xs">
              18–25: Enterprise-Ready
            </Badge>
            <div className="ml-auto text-sm text-muted-foreground">
              3 of {agents.length} agents
            </div>
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.slice(0, 4).map((agent) => {
            const totalScore = getTotalScore(agent);
            return (
              <div
                key={agent.slug}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">{agent.category}</p>
                  </div>
                  <Badge className={`${getStatusColor(agent.adoption_outlook)} text-xs`}>
                    {agent.adoption_outlook}
                  </Badge>
                </div>

                {/* Score Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">Readiness</span>
                    <span className="text-sm font-bold text-accent">{totalScore}/25</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${(totalScore / 25) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Sectors & Deployment */}
                <div className="mb-4 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {agent.sectors.map((sector) => (
                      <Badge key={sector} variant="secondary" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {agent.deployment.map((dep) => (
                      <Badge key={dep} variant="outline" className="text-xs">
                        {dep}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Brief */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {agent.sentinel_brief}
                </p>

                {/* GCC Compliance */}
                <div className="mb-4 p-3 bg-secondary rounded-md">
                  <p className="text-xs font-medium text-muted-foreground mb-2">GCC Status</p>
                  <div className="space-y-1 text-xs">
                    {agent.gcc.uae_compliant && (
                      <div className="text-accent">✓ UAE-compliant</div>
                    )}
                    {agent.gcc.saudi_compliant && (
                      <div className="text-accent">✓ Saudi-compliant</div>
                    )}
                    {agent.gcc.qatar_sovereign_cloud_compatible && (
                      <div className="text-accent">✓ Qatar sovereign cloud</div>
                    )}
                    {!agent.gcc.uae_compliant &&
                      !agent.gcc.saudi_compliant &&
                      !agent.gcc.qatar_sovereign_cloud_compatible && (
                        <div className="text-muted-foreground">No GCC compliance verified</div>
                      )}
                  </div>
                </div>

                {/* Website Link */}
                <a
                  href={agent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No agents found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
