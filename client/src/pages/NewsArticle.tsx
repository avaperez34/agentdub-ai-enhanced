/**
 * NewsArticle - Individual article detail page
 */

import { useRoute, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReadingProgress } from "@/components/ReadingProgress";

// Sample articles data - in production, this would come from a CMS or API
const articles: Record<string, any> = {
  "001": {
    id: "001",
    title: "Saudi AI Hiring Surges 340% in Q1 2026 - Talent War Intensifies",
    category: "Hiring",
    date: "2026-01-14",
    readTime: "3 min",
    isPremium: false,
    content: `
Saudi Arabia's AI sector added 2,847 positions in Q1 2026, representing a staggering 340% increase year-over-year. This explosive growth signals the Kingdom's aggressive push to build indigenous AI capabilities as part of Vision 2030's digital transformation agenda.

## The Numbers

The hiring surge is concentrated across three major players:

- **SDAIA (Saudi Data & AI Authority)**: 1,240 new hires, primarily data scientists and ML engineers
- **NEOM**: 890 positions, focusing on autonomous systems and smart city infrastructure
- **Saudi Aramco**: 717 hires, building AI capabilities for oil exploration and predictive maintenance

Average salaries for senior AI roles have jumped 45% to $180,000 annually, with total compensation packages reaching $250,000+ when including housing allowances and benefits.

## What's Driving This?

Three factors are accelerating Saudi AI hiring:

1. **Sovereign AI Push**: The Kingdom wants to own its AI stack, from data centers to LLMs. This requires massive talent acquisition.

2. **NEOM Deadlines**: The $500B megacity project has aggressive 2030 milestones, requiring immediate AI deployment for autonomous operations.

3. **Aramco Digitalization**: The world's most profitable company is betting on AI to maintain competitive advantage as energy markets shift.

## The Talent War

Saudi Arabia is competing directly with UAE (G42, Core42) and Qatar (QCRI) for the same talent pool. The Kingdom's advantages:

- **Higher salaries**: 15-20% premium over UAE equivalents
- **Tax-free income**: No personal income tax
- **Career trajectory**: Direct access to Vision 2030 megaprojects

However, challenges remain:

- **Cultural adjustment**: Many Western AI engineers hesitate due to lifestyle differences
- **Remote work**: Post-COVID flexibility makes UAE's Dubai more attractive
- **Ecosystem maturity**: UAE's established AI ecosystem (G42, Mohamed bin Zayed University of AI) offers better networking

## Investment Implications

For AI vendors and service providers:

- **Recruitment firms**: Saudi market now rivals UAE for AI talent placement fees
- **Training providers**: Massive demand for AI upskilling programs
- **Relocation services**: Opportunity to facilitate Western AI talent moves to KSA

For investors:

- **Watch compensation inflation**: Rising salaries signal genuine execution vs. vaporware announcements
- **Track retention rates**: High turnover would indicate execution challenges
- **Monitor output**: Hiring surge should translate to product launches by Q3 2026

## What's Next?

Expect Saudi AI hiring to accelerate further in Q2 2026 as:

- NEOM's autonomous vehicle deployment begins
- SDAIA launches Arabic LLM training program
- Aramco expands AI-driven exploration in Ghawar field

The talent war is just beginning. Winners will be those who can not only attract but retain top AI talent in an increasingly competitive GCC market.
    `,
  },
  "002": {
    id: "002",
    title: "G42 Acquires Majority Stake in Egyptian AI Startup Integrant - $47M Deal",
    category: "M&A",
    date: "2026-01-13",
    readTime: "4 min",
    isPremium: true,
    content: `
UAE's G42 has acquired a 65% stake in Cairo-based Integrant AI for $47 million, marking the largest Egyptian AI exit to date and signaling GCC expansion into North African talent pools.

## Deal Structure

The acquisition includes:

- **$47M valuation**: $30.5M for 65% stake, with $16.5M remaining with founders
- **120-person team**: Primarily Arabic NLP engineers and computational linguists
- **IP portfolio**: 14 patents in Arabic language processing
- **Earnout provision**: Additional $15M if revenue targets hit by 2027

## Why This Matters

This deal represents a strategic shift in GCC AI M&A from technology acquisition to **talent arbitrage**.

[Premium content continues...]

*Upgrade to Premium to read the full analysis, including competitive implications, valuation breakdown, and investment thesis.*
    `,
  },
  "003": {
    id: "003",
    title: "New UAE Data Residency Rules Impact 47 Cloud Providers - Compliance Deadline March 2026",
    category: "Regulation",
    date: "2026-01-12",
    readTime: "5 min",
    isPremium: false,
    content: `
The UAE Telecommunications and Digital Government Regulatory Authority (TDRA) has issued new data residency mandates requiring all AI training datasets to be stored within UAE borders. 47 cloud providers must comply by March 31, 2026.

## The New Rules

Starting March 31, 2026:

- **AI training data** must be stored in UAE data centers
- **Model weights** for LLMs serving UAE customers must be UAE-resident
- **Inference logs** must be retained locally for 12 months
- **Cross-border transfers** require explicit TDRA approval

Penalties for non-compliance:

- **First violation**: AED 500,000 ($136,000) fine
- **Repeat violations**: License suspension
- **Data breaches**: Criminal liability for executives

## Who's Affected?

The 47 impacted providers fall into three categories:

**Already Compliant (3 providers):**
- G42 (owns UAE data centers)
- AWS (has UAE region since 2022)
- Microsoft Azure (Abu Dhabi region operational)

**Scrambling to Comply (31 providers):**
- Google Cloud (building UAE region, completion Q2 2026)
- Oracle (announced UAE expansion)
- Alibaba Cloud (partnering with G42)
- 28 smaller regional providers

**At Risk (13 providers):**
- Smaller SaaS companies without UAE presence
- International AI platforms serving UAE customers
- Startups lacking capital for UAE data center migration

## Business Impact

For cloud providers:

- **Capital expenditure**: Building UAE data centers costs $50-200M
- **Partnerships**: Smaller players partnering with G42, AWS, Azure
- **Market consolidation**: Expect 8-10 providers to exit UAE market

For AI companies:

- **Compliance costs**: Migrating training data to UAE adds 15-30% to infrastructure costs
- **Latency issues**: UAE-only storage may impact global model performance
- **Competitive advantage**: UAE-native companies (G42, Core42) gain structural advantage

## Why Now?

Three drivers behind TDRA's timing:

1. **AI sovereignty**: UAE wants control over AI development within its borders
2. **Stargate project**: $500B OpenAI/Oracle data center requires regulatory framework
3. **Geopolitical positioning**: Aligning with EU GDPR model vs. US cloud dominance

## What to Do

For cloud providers:

- **Immediate**: Assess data residency status, identify non-compliant workloads
- **Short-term**: Partner with UAE-compliant providers or build local presence
- **Long-term**: Architect for multi-region compliance (UAE, EU, US)

For AI companies:

- **Audit training data**: Identify datasets requiring UAE migration
- **Evaluate partners**: Ensure cloud providers are compliant
- **Budget for compliance**: Add 20% buffer to 2026 infrastructure costs

For investors:

- **Winners**: G42, AWS, Azure (compliance = moat)
- **Losers**: Non-compliant SaaS companies serving UAE
- **Watch**: Google Cloud execution on UAE region buildout

## The Bigger Picture

UAE's data residency rules are part of a broader GCC trend toward **digital sovereignty**. Expect similar regulations from Saudi Arabia (Q2 2026) and Qatar (Q3 2026).

The message is clear: To serve GCC AI markets, you must build in the GCC.
    `,
  },
  "004": {
    id: "004",
    title: "Qatar's QCRI Launches Open-Source Arabic LLM - 70B Parameters, Outperforms GPT-4 on Arabic Tasks",
    category: "Technology",
    date: "2026-01-11",
    readTime: "6 min",
    isPremium: true,
    content: `
Qatar Computing Research Institute (QCRI) has released Qalam-70B, the first open-source Arabic large language model competitive with GPT-4 on Arabic benchmarks. This release marks a watershed moment for GCC AI sovereignty.

## Technical Specifications

**Model Architecture:**
- 70 billion parameters
- Trained on 2.3 trillion tokens (60% Arabic, 40% English)
- Context window: 8,192 tokens
- License: Apache 2.0 (fully permissive)

**Performance Benchmarks:**

[Premium content continues...]

*Upgrade to Premium to read the full technical analysis, including benchmark comparisons, training methodology, and deployment strategies.*
    `,
  },
  "005": {
    id: "005",
    title: "Kuwait's Zain Telecom Deploys AI Customer Service Agents - 73% Resolution Rate",
    category: "Deployment",
    date: "2026-01-10",
    readTime: "4 min",
    isPremium: false,
    content: `
Zain Kuwait has replaced 40% of its call center operations with AI agents, achieving a 73% first-contact resolution rate. The deployment impacts 2,400 jobs but offers reskilling programs. This represents a blueprint for GCC telecom sector transformation.

## The Deployment

**Scale:**
- 18 AI agents handling voice, chat, and WhatsApp
- Processing 47,000 customer interactions daily
- Covering 12 languages (Arabic, English, Hindi, Tagalog, etc.)
- 24/7 operation with 99.2% uptime

**Technology Stack:**
- Custom Arabic LLM trained on 8 years of Zain customer interactions
- Telecom-specific fine-tuning (billing, technical support, account management)
- Integration with legacy CRM and billing systems
- Real-time escalation to human agents for complex issues

## The Results

After 90 days of operation:

**Customer Satisfaction:**
- 73% first-contact resolution (vs. 58% with human agents)
- Average handle time: 3.2 minutes (vs. 7.8 minutes human)
- Customer satisfaction score: 4.2/5 (vs. 3.8/5 human)
- 24/7 availability eliminates wait times

**Cost Savings:**
- $12M annual savings from reduced headcount
- $3M additional savings from reduced training costs
- $2M savings from decreased facility overhead
- **Total**: $17M annual savings (32% reduction in customer service costs)

**Employee Impact:**
- 2,400 call center positions affected
- 1,200 employees offered reskilling (AI supervision, quality assurance)
- 800 employees accepted voluntary severance packages
- 400 employees transitioned to other Zain departments

## The Reskilling Program

Zain's approach to workforce transition:

**AI Supervision Track (6 months):**
- Monitoring AI agent performance
- Handling escalated complex cases
- Training new AI models on edge cases
- **Salary**: 85% of previous call center wage

**Quality Assurance Track (4 months):**
- Auditing AI interactions for quality
- Identifying improvement opportunities
- Customer feedback analysis
- **Salary**: 90% of previous wage

**Technical Support Track (8 months):**
- Maintaining AI infrastructure
- Troubleshooting technical issues
- Integrating new features
- **Salary**: 110% of previous wage (requires technical training)

## Why This Matters

Zain's deployment is significant for three reasons:

**1. Arabic Language Success**

Previous AI customer service deployments in the GCC struggled with Arabic dialects. Zain's custom LLM handles:

- Kuwaiti Arabic dialect
- Code-switching (Arabic-English mixing)
- Telecom-specific terminology
- Cultural context and politeness norms

**2. Regulatory Compliance**

Kuwait's Ministry of Communications approved the deployment with conditions:

- Mandatory reskilling programs
- 12-month transition period
- Quarterly reporting on employee outcomes
- Customer opt-out option (can request human agent)

This creates a template for other GCC countries considering AI workforce transitions.

**3. Economic Model**

The business case is compelling:

- **Payback period**: 14 months
- **ROI**: 340% over 3 years
- **Scalability**: Can handle 10x volume without additional cost

## Competitive Implications

**For GCC Telecom Sector:**

Zain's success will trigger a wave of AI deployments:

- **Saudi Telecom Company (STC)**: Announced similar pilot for Q2 2026
- **Etisalat (UAE)**: Evaluating Zain's technology stack
- **Ooredoo (Qatar)**: In discussions with QCRI for Arabic LLM

Expect 60-70% of GCC telecom customer service to be AI-powered by 2027.

**For AI Vendors:**

- **Winners**: Arabic LLM providers (QCRI, G42, SDAIA)
- **Losers**: Generic English-only AI customer service platforms
- **Opportunity**: Reskilling and workforce transition services

**For Investors:**

- **Telecom stocks**: Cost savings will flow to bottom line (watch Zain's Q2 2026 earnings)
- **AI infrastructure**: Demand for Arabic-specific training and deployment
- **Workforce services**: Reskilling and transition management

## What's Next?

Zain plans to expand AI agents to:

- **Technical support**: Network troubleshooting, device setup
- **Sales**: Plan recommendations, upselling, cross-selling
- **Retention**: Churn prediction and proactive outreach

By end of 2026, Zain expects 75% of customer interactions to be AI-handled, with human agents focusing on VIP customers and complex technical issues.

## The Bigger Picture

Zain's deployment is a microcosm of GCC's broader AI transformation:

- **Sovereign AI**: Custom Arabic models, not off-the-shelf Western solutions
- **Workforce transition**: Reskilling over mass layoffs
- **Economic efficiency**: Dramatic cost savings funding further AI investment

The message: GCC AI deployment is moving from pilot to production. The workforce impact is real, but managed. The economic benefits are substantial.

For companies operating in the GCC: The AI transformation is no longer a question of "if" but "how fast."
    `,
  },
};

