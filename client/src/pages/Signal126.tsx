import { useEffect, useState } from "react";
import { ShareButton } from "@/components/ShareButton";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { allSignals } from "@/data/content";
import { AgentWaitlistModal } from "@/components/AgentWaitlistModal";
import { Streamdown } from "streamdown";

export default function Signal126() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const signal = allSignals.find((s) => s.id === "126");

  if (!signal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Signal Not Found</h1>
          <Link href="/intelligence">
            <Button>Back to Intelligence</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/intelligence">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2" size={18} />
              Back to Intelligence
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{signal.country}</span>
            <span>•</span>
            <span>{signal.date}</span>
            <span>•</span>
            <span>Impact: {signal.impact}/10</span>
            <ShareButton 
              url={`https://agentdub.ai/signals/${signal.id}`}
              title={signal.title}
              description="Read the latest GCC AI intelligence signal on agentdub.ai"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <Streamdown>{signal.description}</Streamdown>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-card border border-border rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
          <p className="text-muted-foreground mb-6">
            Get early access to our Sovereign AI Agent and exclusive intelligence signals
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-accent hover:bg-accent/90"
          >
            Join Waitlist for Agent Launch
          </Button>
        </div>
      </main>

      {/* Modal */}
      <AgentWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
