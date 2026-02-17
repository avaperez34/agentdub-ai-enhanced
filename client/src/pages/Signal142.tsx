import { useState } from "react";
import { allSignals } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { AgentWaitlistModal } from "@/components/AgentWaitlistModal";
import { Streamdown } from "streamdown";

export default function Signal142() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const signal = allSignals.find((s) => s.id === "142");

  if (!signal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">Signal #137 does not exist.</p>
          <Button onClick={() => window.location.href = "/intelligence"}>Back to Intelligence</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => window.location.href = "/intelligence"}>← Back to Intelligence</Button>
          <div className="flex gap-2">
            <ShareButton title={signal.title} url={window.location.href} />
            <Button onClick={() => setIsWaitlistOpen(true)}>Join Waitlist for Agent Launch</Button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">Signal #{signal.id} • {new Date(signal.date).toLocaleDateString()}</p>
          <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{signal.sector}</span>
            <span>Impact: {signal.impact}/10</span>
            <span>Horizon: {signal.horizon}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <Streamdown>{signal.description}</Streamdown>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-2xl font-bold mb-4">Join the Intelligence Network</h2>
          <p className="text-muted-foreground mb-4">Get early access to exclusive signals and strategic analysis on AI and digital transformation in the GCC.</p>
          <Button size="lg" onClick={() => setIsWaitlistOpen(true)}>Join Waitlist for Agent Launch</Button>
        </div>
      </div>

      <AgentWaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
