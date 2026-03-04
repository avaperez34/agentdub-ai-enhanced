import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share2, Lock } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";
import { allSignals } from "@/data/content";
import { FREE_SIGNAL_ID } from "@shared/const";
import { WaitlistModal } from "@/components/WaitlistModal";
import { useState } from "react";

const SIGNAL_ID = "$i";

export default function Signal$i() {
  const [, navigate] = useLocation();
  const [showWaitlist, setShowWaitlist] = useState(false);
  const signal = allSignals.find((s) => s.id === SIGNAL_ID);

  if (!signal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The intelligence signal you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/intelligence")}>
            Back to Intelligence
          </Button>
        </div>
      </div>
    );
  }

  const isFree = signal.id === FREE_SIGNAL_ID;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/intelligence")}
            className="mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Intelligence
          </Button>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{new Date(signal.date).toLocaleDateString()}</span>
                <span className="capitalize">{signal.country}</span>
                <span className="capitalize">{signal.sector}</span>
              </div>
            </div>
            {!isFree && (
              <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-950 px-3 py-2 rounded-lg">
                <Lock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                  Premium
                </span>
              </div>
            )}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground">Share:</span>
            <ShareButton
              title={signal.title}
              url={typeof window !== "undefined" ? window.location.href : ""}
              
            />
          </div>
        </div>

        {/* Content */}
        {isFree ? (
          <div className="prose dark:prose-invert max-w-none mb-12">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {signal.description}
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-12 text-center mb-12">
            <Lock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Premium Content</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              This intelligence signal is available exclusively to premium subscribers. Join our waitlist to get early access when it becomes available.
            </p>
            <Button
              onClick={() => setShowWaitlist(true)}
              className="bg-accent hover:bg-accent/90"
            >
              Join Waitlist
            </Button>
          </div>
        )}

        {/* Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Impact Score</p>
            <p className="text-2xl font-bold">{signal.impact}/10</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Time Horizon</p>
            <p className="text-lg font-semibold capitalize">{signal.horizon}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Sector</p>
            <p className="text-lg font-semibold">{signal.sector}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Category</p>
            <p className="text-lg font-semibold capitalize">{signal.category}</p>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <WaitlistModal
          isOpen={showWaitlist}
          onClose={() => setShowWaitlist(false)}
          
        />
      )}
    </div>
  );
}
