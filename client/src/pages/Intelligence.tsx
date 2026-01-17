import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Share2, Building2, Users, AlertTriangle, TrendingUp, GitCompare, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { SignalComparison } from "@/components/SignalComparison";

const signals = [
  // Execution & Sovereign Grade (By Country)
  {
    id: "001",
    title: "Agentic AI Deployed at Scale in Abu Dhabi Logistics",
    description:
      "AD Ports Group has deployed large-scale autonomous AI agents across its logistics operations in Abu Dhabi, marking a transition from AI pilots to production-level execution inside core national infrastructure.",
    sector: "Infrastructure",
    impact: 8.2,
    horizon: "3–7y",
    country: "UAE",
    category: "execution",
    date: "2025-01-10",
  },
  {
    id: "003",
    title: "Agentic AI Embedded into Saudi Government Service Delivery",
    description:
      "Saudi Arabia is integrating AI-driven automation into government service delivery, moving beyond pilots toward execution-layer workflows with institutional governance.",
    sector: "GovTech",
    impact: 8.0,
    horizon: "3–7y",
    country: "Saudi Arabia",
    category: "execution",
    date: "2025-01-08",
  },
  {
    id: "004",
    title: "NEOM's AI-Powered Cognitive City Infrastructure",
    description:
      "Saudi Arabia's $500B NEOM project deploys unprecedented AI infrastructure, positioning the Kingdom as a global leader in cognitive city development with implications for the entire GCC.",
    sector: "Smart Cities",
    impact: 9.2,
    horizon: "5–10y",
    country: "Saudi Arabia",
    category: "execution",
    date: "2025-01-05",
  },
  {
    id: "005",
    title: "Qatar's AI-Driven Legacy Infrastructure Post-World Cup",
    description:
      "Qatar repurposes $200B World Cup infrastructure with AI systems for stadium management, transportation, and smart city operations, creating an event-driven AI blueprint.",
    sector: "Smart Infrastructure",
    impact: 7.2,
    horizon: "3–5y",
    country: "Qatar",
    category: "execution",
    date: "2025-01-03",
  },
  {
    id: "006",
    title: "Kuwait's Quiet AI Transformation - $1.1B Digital Infrastructure Play",
    description:
      "Kuwait deploys $1.1B in digital infrastructure and leverages sovereign wealth partnerships to build AI-first government services and energy optimization systems, demonstrating a pragmatic alternative to UAE/Saudi AI strategies.",
    sector: "Government AI",
    impact: 8.4,
    horizon: "2–4y",
    country: "Kuwait",
    category: "execution",
    date: "2024-12-28",
  },
  // Leadership Intelligence (By Company)
  {
    id: "002",
    title: "AI Service Agents Embedded in Dubai Utility Operations",
    description:
      "Dubai Electricity and Water Authority (DEWA) has embedded AI-driven service agents into live customer and internal utility workflows, demonstrating production-grade agent deployment inside a regulated public infrastructure environment.",
    sector: "Regulation",
    impact: 7.4,
    horizon: "1–3y",
    country: "UAE",
    category: "leadership",
    date: "2025-01-09",
  },
  {
    id: "007",
    title: "Dubai Appoints 22 Chief AI Officers - The Executive Talent War Begins",
    description:
      "Dubai government appoints 22 Chief AI Officers across key entities as part of DUB.AI strategy, signaling the start of an intense competition for AI leadership talent across GCC public and private sectors.",
    sector: "Leadership",
    impact: 8.7,
    horizon: "1–2y",
    country: "UAE",
    category: "leadership",
    date: "2024-12-20",
  },
  // Failure Analysis
  {
    id: "008",
    title: "The 73% AI Value Gap - Why GCC Organizations Fail to Scale",
    description:
      "Despite 84% adoption rate, only 11% of GCC organizations realize value from AI investments. The 73-point gap reveals a critical execution crisis: most AI projects never escape pilot phase.",
    sector: "Failure Analysis",
    impact: 9.1,
    horizon: "0–1y",
    country: "GCC-Wide",
    category: "failure",
    date: "2024-12-15",
  },
  // Capital & Announcements
  {
    id: "009",
    title: "Middle East VC Hits Record $3.8B - Saudi Captures 77% of November Funding",
    description:
      "Middle East venture capital surged 74% to $3.8B across 688 deals in 2025. AI-related funding jumped 204% to $817M, with Saudi Arabia dominating the capital landscape and capturing majority of late-stage rounds.",
    sector: "Venture Capital",
    impact: 8.9,
    horizon: "0–1y",
    country: "GCC-Wide",
    category: "capital",
    date: "2024-12-10",
  },
  {
    id: "010",
    title: "GCC Commits $100B Annually to AI Infrastructure - Sovereign Compute Era Begins",
    description:
      "Middle East to invest $100B annually by 2026 in AI infrastructure. Qatar and UAE join US-led Pax Silica initiative. Stargate's $500B data center signals GCC's transformation into global AI inference hub.",
    sector: "Infrastructure",
    impact: 9.5,
    horizon: "3–7y",
    country: "GCC-Wide",
    category: "capital",
    date: "2024-12-05",
  },
  {
    id: "011",
    title: "Abu Dhabi Creates Fourth Sovereign Wealth Engine — L'IMAD Signals Capital Reallocation Era",
    description:
      "Abu Dhabi launches L'IMAD Holding as its fourth sovereign investment platform alongside ADIA ($1.1T), Mubadala ($330B), and ADQ ($263B). The new fund targets infrastructure, financial services, advanced technology, and urban mobility with Crown Prince Sheikh Khaled as chairman.",
    sector: "Sovereign Wealth",
    impact: 8.9,
    horizon: "3–7y",
    country: "UAE",
    category: "capital",
    date: "2026-01-15",
  },
  {
    id: "012",
    title: "Dubai's Red Carpet Eliminates Border Friction — AI Redefines Immigration at Scale",
    description:
      "Dubai launches the Red Carpet Smart Corridor at Dubai International Airport, a world-first AI-powered immigration system that eliminates physical passport checks. Passengers clear immigration in 6 seconds without stopping, documents, or counters.",
    sector: "Infrastructure",
    impact: 8.7,
    horizon: "3–7y",
    country: "UAE",
    category: "execution",
    date: "2026-01-15",
  },
  {
    id: "013",
    title: "Saudi Arabia Launches 480-MW Hexagon Data Center — World's Largest Government-Owned Facility",
    description:
      "Saudi Arabia's SDAIA unveils the Hexagon Data Center in Riyadh—a 480-megawatt, 30+ million square foot facility certified at Tier IV reliability, positioning the Kingdom in the global compute race with sovereign AI infrastructure.",
    sector: "Infrastructure",
    impact: 9.0,
    horizon: "3–7y",
    country: "Saudi Arabia",
    category: "execution",
    date: "2026-01-16",
  },
  {
    id: "014",
    title: "Saudi Arabia Ranks 5th Globally in AI Growth, 3rd in Model Development",
    description:
      "Saudi Arabia secured 5th place globally and 1st in the Middle East for AI growth in the 2025 Global AI Index. More striking: the Kingdom ranks 3rd worldwide in advanced AI model development, trailing only the US and China.",
    sector: "Leadership",
    impact: 8.8,
    horizon: "2–5y",
    country: "Saudi Arabia",
    category: "leadership",
    date: "2026-01-16",
  },
  {
    id: "015",
    title: "UAE Joins US-Led Pax Silica Alliance — Securing AI Supply Chains",
    description:
      "On January 15, 2026, the UAE signed the Pax Silica declaration, joining a US-led coalition to secure AI and semiconductor supply chains from raw materials to inference infrastructure.",
    sector: "Capital",
    impact: 8.9,
    horizon: "5–10y",
    country: "UAE",
    category: "capital",
    date: "2026-01-16",
  },
  {
    id: "016",
    title: "Abu Dhabi Positions as AI Energy Corridor — Molecules, Gigawatts, Partnership",
    description:
      "At Abu Dhabi Sustainability Week 2026, Dr. Sultan Al Jaber declared that 'the corridor to the future runs through the UAE,' positioning Abu Dhabi as the energy backbone of the AI era.",
    sector: "Infrastructure",
    impact: 8.6,
    horizon: "3–7y",
    country: "UAE",
    category: "execution",
    date: "2026-01-16",
  },
  {
    id: "017",
    title: "UN Recognizes Qatar's Digital Agenda 2030 as Global Best Practice",
    description:
      "UNDESA included Qatar's Digital Agenda 2030 in its global compendium of best practices in digital government, positioning Qatar's governance-first framework as an exemplary model for digital transformation.",
    sector: "Governance",
    impact: 8.4,
    horizon: "3–7y",
    country: "Qatar",
    category: "leadership",
    date: "2026-01-16",
  },
  {
    id: "018",
    title: "Qatar Joins Pax Silica — US Says Qatar to Play Central Role in AI-Era Economic Order",
    description:
      "On January 12, 2026, Qatar became the first Gulf state to sign the Pax Silica declaration, with the US stating Qatar is 'set to play a central role in shaping the emerging AI-era economic order.'",
    sector: "Capital",
    impact: 8.7,
    horizon: "5–10y",
    country: "Qatar",
    category: "capital",
    date: "2026-01-16",
  },
  {
    id: "019",
    title: "Oman's AI Ecosystem Reaches $169M Investment Across 46 Companies",
    description:
      "Oman's AI sector has attracted $169 million in investment across 46 companies, reflecting the Sultanate's strategy to position itself as a niche AI player focused on logistics, energy, and tourism applications.",
    sector: "Capital",
    impact: 7.8,
    horizon: "2–5y",
    country: "Oman",
    category: "capital",
    date: "2026-01-16",
  },
  {
    id: "020",
    title: "Bahrain's stc-Huawei TechCo Transformation — Telecom Pivots to AI Services",
    description:
      "Bahrain's stc partnered with Huawei to transform from a traditional telecom operator into a TechCo offering AI-driven digital services, positioning Bahrain as a testbed for AI-driven telecom services in the GCC.",
    sector: "Infrastructure",
    impact: 7.2,
    horizon: "2–4y",
    country: "Bahrain",
    category: "execution",
    date: "2026-01-16",
  },
  {
    id: "021",
    title: "Kuwait Hosts International AI Conference — Positioning as Regional Convening Hub",
    description:
      "Kuwait hosted an International AI Conference in January 2026, positioning the country as a neutral convening hub for AI policy dialogue and producing the Kuwait Declaration on AI Governance.",
    sector: "Leadership",
    impact: 6.5,
    horizon: "3–5y",
    country: "Kuwait",
    category: "leadership",
    date: "2026-01-16",
  },
  {
    id: "022",
    title: "UAE Retains #1 Global AI Adoption Ranking — Microsoft Report Validates Leadership",
    description:
      "Microsoft AI Diffusion Report January 2026 confirms UAE as world leader in AI adoption, providing third-party validation of strategic infrastructure investments and policy frameworks.",
    sector: "Leadership",
    impact: 8.8,
    horizon: "1–3y",
    country: "UAE",
    category: "leadership",
    date: "2026-01-16",
  },
  {
    id: "023",
    title: "World Government Summit 2026 — Dubai as Global AI Governance Hub",
    description:
      "35 heads of state, 150+ ministers, and CEOs from Airbus, IBM, Google DeepMind convene in Dubai for AI governance dialogue, positioning Emirates as neutral ground for global technology policy.",
    sector: "Governance",
    impact: 8.5,
    horizon: "3–5y",
    country: "UAE",
    category: "leadership",
    date: "2026-01-16",
  },
];

