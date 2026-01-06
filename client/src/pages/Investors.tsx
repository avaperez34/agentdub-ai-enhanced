/**
 * Design Philosophy: Data-Driven Modernism
 * - Emerald accent for investment opportunities
 * - Clear information hierarchy for financial data
 * - Professional presentation for institutional investors
 */

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Globe, Shield, Zap, Users, DollarSign } from "lucide-react";

export default function Investors() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Invest in the Future of GCC AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access exclusive intelligence on 633 AI companies across the Gulf Cooperation Council. 
              Make data-driven investment decisions in the world's fastest-growing AI market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Market Opportunity</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-emerald-500/20">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-emerald-500 mb-2" />
                <CardTitle>$320B+ Market</CardTitle>
                <CardDescription>GCC AI market projected to reach $320B by 2030</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Driven by Vision 2030 initiatives, sovereign AI investments, and digital transformation across all sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20">
              <CardHeader>
                <Globe className="h-10 w-10 text-emerald-500 mb-2" />
                <CardTitle>6 Countries</CardTitle>
                <CardDescription>UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strategic geographic position connecting Asia, Europe, and Africa with world-class infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20">
              <CardHeader>
                <Zap className="h-10 w-10 text-emerald-500 mb-2" />
                <CardTitle>45% CAGR</CardTitle>
                <CardDescription>Fastest-growing AI adoption rate globally</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Government-backed initiatives, favorable regulations, and massive infrastructure investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Thesis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-500" />
                Sovereign AI Leadership
              </h3>
              <p className="text-muted-foreground mb-4">
                GCC nations are investing billions in sovereign AI capabilities, creating a unique ecosystem of 
                government-backed champions, national research institutions, and strategic partnerships with global tech leaders.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• G42 (UAE): $10B+ valuation, partnerships with Microsoft, OpenAI</li>
                <li>• SDAIA (Saudi): National AI strategy with $20B+ funding</li>
                <li>• QCRI (Qatar): World-class AI research and commercialization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-emerald-500" />
                High-Growth Sectors
              </h3>
              <p className="text-muted-foreground mb-4">
                AI adoption is accelerating across key economic sectors with strong government support, 
                favorable regulations, and significant venture capital availability.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• FinTech: 43 companies, $2.5B+ funding, digital banking transformation</li>
                <li>• Logistics: 53 companies, trade hub ambitions, autonomous operations</li>
                <li>• HealthTech: Telemedicine, AI diagnostics, precision medicine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Opportunities</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-500">Tier 1: National Champions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Government-backed entities with sovereign mandates, massive funding, and strategic partnerships.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Profile:</strong> $1B+ valuations</li>
                  <li>• <strong>Risk:</strong> Low (government backing)</li>
                  <li>• <strong>Returns:</strong> Stable, strategic value</li>
                  <li>• <strong>Examples:</strong> G42, SDAIA, QCRI</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-500">Tier 2-3: Scale-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Established companies with proven business models, regional presence, and growth trajectories.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Profile:</strong> $50M-$500M valuations</li>
                  <li>• <strong>Risk:</strong> Medium (market proven)</li>
                  <li>• <strong>Returns:</strong> High growth potential</li>
                  <li>• <strong>Examples:</strong> Mozn, Lean, Careem AI</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-500">Tier 4-5: Early Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  High-potential startups with innovative solutions, strong teams, and accelerator backing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Profile:</strong> $5M-$50M valuations</li>
                  <li>• <strong>Risk:</strong> High (early stage)</li>
                  <li>• <strong>Returns:</strong> 10x+ potential</li>
                  <li>• <strong>Examples:</strong> Hub71, KAUST portfolio</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AgentDub Intelligence */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why AgentDub Intelligence?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-emerald-500/20">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-emerald-500 mb-2" />
                <CardTitle>Proprietary GCC Readiness Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our 25-point framework evaluates every company across 5 critical dimensions:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data residency & hosting compliance</li>
                  <li>• Arabic language & cultural adaptation</li>
                  <li>• Deployment model flexibility</li>
                  <li>• Security & enterprise controls</li>
                  <li>• Sector-specific compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-emerald-500 mb-2" />
                <CardTitle>Comprehensive Market Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  633 verified AI companies across all 6 GCC countries with:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Detailed business descriptions</li>
                  <li>• Website URLs for direct contact</li>
                  <li>• Tier classification & maturity analysis</li>
                  <li>• Sector and deployment model data</li>
                  <li>• Monthly updates with new companies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get the Full Intelligence Report</h2>
          <p className="text-lg text-muted-foreground mb-8">
            328-page comprehensive analysis with individual compliance scoring for all 633 companies. 
            Make informed investment decisions with the most complete GCC AI intelligence available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600" asChild>
              <a href="https://gumroad.com/your-product-link" target="_blank" rel="noopener noreferrer">
                Buy Full Report - $299
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10" asChild>
              <a href="https://gumroad.com/your-subscription-link" target="_blank" rel="noopener noreferrer">
                Subscribe - $29/month
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Both options include monthly updates with new companies and refreshed data
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 AgentDub.ai - GCC AI Intelligence Platform</p>
        </div>
      </footer>
    </div>
  );
}
