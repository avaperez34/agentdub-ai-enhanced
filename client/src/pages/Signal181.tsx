import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShareButton } from "@/components/ShareButton";
import { allSignals } from "@/data/content";
import { FREE_SIGNAL_ID } from "@shared/const";
import { useRoute, useLocation } from "wouter";

export default function SignalDetail() {
  const [match, params] = useRoute("/signals/:id");
  const [, setLocation] = useLocation();
  const { user, isAuthenticated } = useAuth();

  const signal = allSignals.find((s) => s.id === params?.id);

  if (!signal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">The signal you are looking for does not exist.</p>
          <Button onClick={() => setLocation("/intelligence")}>Back to Intelligence</Button>
        </div>
      </div>
    );
  }

  const isFree = signal.id === FREE_SIGNAL_ID;
  const isLocked = !isFree && !isAuthenticated;

  if (isLocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-2xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Premium Content</h1>
            <p className="text-muted-foreground mb-8">
              This intelligence signal is available to premium subscribers only.
            </p>
            <Button size="lg">Join Waitlist</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setLocation("/intelligence")} className="mb-8">
          ← Back to Intelligence
        </Button>

        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{new Date(signal.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="capitalize">{signal.country}</span>
                  <span>•</span>
                  <span className="capitalize">{signal.sector}</span>
                </div>
              </div>
              <ShareButton title={signal.title} url={window.location.href} />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {signal.description}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            <div>
              <div className="text-sm text-muted-foreground">Impact Score</div>
              <div className="text-2xl font-bold">{signal.impact}/10</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Time Horizon</div>
              <div className="text-2xl font-bold">{signal.horizon}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Category</div>
              <div className="text-2xl font-bold capitalize">{signal.category}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
