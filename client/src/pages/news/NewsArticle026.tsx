import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle026() {
  const articleTitle = "UAE Launches AI-Driven Foreign Trade Platform with Presight Partnership";
  const articleUrl = `${window.location.origin}/news/026`;

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
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Infrastructure
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 19, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              UAE Launches AI-Driven Foreign Trade Platform with Presight Partnership
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Ministry of Foreign Trade signs agreement with Abu Dhabi AI firm Presight to create world's first fully AI-driven trade ministry. Platform will analyze millions of data points in real time to forecast disruptions and identify opportunities.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="UAE Ministry of Foreign Trade partners with Presight to build AI platform transforming global trade operations"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>World's First Fully AI-Driven Trade Ministry</h2>
            <p>
              The UAE's Ministry of Foreign Trade has signed a landmark agreement with Abu Dhabi AI company Presight, a G42 subsidiary, to develop a nationwide AI platform aimed at transforming foreign trade operations and strengthening the country's position as a global trade hub.
            </p>
            <p>
              The initiative, announced on January 19, 2026, will create the Ministry of Foreign Trade AI Platform—a comprehensive suite of AI-powered tools embedded across the ministry's core operations. Mohammed Al Gergawi, Minister of Cabinet Affairs, attended the signing ceremony, underscoring the strategic importance of this digital transformation.
            </p>

            <h2>Real-Time Intelligence at Unprecedented Scale</h2>
            <p>
              Once operational, the platform will support the ministry's ambition to become the world's first fully AI-driven trade ministry. The system is designed to analyze millions of data points in real time, drawing from diverse sources including ports, shipping routes, customs records, international trade laws, and bilateral and multilateral trade agreements.
            </p>
            <p>
              Dr. Thani Al Zeyoudi, Minister of Foreign Trade, emphasized the transformative potential: "Trade is one sector where AI can have the most immediate impact, replacing cumbersome, human-centered processes with real-time data analysis and forecasting to accelerate merchandise movements, reduce disruptions and identify high-potential opportunities."
            </p>

            <h2>Advanced Capabilities for Public and Private Sectors</h2>
            <p>
              The platform will provide advanced intelligence to both public and private sector stakeholders, enabling them to anticipate potential disruptions to global supply chains and identify trade and investment opportunities before they become obvious to competitors.
            </p>
            <p>
              For businesses, the platform offers practical benefits including better understanding of regulatory requirements and market access rules across jurisdictions, as well as AI-enabled services such as smart certificates of origin. For policymakers, it will significantly enhance data analysis capabilities, supporting evidence-based decision-making and strengthening the UAE's negotiating position in trade agreements.
            </p>

            <h2>Building on Digital Trade Infrastructure</h2>
            <p>
              The UAE has already made significant strides in digital trade infrastructure. Platforms such as Dubai Trade handle nearly 90,000 transactions daily, reflecting the scale of digital processing already in place. However, many procedures still involve multi-stage compliance and manual decision points that the new AI platform aims to streamline.
            </p>
            <p>
              Dubai's digital trade ecosystem has reduced reliance on paper and physical visits over the past two decades, but the AI Platform represents a quantum leap toward predictive, autonomous trade operations.
            </p>

            <h2>Strategic Context: UAE Global Centre of Trade</h2>
            <p>
              The AI Platform forms one of eight strategic pillars of the UAE Global Centre of Trade programme, launched by Sheikh Mohammed bin Rashid, Vice President and Ruler of Dubai, in November 2025. The programme aims to reinforce the UAE's role as a global gateway for goods and services, improve foreign trade growth, and open more markets for Emirati exports.
            </p>
            <p>
              Mansoor Al Mansoori, vice chairman of Presight, positioned the platform as a competitive advantage: "The future of trade belongs to economies that can see early and move fast. By putting real-time insight into the hands of decision-makers, we reduce friction, compress timelines and help governments and businesses operate with confidence."
            </p>

            <h2>Setting a Global Standard</h2>
            <p>
              Thomas Pramotedham, chief executive of Presight, described the agreement as a watershed moment: "Our solutions will unlock a new era of seamless global trade by reducing costly disruptions and instantly matching demand with supply. The Ministry of Foreign Trade AI Platform will become a gold standard for the sector."
            </p>
            <p>
              The initiative demonstrates the UAE's strategy of embedding AI into critical national infrastructure rather than treating it as a standalone technology layer. By targeting trade—a sector with immediate economic impact and clear ROI metrics—the UAE is positioning itself as a model for AI-driven government transformation.
            </p>

            <h2>Investment Angle</h2>
            <p>
              This deployment validates Presight's position as a leading enterprise AI provider in the region and demonstrates G42's ability to secure sovereign-grade contracts. The focus on trade infrastructure—rather than consumer applications—signals a maturing AI market where governments prioritize operational efficiency and economic competitiveness over experimental pilots.
            </p>
            <p>
              For investors, the UAE's commitment to becoming the first fully AI-driven trade ministry creates a blueprint that other nations may follow, potentially opening markets for similar platforms globally. The emphasis on real-time data integration and predictive analytics also highlights growing demand for AI systems that can operate at scale in mission-critical environments.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
