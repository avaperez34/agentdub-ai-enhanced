/**
 * Signal #001: AD Ports Group Deploys World's Largest Agentic AI Fleet
 * Design Philosophy: Execution & Sovereign Grade - Logistics Automation
 */

import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft, MapPin, Calendar, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Signal001() {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/intelligence">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Intelligence
          </button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-blue-600 text-white">Execution & Sovereign Grade</Badge>
            <Badge variant="outline">UAE</Badge>
            <Badge variant="outline">Logistics AI</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Signal #001: AD Ports Group Deploys World's Largest Agentic AI Fleet — Guinness World Record Marks Logistics Automation Milestone
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>November 11, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Abu Dhabi, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Impact Score: 8.5/10</span>
            </div>
            <ShareButton 
              url="https://agentdub.ai/signals/001"
              title="Signal #001: AD Ports Group Deploys World's Largest Agentic AI Fleet"
              description="AD Ports Group achieves Guinness World Record with 205 AI agents deployed in logistics facility"
            />
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            AD Ports Group achieves Guinness World Records™ title for deploying 205 AI agents in a single logistics facility at Khalifa Port, marking the world's largest operational deployment of agentic AI in critical infrastructure.
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-12 p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            On November 11, 2025, AD Ports Group achieved a <strong>Guinness World Records™ title</strong> for deploying <strong>205 AI agents</strong> in a single logistics facility at Khalifa Port, Abu Dhabi. This milestone represents the world's largest operational deployment of agentic AI in logistics infrastructure, marking a decisive shift from AI pilots to production-grade autonomous systems embedded in critical national infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The deployment is part of AD Ports Group's broader "Building Human-AI Teams" blueprint, which embeds autonomous AI agents across operations, finance, HR, and commercial workflows. Early results include <strong>3% fuel savings</strong> via Vessel Speed Optimiser (maintaining 98% on-time arrivals), <strong>90% container utilization</strong> through Container Balancer, and <strong>90% reduction in HR scheduling time</strong> via Intelligent Workforce Scheduler.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <div className="text-3xl font-bold text-blue-600">205</div>
              <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">3%</div>
              <div className="text-sm text-muted-foreground">Fuel Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">90%</div>
              <div className="text-sm text-muted-foreground">Container Utilization</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">8.5/10</div>
              <div className="text-sm text-muted-foreground">Impact Score</div>
            </div>
          </div>
        </section>

        {/* What Happened */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Happened</h2>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            AD Ports Group, a leading enabler of global trade managing 270+ vessels and 34 terminals, deployed 205 autonomous AI agents across its Khalifa Port logistics facility. These are not simple automation scripts—they are <strong>agentic AI systems</strong> capable of learning, adapting, and collaborating with human workers in real-time operational environments.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Agent Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Vessel Speed Optimization:</strong> AI agents analyze weather, fuel consumption, and port schedules to optimize vessel speeds, achieving 3% fuel savings while maintaining 98% on-time arrivals.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Container Balancing:</strong> Autonomous systems maximize container utilization to 90%, cutting costs and boosting revenue through intelligent load distribution.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Workforce Scheduling:</strong> Intelligent Workforce Scheduler reduces HR processing time by 90%, accelerating talent management and enhancing organizational agility.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Predictive Maintenance:</strong> AI agents monitor equipment health and predict failures before they occur, maximizing uptime.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <div>
                  <strong>Real-time Logistics Coordination:</strong> Autonomous workflow execution across the entire port ecosystem.
                </div>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-muted-foreground my-8">
            "The workforce of tomorrow will be defined by synergy—humans and AI agents working side by side, each focusing on their unique strengths. While the past decade advanced digitisation and automation, the decade ahead belongs to agentic intelligence: AI that learns, adapts, and collaborates."
            <footer className="text-sm mt-2 not-italic">— Mohamed Jamal-Eddine, Group Chief Information Officer, AD Ports Group</footer>
          </blockquote>
        </section>

        {/* Why This Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why This Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Proof of Sovereign AI Execution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The UAE has announced multiple AI strategies and investments. AD Ports Group's deployment provides tangible evidence that the Emirates can execute at scale, not just announce. This matters for investor confidence, talent attraction, and regulatory credibility.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Economic Competitiveness</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Logistics is a $12 trillion global industry. AI-driven efficiency gains of 3-10% translate to billions in competitive advantage. AD Ports Group's deployment positions Abu Dhabi as a low-cost, high-efficiency logistics hub.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Human-AI Workforce Model</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AD Ports Group is not replacing humans—it's creating a hybrid workforce. This model could become the GCC standard for workforce transformation, with implications for education systems, labor policy, and immigration.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3">Global Benchmark</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Guinness World Record provides international validation and marketing value. AD Ports Group can now position itself as the global leader in AI-powered logistics, attracting premium clients.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strategic Implications</h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 rounded-r-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-emerald-700 dark:text-emerald-400">For Investors</h3>
              <p className="text-muted-foreground mb-4"><strong>Bull Case:</strong> AD Ports Group demonstrates that GCC AI investments are reaching production maturity. Logistics efficiency gains create margin expansion opportunities. Human-AI workforce model reduces labor costs while improving service quality.</p>
              <p className="text-muted-foreground mb-4"><strong>Bear Case:</strong> 205 agents in one facility may not scale linearly across 34 terminals (integration complexity). Regulatory frameworks for autonomous AI in logistics remain undefined. Cybersecurity risks increase with agent autonomy.</p>
              <p className="text-sm text-muted-foreground"><strong>Actionable Insight:</strong> Monitor AD Ports Group's revenue per employee and operating margin over the next 12-24 months. If margins expand while revenue grows, the AI deployment is delivering real economic value.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 rounded-r-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">For Policymakers</h3>
              <p className="text-muted-foreground mb-4"><strong>Opportunities:</strong> Position UAE as the global testbed for agentic AI in critical infrastructure. Develop regulatory frameworks for AI agent accountability. Create "AI Collaboration" training programs for existing workforce.</p>
              <p className="text-muted-foreground mb-4"><strong>Risks:</strong> If AI agents fail catastrophically (e.g., port shutdown), public trust in AI governance collapses. Workforce displacement without retraining creates social instability. Over-reliance on foreign AI platforms (Microsoft Azure) creates strategic dependency.</p>
              <p className="text-sm text-muted-foreground"><strong>Actionable Insight:</strong> Establish an AI Safety Authority to audit agentic AI deployments in critical infrastructure before they scale beyond pilot phase.</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-600 rounded-r-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">For Startups & Corporates</h3>
              <p className="text-muted-foreground mb-4"><strong>Opportunities:</strong> Build AI agent management platforms (monitoring, orchestration, compliance). Develop industry-specific agents for logistics, utilities, government services. Offer AI collaboration training for enterprises transitioning to hybrid workforces.</p>
              <p className="text-muted-foreground mb-4"><strong>Competitive Threats:</strong> Companies without AI-augmented workforces will face 10-20% cost disadvantages within 3 years. Traditional logistics providers (DHL, Maersk) must match or exceed AD Ports' AI capabilities.</p>
            </div>
          </div>
        </section>

        {/* What to Watch Next */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Watch Next</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2">Expansion Beyond Khalifa Port</h4>
              <p className="text-sm text-muted-foreground">Will AD Ports Group deploy similar agent fleets across its 34 terminals? If yes, expect 1,000+ agents by 2027.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2">Regulatory Response</h4>
              <p className="text-sm text-muted-foreground">Will UAE authorities create formal guidelines for autonomous AI in logistics? Watch for ADGM/DIFC regulatory sandboxes.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2">Competitive Replication</h4>
              <p className="text-sm text-muted-foreground">Will DP World (Dubai) or Saudi Ports Authority announce similar deployments? GCC logistics AI arms race begins.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-bold mb-2">Workforce Impact</h4>
              <p className="text-sm text-muted-foreground">Track AD Ports Group's employee headcount and job role composition. Are they hiring more AI engineers and fewer manual operators?</p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Metrics to Monitor</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-bold">Metric</th>
                  <th className="text-left p-3 font-bold">Current</th>
                  <th className="text-left p-3 font-bold">Target (2027)</th>
                  <th className="text-left p-3 font-bold">Significance</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="p-3">AI agents deployed</td>
                  <td className="p-3">205</td>
                  <td className="p-3">1,000+</td>
                  <td className="p-3">Scalability proof</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Fuel savings</td>
                  <td className="p-3">3%</td>
                  <td className="p-3">5-7%</td>
                  <td className="p-3">Economic impact</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Container utilization</td>
                  <td className="p-3">90%</td>
                  <td className="p-3">95%+</td>
                  <td className="p-3">Revenue optimization</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">HR processing time reduction</td>
                  <td className="p-3">90%</td>
                  <td className="p-3">95%+</td>
                  <td className="p-3">Operational efficiency</td>
                </tr>
                <tr>
                  <td className="p-3">Revenue per employee</td>
                  <td className="p-3">Baseline</td>
                  <td className="p-3">+15-20%</td>
                  <td className="p-3">AI productivity gains</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparable Signals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Comparable Signals</h2>
          
          <div className="space-y-3">
            <Link href="/signals/002">
              <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold mb-1">Signal #002</div>
                    <div className="text-sm text-muted-foreground">Dubai Electricity and Water Authority (DEWA) deploys AI service agents via Rammas platform</div>
                  </div>
                  <ArrowLeft size={16} className="rotate-180 text-muted-foreground" />
                </div>
              </div>
            </Link>
            <Link href="/signals/003">
              <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold mb-1">Signal #003</div>
                    <div className="text-sm text-muted-foreground">Emirates NBD launches AI-powered banking assistant</div>
                  </div>
                  <ArrowLeft size={16} className="rotate-180 text-muted-foreground" />
                </div>
              </div>
            </Link>
            <Link href="/signals/007">
              <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold mb-1">Signal #007</div>
                    <div className="text-sm text-muted-foreground">Dubai appoints 22 Chief AI Officers across government entities</div>
                  </div>
                  <ArrowLeft size={16} className="rotate-180 text-muted-foreground" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sources</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-muted-foreground">1.</span>
              <a 
                href="https://www.adportsgroup.com/en/news-and-media/2025/12/09/ad-ports-group-achieves-guinness-world-records"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                AD Ports Group Guinness World Record Announcement
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-muted-foreground">2.</span>
              <a 
                href="https://www.adportsgroup.com/en/news-and-media/2025/11/11/ad-ports-group-unveils-blueprint-for-tomorrows-workforce-harnessing-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                Building Human-AI Teams: AD Ports Group's Blueprint
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-muted-foreground">3.</span>
              <a 
                href="https://www.guinnessworldrecords.com/world-records/780095-most-ai-agents-deployed-in-a-logistics-facility"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                Guinness World Records Official Entry
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-muted-foreground">4.</span>
              <a 
                href="https://www.microsoft.com/en/customers/story/25589-ad-ports-group-azure-ai-foundry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
              >
                Microsoft Azure AI Foundry Partnership
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Want Deeper GCC AI Intelligence?</h3>
          <p className="text-muted-foreground mb-6">
            Get access to our comprehensive GCC AI Directory with 500+ companies, detailed market analysis, and investment opportunities.
          </p>
          <Link href="/premium">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              View Premium Plans
              <ArrowLeft size={16} className="ml-2 rotate-180" />
            </Button>
          </Link>
        </section>
      </article>
    </div>
  );
}
