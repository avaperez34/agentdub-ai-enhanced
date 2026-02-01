import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft } from "lucide-react";

export default function NewsArticle049() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/news">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to News
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-6">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Consumer Tech
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              UAE
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            ENTERTAINER Introduces HAPI: AI-Powered Personalization Assistant for UAE Consumers
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 27, 2026</time>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <ShareButton
            title="ENTERTAINER Introduces HAPI: AI-Powered Personalization Assistant for UAE Consumers"
            description="HAPI built around four specialized AI agents for consumer personalization."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <p className="text-foreground">
            ENTERTAINER, a UAE-based consumer technology company, has introduced HAPI, an AI-powered personalization assistant built around four specialized AI agents: knowledge agent for FAQs, search agent for platform navigation, recommendation agent, and transaction agent. The launch positions ENTERTAINER as a pioneer in multi-agent consumer AI applications.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Multi-Agent Architecture</h2>
          <p className="text-foreground">
            HAPI's architecture demonstrates a sophisticated approach to consumer AI, deploying four specialized agents that work collaboratively:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><strong>Knowledge Agent:</strong> Handles frequently asked questions and provides instant answers to common queries</li>
            <li><strong>Search Agent:</strong> Assists users in navigating the ENTERTAINER platform, finding relevant offers and experiences</li>
            <li><strong>Recommendation Agent:</strong> Analyzes user preferences and behavior to suggest personalized offers and activities</li>
            <li><strong>Transaction Agent:</strong> Facilitates purchasing decisions and completes transactions on behalf of users</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Consumer-Facing AI Innovation</h2>
          <p className="text-foreground">
            While much of the GCC's AI investment has focused on enterprise and government applications, HAPI represents a significant consumer-facing AI deployment. ENTERTAINER's multi-agent approach brings sophisticated AI capabilities directly to UAE consumers, demonstrating that agentic AI is moving beyond B2B and government sectors into consumer technology.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Personalization at Scale</h2>
          <p className="text-foreground">
            HAPI's recommendation and transaction agents enable personalization at a level previously difficult to achieve in consumer applications. By analyzing user behavior, preferences, and context, the system can suggest highly relevant offers and streamline the purchasing process. This level of personalization has the potential to significantly improve user engagement and conversion rates.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">UAE Consumer AI Leadership</h2>
          <p className="text-foreground">
            ENTERTAINER's deployment of HAPI positions the company as a leader in UAE consumer AI applications. While global tech giants like Amazon, Netflix, and Spotify have long used AI for recommendations, HAPI's multi-agent architecture represents a more advanced approach that could serve as a model for other consumer-facing companies in the region.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Regional Market Opportunity</h2>
          <p className="text-foreground">
            The UAE's high smartphone penetration, digital-savvy population, and supportive regulatory environment create favorable conditions for consumer AI adoption. If HAPI proves successful, it could pave the way for similar multi-agent consumer applications across the GCC, spanning e-commerce, entertainment, travel, and financial services.
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Significance</h3>
            <p className="text-foreground">
              ENTERTAINER's launch of HAPI demonstrates that agentic AI is moving beyond enterprise and government applications into consumer technology. The multi-agent architecture—with specialized agents for knowledge, search, recommendations, and transactions—represents a sophisticated approach to consumer personalization that could serve as a model for other UAE and GCC consumer-facing companies. As the region invests heavily in AI infrastructure and capability, consumer applications like HAPI will be critical for demonstrating AI's value to everyday users.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related News</h3>
            <div className="grid gap-4">
              <Link href="/news/048">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Databricks: Multi-Agent AI Systems Rising</h4>
                  <p className="text-sm text-muted-foreground mt-1">Enterprise adoption of multi-agent architectures</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/news">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2" size={16} />
                Back to All News
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
