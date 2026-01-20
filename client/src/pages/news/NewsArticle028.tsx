import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle028() {
  const articleTitle = "Saudi Arabia Showcases Vision 2030 AI Progress at Davos, Enters 'Third Phase'";
  const articleUrl = `${window.location.origin}/news/028`;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/news">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to News
          </Button>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                Leadership
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 19, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Saudi Arabia</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Saudi Arabia Showcases Vision 2030 AI Progress at Davos, Enters 'Third Phase'
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Saudi House at World Economic Forum 2026 spotlights AI and digital economy achievements. 2026 budget marks start of 'third phase' of Vision 2030, signaling shift from launching reforms to scaling execution.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="Saudi Arabia enters third phase of Vision 2030 with focus on AI, digital economy, and scaling execution"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Saudi House Kicks Off Davos with AI Showcase</h2>
            <p>
              Saudi Arabia opened its pavilion at the World Economic Forum Annual Meeting in Davos on January 19, 2026, with a strong emphasis on Vision 2030 achievements, AI platform development, and the Kingdom's evolving role in the global digital economy.
            </p>
            <p>
              Saudi House, the Kingdom's official presence at Davos, featured ministers, tech leaders, and industry executives highlighting progress in artificial intelligence, digital infrastructure, and economic diversification. The event underscored Saudi Arabia's ambition to position itself as a global AI hub and a leader in technology-driven economic transformation.
            </p>

            <h2>Third Phase of Vision 2030 Begins</h2>
            <p>
              According to Saudi Arabia's 2026 budget, this year marks the start of a "third phase" of Vision 2030, signaling a strategic shift in focus from launching economic reforms to scaling execution and delivering measurable outcomes.
            </p>
            <p>
              The first phase (2016-2020) focused on establishing the foundational frameworks and institutions. The second phase (2021-2025) concentrated on launching major projects and attracting investment. The third phase (2026-2030) emphasizes operational execution, private sector leadership, and achieving the economic diversification targets set nearly a decade ago.
            </p>

            <h2>Private Sector Takes Larger Role</h2>
            <p>
              Saudi officials at Davos emphasized the growing role of the private sector in driving Vision 2030 forward. The shift reflects a maturing economic strategy where government-led initiatives transition to private sector ownership and operation.
            </p>
            <p>
              This transition is particularly evident in AI and technology sectors, where Saudi Arabia has invested heavily in infrastructure, talent development, and regulatory frameworks. The Kingdom now seeks to attract private investment and operational expertise to scale these initiatives beyond pilot phase.
            </p>

            <h2>AI and Digital Economy Achievements</h2>
            <p>
              Saudi Arabia spotlighted several AI and digital economy achievements at Davos, including progress on the NEOM cognitive city project, expansion of data center capacity, development of sovereign AI models, and partnerships with global technology leaders.
            </p>
            <p>
              Minister Abdullah Alswaha met with global tech and space leaders at the forum to strengthen digital infrastructure and AI partnerships. These discussions focused on practical collaboration opportunities rather than aspirational announcements, reflecting the Kingdom's shift toward execution.
            </p>

            <h2>Humanizing Tourism and Economic Diversification</h2>
            <p>
              Beyond AI and technology, Saudi House emphasized the Kingdom's efforts to "humanize" tourism and diversify its economic base. This includes developing cultural attractions, heritage sites, and entertainment offerings that position Saudi Arabia as a destination for business, leisure, and cultural exchange.
            </p>
            <p>
              The tourism sector represents a key pillar of economic diversification, with targets to attract 100 million visitors annually by 2030. AI and digital infrastructure play supporting roles in this strategy, enabling smart city services, personalized experiences, and operational efficiency.
            </p>

            <h2>Global Positioning and Investment Attraction</h2>
            <p>
              Saudi Arabia's presence at Davos serves multiple strategic purposes: showcasing progress to global investors, attracting technology partnerships, and positioning the Kingdom as a serious player in the global AI and digital economy landscape.
            </p>
            <p>
              The emphasis on the "third phase" of Vision 2030 sends a clear message to investors: the Kingdom is moving from planning to execution, from government-led initiatives to private sector opportunities, and from experimental pilots to scaled deployments.
            </p>

            <h2>Execution Focus Replaces Announcement Culture</h2>
            <p>
              The tone at Saudi House reflected a notable shift from previous years. Rather than announcing new mega-projects or ambitious targets, Saudi officials focused on progress metrics, operational milestones, and concrete partnerships. This execution-oriented approach signals a maturing strategy where delivery matters more than vision.
            </p>
            <p>
              For AI and technology sectors specifically, this means fewer announcements of new initiatives and more emphasis on scaling existing projects, achieving commercial viability, and demonstrating measurable economic impact.
            </p>

            <h2>Investment Angle</h2>
            <p>
              The shift to a "third phase" of Vision 2030 with emphasis on private sector leadership and execution creates opportunities for investors willing to engage with Saudi Arabia's technology and AI sectors. The Kingdom's focus on operational delivery rather than aspirational announcements suggests a more mature investment environment where projects have clearer timelines, defined metrics, and commercial viability paths.
            </p>
            <p>
              For technology companies, Saudi Arabia's AI infrastructure investments and regulatory frameworks create a favorable environment for partnerships and market entry. The Kingdom's emphasis on sovereign AI capabilities also creates opportunities for companies that can support local model development, data center operations, and AI governance frameworks.
            </p>
            <p>
              Investors should note the Kingdom's shift from government-led initiatives to private sector execution, which may create opportunities in sectors where Saudi Arabia has built infrastructure but now seeks operational expertise and commercial partnerships.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
