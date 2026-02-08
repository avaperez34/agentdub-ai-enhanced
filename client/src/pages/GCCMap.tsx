/**
 * GCC Map - Interactive map showing AI investment and economic data for GCC countries
 */

import { useState } from "react";
import { X, TrendingUp, Building2, DollarSign, Users, BarChart3, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CountryData {
  name: string;
  code: string;
  populationNum: number; // in millions
  population: string;
  aiInvestmentNum: number; // in billions USD
  aiInvestment: string;
  majorCompanies: string[];
  gdpTotalNum: number; // in billions USD
  gdpTotal: string;
  gdpOilPercent: number;
  gdpOil: string;
  gdpNonOilPercent: number;
  gdpNonOil: string;
  nonOilShare: string;
  aiGdpImpact: string;
  color: string;
}

const gccCountries: CountryData[] = [
  {
    name: "United Arab Emirates",
    code: "UAE",
    populationNum: 11.3,
    population: "11.3 million",
    aiInvestmentNum: 10,
    aiInvestment: "$10B+ (G42 sovereign investment)",
    majorCompanies: ["G42", "Hub71 (200+ startups)", "Technology Innovation Institute", "Inception AI"],
    gdpTotalNum: 504,
    gdpTotal: "$504B (2025)",
    gdpOilPercent: 30,
    gdpOil: "30% of GDP",
    gdpNonOilPercent: 70,
    gdpNonOil: "70% of GDP",
    nonOilShare: "70%",
    aiGdpImpact: "14% of GDP by 2030 (projected)",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Saudi Arabia",
    code: "KSA",
    populationNum: 36.7,
    population: "36.7 million",
    aiInvestmentNum: 100,
    aiInvestment: "$100B+ (NEOM, HUMAIN, data centers)",
    majorCompanies: ["HUMAIN", "SDAIA", "NEOM", "Aramco Digital", "Mozn"],
    gdpTotalNum: 1100,
    gdpTotal: "$1.1T (2025)",
    gdpOilPercent: 45,
    gdpOil: "45% of GDP",
    gdpNonOilPercent: 55,
    gdpNonOil: "55% of GDP",
    nonOilShare: "55%",
    aiGdpImpact: "12.4% of GDP by 2030 (projected)",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Qatar",
    code: "QAT",
    populationNum: 3.1,
    population: "3.1 million",
    aiInvestmentNum: 5,
    aiInvestment: "$5B+ (Qai launched Dec 2025)",
    majorCompanies: ["Qai (Qatar AI)", "QCRI", "Qatar Computing Research Institute"],
    gdpTotalNum: 235,
    gdpTotal: "$235B (2025)",
    gdpOilPercent: 50,
    gdpOil: "~50% of GDP",
    gdpNonOilPercent: 50,
    gdpNonOil: "~50% of GDP",
    nonOilShare: "50%",
    aiGdpImpact: "AI infrastructure investment accelerating",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Kuwait",
    code: "KWT",
    populationNum: 5.2,
    population: "5.2 million",
    aiInvestmentNum: 1.1,
    aiInvestment: "$1.1B digital infrastructure (Azure, Google partnerships)",
    majorCompanies: ["Kuwait National AI Strategy", "Zain Telecom AI", "Kuwait Investment Authority"],
    gdpTotalNum: 184,
    gdpTotal: "$184B (2025)",
    gdpOilPercent: 60,
    gdpOil: "~60% of GDP",
    gdpNonOilPercent: 40,
    gdpNonOil: "~40% of GDP",
    nonOilShare: "40%",
    aiGdpImpact: "Government AI services transformation",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Bahrain",
    code: "BHR",
    populationNum: 1.7,
    population: "1.7 million",
    aiInvestmentNum: 0.5,
    aiInvestment: "$500M+ fintech & AI hub strategy",
    majorCompanies: ["Bahrain FinTech Bay", "Benefit", "Cloud computing initiatives"],
    gdpTotalNum: 44,
    gdpTotal: "$44B (2025)",
    gdpOilPercent: 20,
    gdpOil: "~20% of GDP",
    gdpNonOilPercent: 80,
    gdpNonOil: "~80% of GDP",
    nonOilShare: "80%",
    aiGdpImpact: "Focus on financial services AI",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Oman",
    code: "OMN",
    populationNum: 5.7,
    population: "5.7 million",
    aiInvestmentNum: 2.3,
    aiInvestment: "$2.3B Vision 2040 digital transformation",
    majorCompanies: ["Oman Vision 2040", "OQ Technology", "Digital government projects"],
    gdpTotalNum: 115,
    gdpTotal: "$115B (2025)",
    gdpOilPercent: 40,
    gdpOil: "~40% of GDP",
    gdpNonOilPercent: 60,
    gdpNonOil: "~60% of GDP",
    nonOilShare: "60%",
    aiGdpImpact: "Emerging AI adoption in government",
    color: "from-cyan-500 to-blue-600",
  },
];

// Calculate productivity ratios
const calculateRatios = (countries: CountryData[]) => {
  return countries.map((country) => ({
    ...country,
    aiPerCapita: (country.aiInvestmentNum / country.populationNum).toFixed(2),
    gdpPerCapita: (country.gdpTotalNum / country.populationNum).toFixed(1),
    aiPerGdp: ((country.aiInvestmentNum / country.gdpTotalNum) * 100).toFixed(2),
    diversificationScore: country.gdpNonOilPercent,
  }));
};

const countriesWithRatios = calculateRatios(gccCountries);

export default function GCCMap() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [showCharts, setShowCharts] = useState(true);

  const maxValues = {
    population: Math.max(...gccCountries.map((c) => c.populationNum)),
    gdp: Math.max(...gccCountries.map((c) => c.gdpTotalNum)),
    aiInvestment: Math.max(...gccCountries.map((c) => c.aiInvestmentNum)),
    aiPerCapita: Math.max(...countriesWithRatios.map((c) => parseFloat(c.aiPerCapita))),
    gdpPerCapita: Math.max(...countriesWithRatios.map((c) => parseFloat(c.gdpPerCapita))),
  };

  return (
    <div className="min-h-screen">
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
              Explore AI investment, economic data, and productivity ratios across the six Gulf
              Cooperation Council countries. Interactive visualizations reveal leaders in diversification
              and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Toggle Charts Button */}
        <div className="flex justify-end mb-6">
          <Button
            variant="outline"
            onClick={() => setShowCharts(!showCharts)}
            className="gap-2"
          >
            <BarChart3 size={18} />
            {showCharts ? "Hide" : "Show"} Analytics
          </Button>
        </div>

        {/* Data Visualizations */}
        {showCharts && (
          <section className="mb-12 space-y-8">
            {/* Comparative Histograms */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="text-accent" size={24} />
                Comparative Analysis
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Population Chart */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Population (Millions)</h3>
                  <div className="space-y-3">
                    {gccCountries.map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm text-muted-foreground">{country.populationNum}M</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${(country.populationNum / maxValues.population) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GDP Chart */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Total GDP (Billions USD)</h3>
                  <div className="space-y-3">
                    {gccCountries.map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm text-muted-foreground">${country.gdpTotalNum}B</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${(country.gdpTotalNum / maxValues.gdp) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Investment Chart */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">AI Investment (Billions USD)</h3>
                  <div className="space-y-3">
                    {gccCountries.map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm text-muted-foreground">${country.aiInvestmentNum}B</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${(country.aiInvestmentNum / maxValues.aiInvestment) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Non-Oil GDP % Chart */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Economic Diversification (Non-Oil GDP %)</h3>
                  <div className="space-y-3">
                    {gccCountries.sort((a, b) => b.gdpNonOilPercent - a.gdpNonOilPercent).map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm text-muted-foreground">{country.gdpNonOilPercent}%</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${country.gdpNonOilPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Productivity Ratios */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Activity className="text-accent" size={24} />
                Productivity & Efficiency Ratios
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* AI Investment per Capita */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Investment per Capita</h3>
                  <p className="text-sm text-muted-foreground mb-4">USD per person (higher = more AI-intensive)</p>
                  <div className="space-y-3">
                    {countriesWithRatios.sort((a, b) => parseFloat(b.aiPerCapita) - parseFloat(a.aiPerCapita)).map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm font-bold text-accent">${country.aiPerCapita}B/M</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${(parseFloat(country.aiPerCapita) / maxValues.aiPerCapita) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GDP per Capita */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">GDP per Capita</h3>
                  <p className="text-sm text-muted-foreground mb-4">Thousands USD (economic productivity)</p>
                  <div className="space-y-3">
                    {countriesWithRatios.sort((a, b) => parseFloat(b.gdpPerCapita) - parseFloat(a.gdpPerCapita)).map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm font-bold text-accent">${country.gdpPerCapita}k</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${(parseFloat(country.gdpPerCapita) / maxValues.gdpPerCapita) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Investment as % of GDP */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Investment as % of GDP</h3>
                  <p className="text-sm text-muted-foreground mb-4">Digital transformation intensity</p>
                  <div className="space-y-3">
                    {countriesWithRatios.sort((a, b) => parseFloat(b.aiPerGdp) - parseFloat(a.aiPerGdp)).map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm font-bold text-accent">{country.aiPerGdp}%</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${parseFloat(country.aiPerGdp) * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diversification Score */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Diversification Index</h3>
                  <p className="text-sm text-muted-foreground mb-4">Non-oil GDP % (resilience indicator)</p>
                  <div className="space-y-3">
                    {countriesWithRatios.sort((a, b) => b.diversificationScore - a.diversificationScore).map((country) => (
                      <div key={country.code}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{country.code}</span>
                          <span className="text-sm font-bold text-accent">{country.diversificationScore}%</span>
                        </div>
                        <div className="h-8 bg-secondary rounded-lg overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${country.color} transition-all`}
                            style={{ width: `${country.diversificationScore}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Most Diversified</div>
                  <div className="text-2xl font-bold text-accent">Bahrain</div>
                  <div className="text-sm">80% non-oil GDP</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Highest AI Investment</div>
                  <div className="text-2xl font-bold text-accent">Saudi Arabia</div>
                  <div className="text-sm">$100B+ total</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">AI per Capita Leader</div>
                  <div className="text-2xl font-bold text-accent">Saudi Arabia</div>
                  <div className="text-sm">$2.73B per million</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Map Grid Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Country Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </section>

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
              <div className="text-3xl font-bold text-accent mb-2">$119B+</div>
              <div className="text-sm text-muted-foreground">AI Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3.8%</div>
              <div className="text-sm text-muted-foreground">GDP Growth 2025</div>
            </div>
          </div>
        </div>
      </div>

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
                  href="/"
                  className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Explore Intelligence
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