const categories = [
  {
    id: "execution",
    name: "Execution & Sovereign Grade",
    description: "National AI strategies, government initiatives, and sovereign infrastructure deployment by country",
    icon: Building2,
    color: "text-blue-500",
  },
  {
    id: "leadership",
    name: "Leadership Intelligence",
    description: "CEO/CTO movements, VVIP recruitment, and key executive appointments in GCC AI ecosystem",
    icon: Users,
    color: "text-emerald-500",
  },
  {
    id: "failure",
    name: "Failure Analysis",
    description: "Failed projects, shutdowns, pivots, and lessons from the GCC AI ecosystem",
    icon: AlertTriangle,
    color: "text-amber-500",
  },
  {
    id: "capital",
    name: "Capital & Announcements",
    description: "Funding rounds, M&A activity, major partnerships, and investment trends",
    icon: TrendingUp,
    color: "text-purple-500",
  },
];

const countries = ["All Countries", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "GCC-Wide"];
const sectors = ["All Sectors", "Infrastructure", "GovTech", "Smart Cities", "Smart Infrastructure", "Government AI", "Regulation", "Leadership", "Failure Analysis", "Venture Capital", "Sovereign Wealth"];

const ITEMS_PER_PAGE = 6;

export default function Intelligence() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "AgentDubai — Intelligence feed (Sentinel Signals)."
  );

  // Advanced filtering and search
  const filteredSignals = useMemo(() => {
    let result = signals;

    // Category filter
    if (selectedCategory) {
      result = result.filter((s) => s.category === selectedCategory);
    }

    // Country filter
    if (selectedCountry !== "All Countries") {
      result = result.filter((s) => s.country === selectedCountry);
    }

    // Sector filter
    if (selectedSector !== "All Sectors") {
      result = result.filter((s) => s.sector === selectedSector);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.sector.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "impact") {
      result = [...result].sort((a, b) => b.impact - a.impact);
    }

    return result;
  }, [selectedCategory, selectedCountry, selectedSector, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredSignals.length / ITEMS_PER_PAGE);
  const paginatedSignals = filteredSignals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedCountry, selectedSector, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Intelligence</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            The live feed of <strong>AgentDubai Sentinel Signals</strong> — deep strategic analysis
            designed for decision-makers. Unlike daily news, these signals provide structured,
            repeatable intelligence frameworks on Dubai & GCC AI transformation with long-term
            implications, impact scores, and investment theses.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline">Dubai / UAE / GCC</Badge>
            <Badge variant="outline">AI • Infrastructure • Regulation • Capital</Badge>
            <Badge variant="outline">Signal, not noise</Badge>
          </div>

          {/* Share */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
            <span className="text-sm text-muted-foreground py-2">Share:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Share2 size={16} />
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Share2 size={16} />
              X / Twitter
            </a>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="mb-8 bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-accent" />
            <h2 className="text-lg font-semibold">Filter & Search</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search signals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Country Filter */}
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sector Filter */}
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger>
                <SelectValue placeholder="Select sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Latest First</SelectItem>
                <SelectItem value="impact">Highest Impact</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredSignals.length}</span> of{" "}
            <span className="font-semibold text-foreground">{signals.length}</span> signals
          </div>
        </section>

        {/* Category Filters */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedCategory === null
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <div className="text-accent mb-2">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold mb-2">All Signals</h3>
              <p className="text-sm text-muted-foreground">View all intelligence signals</p>
            </button>

            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    selectedCategory === category.id
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className={`${category.color} mb-2`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Signals Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-6">
            {paginatedSignals.map((signal) => (
              <div
                key={signal.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs">
                        Signal {signal.id}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {signal.country}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {signal.sector}
                      </Badge>
                      <Badge
                        className={`text-xs ${
                          signal.impact >= 9
                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                            : signal.impact >= 8
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        }`}
                      >
                        Impact {signal.impact}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{signal.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{signal.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Horizon: {signal.horizon}</span>
                      <span>•</span>
                      <span>{new Date(signal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Link href={`/signals/${signal.id}`}>
                    <Button size="sm">
                      Read Full Analysis
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      if (selectedForComparison.includes(signal.id)) {
                        setSelectedForComparison(selectedForComparison.filter((id) => id !== signal.id));
                      } else if (selectedForComparison.length < 3) {
                        setSelectedForComparison([...selectedForComparison, signal.id]);
                      }
                    }}
                    disabled={selectedForComparison.length >= 3 && !selectedForComparison.includes(signal.id)}
                  >
                    <GitCompare size={16} className="mr-2" />
                    {selectedForComparison.includes(signal.id) ? "Remove from Compare" : "Compare"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </section>

        {/* Comparison Tool */}
        {selectedForComparison.length > 0 && (
          <SignalComparison
            selectedIds={selectedForComparison}
            allSignals={signals}
            onRemove={(id) => setSelectedForComparison(selectedForComparison.filter((sid) => sid !== id))}
            onClear={() => setSelectedForComparison([])}
          />
        )}
      </div>
    </div>
  );
}
