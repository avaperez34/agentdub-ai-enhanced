import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle031() {
  const articleTitle = "Saudi Humain Secures $1.2B for AI Data Center Expansion";
  const articleUrl = `${window.location.origin}/news/031`;

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
                  <span>January 22, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>Saudi Arabia</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Saudi Humain Secures $1.2B for AI Data Center Expansion
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Humain, backed by Saudi sovereign wealth fund, secures up to $1.2 billion financing for 250MW AI data center capacity. Partnership with Nvidia and National Infrastructure Fund accelerates Kingdom's AI infrastructure strategy.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="Saudi Humain secures $1.2 billion financing to expand AI data center infrastructure to 250MW capacity"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>$1.2 Billion Framework Agreement</h2>
            <p>
              Saudi Arabia's Humain artificial intelligence company has secured up to $1.2 billion in financing to expand digital infrastructure, according to a statement released January 22, 2026. The non-binding framework agreement with Saudi's National Infrastructure Fund outlines the development of up to 250 megawatts in data center capacity.
            </p>
            <p>
              Humain, backed by Saudi's nearly trillion-dollar sovereign wealth fund, launched in May 2025 as the world's biggest oil exporter bets on AI to help diversify its economy away from hydrocarbons.
            </p>

            <h2>World-Class AI Infrastructure</h2>
            <p>
              "Our goal is to deliver world-class AI data center infrastructure that enterprises can rely on as their computing needs grow more complex," said Tareq Amin, Chief Executive Officer of Humain, in the statement on Wednesday.
            </p>
            <p>
              Saudi Arabia and the United Arab Emirates are both investing heavily in data centers and companies that supply AI products, including generative models. The Kingdom's commitment to AI infrastructure represents a strategic pivot toward technology-driven economic diversification under Vision 2030.
            </p>

            <h2>Data Center Investment Platform</h2>
            <p>
              Humain and the Saudi infrastructure fund are also exploring setting up a data center investment platform to bring in institutional investors "to support further scaling of Humain's AI strategy," the statement said. This platform would enable broader participation in Saudi Arabia's AI infrastructure build-out and provide additional capital for expansion beyond the initial 250MW capacity.
            </p>

            <h2>Nvidia Partnership and US Chip Access</h2>
            <p>
              In November 2025, Humain announced a partnership with Nvidia, as US officials cleared the way for the sale of advanced microchips to the Gulf kingdom. This partnership is critical for Humain's ability to deploy cutting-edge AI infrastructure, as Nvidia's H100 and next-generation chips are essential for training and deploying large language models and other AI workloads.
            </p>
            <p>
              The US approval for advanced chip sales to Saudi Arabia represents a significant geopolitical shift, enabling the Kingdom to compete with global AI leaders in infrastructure capacity and capability.
            </p>

            <h2>Strategic Context: GCC AI Infrastructure Race</h2>
            <p>
              The $1.2 billion financing comes as Saudi Arabia and the UAE compete for AI supremacy in the region. Both countries are racing to build data centers at scale, with the UAE's G42 recently announcing plans to expand from 200MW to 5GW capacity. Saudi Arabia's Humain represents the Kingdom's answer to this regional competition, positioning itself as a critical player in the GCC's AI infrastructure ecosystem.
            </p>

            <h2>Investment Implications</h2>
            <p>
              <strong>Infrastructure Play:</strong> Humain's $1.2B financing validates Saudi Arabia's commitment to AI infrastructure as a core pillar of economic diversification. The data center investment platform could attract institutional capital from global investors seeking exposure to GCC AI growth.
            </p>
            <p>
              <strong>Sovereign AI Strategy:</strong> The partnership with Nvidia and National Infrastructure Fund demonstrates Saudi Arabia's integrated approach to AI development—combining sovereign capital, strategic partnerships, and regulatory support to build indigenous AI capabilities.
            </p>
            <p>
              <strong>Regional Competition:</strong> Humain's expansion positions Saudi Arabia as a credible competitor to UAE's G42 in the GCC AI infrastructure race, potentially driving further investment and innovation across the region.
            </p>

            <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li>✓ Humain secures up to $1.2 billion from National Infrastructure Fund</li>
                <li>✓ Framework agreement for 250MW AI data center capacity development</li>
                <li>✓ Exploring data center investment platform for institutional investors</li>
                <li>✓ Partnership with Nvidia following US approval for advanced chip sales</li>
                <li>✓ Part of Saudi Vision 2030 AI-driven economic diversification</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
