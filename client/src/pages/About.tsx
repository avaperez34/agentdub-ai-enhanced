/**
 * About - Company information, founder profile, and roadmap
 */

import { Link } from "wouter";
import { Linkedin, Target, Users, Zap, TrendingUp, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              About AgentDubai
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Intelligence Platform for GCC AI Transformation
            </h1>
            <p className="text-xl text-muted-foreground">
              Independent editorial platform dedicated to the rise of AI agents, autonomous systems,
              and applied artificial intelligence shaping the next phase of digital transformation
              across Dubai and the Gulf.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              To provide decision-makers, investors, and AI vendors with the most comprehensive
              intelligence on GCC AI markets — from strategic signals to daily news, from company
              directories to investment analysis.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Signal, Not Noise</h3>
                <p className="text-muted-foreground">
                  We filter through thousands of data points to deliver structured intelligence
                  frameworks that matter for strategic decisions.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <TrendingUp className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">GCC-First Focus</h3>
                <p className="text-muted-foreground">
                  Deep expertise in Gulf markets, regulations, sovereign AI strategies, and the
                  unique dynamics of UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <Zap className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Actionable Intelligence</h3>
                <p className="text-muted-foreground">
                  Every signal includes impact scores, timelines, investment implications, and
                  competitive analysis designed for immediate application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-20 border-b border-border bg-accent/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Co-Founders</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Charles Damien */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <img
                    src="/images/charles-damien.jpg"
                    alt="Charles Damien - Co-Founder & CEO"
                    className="w-48 h-48 object-cover rounded-lg border border-accent/20 shadow-lg mb-6"
                  />

                  {/* Profile Content */}
                  <h3 className="text-2xl font-bold mb-2">Charles Damien</h3>
                  <p className="text-lg text-accent mb-4">Co-Founder & CEO</p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                    Charles founded AgentDubai to address the critical intelligence gap in GCC AI markets.
                    With deep expertise in AI transformation, digital strategy, and Gulf business ecosystems,
                    he recognized that decision-makers needed more than headlines — they needed structured,
                    repeatable intelligence frameworks to navigate the rapid AI adoption across Dubai and
                    the broader GCC region.
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-left">
                    AgentDubai combines rigorous analysis with on-the-ground market knowledge to deliver
                    intelligence that matters: from sovereign AI strategies to venture capital flows,
                    from regulatory changes to executive hiring patterns.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/charles-damien-0004b321"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#0A66C2] hover:bg-[#004182]">
                      <Linkedin size={18} className="mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>

              {/* Henri Chaktemer */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <img
                    src="/images/henri-chaktemer.jpg"
                    alt="Henri Chaktemer - Co-Founder"
                    className="w-48 h-48 object-cover rounded-lg border border-accent/20 shadow-lg mb-6"
                  />

                  {/* Profile Content */}
                  <h3 className="text-2xl font-bold mb-2">Henri Chaktemer</h3>
                  <p className="text-lg text-accent mb-4">Co-Founder</p>
                  
                  <div className="mb-6 text-left">
                    <p className="text-muted-foreground mb-2 leading-relaxed">
                      <strong>Expertise:</strong> AI Trainer specializing in Biotech and Bioinformatics
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Education:</strong> Master's in Bioinformatics, University of Montpellier
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-left">
                    Henri brings deep technical expertise in AI applications for biotechnology and bioinformatics to AgentDubai. His background in training AI systems for life sciences provides unique insights into the intersection of artificial intelligence and healthcare innovation across the GCC region, where biotech AI is emerging as a strategic priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Jacky Ouziel */}
            <div className="mt-8 bg-card border border-border rounded-lg p-8">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/jacky-ouziel.jpg"
                  alt="Jacky Ouziel - Financial Expert and Advisor"
                  className="w-48 h-48 object-cover rounded-lg border border-accent/20 shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Jacky Ouziel</h3>
                <p className="text-lg text-accent mb-4">Financial Expert and Strategic Advisor</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-left max-w-2xl">
                  Jacky Ouziel is a financial expert in valuation models, with over 30 years of experience. He specializes in assisting company leaders with securing financing, fundraising, and serving as an independent board member. His work focuses on corporate finance, growth strategies, and related advisory roles.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-left max-w-2xl">
                  With deep expertise in financial structuring and strategic advisory, Jacky brings invaluable guidance to AgentDubai growth trajectory. His experience in helping companies navigate capital markets and scale operations provides critical perspective on the financial dimensions of AI transformation across the GCC region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Product Roadmap</h2>
            
            {/* Progress Indicator */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-6 mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mb-2">✓</div>
                  <p className="font-semibold">Beta</p>
                  <p className="text-xs text-muted-foreground">Q4 2025 - Q2 2026</p>
                </div>
                <div className="flex-1 h-1 bg-border relative">
                  <div className="absolute left-0 top-0 h-full w-0 bg-emerald-500"></div>
                </div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-muted border-2 border-border flex items-center justify-center font-bold mb-2">2</div>
                  <p className="font-semibold">Pre-Seed</p>
                  <p className="text-xs text-muted-foreground">Q3 2026 - Q2 2027</p>
                </div>
                <div className="flex-1 h-1 bg-border"></div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-muted border-2 border-border flex items-center justify-center font-bold mb-2">3</div>
                  <p className="font-semibold">Seed</p>
                  <p className="text-xs text-muted-foreground">Q3 2027+</p>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground italic">
                Timeline estimates are conservative to allow for fundraising. We aim to deliver ahead of schedule.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Beta - Current */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-background"></div>
                
                <div className="bg-card border border-accent rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-accent text-accent-foreground">Current Phase</Badge>
                    <h3 className="text-2xl font-bold">Beta Version</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Q4 2025 - Q2 2026 (Current)
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Launch core platform with Intelligence Signals and News feeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Release GCC AI Directory (500+ companies, 280 pages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Build initial audience and validate product-market fit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Establish editorial voice and intelligence frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pre-Seed */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-background"></div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline">Next Phase</Badge>
                    <h3 className="text-2xl font-bold">Pre-Seed Phase</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Q3 2026 - Q2 2027 (Target)
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users size={18} className="text-accent" />
                        Team Building
                      </h4>
                      <ul className="space-y-1 ml-6">
                        <li className="text-muted-foreground">• Hire Social Media Manager for content distribution</li>
                        <li className="text-muted-foreground">• Onboard IT/DevOps specialist for platform scaling</li>
                        <li className="text-muted-foreground">• Build editorial team for daily content production</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Building2 size={18} className="text-accent" />
                        Community Development
                      </h4>
                      <ul className="space-y-1 ml-6">
                        <li className="text-muted-foreground">• Launch LinkedIn community and thought leadership</li>
                        <li className="text-muted-foreground">• Build email newsletter subscriber base</li>
                        <li className="text-muted-foreground">• Establish partnerships with GCC AI ecosystem players</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Rocket size={18} className="text-accent" />
                        Product Development
                      </h4>
                      <ul className="space-y-1 ml-6">
                        <li className="text-muted-foreground">• Launch subscription product (Starter, Professional, Enterprise tiers)</li>
                        <li className="text-muted-foreground">• Develop premium content library and research reports</li>
                        <li className="text-muted-foreground">• Build API for programmatic access to intelligence data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seed */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-background"></div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline">Future Phase</Badge>
                    <h3 className="text-2xl font-bold">Seed Phase & MVP</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Q3 2027+ (Target)
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap size={18} className="text-accent" />
                        Proprietary AI Scraping Agent
                      </h4>
                      <ul className="space-y-1 ml-6">
                        <li className="text-muted-foreground">• Develop custom AI agent for automated GCC intelligence gathering</li>
                        <li className="text-muted-foreground">• Real-time monitoring of funding rounds, hiring, M&A, and regulatory changes</li>
                        <li className="text-muted-foreground">• Arabic language processing for local news sources and government portals</li>
                        <li className="text-muted-foreground">• Automated signal generation with human editorial oversight</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-accent" />
                        Scale & Expansion
                      </h4>
                      <ul className="space-y-1 ml-6">
                        <li className="text-muted-foreground">• Expand coverage to broader MENA AI markets</li>
                        <li className="text-muted-foreground">• Launch enterprise intelligence dashboard with custom alerts</li>
                        <li className="text-muted-foreground">• Build data partnerships with regional VCs and government entities</li>
                        <li className="text-muted-foreground">• Establish AgentDubai as the definitive GCC AI intelligence platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-gradient-to-b from-background to-accent/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building the intelligence infrastructure for GCC AI markets. Get access to our
            premium directory, signals, and insights today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/premium">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                View Premium Plans
              </Button>
            </Link>
            <Link href="/directory">
              <Button size="lg" variant="outline">
                Explore Directory
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
