/**
 * SignalComparison - Side-by-side signal comparison tool
 */

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, GitCompare } from "lucide-react";
import { Link } from "wouter";

interface Signal {
  id: string;
  title: string;
  description: string;
  sector: string;
  impact: number;
  horizon: string;
  country: string;
  category: string;
}

interface SignalComparisonProps {
  signals: Signal[];
}

export function SignalComparison({ signals }: SignalComparisonProps) {
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleSignal = (id: string) => {
    if (selectedSignals.includes(id)) {
      setSelectedSignals(selectedSignals.filter((s) => s !== id));
    } else if (selectedSignals.length < 3) {
      setSelectedSignals([...selectedSignals, id]);
    }
  };

  const comparedSignals = signals.filter((s) => selectedSignals.includes(s.id));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "execution":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
      case "leadership":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
      case "failure":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
      case "capital":
        return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300";
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "execution":
        return "Execution & Sovereign";
      case "leadership":
        return "Leadership";
      case "failure":
        return "Failure Analysis";
      case "capital":
        return "Capital & Announcements";
      default:
        return category;
    }
  };

  return (
    <div className="mb-12">
      {/* Comparison Bar */}
      {selectedSignals.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-card border-2 border-accent rounded-lg shadow-2xl p-4 max-w-2xl w-full mx-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <GitCompare className="text-accent" size={20} />
              <span className="font-bold">
                {selectedSignals.length} signal{selectedSignals.length > 1 ? "s" : ""} selected
              </span>
            </div>
            <button
              onClick={() => setSelectedSignals([])}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex gap-2 mb-3 flex-wrap">
            {comparedSignals.map((signal) => (
              <Badge key={signal.id} variant="outline" className="flex items-center gap-1">
                Signal #{signal.id}
                <button
                  onClick={() => toggleSignal(signal.id)}
                  className="ml-1 hover:text-destructive"
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>

          <Button
            onClick={() => setShowComparison(true)}
            disabled={selectedSignals.length < 2}
            className="w-full bg-accent hover:bg-accent/90"
          >
            Compare {selectedSignals.length} Signals
          </Button>
          {selectedSignals.length < 2 && (
            <p className="text-xs text-muted-foreground text-center mt-2">
              Select at least 2 signals to compare
            </p>
          )}
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && comparedSignals.length >= 2 && (
        <div className="fixed inset-0 bg-background/95 z-50 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Signal Comparison</h2>
              <button
                onClick={() => setShowComparison(false)}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparedSignals.map((signal) => (
                <div key={signal.id} className="bg-card border border-border rounded-lg p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <Badge className="mb-2">Signal #{signal.id}</Badge>
                    <h3 className="font-bold text-lg mb-2">{signal.title}</h3>
                  </div>

                  {/* Comparison Metrics */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Category</div>
                      <Badge className={getCategoryColor(signal.category)}>
                        {getCategoryName(signal.category)}
                      </Badge>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Country/Region</div>
                      <div className="font-medium">{signal.country}</div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Sector</div>
                      <div className="font-medium">{signal.sector}</div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Impact Score</div>
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-accent">{signal.impact}</div>
                        <div className="text-sm text-muted-foreground">/ 10</div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden mt-2">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${signal.impact * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Time Horizon</div>
                      <div className="font-medium">{signal.horizon}</div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Description</div>
                      <p className="text-sm leading-relaxed">{signal.description}</p>
                    </div>
                  </div>

                  {/* Action */}
                  <Link href={`/signals/${signal.id}`}>
                    <Button variant="outline" className="w-full mt-6">
                      Read Full Signal
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Key Insights */}
            <div className="mt-8 bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Comparison Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Highest Impact</div>
                  <div className="font-medium">
                    Signal #{comparedSignals.reduce((prev, curr) => (prev.impact > curr.impact ? prev : curr)).id} ({Math.max(...comparedSignals.map((s) => s.impact))}/10)
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Shortest Horizon</div>
                  <div className="font-medium">
                    {comparedSignals.reduce((prev, curr) => {
                      const prevYears = parseInt(prev.horizon.split("–")[0]);
                      const currYears = parseInt(curr.horizon.split("–")[0]);
                      return prevYears < currYears ? prev : curr;
                    }).horizon}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Countries Covered</div>
                  <div className="font-medium">
                    {Array.from(new Set(comparedSignals.map((s) => s.country))).join(", ")}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Sectors Covered</div>
                  <div className="font-medium">
                    {Array.from(new Set(comparedSignals.map((s) => s.sector))).join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selection Instructions */}
      {selectedSignals.length === 0 && (
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 text-center">
          <GitCompare className="mx-auto mb-3 text-accent" size={32} />
          <h3 className="font-bold mb-2">Compare Signals Side-by-Side</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Click the "Compare" button on any signal card to add it to comparison (up to 3 signals).
            Analyze differences in impact, timeline, geography, and strategic focus across multiple signals.
          </p>
        </div>
      )}
    </div>
  );
}
