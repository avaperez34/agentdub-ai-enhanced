import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { allSignals } from "@/data/content";

export default function SignalDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);

  const signalId = params.id;
  const signal = allSignals.find((s) => s.id === signalId);

  if (!signal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">The signal you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation("/intelligence")}>Back to Intelligence</Button>
        </div>
      </div>
    );
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = signal.title;
    let shareUrl = "";

    if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => setLocation("/intelligence")}
          className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Intelligence
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              Intelligence Signal
            </span>
            <span className="text-sm text-muted-foreground">
              {new Date(signal.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {signal.title}
          </h1>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card border border-border rounded-lg mb-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Impact Score</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-emerald-500">{signal.impact}</span>
                <span className="text-sm text-muted-foreground">/10</span>
              </div>
              <div className="w-full bg-border rounded-full h-2 mt-3">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${(signal.impact / 10) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Sector</p>
              <p className="text-sm font-medium text-foreground">{signal.sector}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Horizon</p>
              <p className="text-sm font-medium text-foreground">{signal.horizon}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Region</p>
              <p className="text-sm font-medium text-foreground">{signal.country}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-foreground space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Executive Summary</h2>
              <p className="text-muted-foreground leading-relaxed">{signal.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Full Report</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {signal.description}
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Share this signal</h3>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("linkedin")}
              className="flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("twitter")}
              className="flex items-center gap-2"
            >
              <Twitter size={16} />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="flex items-center gap-2"
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
