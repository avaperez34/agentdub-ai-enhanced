import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle033() {
  const articleTitle = "IMF Warns of AI 'Tsunami' as UAE Hosts Davos Dialogue on Inclusive Growth";
  const articleUrl = `${window.location.origin}/news/033`;

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
              <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                Strategy
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 22, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              IMF Warns of AI 'Tsunami' as UAE Hosts Davos Dialogue on Inclusive Growth
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              IMF chief warns 40% of global jobs affected by AI as UAE hosts WEF dialogue. UAE attracted $45B FDI in 2025 (up 50%), demonstrating connectivity advantage. DoH Abu Dhabi and WEF announce intelligent health systems partnership.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="IMF warns of AI tsunami affecting 40% of jobs as UAE hosts World Economic Forum dialogue on inclusive growth at Davos 2026"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Great Rebalancing: AI, Jobs, and Inclusive Growth</h2>
            <p>
              The UAE hosted a high-level dialogue at the UAE Pavilion during the 2026 World Economic Forum Annual Meeting in Davos on January 22, 2026, convening global leaders to examine the shifting dynamics of the world economy, the impact of artificial intelligence (AI) on labour markets, and the future of inclusive growth amid accelerating economic and technological change.
            </p>
            <p>
              Held under the title "The Great Rebalancing: Artificial Intelligence, Jobs, and the Future of Inclusive Growth," the session brought together Badr Jafar, the UAE's Special Envoy for Business and Philanthropy, and Kristalina Georgieva, Managing Director of the International Monetary Fund (IMF), for a fireside discussion on the risks and opportunities shaping the global economic outlook.
            </p>

            <h2>IMF: "A Tsunami is Hitting the Labour Market"</h2>
            <p>
              Drawing on the IMF's latest assessments, Kristalina Georgieva noted that while global uncertainty remains exceptionally high—and is likely to persist—the world economy has demonstrated notable resilience, with growth holding steady and IMF projections upgraded for the period ahead. She cautioned, however, that this resilience should not be taken for granted amid profound structural transformations driven by technology, geopolitics, climate change, and demographic shifts.
            </p>
            <p>
              "A tsunami is hitting the labour market," said Georgieva. "AI is quickly reshaping economies. Some roles grow; others disappear. We must invest in skills and prepare communities. The world as a whole is already experiencing the arrival of AI, but I do worry about the accordion of opportunities that are much more present in some places than in others."
            </p>
            <p>
              IMF estimates suggest that around 40% of global jobs will be significantly affected by AI-driven change—either enhanced, transformed, or displaced—highlighting the urgency of policy and investment choices that support communities through transition.
            </p>

            <h2>UAE: Connectivity as Strategic Advantage</h2>
            <p>
              Badr Jafar highlighted the UAE's long-term strategic choice to build an economy optimized for resilience, openness, and global connectivity. "At a time when global systems are fragmenting, the UAE is doubling down on connection. We are known for open skies, open ports, and open minds—and the data shows the value of this approach," he said.
            </p>
            <p>
              "Last year, the UAE attracted over US$45 billion in foreign direct investment, up nearly 50% year-on-year, even as global FDI declined by 11%. We accounted for more than half of all investment flows into the Middle East, ranked second globally for new greenfield projects, behind only the United States, and welcomed in nearly 10,000 new millionaires, more than any other country worldwide. In an age of fragmentation, our connectivity is a clear strategic advantage."
            </p>

            <h2>Four Enabling Factors for Resilient Growth</h2>
            <p>
              To enable resilient and inclusive growth, Georgieva emphasised the importance of four enabling factors:
            </p>
            <ul>
              <li><strong>Private-sector adaptability:</strong> Enabling businesses to respond quickly to AI-driven market changes</li>
              <li><strong>Responsible AI adoption:</strong> Ensuring AI deployment aligns with ethical principles and societal needs</li>
              <li><strong>Sustained trade flows:</strong> Maintaining open global trade despite geopolitical fragmentation</li>
              <li><strong>Sound fiscal policy:</strong> Investing in education, digital infrastructure, and AI access</li>
            </ul>
            <p>
              She also highlighted the critical role of public investment in education, digital infrastructure, and access to AI tools to ensure that communities can participate meaningfully in the emerging AI-driven economy.
            </p>

            <h2>GCC as Bright Spot in Global Outlook</h2>
            <p>
              The UAE and wider Gulf region were cited as consistent bright spots in the IMF's global economic outlook. Georgieva pointed to three key enabling capabilities underpinning this performance:
            </p>
            <ul>
              <li><strong>Ongoing regulatory reform:</strong> Efforts to reduce bureaucracy and streamline business operations</li>
              <li><strong>Sustained economic diversification:</strong> Non-oil sectors now account for more than 75% of UAE GDP</li>
              <li><strong>Long-term investment in human capital:</strong> Focus on skills, education, and inclusion</li>
            </ul>

            <h2>DoH Abu Dhabi and WEF Partnership on Intelligent Health</h2>
            <p>
              In a parallel announcement at Davos, the Department of Health - Abu Dhabi (DoH) and the World Economic Forum announced the next stage of a partnership to advance intelligent health systems and healthy longevity, reinforcing Abu Dhabi's position as a global leader in preventive and personalised health.
            </p>
            <p>
              The signing took place in the presence of Sheikha Latifa Bint Mohammed Bin Rashid Al Maktoum, Chairperson of the Dubai Culture and Arts Authority; Mohammad bin Abdullah Al Gergawi, Minister of Cabinet Affairs and Member of the World Economic Forum Leadership Council; Børge Brende, President and CEO of the World Economic Forum, and Larry Fink, interim Co-Chair of the Board of Trustees of the World Economic Forum and co-founder, Chairman and CEO of BlackRock.
            </p>
            <p>
              Mansoor Al Mansoori, Chairman of the Department of Health - Abu Dhabi, said: "Today's health systems are rich in individual innovation but held back by silos and a traditionally reactive approach. Through our collaboration with the World Economic Forum, we are shifting the global paradigm toward intelligent health infrastructure. Our goal is to build a personalised and proactive system that cares before it cures, enabling healthier, longer lives at a true population scale."
            </p>

            <h2>Abu Dhabi as Global Pathfinder in Digital Healthcare</h2>
            <p>
              As part of this next phase, Abu Dhabi will continue its role as a Global Pathfinder within the Forum's Digital Healthcare Transformation (DHT) Initiative, an international CEO and Minister-led platform that brings together more than 200 organisations across healthcare, technology, policy and investment to accelerate health system transformation worldwide, re-imagining health through digital, AI, and data-driven innovation at scale.
            </p>
            <p>
              The announcement follows the culmination of the previous phase of the partnership between the DOH and the Forum, which resulted in the co-authored white paper, "A New Era for Digital Health: Abu Dhabi's Leap to Health Intelligence." The paper outlines how Abu Dhabi has built a system that connects clinical, genomic, lifestyle and environmental data to predict risk, prevent disease and inform policy at population scale.
            </p>

            <h2>Investment Implications</h2>
            <p>
              <strong>UAE Connectivity Premium:</strong> The UAE's $45B FDI inflow (up 50% YoY) despite global FDI decline validates the "connectivity advantage" thesis. Investors seeking stable, growth-oriented markets in a fragmenting world should consider UAE exposure.
            </p>
            <p>
              <strong>AI Transition Risk:</strong> IMF's warning that 40% of jobs will be affected by AI highlights the urgency of investing in reskilling, education technology, and workforce transition solutions—particularly in markets with large youth populations.
            </p>
            <p>
              <strong>Health Intelligence Ecosystem:</strong> Abu Dhabi's partnership with WEF on intelligent health systems positions the emirate as a global testbed for AI-driven preventive healthcare, creating opportunities in health tech, genomics, and data analytics.
            </p>

            <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li>✓ IMF warns 40% of global jobs significantly affected by AI</li>
                <li>✓ UAE attracted $45B FDI in 2025 (up 50% YoY) despite global decline</li>
                <li>✓ UAE accounted for &gt;50% of all MENA investment flows</li>
                <li>✓ Non-oil sectors now 75%+ of UAE GDP</li>
                <li>✓ DoH Abu Dhabi and WEF announce intelligent health systems partnership</li>
                <li>✓ Abu Dhabi continues as Global Pathfinder in WEF Digital Healthcare Transformation Initiative</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
