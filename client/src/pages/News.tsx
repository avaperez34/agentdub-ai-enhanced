/**
 * News - Daily GCC AI insights and analysis
 */

import { useState, useMemo } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, TrendingUp, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  isPremium: boolean;
  image?: string;
  tags: string[];
}

// Sample articles - in production, these would come from a CMS or API
const articles: Article[] = [
  {
    id: "001",
    title: "19% of GCC Organizations Deploy Agentic AI in Production - Leads Global Implementation",
    excerpt: "World Economic Forum reports 19% of GCC organizations have moved agentic AI from pilots to production implementation, significantly ahead of global averages. Centralized decision-making and sovereign AI strategies drive rapid deployment.",
    category: "Implementation",
    date: "2026-01-15",
    readTime: "5 min",
    isPremium: false,
    tags: ["GCC-Wide", "AI Agents", "Implementation"],
  },
  {
    id: "002",
    title: "IHC Partners with US Investment Arm to Boost AI-Led Technology Boom",
    excerpt: "Abu Dhabi's International Holding Company partners with US investment arm to advance economic and bilateral relationships, with primary focus on artificial intelligence-led technology boom.",
    category: "Economic Cooperation",
    date: "2026-01-15",
    readTime: "4 min",
    isPremium: false,
    tags: ["UAE", "Investment", "US Relations"],
  },
  {
    id: "003",
    title: "Intersec Dubai 2026: AI-Powered Video Shifts from Surveillance to Real-Time Intelligence",
    excerpt: "At Intersec Dubai 2026, AI-powered video technology shifted from passive surveillance to real-time edge intelligence, cutting latency and boosting trust in security applications.",
    category: "Technology",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["UAE", "AI", "Security Tech"],
  },
  {
    id: "004",
    title: "Governata Raises $4M to Accelerate Saudi Enterprise AI Adoption",
    excerpt: "Saudi Arabia-based enterprise data governance startup Governata has raised $4 million in seed funding to scale its AI-ready data governance platform, supporting enterprise AI adoption across the Kingdom.",
    category: "Startup Funding",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Startups", "Funding"],
  },
  {
    id: "005",
    title: "ITC Infotech Launches Digital & AI Engineering Hub in Riyadh",
    excerpt: "ITC Infotech inaugurated its Digital & AI Engineering Hub in Riyadh, marking 15 years of operations in the Middle East and expanding the company's AI capabilities in the Kingdom.",
    category: "Infrastructure",
    date: "2026-01-15",
    readTime: "3 min",
    isPremium: false,
    tags: ["Saudi Arabia", "AI", "Engineering"],
  },
  {
    id: "006",
    title: "Saudi Makes Future at CES 2026: Vision of World's Largest Global AI Event",
    excerpt: "Saudi Makes Future represents a new phase of global cooperation on Artificial Intelligence and innovation, designed to connect leaders, innovators, and policymakers at one of the world's largest AI events.",
    category: "Global Event",
    date: "2026-01-15",
    readTime: "4 min",
    isPremium: false,
    tags: ["Saudi Arabia", "AI", "Events"],
  },
  {
    id: "007",
    title: "US: Qatar to Play Central Role in AI-Era Economic Order",
    excerpt: "The United States said Qatar is set to play a central role in shaping the emerging artificial intelligence-era economic order, citing the country's strategic energy resources and technology investments.",
    category: "Geopolitical",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Qatar", "US Relations", "AI"],
  },
  {
    id: "008",
    title: "Qatar Races to Catch Up with Gulf Neighbors on AI Investments",
    excerpt: "Qatar joined the US Pax Silica programme to secure AI and chip supply chains on Monday, as it races to catch up with its Gulf neighbors on investments in the tech sector.",
    category: "Strategic",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Qatar", "AI", "Competition"],
  },
  {
    id: "009",
    title: "Middle East Digital Commerce & Payments in the Age of AI",
    excerpt: "New market research report analyzes how E-Commerce, digital payments, and artificial intelligence are reshaping retail and financial services across Saudi Arabia, the UAE, and the broader Middle East region.",
    category: "Market Report",
    date: "2026-01-12",
    readTime: "5 min",
    isPremium: false,
    tags: ["GCC-Wide", "E-Commerce", "AI"],
  },
  {
    id: "011",
    title: "UAE Joins Pax Silica Initiative to Secure AI Supply Chains",
    excerpt: "UAE formally joins US-led Pax Silica program to secure AI and semiconductor supply chains, strengthening economic ties with Washington. Initiative aims to build resilient tech infrastructure alongside Qatar and other strategic partners.",
    category: "Government",
    date: "2026-01-15",
    readTime: "4 min",
    isPremium: false,
    tags: ["UAE", "Government", "Infrastructure"],
  },
  {
    id: "012",
    title: "TII Launches ACE: Arabic AI Model Outperforms Systems Twice Its Size",
    excerpt: "UAE's Technology Innovation Institute unveils ACE, specialized Arabic Large Language Model that consistently outperforms global systems twice its size. Breakthrough in Arabic NLP positions UAE as leader in sovereign AI capabilities.",
    category: "Technology",
    date: "2026-01-15",
    readTime: "5 min",
    isPremium: false,
    tags: ["UAE", "LLM", "Technology"],
  },
  {
    id: "013",
    title: "64% of UAE Residents Use Generative AI - Highest Adoption Rate Globally",
    excerpt: "UAE leads world in generative AI adoption alongside Singapore, with 64% of residents actively using AI tools. Developed countries outpace developing nations in AI use, signaling digital divide in emerging technology access.",
    category: "Technology",
    date: "2026-01-14",
    readTime: "3 min",
    isPremium: false,
    tags: ["UAE", "AI Adoption", "Society"],
  },
  {
    id: "014",
    title: "Governata Raises $4M Seed to Accelerate Saudi Enterprise AI Adoption",
    excerpt: "Saudi AI startup Governata secures $4M seed funding to support enterprise AI adoption across the Kingdom. 'Turning Saudi Arabia's AI vision into reality' with governance platform for responsible AI deployment at scale.",
    category: "Funding",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Funding", "Startups"],
  },
  {
    id: "015",
    title: "NEOM Unveils $5B Net-Zero AI Data Center in Oxagon",
    excerpt: "DataVolt developing $5 billion net-zero AI data center in NEOM's Oxagon industrial city. Powered entirely by renewable energy, facility represents Saudi Arabia's commitment to sustainable AI infrastructure at massive scale.",
    category: "Infrastructure",
    date: "2026-01-15",
    readTime: "5 min",
    isPremium: true,
    tags: ["Saudi Arabia", "NEOM", "Data Centers"],
  },
  {
    id: "016",
    title: "Saudi Arabia Orders 300,000 NVIDIA Blackwell Chips After Export Ban Lifted",
    excerpt: "Following lift of export restrictions, Saudi Arabia orders 300,000 NVIDIA Blackwell chips as part of 2.5 million unit regional procurement. Riyadh alone accounts for 12% of global Blackwell allocation, signaling massive AI infrastructure buildout.",
    category: "Infrastructure",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Hardware", "Infrastructure"],
  },
  {
    id: "017",
    title: "Qatar Joins Pax Silica - US Says Qatar 'Central to AI-Era Economic Order'",
    excerpt: "Qatar formally joins US-led Pax Silica initiative on January 12, 2026. Undersecretary of State declares Qatar will play central role in shaping AI-era economic order, citing strategic energy resources and tech investments.",
    category: "Government",
    date: "2026-01-14",
    readTime: "4 min",
    isPremium: false,
    tags: ["Qatar", "Government", "Geopolitics"],
  },
  {
    id: "018",
    title: "19% of GCC Organizations Deploy Agentic AI in Production - Leads Global Implementation",
    excerpt: "World Economic Forum reports 19% of GCC organizations have moved agentic AI from pilots to production implementation, significantly ahead of global averages. Centralized decision-making and sovereign AI strategies drive rapid deployment.",
    category: "Deployment",
    date: "2026-01-15",
    readTime: "5 min",
    isPremium: false,
    tags: ["GCC-Wide", "AI Agents", "Implementation"],
  },
  {
    id: "019",
    title: "SolvFast AI Platform Expands to Saudi Arabia and Egypt",
    excerpt: "AI-powered digital transformation platform SolvFast announces 2026 launch in Saudi Arabia and Egypt, aiming to accelerate enterprise digital transformation across MENA region with automated workflow solutions.",
    category: "Startups",
    date: "2026-01-15",
    readTime: "3 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Startups", "Enterprise"],
  },
  {
    id: "020",
    title: "NEOM Advances 5 Saudi Game Studios in Largest Level Up Accelerator Cycle",
    excerpt: "NEOM selects five KSA-based game studios for funding in latest Level Up accelerator cycle. Investment supports Saudi Arabia's growing gaming and entertainment sector as part of Vision 2030 economic diversification strategy.",
    category: "Startups",
    date: "2026-01-12",
    readTime: "3 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Gaming", "NEOM"],
  },
  {
    id: "001",
    title: "Saudi AI Hiring Surges 340% in Q1 2026 - Talent War Intensifies",
    excerpt: "Saudi Arabia's AI sector added 2,847 positions in Q1 2026, a 340% increase YoY. SDAIA, NEOM, and Aramco lead hiring spree as Vision 2030 execution accelerates. Average salaries up 45% to $180k for senior roles.",
    category: "Hiring",
    date: "2026-01-14",
    readTime: "3 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Talent", "Employment"],
  },
  {
    id: "002",
    title: "G42 Acquires Majority Stake in Egyptian AI Startup Integrant - $47M Deal",
    excerpt: "UAE's G42 acquires 65% of Cairo-based Integrant AI for $47M, marking largest Egyptian AI exit. Deal includes Arabic NLP technology and 120-person engineering team. Signals GCC expansion into North African talent pools.",
    category: "M&A",
    date: "2026-01-13",
    readTime: "4 min",
    isPremium: true,
    tags: ["UAE", "M&A", "G42"],
  },
  {
    id: "003",
    title: "New UAE Data Residency Rules Impact 47 Cloud Providers - Compliance Deadline March 2026",
    excerpt: "UAE Telecommunications and Digital Government Regulatory Authority (TDRA) mandates local data storage for AI training datasets. 47 providers must comply by March 31. G42, AWS, Azure already compliant. Smaller players scramble.",
    category: "Regulation",
    date: "2026-01-12",
    readTime: "5 min",
    isPremium: false,
    tags: ["UAE", "Regulation", "Data Privacy"],
  },
  {
    id: "004",
    title: "Qatar's QCRI Launches Open-Source Arabic LLM - 70B Parameters, Outperforms GPT-4 on Arabic Tasks",
    excerpt: "Qatar Computing Research Institute releases Qalam-70B, first open-source Arabic LLM competitive with GPT-4 on Arabic benchmarks. Trained on 2.3T tokens, 60% Arabic. Available under permissive license. Game-changer for GCC AI sovereignty.",
    category: "Technology",
    date: "2026-01-11",
    readTime: "6 min",
    isPremium: true,
    tags: ["Qatar", "LLM", "Open Source"],
  },
  {
    id: "005",
    title: "Kuwait's Zain Telecom Deploys AI Customer Service Agents - 73% Resolution Rate",
    excerpt: "Zain Kuwait replaces 40% of call center with AI agents, achieving 73% first-contact resolution. Built on local Arabic LLM with telecom-specific training. 2,400 jobs impacted, company offers reskilling. Model for GCC telecom sector.",
    category: "Deployment",
    date: "2026-01-10",
    readTime: "4 min",
    isPremium: false,
    tags: ["Kuwait", "Telecom", "AI Agents"],
  },
  {
    id: "006",
    title: "Saudi AI Startup Mozn Raises $150M Series C Led by STV - Valuation Hits $850M",
    excerpt: "Riyadh-based Mozn secures $150M Series C at $850M valuation, led by STV with participation from Wa'ed Ventures and Aramco's Prosperity7. Funds will expand Arabic conversational AI platform across GCC and MENA. 340% revenue growth in 2025.",
    category: "Funding",
    date: "2026-01-09",
    readTime: "5 min",
    isPremium: false,
    tags: ["Saudi Arabia", "Funding", "Startups"],
  },
  {
    id: "007",
    title: "UAE's Inception AI Closes $87M Seed Round - Largest MENA AI Seed Ever",
    excerpt: "Abu Dhabi stealth startup Inception AI raises $87M seed from G42, Mubadala, and Sequoia Capital Middle East. Building sovereign AI infrastructure for Arabic language models. Team includes ex-OpenAI, DeepMind researchers. Record-breaking MENA seed round.",
    category: "Funding",
    date: "2026-01-08",
    readTime: "4 min",
    isPremium: true,
    tags: ["UAE", "Funding", "Startups"],
  },
  {
    id: "008",
    title: "Bahrain FinTech Bay Launches AI Accelerator - 12 Startups Selected",
    excerpt: "Bahrain's leading fintech hub launches dedicated AI accelerator program with $5M fund. 12 startups from 8 countries selected for 6-month program. Focus on Islamic finance AI, regulatory compliance automation, and fraud detection.",
    category: "Startups",
    date: "2026-01-07",
    readTime: "3 min",
    isPremium: false,
    tags: ["Bahrain", "FinTech", "Accelerator"],
  },
  {
    id: "009",
    title: "Oman Vision 2040 Allocates $2.3B for AI Infrastructure Development",
    excerpt: "Oman announces $2.3B investment in AI infrastructure as part of Vision 2040 digital transformation strategy. Focus on smart cities, government services automation, and energy sector AI. Partnership with Microsoft Azure and local universities.",
    category: "Government",
    date: "2026-01-06",
    readTime: "4 min",
    isPremium: false,
    tags: ["Oman", "Government", "Infrastructure"],
  },
  {
    id: "010",
    title: "Dubai AI Campus Opens with 3,000 Students - Largest AI Education Hub in MENA",
    excerpt: "Dubai launches AI Campus in Dubai Silicon Oasis, enrolling 3,000 students in inaugural semester. Partnership with MIT, Stanford, and local universities. Curriculum covers LLMs, computer vision, robotics, and AI governance. Tuition subsidized 70% by government.",
    category: "Education",
    date: "2026-01-05",
    readTime: "5 min",
    isPremium: false,
    tags: ["UAE", "Education", "Training"],
  },
];

