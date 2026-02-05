import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle062() {
  const article = {
    id: "062",
    title: "IMF Chief: AI Could Boost GCC Non-Oil GDP by 2.8% - Largest Economic Diversification Opportunity",
    date: "February 5, 2026",
    readTime: "7 min read",
    country: "GCC",
    category: "Economic Policy",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-8">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">{article.country}</Badge>
              <Badge variant="outline">{article.category}</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none mb-12">
            <p>
              At the World Government Summit in Dubai on February 3, 2026, IMF Managing Director Kristalina Georgieva highlighted that artificial intelligence could boost GCC non-oil GDP by up to 2.8 percent. This represents the largest opportunity for economic diversification away from hydrocarbon dependency in the region's modern history.
            </p>

            <h2>UAE Leading Global AI Adoption</h2>
            <p>
              The UAE leads globally with 64% of its working-age population using AI—the highest rate worldwide. This demonstrates the region's readiness for AI-driven transformation and the population's embrace of AI technologies. IMF estimates show that AI could fuel global productivity by 0.8 percentage points per year, with GCC benefiting even more significantly.
            </p>

            <h2>Economic Diversification Imperative</h2>
            <p>
              For economies long dependent on oil exports, AI presents an enormous opportunity to build new sources of growth and economic resilience. The 2.8% potential boost to non-oil GDP is substantial and could fundamentally reshape GCC economies, reducing vulnerability to oil price fluctuations and creating sustainable, knowledge-based growth.
            </p>

            <h2>Policy Framework Requirements</h2>
            <p>
              Georgieva emphasized that capturing this opportunity requires coordinated policy frameworks across three critical dimensions:
            </p>

            <ul>
              <li>Macro policies supporting investment and innovation while not encouraging automation at expense of people</li>
              <li>Guardrails ensuring AI safety, fairness, and trustworthiness without stifling innovation</li>
              <li>Cooperation and partnerships enabling knowledge transfer and data sharing across governments and organizations</li>
            </ul>

            <h2>Labor Market Disruption</h2>
            <p>
              The IMF also warned that 40% of jobs globally will be impacted by AI (60% in advanced economies), with young people and the middle class hit hardest by disruption. Countries with strong digital infrastructure, skilled labor forces, and robust regulatory frameworks will capture the largest and fastest benefits. Those without may fall behind.
            </p>

            <p>
              This makes policy coordination and workforce development critical for ensuring that GCC economies capture AI's benefits broadly rather than concentrating gains among a small segment of the population.
            </p>

            <h2>Regional Opportunity</h2>
            <p>
              The IMF's assessment underscores that GCC countries are uniquely positioned to lead in AI adoption. With strong digital infrastructure investments already underway, significant capital available for AI initiatives, and demonstrated population readiness for AI technologies, the region has the building blocks for AI-led economic transformation.
            </p>

            <p>
              However, realizing this 2.8% non-oil GDP boost will require coordinated action across governments, businesses, and educational institutions to build the necessary talent pipeline, establish clear regulatory frameworks, and ensure that AI benefits are broadly distributed across society.
            </p>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Share this article</p>
            <ShareButton
              title={article.title}
              url={`${typeof window !== 'undefined' ? window.location.origin : ''}/news/062`}
            />
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link href="/news/061">
              <Button variant="outline">← Previous Article</Button>
            </Link>
            <Link href="/news/063">
              <Button variant="outline">Next Article →</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
