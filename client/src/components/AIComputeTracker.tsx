/**
 * AI Compute Power Tracker
 * Displays comparative compute capacity metrics for GCC AI leaders vs AgentDubai
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Cpu, Zap, TrendingUp, ArrowRight, Users } from "lucide-react";

interface ComputeMetric {
  entity: string;
  description: string;
  gpuCount: string;
  petaflops: string;
  tokensPerDay: string;
  percentage: number;
  icon: "cpu" | "zap" | "trending";
  color: string;
}

const computeData: ComputeMetric[] = [
  {
    entity: "Saudi Arabia (NEOM)",
    description: "300K NVIDIA Blackwell chips infrastructure",
    gpuCount: "300,000 GPUs",
    petaflops: "2.5 PetaFLOPS",
    tokensPerDay: "~500B tokens/day",
    percentage: 100,
    icon: "cpu",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
  },
  {
    entity: "UAE (TII ACE)",
    description: "Technology Innovation Institute sovereign AI",
    gpuCount: "~150,000 GPUs",
    petaflops: "1.2 PetaFLOPS",
    tokensPerDay: "~250B tokens/day",
    percentage: 48,
    icon: "cpu",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    entity: "Qatar (Pax Silica)",
    description: "Strategic AI infrastructure partnership",
    gpuCount: "~80,000 GPUs",
    petaflops: "0.6 PetaFLOPS",
    tokensPerDay: "~120B tokens/day",
    percentage: 24,
    icon: "cpu",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
  {
    entity: "AgentDubai (Current)",
    description: "API-based intelligence platform",
    gpuCount: "API Access",
    petaflops: "~0.001 PetaFLOPS",
    tokensPerDay: "~50M tokens/day",
    percentage: 2,
    icon: "zap",
    color: "from-accent/20 to-accent/10 border-accent/40",
  },
  {
    entity: "AgentDubai (2026 Target)",
    description: "Proprietary agent with dedicated infrastructure",
    gpuCount: "5,000+ GPUs",
    petaflops: "0.05 PetaFLOPS",
    tokensPerDay: "~10B tokens/day",
    percentage: 15,
    icon: "trending",
    color: "from-accent/30 to-accent/20 border-accent/50",
  },
];

export function AIComputeTracker() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "cpu":
        return <Cpu className="text-accent" size={24} />;
      case "zap":
        return <Zap className="text-accent" size={24} />;
      case "trending":
        return <TrendingUp className="text-accent" size={24} />;
      default:
        return <Cpu className="text-accent" size={24} />;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">GCC AI Compute Landscape</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparative analysis of AI infrastructure capacity across the Gulf region—from
            sovereign deployments to AgentDubai's intelligence platform evolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {computeData.map((metric, index) => (
            <Card
              key={metric.entity}
              className={`p-6 bg-gradient-to-br ${metric.color} hover:scale-105 transition-all duration-300`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                {getIcon(metric.icon)}
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{metric.entity}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Infrastructure</span>
                  <span className="font-semibold">{metric.gpuCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Compute Power</span>
                  <span className="font-semibold">{metric.petaflops}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Capacity</span>
                  <span className="font-semibold">{metric.tokensPerDay}</span>
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Relative Scale</span>
                    <span>{metric.percentage}%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${metric.percentage}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent">
            <Users size={16} />
            <span className="font-medium">Join 50+ early subscribers</span>
          </div>

          {/* Premium CTA with Pulsation */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/premium">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 animate-pulse-subtle"
                  >
                    Access Premium Compute Data
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="font-semibold mb-1">Premium Intelligence Includes:</p>
                <ul className="text-sm space-y-1">
                  <li>• Historical compute trends & forecasts</li>
                  <li>• Infrastructure investment roadmaps</li>
                  <li>• Detailed GCC AI readiness analysis</li>
                  <li>• Exclusive market intelligence reports</li>
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note:</strong> Metrics are estimates based on publicly announced
            infrastructure investments and deployment reports. AgentDubai's 2026 target reflects
            planned transition to proprietary agent architecture with dedicated compute resources.
          </p>
        </div>
      </div>
    </section>
  );
}
