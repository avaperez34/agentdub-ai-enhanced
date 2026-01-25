import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle035() {
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
              <span>January 25, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>🇶🇦 Qatar</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span>Healthcare</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Katara Seminar Highlights AI Role in Developing Healthcare Sector
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            27th Katara Forum addresses AI's transforming role in healthcare systems, emphasizing smart partnership between doctors and AI, not replacement
          </p>

          {/* Share Button */}
          <div className="mb-8">
            <ShareButton
              title="Katara Seminar Highlights AI Role in Developing Healthcare Sector"
              description="27th Katara Forum addresses AI's transforming role in healthcare systems, emphasizing smart partnership between doctors and AI, not replacement."
              url="https://agentdub.ai/news/035"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              The Katara Cultural Village Foundation, in collaboration with the Business Forum, organized a specialized seminar titled "Artificial Intelligence and Medicine" as part of the 27th Katara Forum. The seminar, held at the Katara Library for Arabic Fiction and moderated by writer and media person Issa bin Mohammed Al Ishaq, addressed the growing role of artificial intelligence (AI) in transforming healthcare systems.
            </p>

            <h2>Core Theme: Partnership, Not Replacement</h2>
            <p>
              Participants emphasized that the future of healthcare is not about replacing doctors, but rather about a smart partnership between doctors and artificial intelligence. This partnership integrates technical precision with human expertise, ensuring that AI empowers doctors, not replaces them, and guarantees higher quality, safer, and more humane healthcare.
            </p>

            <h2>AI Applications in Healthcare</h2>
            <p>
              The seminar addressed AI's role in several critical areas:
            </p>
            <ul>
              <li><strong>Medical Diagnosis:</strong> Deep learning algorithms contribute to highly accurate analysis of radiological images</li>
              <li><strong>Clinical Decision Support:</strong> AI-based systems integrate diverse health data and provide real-time, evidence-based recommendations</li>
              <li><strong>Resource Utilization:</strong> Improved efficiency in healthcare resource allocation and management</li>
              <li><strong>Patient-Centered Care:</strong> Enhanced patient safety, standardized quality of care, and facilitated rapid medical interventions</li>
            </ul>

            <h2>Professor Mustafa Girik on Medical Imaging</h2>
            <p>
              Professor Mustafa Girik, a specialist in otolaryngology (ENT) and head and neck surgery, reviewed the most prominent applications of AI in medical imaging. He explained that deep learning algorithms contribute to the highly accurate analysis of various radiological images, supporting early disease detection and reducing the likelihood of human error, particularly in critical specialties such as oncology, cardiology, neurology, and emergency medicine.
            </p>
            <p>
              He also highlighted the importance of AI-based clinical decision support systems and their role in integrating diverse health data and providing real-time, evidence-based recommendations. This contributes to enhancing patient safety, standardizing the quality of care, and facilitating rapid and effective medical interventions in complex clinical settings.
            </p>

            <h2>Dr. Fawzia Abdullah on Human Element</h2>
            <p>
              Dr. Fawzia Abdullah, a specialist in dentistry, emphasized that doctors cannot be dispensed with, regardless of the advancements in artificial intelligence. She explained that medicine is not merely about equations or data analysis, but rather a human practice based on understanding, experience, ethical judgment, and direct communication with the patient.
            </p>
            <p>
              She clarified that while artificial intelligence remains a supportive tool that improves diagnosis, accelerates access to information, and reduces error rates, it lacks the capacity for comprehensive clinical judgment that considers individual differences and the patient's psychological and social context.
            </p>
            <p>
              She added that the doctor bears the responsibility for the final decision. The doctor is capable of interpreting the results of artificial intelligence within the complete picture of the patient's health condition, weighing the benefits and risks, and making the appropriate ethical decision, especially in complex or critical cases.
            </p>
            <p>
              She noted that the trust built between doctor and patient, the ability to empathize, explain treatment options, and reassure the patient remain elements that digital technologies cannot replace.
            </p>

            <h2>Integrated Digital Healthcare System</h2>
            <p>
              Participants emphasized the importance of building an integrated digital healthcare system based on partnerships between healthcare providers, academic and research institutions, technology developers, and regulatory bodies, to support a smarter and more sustainable healthcare future.
            </p>

            <h2>Investment Angle</h2>
            <p>
              The Katara seminar positions Qatar in the AI-powered healthcare transformation narrative, highlighting several investment opportunities:
            </p>
            <ul>
              <li><strong>Healthcare AI Integration:</strong> Clinical decision support systems, medical imaging AI, and diagnostic tools</li>
              <li><strong>Digital Health Infrastructure:</strong> Integrated healthcare platforms connecting providers, researchers, and regulators</li>
              <li><strong>Ethical AI Deployment:</strong> Frameworks for responsible AI use in critical healthcare settings</li>
              <li><strong>Human-AI Collaboration:</strong> Training programs and systems that enhance doctor-AI partnerships</li>
            </ul>

            <h2>Strategic Implications</h2>
            <p>
              The seminar's emphasis on partnership rather than replacement reflects a mature understanding of AI's role in healthcare. By focusing on augmentation of human expertise rather than automation, Qatar positions itself for sustainable healthcare AI adoption that maintains trust, ethical standards, and patient-centered care.
            </p>
            <p>
              The multi-stakeholder approach—bringing together healthcare providers, academic institutions, technology developers, and regulatory bodies—creates a foundation for integrated digital healthcare systems that can scale across Qatar's healthcare sector while maintaining high standards of care and ethical oversight.
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
