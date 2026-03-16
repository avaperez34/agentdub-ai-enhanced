import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock } from "lucide-react";
import { allSignals, FREE_SIGNAL_ID } from "@/data/content";
import { ShareButton } from "@/components/ShareButton";
import { WaitlistModal } from "@/components/WaitlistModal";
import { useState } from "react";

export default function Signal$i() {
  const [, setLocation] = useLocation();
  const [showWaitlist, setShowWaitlist] = useState(false);
  const signal = allSignals.find(s => s.id === "207");
  const isFree = FREE_SIGNAL_ID === String(207);

  if (!signal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Signal not found</h1>
        <Button onClick={() => setLocation("/intelligence")}>Back to Intelligence</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => setLocation("/intelligence")} className="mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to Intelligence
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-3xl mb-2">{signal.title}</CardTitle>
                <CardDescription>
                  Signal #{signal.id} • {signal.country} • {new Date(signal.date).toLocaleDateString()}
                </CardDescription>
              </div>
              {!isFree && <Lock className="text-amber-500 mt-2" size={24} />}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {isFree ? (
              <>
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-wrap text-foreground">{signal.description}</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <ShareButton title={signal.title} url={`/signals/${signal.id}`} />
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Lock className="mx-auto mb-4 text-amber-500" size={48} />
                <h2 className="text-2xl font-bold mb-2">Premium Signal</h2>
                <p className="text-muted-foreground mb-6">This signal is available to premium subscribers</p>
                <Button onClick={() => setShowWaitlist(true)} size="lg">
                  Join Waitlist
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {showWaitlist && <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />}
    </div>
  );
}
