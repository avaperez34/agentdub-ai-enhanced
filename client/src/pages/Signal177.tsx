import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { allSignals } from "@/data/content";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function Signal() {
  const signal = allSignals.find(s => s.id === "177");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!signal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Signal Not Found</h1>
          <p className="text-muted-foreground mb-8">This intelligence signal could not be found.</p>
          <Link href="/intelligence">
            <Button>Back to Intelligence</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/intelligence">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Intelligence
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-accent font-bold">SIGNAL #{signal.id}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{new Date(signal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 leading-tight">{signal.title}</h1>
          
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold">SECTOR</span>
              <span className="text-sm font-medium">{signal.sector}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold">IMPACT</span>
              <span className="text-sm font-medium">{signal.impact}/10</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold">HORIZON</span>
              <span className="text-sm font-medium">{signal.horizon}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 flex gap-2">
          <ShareButton 
            title={signal.title} 
            description={signal.description.substring(0, 200)} 
            url={`/signals/${signal.id}`}
          />
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
            {signal.description}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border border-border">
          <div>
            <span className="text-xs text-muted-foreground font-semibold block mb-2">IMPACT SCORE</span>
            <span className="text-2xl font-bold text-accent">{signal.impact}</span>
            <span className="text-xs text-muted-foreground">/10</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-semibold block mb-2">SECTOR</span>
            <span className="text-sm font-medium">{signal.sector}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-semibold block mb-2">HORIZON</span>
            <span className="text-sm font-medium">{signal.horizon}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground font-semibold block mb-2">REGION</span>
            <span className="text-sm font-medium">{signal.country}</span>
          </div>
        </div>

        <div className="mt-12 p-8 bg-card border border-border rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Explore More Intelligence</h3>
          <p className="text-muted-foreground mb-6">Discover insights on AI agents, digital transformation, and GCC market dynamics.</p>
          <Link href="/intelligence">
            <Button>View All Signals</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