export default function NewsArticle() {
  const [, params] = useRoute("/news/:id");
  const articleId = params?.id || "";
  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/news">
            <Button>Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hiring":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
      case "Funding":
        return "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300";
      case "M&A":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
      case "Regulation":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
      case "Technology":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300";
      case "Deployment":
        return "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />

      {/* Back Button */}
      <div className="border-b border-border bg-card/50">
        <div className="container py-4">
          <Link href="/news">
            <Button variant="ghost" className="group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              {article.isPremium && (
                <Badge variant="outline" className="border-accent text-accent">
                  Premium
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </div>
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                <Share2 size={14} />
                Share
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.split("\n").map((paragraph: string, index: number) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-bold mt-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.startsWith("- ")) {
                const content = paragraph.replace("- ", "");
                const parts = content.split(/\*\*(.*?)\*\*/);
                return (
                  <li key={index} className="ml-6">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </li>
                );
              }
              if (paragraph.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Premium CTA */}
          {article.isPremium && (
            <div className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Continue Reading with Premium</h3>
              <p className="text-muted-foreground mb-6">
                Get unlimited access to premium articles, full Signal reports, company deep dives, and weekly executive briefings.
              </p>
              <Link href="/directory">
                <Button className="bg-accent hover:bg-accent/90">
                  Upgrade to Premium
                </Button>
              </Link>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Share this article:</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">Copy Link</Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
