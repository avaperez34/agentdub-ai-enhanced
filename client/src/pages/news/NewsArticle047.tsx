import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft } from "lucide-react";

export default function NewsArticle047() {
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
              Events
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 ml-2">
              UAE
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Abu Dhabi Hosts Machines Can Think 2026 with 1,500 Global AI Experts
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <time>January 27, 2026</time>
            <span>•</span>
            <span>3 min read</span>
          </div>

          <ShareButton
            title="Abu Dhabi Hosts Machines Can Think 2026 with 1,500 Global AI Experts"
            description="Abu Dhabi's flagship AI Adopters event brings together 1,500 global AI experts."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />

          <p className="text-foreground">
            Abu Dhabi hosted Machines Can Think 2026, the emirate's flagship AI Adopters event, bringing together 1,500 global artificial intelligence experts for a major conference showcasing regional AI leadership and international collaboration.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Flagship AI Conference</h2>
          <p className="text-foreground">
            The Machines Can Think conference series has established itself as Abu Dhabi's premier AI event, attracting leading researchers, practitioners, policymakers, and business leaders from across the globe. The 2026 edition reinforced the UAE capital's position as a convening ground for AI innovation and deployment discussions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Global Participation</h2>
          <p className="text-foreground">
            With 1,500 attendees from international tech companies, research institutions, government agencies, and startups, the conference demonstrated Abu Dhabi's ability to attract top-tier AI talent and thought leadership. The diverse participant base reflected the global nature of AI development and the UAE's strategic positioning as a bridge between Western and Eastern AI ecosystems.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Regional AI Leadership</h2>
          <p className="text-foreground">
            The conference served as a platform for showcasing the UAE's AI initiatives, including major infrastructure investments, indigenous AI model development, and regulatory frameworks. Abu Dhabi's hosting of such a significant AI event underscores the emirate's ambition to be recognized as a global AI hub, not just a regional player.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">International Collaboration</h2>
          <p className="text-foreground">
            Machines Can Think 2026 facilitated partnerships between UAE-based AI initiatives and international technology leaders, creating opportunities for knowledge exchange, joint ventures, and collaborative research. The conference format encouraged dialogue between different AI development philosophies and approaches, contributing to a more globally integrated AI ecosystem.
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-foreground">Significance</h3>
            <p className="text-foreground">
              The successful hosting of Machines Can Think 2026 with 1,500 global experts demonstrates Abu Dhabi's emergence as a major AI conference destination. As the UAE continues to invest heavily in AI infrastructure and indigenous capability development, events like this provide crucial platforms for showcasing progress, attracting talent, and building international partnerships that will shape the region's AI trajectory.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Related News</h3>
            <div className="grid gap-4">
              <Link href="/news/051">
                <div className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <h4 className="font-semibold text-foreground">Middle East Enterprises Shift to Process-Led AI</h4>
                  <p className="text-sm text-muted-foreground mt-1">Moving beyond pilots to production deployment</p>
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
