import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";

export default function Signal034() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to Intelligence
          </Button>
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-accent">SIGNAL #034</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Jan 21, 2026</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-accent">Oman</span>
          </div>
          <ShareButton
            title="Signal #034: Oman Vision 2040 AI Investment Strategy"
            description="Oman investing heavily in AI as core pillar of Vision 2040 for economic diversification, with IMF backing AI readiness strategy."
            url={typeof window !== 'undefined' ? window.location.href : ''}
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Oman Vision 2040 AI Investment Strategy — IMF Backs AI Readiness for Economic Diversification
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Oman investing heavily in AI as core pillar of Vision 2040 strategy for economic diversification beyond hydrocarbons. IMF Executive Board recommends advancing digitalization and AI readiness to develop competitive nonhydrocarbon tradable sector. Government commits to creating 60,000 new jobs in 2026 with AI and digital skills as priority areas.
        </p>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Impact Score</div>
            <div className="text-2xl font-bold text-accent">8.0/10</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Category</div>
              <div className="font-medium">Strategy</div>
            </div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Sector</div>
            <div className="font-medium">National Strategy</div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>Executive Summary</h2>
          <p>
            Oman has elevated artificial intelligence to a core pillar of its Vision 2040 economic diversification strategy, with the International Monetary Fund's Executive Board endorsing the approach as critical to developing a competitive nonhydrocarbon tradable sector. The government's commitment to creating 60,000 new jobs in 2026—with AI and digital skills prioritized—signals a national-level mobilization to build AI readiness across healthcare, education, government services, and business processes. This represents a strategic inflection point for Oman: rather than treating AI as an incremental technology upgrade, the Sultanate is positioning it as the foundation for a post-oil economy capable of competing in global markets for digital services, AI-enabled manufacturing, and knowledge-intensive industries.
          </p>

          <h2>Strategic Context</h2>
          <p>
            Oman faces a more acute economic diversification challenge than its wealthier GCC neighbors. With smaller hydrocarbon reserves and a larger population relative to oil revenues, the Sultanate cannot rely on sovereign wealth funds or energy rents to sustain long-term prosperity. Vision 2040, launched in 2020, explicitly targets a shift from resource dependence to a diversified economy driven by logistics, manufacturing, tourism, and digital services. The IMF's 2026 Article IV consultation report validates this strategy, noting that "deeper trade integration as well as advancing digitalization and AI readiness would help develop a competitive nonhydrocarbon tradable sector." This external endorsement from a multilateral institution provides credibility to Oman's AI investment thesis and may facilitate access to development financing for AI infrastructure and human capital programs.
          </p>

          <p>
            The commitment to 60,000 new jobs in 2026 is particularly significant given Oman's youth unemployment challenge. Approximately 60% of Oman's population is under 30, creating pressure to generate employment opportunities that match the aspirations of an increasingly educated workforce. By prioritizing AI and digital skills in job creation efforts, Oman is attempting to align labor market supply with future demand in sectors like AI-enabled healthcare (diagnostics, telemedicine), education (adaptive learning platforms), government services (digital identity, smart cities), and business process automation. This approach contrasts with traditional GCC labor market strategies that relied on public sector employment or low-skill service jobs, instead betting on AI-enabled industries as the foundation for sustainable, high-value employment.
          </p>

          <h2>Investment Angles</h2>
          <p>
            <strong>AI Training and Education Infrastructure:</strong> Oman's focus on building AI readiness across 60,000 new jobs creates immediate demand for training providers, educational technology platforms, and workforce development programs. International education companies with AI curriculum expertise, local training institutes partnering with global tech firms (Google, Microsoft, AWS), and online learning platforms offering AI certifications should see opportunities in Oman's upskilling efforts. The government's emphasis on practical AI applications (rather than pure research) suggests demand for vocational training and industry-specific AI skills rather than academic computer science programs.
          </p>

          <p>
            <strong>AI-Enabled Healthcare and Education:</strong> Vision 2040 explicitly targets AI deployment in healthcare and education sectors. Healthcare opportunities include AI diagnostics, telemedicine platforms, hospital management systems, and predictive analytics for public health. Education opportunities include adaptive learning platforms, AI tutoring systems, and digital literacy programs. Both sectors are government-dominated in Oman, meaning procurement will likely flow through public tenders and PPP structures. Investors should monitor Ministry of Health and Ministry of Education technology procurement plans and partnerships with AI solution providers.
          </p>

          <p>
            <strong>Digital Infrastructure and Cloud Services:</strong> Oman's AI strategy requires underlying digital infrastructure: data centers, cloud platforms, connectivity, and cybersecurity. The government's "Zero Visit Initiative" (targeting fully digital public services by 2026) and emphasis on AI-driven government services create demand for cloud infrastructure, API platforms, and digital identity systems. Opportunities exist for infrastructure investors, cloud service providers (local and international), and systems integrators helping government agencies migrate to AI-ready digital platforms.
          </p>

          <h2>Key Metrics</h2>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 text-muted-foreground">Strategy Framework</td>
                  <td className="py-3 text-right font-semibold">Vision 2040</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-muted-foreground">Job Creation Target (2026)</td>
                  <td className="py-3 text-right font-semibold">60,000 New Jobs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-muted-foreground">Priority Skills</td>
                  <td className="py-3 text-right font-semibold">AI & Digital</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-muted-foreground">Target Sectors</td>
                  <td className="py-3 text-right font-semibold">Healthcare, Education, Government, Business</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 text-muted-foreground">IMF Recommendation</td>
                  <td className="py-3 text-right font-semibold">Advance AI Readiness</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Population Under 30</td>
                  <td className="py-3 text-right font-semibold">~60%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Bottom Line</h2>
          <p>
            Oman's elevation of AI to a core pillar of Vision 2040, backed by IMF endorsement and a concrete 60,000-job creation target for 2026, signals a national commitment to AI-driven economic transformation. Unlike wealthier GCC neighbors that can afford experimental AI projects, Oman's economic constraints force a more focused approach: AI must deliver tangible results in job creation, productivity gains, and nonhydrocarbon sector competitiveness. For investors, this creates opportunities in AI training infrastructure, healthcare and education AI applications, and digital government platforms—sectors where Oman must invest to achieve Vision 2040 goals. For enterprises, it signals a government customer willing to procure AI solutions that demonstrably contribute to economic diversification and employment. For Oman, success depends on execution: translating strategy documents into deployed AI systems, trained workers, and functioning digital services that can compete in regional and global markets.
          </p>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-8">
            <p className="text-sm font-medium mb-2">GCC Readiness Assessment</p>
            <p className="text-sm text-muted-foreground">
              Full analysis of Oman's AI implementation roadmap, sector opportunities, and investment entry points available to AgentDubai premium subscribers.
            </p>
            <Link href="/premium">
              <Button className="mt-4" size="sm">
                Access Premium Intelligence
              </Button>
            </Link>
          </div>

          <h2>Sources</h2>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Oman Observer, January 21, 2026</li>
            <li>Zawya, January 20, 2026</li>
            <li>IMF Executive Board Article IV Consultation Report, January 14, 2026</li>
            <li>Oman Vision 2040 Official Documentation</li>
            <li>AgentDubai Intelligence Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
