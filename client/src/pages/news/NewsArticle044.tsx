import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle044() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/news">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={16} />
            Back to News
          </Button>
        </Link>

        <article>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full mb-4">
              Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Middle East Data Centre Growth to Outstrip Global Markets at 62.5% Annual Rate
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>January 30, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>🌍 GCC-Wide</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>Infrastructure</span>
              </div>
            </div>

            <ShareButton 
              title="Middle East Data Centre Growth to Outstrip Global Markets at 62.5% Annual Rate"
              description="Knight Frank forecasts Middle East capacity reaching 3.2GW by 2027, driven by gigawatt-scale AI infrastructure"
              url="https://agentdub.ai/news/044"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The Middle East will witness the most dramatic data centre capacity growth globally over the next two years with an annual growth rate of 62.5 percent, driven by first-phase energisations of multiple gigawatt-scale campuses across Saudi Arabia and the UAE, according to Knight Frank's Global Data Centres Outlook 2026.
            </p>

            <h2>Unprecedented Growth Trajectory</h2>
            <p>
              Knight Frank forecasts Middle East data center capacity reaching 2.2 Gigawatts (GW) in 2026 and 3.2GW in 2027, compared with 1.2GW at the end of 2025. This 62.5% compound annual growth rate significantly outpaces North America's 24.6% and Europe's 17.8% expansion, positioning the Middle East as the world's fastest-growing data center region.
            </p>

            <p>
              Combined Saudi Arabia and UAE national data center market valuations are climbing from $35 billion in 2025 to $115 billion by end of 2027—a more than three-fold increase within two years. This reflects both capacity growth and premium pricing for AI-optimized infrastructure.
            </p>

            <h2>Abu Dhabi Joins Gigawatt Club</h2>
            <p>
              Abu Dhabi is set to become the region's first gigawatt market in 2027, placing it amongst only 20 gigawatt markets globally with just 10 situated outside North America. The transformation is powered by the USA-UAE AI initiative delivering a 5GW multi-tenanted campus spanning 10 square miles using nuclear, gas and solar energy.
            </p>

            <p>
              Stargate UAE, a 1GW AI compute cluster operated by OpenAI and Oracle alongside partners NVIDIA, Cisco and SoftBank, will see its first 200MW go live in 2026 as part of the Abu Dhabi campus development. This represents a fundamental shift from cloud infrastructure catch-up to AI-first deployment.
            </p>

            <h2>Riyadh's Rapid Scaling</h2>
            <p>
              Riyadh will scale at a compound annual growth rate of 85.9% over the next two years with over half a gigawatt of new capacity expected before 2028. The expansion is spearheaded by PIF-owned AI company HUMAIN targeting 1.9GW by 2030 and 6.6GW by 2034.
            </p>

            <p>
              HUMAIN's $1.2 billion framework for 250MW of AI data center capacity represents a shift from one-off projects to repeatable, institutional-grade platforms for AI infrastructure. The framework allows capital deployment in tranches, sequenced against construction, power delivery, and commercial de-risking.
            </p>

            <h2>Reality Check on Announced Capacity</h2>
            <p>
              Knight Frank's analysis indicates that whilst new data center development announcements over the last 18 months exceeded 14GW, realistic total supply will more likely reflect approximately 5GW before the end of the decade. This suggests significant market oversupply risk and highlights the gap between announced ambitions and deliverable capacity.
            </p>

            <p>
              The firm identifies three major challenges facing the sector: power availability as the decisive constraint (particularly in EMEA and APAC regions); liquidity pressures from capital-intensive AI-ready infrastructure with heightened tenant risk from neo-cloud operators; and technological advancement concerns about site adaptability and stranded asset risk from lower redundancy facilities.
            </p>

            <h2>Global Context</h2>
            <p>
              Globally, 33GW of new data center capacity is to be delivered over the next two years representing 24.6% compound annual growth rate, with global capacity expected to reach 73.6GW in 2026 and 93GW by end of 2027 compared with approximately 60GW currently.
            </p>

            <p>
              North America will account for 63% of growth, whilst Europe will expand at 17.8% annually with capacity diverging from traditional metropolitan areas as AI demand takes hold. Through analysis of over 2,600 data center projects globally, Knight Frank identifies power availability, liquidity pressures, and technological advancement as the three critical challenges facing the industry.
            </p>

            <h2>Strategic Implications</h2>
            <p>
              The Middle East's dramatic data center growth reflects the region's pivot from cloud catch-up to AI-first infrastructure deployment. With sovereign balance sheets taking early, asymmetric risk on gigawatt-scale campuses, the Gulf is establishing itself as a critical node in global AI infrastructure.
            </p>

            <p>
              However, the competitive dynamic between UAE and Saudi Arabia is not about gigawatts alone, but about operating models. Winners will be those who can deliver low-cost reliable power, secure advanced silicon, operate at hyperscale standards, and attract customers beyond domestic mandates—a challenge that extends far beyond infrastructure construction.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/news">
              <Button variant="outline">
                <ArrowLeft className="mr-2" size={16} />
                Back to News
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
