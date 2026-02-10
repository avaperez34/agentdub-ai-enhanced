import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Signal102() {
  const [copied, setCopied] = useState(false);

  const signal = {
    id: "102",
    title: "GCC Pax Silica Membership - UAE & Qatar Join US-Led AI Alliance",
    description: "UAE and Qatar joined US-led Pax Silica alliance positioning GCC countries as key players in global AI governance.",
    country: "UAE, Qatar",
    date: "2026-02-10",
    impact: 8.5,
    category: "AI Strategy"
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out: ${signal.title}`;
    
    if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Intelligence
          </Button>
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{signal.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
              {signal.country}
            </span>
            <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
              Impact: {signal.impact}
            </span>
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              {signal.date}
            </span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {signal.description}
          </p>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-lg font-semibold mb-4">Share this signal</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
              >
                <Twitter size={18} className="mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
              >
                <Copy size={18} className="mr-2" />
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
