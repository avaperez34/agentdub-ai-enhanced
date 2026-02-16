import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { AgentWaitlistModal } from "@/components/AgentWaitlistModal";
import { allSignals } from "@/data/content";
import { Streamdown } from "streamdown";
import { ChevronLeft } from "lucide-react";

export default function SignalPage() {
  const [, setLocation] = useLocation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  const signalId = window.location.pathname.split('/').pop();
  const signal = allSignals.find((s) => s.id === signalId);

  if (!signal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The signal you're looking for doesn't exist.
          </p>
          <Button onClick={() => setLocation("/intelligence")}>
            Back to Intelligence
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/intelligence")}
            className="mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Intelligence
          </Button>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium bg-accent/20 text-accent px-3 py-1 rounded-full">
                  Signal #{signal.id}
                </span>
                <span className="text-sm text-muted-foreground">{signal.date}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{signal.sector}</span>
                <span>Impact: {signal.impact}/10</span>
                <span>Horizon: {signal.horizon}</span>
              </div>
            </div>
            <ShareButton
              title={signal.title}
              url={typeof window !== "undefined" ? window.location.href : ""}
            />
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <Streamdown>{signal.description}</Streamdown>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Intelligence Network</h2>
          <p className="text-muted-foreground mb-6">
            Get early access to exclusive signals and strategic analysis on AI and digital transformation in the GCC.
          </p>
          <Button
            size="lg"
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-accent hover:bg-accent/90"
          >
            Join Waitlist for Agent Launch
          </Button>
        </div>
      </div>

      <AgentWaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
