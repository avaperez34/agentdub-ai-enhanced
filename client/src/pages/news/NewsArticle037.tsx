import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";

export default function NewsArticle037() {
  const articleTitle = "UAE Stargate Data Centre to Cost More Than $30 Billion";
  const articleUrl = `${window.location.origin}/news/037`;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/news">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2" size={16} />
            Back to News
          </Button>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Infrastructure
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>January 26, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>UAE</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 leading-tight">
              UAE Stargate Data Centre to Cost More Than $30 Billion
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Stargate UAE campus larger than Monaco will cost $30B+ (50% increase from initial forecast), positioning Emirates as sovereign AI infrastructure provider for nations without capacity. First phase Q3 2026.
            </p>

            <div className="mt-6">
              <ShareButton
                title={articleTitle}
                description="UAE Stargate data centre will cost more than $30 billion, positioning Emirates as sovereign AI infrastructure provider"
                url={articleUrl}
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>$30 Billion+ Commitment to AI Sovereignty</h2>
            <p>
              The Stargate UAE data centre project will cost more than $30 billion to build and be at the centre of plans to grow artificial intelligence alliances around the world, Omar Al Olama, Minister of State for AI, Digital Economy and Remote Work Applications, announced at the Machines Can Think summit in Abu Dhabi on January 26, 2026.
            </p>
            <p>
              The latest cost estimate is 50 per cent more than the initial forecast in the $20 billion range announced in spring 2025, reflecting the project's expanded scope and ambitions. The campus will be built over 19.2 square kilometres in Abu Dhabi—larger than Monaco, the world's second smallest country—and represents the most ambitious AI infrastructure project in the region.
            </p>

            <h2>"No One Has the Audacity to Dream Of"</h2>
            <p>
              The development of the 5-gigawatt Stargate UAE proves the Emirates' ambitions to be at the forefront of the AI revolution, Mr Al Olama said. Stargate is "the most famous piece of evidence … to not just ensure that we're able to build international co-operation when it comes to AI infrastructure, but also to build something that no one has the audacity to dream of."
            </p>
            <p>
              The campus will be "larger than Monaco that is going to cost more than $30 billion to build," he emphasized, underscoring the scale of the UAE's commitment to AI sovereignty and infrastructure leadership.
            </p>

            <h2>Sovereign AI Export Model</h2>
            <p>
              The UAE is heavily leaning on its growing expertise in developing large language models—the underlying technology powering generative AI—and is keen on helping other nations with their sovereign AI needs, Mr Al Olama said. The Emirates has successfully developed models such as Core42's Jais and Mohamed bin Zayed University of Artificial Intelligence's K2 Think, signalling the country's ability to compete in the fast-evolving AI landscape.
            </p>
            <p>
              "The UAE kept exporting to ensure that countries that do not have the ability to build these models are able to leverage on what the UAE has created," Mr Al Olama said, noting the economic benefits of these AI models. "We want to ensure that countries … have an option that does not look for profit and does not look for specific commercial gains, but focuses on giving all these countries sovereign options."
            </p>
            <p>
              These are sovereign options that they can "build on top of, can train and fine-tune, and build partnerships with – and we want to be the partner of these countries that want to build these models."
            </p>

            <h2>Data Sovereignty as Strategic Asset</h2>
            <p>
              Data sovereignty is becoming key for nations as it gives them legal control over the data within their jurisdictions. The UAE's positioning as a provider of sovereign AI infrastructure and models addresses a critical gap for nations that lack the resources to build their own AI capabilities but require data sovereignty for security, regulatory, or strategic reasons.
            </p>
            <p>
              This export-oriented sovereign AI model distinguishes the UAE's approach from other GCC nations focused primarily on domestic AI capacity. By positioning itself as a partner for countries seeking sovereign AI options, the UAE is creating a new category of AI infrastructure diplomacy.
            </p>

            <h2>Global Tech Partnership</h2>
            <p>
              Stargate UAE is being developed by Khazna Data Centres, a unit of Abu Dhabi AI major G42, with OpenAI, Oracle, Nvidia, Cisco and SoftBank. South Korea has also joined the project, expanding the international partnership beyond traditional US-UAE tech collaboration.
            </p>
            <p>
              Construction work on the first phase of Stargate UAE is "going full steam ahead" and is expected to be completed in the third quarter of 2026, Abu Dhabi sovereign wealth fund Mubadala said last month. The accelerated timeline reflects the urgency with which the UAE is pursuing AI infrastructure leadership.
            </p>

            <h2>Investment Implications</h2>
            <p>
              The $30 billion+ Stargate UAE investment represents several strategic shifts in the global AI infrastructure landscape:
            </p>
            <ul>
              <li><strong>Sovereign AI as Export:</strong> UAE positioning as infrastructure provider for nations without capacity creates new business model beyond domestic AI deployment</li>
              <li><strong>Data Sovereignty Premium:</strong> Growing demand for local compute and data control creates structural advantage for UAE's sovereign AI offerings</li>
              <li><strong>Infrastructure Diplomacy:</strong> AI infrastructure partnerships becoming tool of soft power and economic influence, similar to historical energy relationships</li>
              <li><strong>Scale Advantage:</strong> 19.2 sq km campus larger than Monaco demonstrates UAE's willingness to build at unprecedented scale to capture AI infrastructure leadership</li>
              <li><strong>Partnership Model:</strong> OpenAI, Oracle, Nvidia, Cisco, SoftBank, South Korea participation shows UAE's ability to convene global tech ecosystem around sovereign AI vision</li>
            </ul>

            <h2>Regional Context</h2>
            <p>
              The Stargate UAE announcement comes as GCC nations compete for AI infrastructure leadership. Saudi Arabia's Humain secured $1.2 billion in financing for AI data centres, Qatar Investment Authority committed $4 billion to selective AI investments, and Kuwait Investment Authority allocated $6 billion to AI and digitalization.
            </p>
            <p>
              However, the UAE's $30 billion+ Stargate project—combined with its sovereign AI export model—positions the Emirates in a distinct category. Rather than competing solely on infrastructure scale, the UAE is building an ecosystem that combines compute capacity, LLM development expertise (Jais, K2 Think), and a partnership model designed to serve nations seeking sovereign AI options.
            </p>
            <p>
              This approach transforms the UAE from an AI infrastructure consumer into an AI infrastructure provider, creating a new role in the global AI value chain that few nations can replicate.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
