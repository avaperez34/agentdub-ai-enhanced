/**
 * GCC Map - Interactive map showing AI investment and economic data for GCC countries
 */

import { useState } from "react";
import { X, TrendingUp, Building2, DollarSign, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CountryData {
  name: string;
  code: string;
  population: string;
  aiInvestment: string;
  majorCompanies: string[];
  gdpTotal: string;
  gdpOil: string;
  gdpNonOil: string;
  nonOilShare: string;
  aiGdpImpact: string;
  color: string;
}

const gccCountries: CountryData[] = [
  {
    name: "United Arab Emirates",
    code: "UAE",
    population: "11.3 million",
    aiInvestment: "$10B+ (G42 sovereign investment)",
    majorCompanies: ["G42", "Hub71 (200+ startups)", "Technology Innovation Institute", "Inception AI"],
    gdpTotal: "$504B (2025)",
    gdpOil: "30% of GDP",
    gdpNonOil: "70% of GDP",
    nonOilShare: "70%",
    aiGdpImpact: "14% of GDP by 2030 (projected)",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Saudi Arabia",
    code: "KSA",
    population: "36.7 million",
    aiInvestment: "$100B+ (NEOM, HUMAIN, data centers)",
    majorCompanies: ["HUMAIN", "SDAIA", "NEOM", "Aramco Digital", "Mozn"],
    gdpTotal: "$1.1T (2025)",
    gdpOil: "45% of GDP",
    gdpNonOil: "55% of GDP",
    nonOilShare: "55%",
    aiGdpImpact: "12.4% of GDP by 2030 (projected)",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Qatar",
    code: "QAT",
    population: "3.1 million",
    aiInvestment: "$524B sovereign fund (Qai launched Dec 2025)",
    majorCompanies: ["Qai (Qatar AI)", "QCRI", "Qatar Computing Research Institute"],
    gdpTotal: "$235B (2025)",
    gdpOil: "~50% of GDP",
    gdpNonOil: "~50% of GDP",
    nonOilShare: "50%",
    aiGdpImpact: "AI infrastructure investment accelerating",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Kuwait",
    code: "KWT",
    population: "5.2 million",
    aiInvestment: "$1.1B digital infrastructure (Azure, Google partnerships)",
    majorCompanies: ["Kuwait National AI Strategy", "Zain Telecom AI", "Kuwait Investment Authority"],
    gdpTotal: "$184B (2025)",
    gdpOil: "~60% of GDP",
    gdpNonOil: "~40% of GDP",
    nonOilShare: "40%",
    aiGdpImpact: "Government AI services transformation",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Bahrain",
    code: "BHR",
    population: "1.7 million",
    aiInvestment: "Regional fintech & AI hub strategy",
    majorCompanies: ["Bahrain FinTech Bay", "Benefit", "Cloud computing initiatives"],
    gdpTotal: "$44B (2025)",
    gdpOil: "~20% of GDP",
    gdpNonOil: "~80% of GDP",
    nonOilShare: "80%",
    aiGdpImpact: "Focus on financial services AI",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Oman",
    code: "OMN",
    population: "5.7 million",
    aiInvestment: "Digital transformation & smart city initiatives",
    majorCompanies: ["Oman Vision 2040", "OQ Technology", "Digital government projects"],
    gdpTotal: "$115B (2025)",
    gdpOil: "~40% of GDP",
    gdpNonOil: "~60% of GDP",
    nonOilShare: "60%",
    aiGdpImpact: "Emerging AI adoption in government",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function GCCMap() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-background">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              GCC Intelligence
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              GCC AI Investment Map
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore AI investment, economic data, and major companies across the six Gulf
              Cooperation Council countries. Click any country to view detailed intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Map Grid Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gccCountries.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country)}
              className={`group relative p-8 rounded-lg border-2 border-border hover:border-accent transition-all bg-gradient-to-br ${country.color} text-white overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">{country.code}</h3>
                <p className="text-lg mb-4 opacity-90">{country.name}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{country.population}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} />
                    <span>{country.gdpTotal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span>{country.nonOilShare} non-oil</span>
                  </div>
                </div>

                <div className="mt-4 text-xs opacity-75">
                  Click for full details →
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">GCC Overview (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">64M+</div>
              <div className="text-sm text-muted-foreground">Total Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$2.2T</div>
              <div className="text-sm text-muted-foreground">Combined GDP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$100B+</div>
              <div className="text-sm text-muted-foreground">AI Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3.8%</div>
              <div className="text-sm text-muted-foreground">GDP Growth 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className={`p-6 bg-gradient-to-br ${selectedCountry.color} text-white relative`}>
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="text-3xl font-bold mb-2">{selectedCountry.name}</h2>
              <p className="text-lg opacity-90">{selectedCountry.code}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Demographics */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="text-accent" size={20} />
                  <h3 className="text-xl font-bold">Demographics</h3>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-1">{selectedCountry.population}</div>
                  <div className="text-sm text-muted-foreground">Population (2025)</div>
                </div>
              </div>

              {/* Economic Data */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="text-accent" size={20} />
                  <h3 className="text-xl font-bold">Economic Data</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="text-lg font-bold text-accent mb-1">{selectedCountry.gdpTotal}</div>
                    <div className="text-xs text-muted-foreground">Total GDP</div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="text-lg font-bold text-accent mb-1">{selectedCountry.gdpOil}</div>
                    <div className="text-xs text-muted-foreground">Oil GDP</div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="text-lg font-bold text-accent mb-1">{selectedCountry.gdpNonOil}</div>
                    <div className="text-xs text-muted-foreground">Non-Oil GDP</div>
                  </div>
                </div>
              </div>

              {/* AI Investment */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-accent" size={20} />
                  <h3 className="text-xl font-bold">AI Investment & Impact</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="font-semibold mb-1">Total AI Investment</div>
                    <div className="text-muted-foreground">{selectedCountry.aiInvestment}</div>
                  </div>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="font-semibold mb-1">Projected AI Impact</div>
                    <div className="text-muted-foreground">{selectedCountry.aiGdpImpact}</div>
                  </div>
                </div>
              </div>

              {/* Major Companies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="text-accent" size={20} />
                  <h3 className="text-xl font-bold">Major AI Companies & Initiatives</h3>
                </div>
                <div className="space-y-2">
                  {selectedCountry.majorCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="bg-accent/5 border border-accent/20 rounded-lg p-3 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Want deeper intelligence on {selectedCountry.name}'s AI ecosystem?
                </p>
                <a
                  href="/premium"
                  className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  View Premium Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
