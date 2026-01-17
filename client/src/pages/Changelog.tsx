/**
 * Changelog - Platform updates and feature releases
 */

import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Map, Bell, Share2, Filter } from "lucide-react";

export default function Changelog() {
  const updates = [
    {
      date: "January 15, 2026",
      version: "Beta v0.9",
      badge: "Latest",
      badgeClass: "bg-emerald-500 text-white",
      items: [
        {
          icon: <Bell size={18} />,
          title: "Early Access Waitlist",
          description: "Added email waitlist forms on Directory and Premium pages for full directory launch and subscription notifications"
        },
        {
          icon: <TrendingUp size={18} />,
          title: "Visual Roadmap Timeline",
          description: "Added progress indicators to About page showing Beta (Q4 2025 - Q2 2026), Pre-seed (Q3 2026 - Q2 2027), and Seed (Q3 2027+) phases with conservative fundraising timelines"
        },
        {
          icon: <Share2 size={18} />,
          title: "Social Sharing Improvements",
          description: "Fixed ShareButton rendering across all intelligence signals (001-011) and streamlined news article sharing with single top-positioned button"
        },
        {
          icon: <Sparkles size={18} />,
          title: "Directory Beta Notice",
          description: "Added prominent banner explaining manual curation status and future automation roadmap with link to About page"
        }
      ]
    },
    {
      date: "January 14, 2026",
      version: "Beta v0.8",
      items: [
        {
          icon: <Map size={18} />,
          title: "GCC Map Data Visualizations",
          description: "Added interactive charts showing population, GDP, AI investment, and productivity ratios across all 6 GCC countries with comparative histograms"
        },
        {
          icon: <Filter size={18} />,
          title: "Advanced Content Filtering",
          description: "Implemented scalable content management with filtering, search, sorting, and pagination for Intelligence (11 signals) and News (20 articles)"
        },
        {
          icon: <TrendingUp size={18} />,
          title: "Signal 011: L'IMAD",
          description: "Published comprehensive analysis of Abu Dhabi's fourth sovereign wealth fund with $1.7T+ total AUM across all pillars"
        },
        {
          icon: <Sparkles size={18} />,
          title: "10 New News Articles",
          description: "Added fresh coverage across all GCC countries: UAE (Pax Silica, TII ACE), Saudi (Governata, NEOM), Qatar, Kuwait, Bahrain, Oman"
        }
      ]
    },
    {
      date: "January 13, 2026",
      version: "Beta v0.7",
      items: [
        {
          icon: <Sparkles size={18} />,
          title: "Premium Page Launch",
          description: "Created Premium page with Available Now section (GCC AI Directory $299) and Coming Soon subscription tiers (Starter $49/mo, Professional $149/mo, Enterprise custom)"
        },
        {
          icon: <TrendingUp size={18} />,
          title: "About Page with Roadmap",
          description: "Transformed Investors page into comprehensive About page featuring founder profile with LinkedIn, company mission, and detailed 3-phase roadmap"
        },
        {
          icon: <Share2 size={18} />,
          title: "Social Sharing Functionality",
          description: "Added ShareButton component to all articles and signals with LinkedIn, Twitter, and copy link options for viral distribution"
        },
        {
          icon: <Sparkles size={18} />,
          title: "Old Money Branding",
          description: "Implemented sophisticated emerald-to-teal gradient logo and section-specific accent colors for refined luxury aesthetic"
        }
      ]
    },
    {
      date: "January 12, 2026",
      version: "Beta v0.6",
      items: [
        {
          icon: <Map size={18} />,
          title: "Interactive GCC Map",
          description: "Launched clickable map showing all 6 countries with population, AI investment, major companies, GDP breakdown (oil vs non-oil)"
        },
        {
          icon: <TrendingUp size={18} />,
          title: "Signals 007-010",
          description: "Published 4 comprehensive intelligence signals: Sovereign AI Strategies, Enterprise AI Adoption, VC Funding Analysis, Infrastructure Investment"
        },
        {
          icon: <Sparkles size={18} />,
          title: "Homepage Premium CTA",
          description: "Added prominent 'View Premium Plans' button to hero section as primary conversion driver"
        }
      ]
    },
    {
      date: "January 10, 2026",
      version: "Beta v0.5",
      items: [
        {
          icon: <TrendingUp size={18} />,
          title: "Intelligence Signals 001-006",
          description: "Launched Intelligence section with 6 strategic signals covering AD Ports AI deployment, UAE AI adoption, Saudi AI strategy, and more"
        },
        {
          icon: <Sparkles size={18} />,
          title: "News Feed",
          description: "Published 10 breaking news articles covering AI developments across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman"
        },
        {
          icon: <Map size={18} />,
          title: "AI Players Directory",
          description: "Released preview directory with 4 verified companies (G42, HUMAIN, Qai, Bayanat) featuring GCC readiness scoring and compliance data"
        }
      ]
    },
    {
      date: "December 20, 2025",
      version: "Beta v0.1",
      items: [
        {
          icon: <Sparkles size={18} />,
          title: "Platform Launch",
          description: "Initial launch of AgentDubai platform with core navigation, homepage, and foundational design system"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Platform Updates
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Changelog
            </h1>
            <p className="text-xl text-muted-foreground">
              Track every feature, improvement, and content addition as we build the definitive
              GCC AI intelligence platform. Updated continuously during Beta phase.
            </p>
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {updates.map((update, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-background"></div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{update.version}</h2>
                      {update.badge && (
                        <Badge className={update.badgeClass || "bg-accent text-accent-foreground"}>
                          {update.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{update.date}</p>
                  </div>

                  <div className="space-y-4">
                    {update.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1 text-accent">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-8">
                <Sparkles size={32} className="mx-auto mb-4 text-emerald-500" />
                <h3 className="text-2xl font-bold mb-2">More Updates Coming</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're continuously shipping new features, signals, and intelligence. Follow our{" "}
                  <a href="/about" className="text-emerald-600 dark:text-emerald-400 underline hover:no-underline">
                    roadmap
                  </a>{" "}
                  to see what's next, or join our waitlist to get notified of major launches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
