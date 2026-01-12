import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Share2, Building2, Users, AlertTriangle, TrendingUp, GitCompare } from "lucide-react";
import { useState } from "react";
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

export default function Intelligence() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);
  
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(
    "AgentDubai — Intelligence feed (Sentinel Signals)."
  );

  const filteredSignals = selectedCategory
    ? signals.filter((s) => s.category === selectedCategory)
    : signals;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Intelligence</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            The live feed of <strong>AgentDubai Sentinel Signals</strong> — structured, repeatable
            analysis designed for decision-makers. Each signal provides clear intelligence on
            Dubai & GCC AI transformation.
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
              X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Share2 size={16} />
              Facebook
            </a>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Intelligence Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50 bg-card"
                  }`}
                >
                  <Icon className={`${category.color} mb-3`} size={24} />
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="mt-3 text-xs text-accent">
                    {signals.filter((s) => s.category === category.id).length} signals
                  </div>
                </button>
              );
            })}
          </div>

          {selectedCategory && (
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground">Filtered by:</span>
              <Badge variant="default" className="text-sm">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </Badge>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-accent hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </section>

        {/* Signal Comparison Tool */}
        <SignalComparison 
          selectedIds={selectedForComparison}
          allSignals={signals}
          onRemove={(id) => setSelectedForComparison(selectedForComparison.filter((sid) => sid !== id))}
          onClear={() => setSelectedForComparison([])}
        />

        {/* Signals Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSignals.map((signal) => (
            <div
              key={signal.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  Signal #{signal.id}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {signal.sector}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Impact: {signal.impact}/10
                </Badge>
              </div>

              <h2 className="text-lg font-bold mb-3 leading-tight">{signal.title}</h2>

              <p className="text-muted-foreground mb-6 flex-grow text-sm">{signal.description}</p>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Link href={`/signals/${signal.id}`}>
                  <Button size="sm" className="flex-1">
                    Read Signal
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
                <Button
                  size="sm"
                  variant={selectedForComparison.includes(signal.id) ? "default" : "outline"}
                  onClick={() => {
                    if (selectedForComparison.includes(signal.id)) {
                      setSelectedForComparison(selectedForComparison.filter((id) => id !== signal.id));
                    } else if (selectedForComparison.length < 3) {
                      setSelectedForComparison([...selectedForComparison, signal.id]);
                    }
                  }}
                  disabled={!selectedForComparison.includes(signal.id) && selectedForComparison.length >= 3}
                >
                  <GitCompare size={14} />
                </Button>
              </div>
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} AgentDubai • Intelligence feed powered by Sentinel
          Signals.
        </footer>
      </div>
    </div>
  );
}
