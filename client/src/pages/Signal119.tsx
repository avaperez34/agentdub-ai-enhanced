import { allSignals } from "@/data/content";
import { Button } from "@/components/ui/button";
import { AgentWaitlistModal } from "@/components/AgentWaitlistModal";
import { useState } from "react";
import { Streamdown } from "streamdown";

export default function Signal119() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const signal = allSignals.find(s => s.id === "119");

  if (!signal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">Signal #119 could not be found.</p>
          <a href="/intelligence">
            <Button>Back to Intelligence</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <a href="/intelligence" className="text-accent hover:underline mb-4 inline-block">
            ← Back to Intelligence
          </a>
          <div className="mb-4">
            <span className="text-xs font-mono text-accent font-bold">SIGNAL #{signal.id}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{signal.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{signal.country}</span>
            <span>•</span>
            <span>{signal.sector}</span>
            <span>•</span>
            <span>Impact: {signal.impact}/10</span>
            <span>•</span>
            <span>{signal.date}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <Streamdown>{signal.description}</Streamdown>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want Access to All Intelligence Signals?</h2>
          <p className="text-muted-foreground mb-6">
            Join our waitlist to get early access to our premium intelligence platform with comprehensive analysis and deep insights.
          </p>
          <Button size="lg" onClick={() => setShowWaitlist(true)}>
            Join Waitlist
          </Button>
        </div>

        <AgentWaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
      </div>
    </div>
  );
}
