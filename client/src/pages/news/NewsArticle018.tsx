import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle018() {
  const articleTitle = "Kuwait Oil Ministry Launches Six Digital Transformation Projects";
  const articleUrl = `${window.location.origin}/news/018`;

  return (
    <div className="min-h-screen bg-background">
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
              <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                Energy
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 14, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Kuwait</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Kuwait Oil Ministry Launches Six Digital Transformation Projects
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Kuwait's Oil Ministry officially launches six digital transformation projects to modernize operations, improve service delivery, and position the energy sector at the forefront of technological innovation.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                url={articleUrl}
                description="Kuwait's Oil Ministry launches six digital transformation projects to modernize operations and improve service delivery."
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Strategic Digital Modernization</h2>
            <p>
              Kuwait's Oil Ministry has officially launched six comprehensive digital transformation projects designed to modernize the country's critical energy sector operations. This initiative represents a significant commitment to leveraging technology for operational excellence and enhanced service delivery across the petroleum industry.
            </p>

            <p>
              The projects encompass a wide range of digital capabilities, from data analytics and automation to advanced monitoring systems and integrated platforms. This holistic approach ensures that digital transformation touches every aspect of the ministry's operations, from upstream exploration to downstream distribution.
            </p>

            <h2>Operational Efficiency and Service Delivery</h2>
            <p>
              The digital transformation projects are specifically designed to boost operational efficiency across Kuwait's oil and gas sector. By implementing advanced digital systems, the ministry aims to streamline workflows, reduce manual processes, and enable data-driven decision-making at all organizational levels.
            </p>

            <p>
              Improved service delivery stands as a central objective of these initiatives. The digital platforms will enable faster response times, better coordination between departments, and enhanced transparency in operations. This modernization directly supports Kuwait's broader economic diversification goals by ensuring the energy sector operates at peak efficiency.
            </p>

            <h2>Regional Energy Leadership</h2>
            <p>
              Kuwait's investment in digital transformation for its oil sector positions the country as a forward-thinking energy producer in the GCC region. As global energy markets increasingly demand operational transparency, environmental accountability, and efficiency, Kuwait's digital infrastructure provides competitive advantages in international markets.
            </p>

            <p>
              The initiative also aligns with global trends toward smart energy management and sustainable operations. By digitizing operations, Kuwait gains better visibility into resource utilization, environmental impact, and optimization opportunities—capabilities essential for modern energy sector management.
            </p>

            <h2>Economic Diversification Support</h2>
            <p>
              These digital transformation projects support Kuwait's broader economic diversification strategy by ensuring the oil sector remains a reliable foundation for the economy while freeing up resources and expertise for development in other sectors. A more efficient, digitally-enabled energy sector requires fewer manual interventions and creates opportunities for workforce upskilling in digital technologies.
            </p>

            <p>
              The Oil Ministry's digital transformation also demonstrates government commitment to modernization across all sectors, setting an example for other ministries and encouraging private sector digital adoption. This leadership from a traditionally conservative sector sends a powerful signal about Kuwait's readiness for comprehensive digital transformation.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link href="/news">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to News
                </Button>
              </Link>
              <Link href="/premium">
                <Button>View Premium Plans</Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
