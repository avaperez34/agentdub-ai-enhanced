/**
 * Signal #007: Dubai Appoints 22 Chief AI Officers
 * Design Philosophy: Leadership Intelligence - Executive Talent War
 */

import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Signal007() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/intelligence">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Intelligence
          </button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-emerald-600 text-white">Leadership Intelligence</Badge>
            <Badge variant="outline">UAE</Badge>
            <Badge variant="outline">Executive Recruitment</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #007: Dubai Appoints 22 Chief AI Officers - The Executive Talent War Begins
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>June 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Dubai, UAE</span>
            </div>
            $1
            <ShareButton 
              url="https://agentdub.ai/signals/009"
              title="Signal #009: Saudi Arabia's STV Launches $500M AI-Focused Fund"
            />
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            H.H. Sheikh Hamdan bin Mohammed appoints 22 Chief AI Officers across Dubai government entities, marking the beginning of an intense competition for AI leadership talent that will reshape executive recruitment across the GCC.
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 p-6 bg-accent/5 border-l-4 border-accent rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dubai's appointment of 22 Chief AI Officers across government entities represents more than administrative restructuring. It signals the start of a regional talent war for AI executives, with implications for compensation structures, recruitment strategies, and organizational design across both public and private sectors in the GCC.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <div className="text-3xl font-bold text-accent">22</div>
              <div className="text-sm text-muted-foreground">Chief AI Officers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">Top 10</div>
              <div className="text-sm text-muted-foreground">Global AI Readiness</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">1-2y</div>
              <div className="text-sm text-muted-foreground">Timeline Horizon</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">8.7/10</div>
              <div className="text-sm text-muted-foreground">Impact Score</div>
            </div>
          </div>
        </section>

        {/* The Appointment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Strategic Move</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            In June 2024, H.H. Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai and Chairman of The Executive Council, approved the appointment of 22 Chief Artificial Intelligence Officers across various government entities. This initiative forms the initial phase of implementing the Dubai Universal Blueprint for Artificial Intelligence (DUB.AI), which aims to position Dubai as the most future-ready city globally.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Key Government Entities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Dubai Police</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Dubai Electricity and Water Authority (DEWA)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Roads and Transport Authority (RTA)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Dubai Health Authority</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Dubai Municipality</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Digital Dubai Authority</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Department of Economy and Tourism</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Dubai Customs</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">+ 14 additional entities across judicial, civil defense, housing, and cultural sectors</p>
          </div>

          <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground my-8">
            "We have approved the appointment of 22 Chief AI Officers across government entities in Dubai as part of a forward-looking vision aimed at leveraging AI to enhance government operations. This initiative will enhance Dubai's progress and expertise in this sector and consolidate its position as a leader in creating innovative solutions built on advanced technology."
            <footer className="text-sm mt-2 not-italic">— H.H. Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum</footer>
          </blockquote>
        </section>

        {/* Talent War Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Talent War Begins</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            The creation of 22 Chief AI Officer positions in Dubai government alone signals a fundamental shift in executive recruitment dynamics across the GCC. This move will trigger a cascade effect as private sector organizations compete for the same limited pool of qualified AI leadership talent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-emerald-500">↑</span>
                Immediate Effects
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Compensation packages for AI executives increase 30-50% across GCC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Executive search firms pivot to AI leadership specialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Private sector accelerates creation of similar C-suite AI roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>International AI executives consider GCC relocation</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-500">⚠</span>
                Talent Constraints
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Limited pool of qualified candidates with GCC experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Competition between government and private sector intensifies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Risk of hiring executives without proven AI implementation track record</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Need for accelerated executive AI training programs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Investment & Business Implications</h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For Executive Search Firms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Firms specializing in AI executive recruitment will see significant demand growth. The market for Chief AI Officers, VP AI, and Director of AI roles across GCC is projected to expand 200-300% over the next 18 months as private sector organizations follow Dubai's lead.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">High Demand</Badge>
                <Badge variant="outline" className="text-xs">Premium Fees</Badge>
                <Badge variant="outline" className="text-xs">Specialization Required</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For AI Training & Certification Providers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The talent gap creates opportunity for executive AI education providers. Organizations will invest heavily in upskilling existing executives to fill AI leadership roles, creating demand for specialized training programs, certifications, and advisory services.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Executive Education</Badge>
                <Badge variant="outline" className="text-xs">Certification Programs</Badge>
                <Badge variant="outline" className="text-xs">Advisory Services</Badge>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">For AI Implementation Consultancies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Newly appointed Chief AI Officers will require external support to deliver results quickly. Consultancies offering AI strategy, governance frameworks, and implementation roadmaps will see increased demand as organizations rush to demonstrate AI value.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Strategy Consulting</Badge>
                <Badge variant="outline" className="text-xs">Implementation Support</Badge>
                <Badge variant="outline" className="text-xs">Governance Frameworks</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Get the Full GCC AI Intelligence Report</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access detailed profiles of 500+ AI companies across the GCC, including leadership intelligence, funding data, and GCC readiness scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/directory">
                <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Explore Directory
                </button>
              </Link>
              <a
                href="https://agentdubai.gumroad.com/l/gcc-ai-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-card border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-block"
              >
                Buy Full Report ($299)
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
