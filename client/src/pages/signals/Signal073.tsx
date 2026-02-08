import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { ArrowLeft } from "lucide-react";

export default function Signal073() {
  const signalUrl = "https://agentdub.ai/signals/073";

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/intelligence">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Intelligence
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">SIGNAL #073</p>
              <p className="text-sm text-muted-foreground">Feb 3, 2026</p>
            </div>
            <ShareButton url={signalUrl} title="Abu Dhabi Dialogue Adopts AI-Powered Labour Mobility Framework" />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Abu Dhabi Dialogue Adopts AI-Powered Labour Mobility Framework - Digital Credentials & Smart Compliance
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Historic regional alignment on AI-driven worker mobility with interoperable digital credentials and smart compliance systems
          </p>

          <div className="flex gap-4 mb-8">
            <div className="px-4 py-2 bg-accent/10 rounded-lg">
              <p className="text-sm font-semibold text-accent">Labour Mobility & Compliance</p>
            </div>
            <div className="px-4 py-2 bg-secondary/20 rounded-lg">
              <p className="text-sm">Impact: 8.1/10</p>
            </div>
            <div className="px-4 py-2 bg-secondary/20 rounded-lg">
              <p className="text-sm">Horizon: 2-3 years</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            The 8th Abu Dhabi Dialogue (ADD) concluded on February 3, 2026, with labour ministers from 17 Asian labour-sending nations and all six GCC member states adopting an ambitious AI-driven roadmap for cross-border worker mobility. This represents the first coordinated regional framework to use artificial intelligence for matching skills with demand, verifying credentials in real-time, and detecting wage-theft risks before they occur.
          </p>

          <h2>Key Initiatives</h2>
          <h3>Interoperable Digital Credential Wallets</h3>
          <p>
            Member states will pilot digital credential wallets enabling employers in the UAE to verify an electrician's qualifications issued in Nepal or the Philippines in real time. This eliminates weeks of document verification and reduces placement fraud.
          </p>

          <h3>Risk-Based E-Inspection Platforms</h3>
          <p>
            AI-powered inspection systems will analyze payroll data to flag wage-theft risks before physical inspections occur. This proactive approach protects migrant workers and reduces compliance violations.
          </p>

          <h3>Migrant Remittances as Development Capital</h3>
          <p>
            Joint study on harnessing migrant remittances as development capital in origin countries, recognizing that worker earnings are critical to home economies.
          </p>

          <h2>Strategic Significance</h2>
          <p>
            The Abu Dhabi Dialogue represents a fundamental shift in how GCC countries approach labour mobility. Rather than viewing workers as interchangeable units, the framework treats them as skilled professionals whose credentials and rights deserve protection through AI-powered systems.
          </p>

          <h2>Regional Positioning</h2>
          <p>
            The UAE, which hosts the ADD's permanent secretariat, emphasized that the initiative aligns with its economic strategy to pivot from low-wage construction labour towards knowledge-intensive, green-economy roles. This signals a strategic move up the value chain.
          </p>

          <p>
            Oman's decision to hand the chairmanship to the Philippines strengthens the voice of labour-sending countries in shaping ethical recruitment standards, marking a shift toward more balanced partnership dynamics.
          </p>

          <h2>Implementation Timeline</h2>
          <p>
            The roadmap covers the 2026-2027 cycle, with pilot programs expected to launch within the next 6-12 months. Digital credential wallets and e-inspection platforms will be tested in select sectors before full rollout.
          </p>

          <h2>Implications for Stakeholders</h2>
          <h3>For GCC Employers</h3>
          <p>
            Faster, paperless onboarding of overseas hires and clearer rules on skills recognition. HR teams will need to integrate with new certification databases but could save weeks of processing time once systems go live.
          </p>

          <h3>For Labour-Sending Countries</h3>
          <p>
            Lower placement fees, better grievance redress mechanisms, and protection of national workers through AI-powered compliance monitoring.
          </p>

          <h3>For Migrant Workers</h3>
          <p>
            Enhanced credential portability, wage-theft detection systems, and stronger legal protections through transparent, AI-powered compliance frameworks.
          </p>

          <h2>Broader Context</h2>
          <p>
            This initiative demonstrates how GCC countries are using AI not just for economic growth, but for social protection and regional cooperation. The framework acknowledges that AI can be a tool for fairness and transparency, not just efficiency and profit.
          </p>

          <p>
            As global migration patterns shift and labour markets tighten, the Abu Dhabi Dialogue's approach offers a model for other regions seeking to balance economic needs with worker protection through technology.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Share This Signal</h3>
          <ShareButton url={signalUrl} title="Abu Dhabi Dialogue Adopts AI-Powered Labour Mobility Framework" />
        </div>
      </div>
    </div>
  );
}
