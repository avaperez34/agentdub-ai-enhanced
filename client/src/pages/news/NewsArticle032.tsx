import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle032() {
  const articleTitle = "WEF Launches Centre for Fourth Industrial Revolution in Abu Dhabi";
  const articleUrl = `${window.location.origin}/news/032`;

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
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              WEF Launches Centre for Fourth Industrial Revolution in Abu Dhabi
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              World Economic Forum establishes Abu Dhabi Centre for Frontier Technologies hosted by TII. Focus on quantum, robotics, space, and AI innovation reinforces UAE's position as global hub for responsible tech deployment.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="World Economic Forum launches Centre for Fourth Industrial Revolution in Abu Dhabi, hosted by Technology Innovation Institute"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Five New C4IR Centers Globally</h2>
            <p>
              The World Economic Forum announced on January 22, 2026, the signing of agreements for five new Centres for the Fourth Industrial Revolution (C4IR) in France, the United Kingdom, the United Arab Emirates, and India, expanding its global network dedicated to the responsible adoption of frontier technologies.
            </p>
            <p>
              The centres will focus on AI, frontier technologies, the energy transition, and cyber resilience—strategic priorities for governments and industry. New centres in the United Arab Emirates and India will address regional needs while fostering international dialogue and cooperation.
            </p>

            <h2>Abu Dhabi Centre for Frontier Technologies</h2>
            <p>
              Hosted by the Technology Innovation Institute (TII), the Abu Dhabi Centre for Frontier Technologies will advance innovation in quantum technologies, robotics, and space, while advancing public-private collaboration to accelerate the responsible deployment of frontier technologies and strengthen global competitiveness.
            </p>
            <p>
              Dr. Najwa Aaraj, Chief Executive of the Technology Innovation Institute (TII), said: "As frontier technologies accelerate, there is a growing imperative and opportunity to guide their responsible and impactful adoption. This centre brings together research excellence, policy leadership and global collaboration in one platform, pushing the boundaries of frontier research and development, while enabling breakthrough science to move beyond the lab into real-world application. By translating innovation into responsibly governed, scalable solutions, we are reinforcing Abu Dhabi's role as a global hub for science, innovation and impact."
            </p>

            <h2>Fourth Industrial Revolution Network</h2>
            <p>
              Collectively, the new centres will strengthen the Forum's global Fourth Industrial Revolution Network, which brings together governments, industry, and experts to co-design adaptable policy solutions, pilots, and frameworks that support the safe and ethical development and deployment of emerging technologies.
            </p>
            <p>
              "The launch of five new Centres for the Fourth Industrial Revolution is a testament to the power of bringing governments, industry and experts together around shared challenges," said Børge Brende, President and CEO of the World Economic Forum. "Through regional insights, partners strengthen a global effort to adopt and deploy emerging technologies responsibly."
            </p>

            <h2>Focus Areas: AI, Quantum, Robotics, Space</h2>
            <p>
              The Abu Dhabi centre will focus on four key areas of frontier technology development:
            </p>
            <ul>
              <li><strong>Quantum Technologies:</strong> Advancing quantum computing, quantum communication, and quantum sensing research and applications</li>
              <li><strong>Robotics:</strong> Developing autonomous systems and intelligent robotics for industrial and societal applications</li>
              <li><strong>Space Technologies:</strong> Expanding space exploration capabilities and satellite-based services</li>
              <li><strong>AI Innovation:</strong> Accelerating responsible AI development and deployment across sectors</li>
            </ul>

            <h2>Strategic Context: UAE's Innovation Ecosystem</h2>
            <p>
              The establishment of the C4IR centre in Abu Dhabi reinforces the UAE's position as a global hub for innovation and technology. The Technology Innovation Institute, which will host the centre, has already demonstrated leadership in AI research through its Falcon language models and other breakthrough technologies.
            </p>
            <p>
              This announcement comes amid a broader push by the UAE to position itself as a leader in the Fourth Industrial Revolution, with significant investments in AI infrastructure, quantum computing research, and space exploration programs.
            </p>

            <h2>Global Network and Regional Impact</h2>
            <p>
              The Abu Dhabi centre joins a global network of C4IR centres working to shape the governance and deployment of emerging technologies. By participating in this network, the UAE gains access to global best practices while contributing regional perspectives on technology governance and innovation policy.
            </p>
            <p>
              The centre will work with governments and industry to deliver practical policy frameworks and pilots, address regional priorities, and advance international cooperation on frontier technology governance.
            </p>

            <h2>Investment Implications</h2>
            <p>
              <strong>Policy Framework Development:</strong> The C4IR centre will shape regulatory frameworks for frontier technologies in the UAE and broader GCC region, providing clarity for investors and enterprises deploying quantum, robotics, and AI solutions.
            </p>
            <p>
              <strong>Public-Private Collaboration:</strong> The centre's mandate to advance public-private collaboration creates opportunities for enterprises to participate in shaping technology governance while accessing research and pilot programs.
            </p>
            <p>
              <strong>Global Hub Positioning:</strong> The WEF's selection of Abu Dhabi reinforces the UAE's credibility as a global innovation hub, potentially attracting further investment in frontier technology sectors.
            </p>

            <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li>✓ WEF establishes 5 new C4IR centres globally, including Abu Dhabi</li>
                <li>✓ Abu Dhabi Centre for Frontier Technologies hosted by TII</li>
                <li>✓ Focus on quantum, robotics, space, and AI innovation</li>
                <li>✓ Advance public-private collaboration for responsible tech deployment</li>
                <li>✓ Reinforces UAE's position as global hub for science and innovation</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
