import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle034() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to News
            </Button>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>🇦🇪 UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span>Sustainability</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dubai Launches First Green Artificial Intelligence Conference
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Zayed International Environment Foundation organizes inaugural Green AI Conference under theme "Harnessing Technology for Environmental Sustainability"
          </p>

          {/* Share Button */}
          <div className="mb-8">
            <ShareButton
              title="Dubai Launches First Green Artificial Intelligence Conference"
              description="Zayed International Environment Foundation organizes inaugural Green AI Conference under theme 'Harnessing Technology for Environmental Sustainability.'"
              url="https://agentdub.ai/news/034"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              Dubai has launched its first Green Artificial Intelligence Conference and accompanying exhibition under the patronage of Major General Abdullah Khalifa Al Marri, Commander-in-Chief of Dubai Police. The event is organized by the Zayed International Environment Foundation in collaboration with the Dubai Police Academy and Curtin University, Australia.
            </p>

            <h2>Conference Theme and Objectives</h2>
            <p>
              Held under the theme "Harnessing Technology for Environmental Sustainability," the conference highlights the role of artificial intelligence as a key enabler in building a greener and more resilient future. The event brings together a wide range of specialists, including environmental scientists, artificial intelligence researchers and developers, urban planners, sustainability officials, green technology innovators, educators, students, and representatives of civil society.
            </p>

            <h2>Integration with Sheikh Zayed's Vision</h2>
            <p>
              Professor Dr Mohamed Ahmed bin Fahad, Chairman of the Zayed International Environment Foundation, noted that combining knowledge and joint efforts can create meaningful impact—a principle championed by the late Sheikh Zayed bin Sultan Al Nahyan, the UAE's founding father. He added that the foundation has played a leading role in promoting environmental sustainability over the past decades, organizing more than 100 conferences and initiatives aimed at raising awareness and encouraging responsible environmental practices.
            </p>
            <p>
              Integrating green AI with Sheikh Zayed's environmental vision and national sustainability standards offers a balanced model for development while protecting natural resources.
            </p>

            <h2>Key Sessions and Presentations</h2>
            <p>
              The opening session featured keynote presentations by Dr Anwar Fatih Rahman Daghigh on artificial intelligence and cybersecurity, and Professor Chetire Bonsilvan, who addressed current environmental challenges and the potential of green AI.
            </p>
            <p>
              The first day also included an appreciation ceremony for sponsoring partners, an exhibition highlighting best practices in environmental AI applications, and student-led projects focusing on sustainable technology solutions.
            </p>

            <h2>Public-Private-Academic Partnerships</h2>
            <p>
              Organisers emphasized that cooperation between government entities, the private sector, and research institutions is essential for advancing innovative environmental solutions, reinforcing the UAE's position as a global leader in sustainable development.
            </p>

            <h2>Investment Angle</h2>
            <p>
              The Green AI Conference positions the UAE as a leader in sustainable AI development, demonstrating the integration of environmental sustainability with AI innovation. The event highlights opportunities in:
            </p>
            <ul>
              <li><strong>Green Technology Innovation:</strong> AI applications for environmental monitoring, climate modeling, and resource optimization</li>
              <li><strong>Public-Private Partnerships:</strong> Collaboration frameworks between government, academia, and private sector for sustainable tech solutions</li>
              <li><strong>Student Innovation:</strong> Next-generation talent pipeline focused on sustainable technology development</li>
              <li><strong>Regional Leadership:</strong> UAE's positioning as hub for green AI research and deployment in MENA region</li>
            </ul>

            <h2>Strategic Implications</h2>
            <p>
              The inaugural Green AI Conference reinforces the UAE's commitment to balancing technological advancement with environmental stewardship. By bringing together diverse stakeholders—from environmental scientists to AI developers—the event creates a platform for integrated solutions that address complex environmental challenges while advancing AI capabilities.
            </p>
            <p>
              The emphasis on Sheikh Zayed's environmental legacy connects modern AI innovation with the UAE's foundational values, providing cultural and strategic continuity for sustainable development initiatives.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Want Deeper Intelligence?</h3>
            <p className="text-muted-foreground mb-4">
              Access premium analysis, investment frameworks, and strategic intelligence on GCC AI developments.
            </p>
            <Link href="/premium">
              <Button className="bg-accent hover:bg-accent/90">
                View Premium Plans
              </Button>
            </Link>
          </div>

          {/* Back to News */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/news">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to All News
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
