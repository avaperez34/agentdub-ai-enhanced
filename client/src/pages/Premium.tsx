/**
 * Premium - Subscription plans and premium products
 */

import { Link } from "wouter";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Check, Sparkles, TrendingUp, FileText, Bell, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Premium() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Sparkles size={14} className="mr-1" />
              Premium Access
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Unlock GCC AI Intelligence
            </h1>
            <p className="text-xl text-muted-foreground">
              Get access to comprehensive AI intelligence, exclusive insights, and premium features
              to stay ahead in the GCC AI ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Available Now Section */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Available Now
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              GCC AI Directory 2026 - Premium Report
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive directory of AI companies operating in the Gulf Cooperation Council
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Report Details */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>500+ AI Companies</strong> - Complete profiles with contact information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>280 Pages</strong> - In-depth analysis and market insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>GCC Compliance Scores</strong> - Data residency, Arabic support, local presence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Sector Breakdown</strong> - Healthcare, Finance, Energy, Government, and more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Country Analysis</strong> - UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span><strong>Investment Intelligence</strong> - Funding rounds, valuations, key investors</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold mb-2">$299</div>
                      <div className="text-muted-foreground">One-time purchase</div>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                        <TrendingUp size={16} />
                        Limited Time Offer
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get instant access to the complete directory. Price increases to $399 after 100 sales.
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://agentdubai.gumroad.com/l/gcc-ai-directory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button size="lg" className="w-full text-lg">
                      <FileText size={20} className="mr-2" />
                      Buy Full Report
                    </Button>
                  </a>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Instant PDF download • Lifetime access • No subscription required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Premium Subscription Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building a comprehensive subscription platform with exclusive features, real-time intelligence, and personalized insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-card border border-border rounded-lg p-6 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs">
                  Q2 2026
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-4">
                $49<span className="text-lg text-muted-foreground">/month</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Access to all News articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">10 Signal reports per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Basic company profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Weekly newsletter</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" disabled>
                <Lock size={16} className="mr-2" />
                Coming Soon
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-card border-2 border-accent rounded-lg p-6 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs">
                  Q2 2026
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">
                $149<span className="text-lg text-muted-foreground">/month</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Everything in Starter</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited Signal reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Advanced company analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Real-time funding alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quarterly directory updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">API access (100 calls/day)</span>
                </li>
              </ul>

              <Button className="w-full" disabled>
                <Lock size={16} className="mr-2" />
                Coming Soon
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-card border border-border rounded-lg p-6 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs">
                  Q3 2026
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">
                Custom
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Everything in Professional</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom research reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">White-label options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full" disabled>
                <Lock size={16} className="mr-2" />
                Coming Soon
              </Button>
            </div>
          </div>

          {/* Notify Me */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <Bell size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-2">Get Notified</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know when premium subscription plans launch. We'll send you early access and special launch pricing.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistForm source="premium" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Expected launch: Q3 2026 - Q2 2027 (Pre-seed phase)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-gradient-to-b from-background to-accent/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to the complete GCC AI Directory today, or join the waitlist for upcoming premium features
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://agentdubai.gumroad.com/l/gcc-ai-directory" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Buy Full Report - $299
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline">
                Explore Free Content
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
