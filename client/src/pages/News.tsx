/**
 * News - Daily GCC AI insights and analysis
 */

import { useState } from "react";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  isPremium: boolean;
  image?: string;
}

// Sample articles - in production, these would come from a CMS or API
const articles: Article[] = [
  {
    id: "001",
    title: "Saudi AI Hiring Surges 340% in Q1 2026 - Talent War Intensifies",
    excerpt: "Saudi Arabia's AI sector added 2,847 positions in Q1 2026, a 340% increase YoY. SDAIA, NEOM, and Aramco lead hiring spree as Vision 2030 execution accelerates. Average salaries up 45% to $180k for senior roles.",
    category: "Hiring",
    date: "2026-01-14",
    readTime: "3 min",
    isPremium: false,
  },
  {
    id: "002",
    title: "G42 Acquires Majority Stake in Egyptian AI Startup Integrant - $47M Deal",
    excerpt: "UAE's G42 acquires 65% of Cairo-based Integrant AI for $47M, marking largest Egyptian AI exit. Deal includes Arabic NLP technology and 120-person engineering team. Signals GCC expansion into North African talent pools.",
    category: "M&A",
    date: "2026-01-13",
    readTime: "4 min",
    isPremium: true,
  },
  {
    id: "003",
    title: "New UAE Data Residency Rules Impact 47 Cloud Providers - Compliance Deadline March 2026",
    excerpt: "UAE Telecommunications and Digital Government Regulatory Authority (TDRA) mandates local data storage for AI training datasets. 47 providers must comply by March 31. G42, AWS, Azure already compliant. Smaller players scramble.",
    category: "Regulation",
    date: "2026-01-12",
    readTime: "5 min",
    isPremium: false,
  },
  {
    id: "004",
    title: "Qatar's QCRI Launches Open-Source Arabic LLM - 70B Parameters, Outperforms GPT-4 on Arabic Tasks",
    excerpt: "Qatar Computing Research Institute releases Qalam-70B, first open-source Arabic LLM competitive with GPT-4 on Arabic benchmarks. Trained on 2.3T tokens, 60% Arabic. Available under permissive license. Game-changer for GCC AI sovereignty.",
    category: "Technology",
    date: "2026-01-11",
    readTime: "6 min",
    isPremium: true,
  },
  {
    id: "005",
    title: "Kuwait's Zain Telecom Deploys AI Customer Service Agents - 73% Resolution Rate",
    excerpt: "Zain Kuwait replaces 40% of call center with AI agents, achieving 73% first-contact resolution. Built on local Arabic LLM with telecom-specific training. 2,400 jobs impacted, company offers reskilling. Model for GCC telecom sector.",
    category: "Deployment",
    date: "2026-01-10",
    readTime: "4 min",
    isPremium: false,
  },
  {
    id: "006",
    title: "Saudi AI Startup Mozn Raises $150M Series C Led by STV - Valuation Hits $850M",
    excerpt: "Riyadh-based Mozn secures $150M Series C at $850M valuation, led by STV with participation from Wa'ed Ventures and Aramco's Prosperity7. Funds will expand Arabic conversational AI platform across GCC and MENA. 340% revenue growth in 2025.",
    category: "Funding",
    date: "2026-01-09",
    readTime: "5 min",
    isPremium: false,
  },
  {
    id: "007",
    title: "UAE's Inception AI Closes $87M Seed Round - Largest MENA AI Seed Ever",
    excerpt: "Abu Dhabi stealth startup Inception AI raises $87M seed from G42, Mubadala, and Sequoia Capital Middle East. Building sovereign AI infrastructure for Arabic language models. Team includes ex-OpenAI, DeepMind researchers. Record-breaking MENA seed round.",
    category: "Funding",
    date: "2026-01-08",
    readTime: "4 min",
    isPremium: true,
  },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Hiring", "Funding", "M&A", "Regulation", "Technology", "Deployment"];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hiring":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
      case "Funding":
        return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300";
      case "M&A":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
      case "Regulation":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
      case "Technology":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300";
      case "Deployment":
        return "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 via-background to-background border-b border-border py-16">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-accent" size={24} />
              <Badge variant="outline" className="border-accent text-accent">
                Daily Updates
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">GCC AI News & Insights</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Daily intelligence on AI agents, digital transformation, and autonomous systems across the Gulf.
              Fresh analysis every morning.
            </p>
            <div className="flex gap-4">
              <Link href="/directory">
                <Button className="bg-accent hover:bg-accent/90">
                  Explore Directory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border bg-card/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  {article.isPremium && (
                    <Badge variant="outline" className="border-accent text-accent">
                      Premium
                    </Badge>
                  )}
                </div>

                <h2 className="text-2xl font-bold mb-3 hover:text-accent transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>

                  <Link href={`/news/${article.id}`}>
                    <Button variant="ghost" className="group">
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </Link>
                </div>

                {article.isPremium && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      🔒 Full analysis available for Premium subscribers
                    </p>
                    <Link href="/premium">
                      <Button size="sm" className="bg-accent hover:bg-accent/90">
                        Upgrade to Premium
                      </Button>
                    </Link>
                  </div>
                )}
              </article>
            ))}

            {/* Load More */}
            <div className="text-center py-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Premium CTA */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Upgrade to Premium</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Unlimited premium articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Full Signal reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Company deep dives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Weekly executive briefing</span>
                </li>
              </ul>
              <Link href="/premium">
                <Button className="w-full" variant="outline">
                  View Plans
                </Button>
              </Link>
            </div>

            {/* Trending Topics */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {["AI Talent War", "Data Sovereignty", "Arabic LLMs", "Sovereign Compute", "Vision 2030"].map(
                  (topic) => (
                    <button
                      key={topic}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors text-sm"
                    >
                      # {topic}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
