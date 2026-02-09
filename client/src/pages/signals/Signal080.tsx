import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, ArrowLeft, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Signal080() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "080",
    title: "G42 Vietnam AI Hub Secures $1B Usage Commitments - GCC Infrastructure Expands Globally",
    description: "G42 (UAE-based AI company) secures $1 billion in usage commitments for Vietnam AI hub, one of Southeast Asia's largest data centre deployments. Demonstrates GCC companies expanding AI infrastructure globally and positioning Middle East as hub for regional and international AI deployment. Model shows how sovereign wealth and AI expertise translate to global infrastructure leadership.",
    country: "UAE, Vietnam",
    sector: "Global Infrastructure",
    impact: 8.5,
    horizon: "2-4y",
    category: "capital",
    date: "2026-02-08",
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/intelligence">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" size={18} />
              Back to Intelligence
            </Button>
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex gap-2 mb-4">
                <Badge>Intelligence Signal</Badge>
                <Badge variant="outline">Impact: {signal.impact.toFixed(1)}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(signal.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp size={16} />
                  {signal.horizon} horizon
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="mt-2"
            >
              <Share2 size={16} className="mr-2" />
              {copied ? "Copied!" : "Share"}
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {signal.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Country</p>
              <p className="font-semibold">{signal.country}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Sector</p>
              <p className="font-semibold">{signal.sector}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Category</p>
              <p className="font-semibold capitalize">{signal.category}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Impact Score</p>
              <p className="font-semibold">{signal.impact.toFixed(1)}/10</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex gap-4">
            <Link href="/intelligence">
              <Button variant="outline" className="w-full">
                Back to All Signals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