const ITEMS_PER_PAGE = 9;

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Hiring", "Funding", "M&A", "Regulation", "Technology", "Deployment", "Startups", "Government", "Education", "Infrastructure"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hiring":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Funding":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "M&A":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Regulation":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Technology":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      case "Deployment":
        return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20";
      case "Startups":
        return "bg-pink-500/10 text-pink-500 border-pink-500/20";
      case "Government":
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
      case "Education":
        return "bg-teal-500/10 text-teal-500 border-teal-500/20";
      case "Infrastructure":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-accent/10 text-accent border-accent/20";
    }
  };

  // Advanced filtering and search
  const filteredArticles = useMemo(() => {
    let result = articles;

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((a) => a.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sorting
    if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-purple-500/5 to-background">
        <div className="container py-16">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
              Daily Intelligence
            </Badge>
            <h1 className="text-5xl font-bold mb-6">News</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Daily breaking updates on GCC AI ecosystem — funding rounds, hiring trends, M&A activity,
              regulatory changes, and technology deployments. Fast-moving intelligence for decision-makers
              who need to stay ahead of the market.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters & Search */}
            <div className="mb-8 bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-accent" />
                <h2 className="text-lg font-semibold">Filter & Search</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Search */}
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Latest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredArticles.length}</span> of{" "}
                <span className="font-semibold text-foreground">{articles.length}</span> articles
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {paginatedArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      {article.isPremium && (
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                          Premium
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/news/${article.id}`}>
                        <Button size="sm" variant="ghost" className="group-hover:text-accent">
                          Read
                          <ArrowRight className="ml-1" size={14} />
                        </Button>
                      </Link>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-accent/5 text-accent border border-accent/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
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
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Premium CTA */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-accent" size={24} />
                <h3 className="font-bold text-lg">Upgrade to Premium</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get access to exclusive deep-dive analysis, full GCC AI Directory, and premium intelligence reports.
              </p>
              <Link href="/premium">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  View Plans
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get daily GCC AI intelligence delivered to your inbox.
              </p>
              <WaitlistForm source="news" />
              <p className="text-xs text-muted-foreground mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
