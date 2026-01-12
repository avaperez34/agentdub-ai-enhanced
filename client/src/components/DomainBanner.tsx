/**
 * DomainBanner - Elegant sidebar displaying premium domains for sale
 * Rotates through domains in groups of 3
 */

import { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const domains = [
  { name: "ksaudi.com", category: "Geographic" },
  { name: "gulfelites.com", category: "Premium" },
  { name: "dubaiite.com", category: "Geographic" },
  { name: "arabians.ae", category: "Regional" },
  { name: "ai1.ae", category: "AI/Tech" },
  { name: "embodied.ae", category: "AI/Tech" },
  { name: "worldmodel.ae", category: "AI/Tech" },
  { name: "worldmodels.ae", category: "AI/Tech" },
  { name: "ejepa.com", category: "AI/Tech" },
  { name: "jepa.ae", category: "AI/Tech" },
  { name: "asil.ae", category: "Premium" },
  { name: "hormuz.ae", category: "Geographic" },
  { name: "aswad.ae", category: "Premium" },
  { name: "rih.ae", category: "Premium" },
  { name: "k7.ae", category: "Premium" },
  { name: "xdx.ae", category: "Premium" },
  { name: "islamiceconomy.ae", category: "Islamic Finance" },
  { name: "halalbankaccount.com", category: "Islamic Finance" },
  { name: "rizqbank.com", category: "Islamic Finance" },
  { name: "halalmasraf.com", category: "Islamic Finance" },
  { name: "tamweela.com", category: "Islamic Finance" },
];

export function DomainBanner() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
  });

  const domainsPerGroup = 3;
  const totalGroups = Math.ceil(domains.length / domainsPerGroup);
  const currentDomains = domains.slice(
    currentGroup * domainsPerGroup,
    (currentGroup + 1) * domainsPerGroup
  );

  const handleNext = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const handlePrevious = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const handleInquire = (domain: string) => {
    setSelectedDomain(domain);
    setFormData({ ...formData, domain });
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    toast.success(`Inquiry sent for ${formData.domain}! We'll contact you soon.`);
    setIsOpen(false);
    setFormData({ name: "", email: "", domain: "", message: "" });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="w-64 bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-accent" />
            <h3 className="text-sm font-bold text-foreground">Premium Domains</h3>
          </div>
          
          <p className="text-xs text-muted-foreground mb-4">
            Exclusive AI & GCC domains for sale
          </p>

          <div className="space-y-2 mb-4">
            {currentDomains.map((domain) => (
              <button
                key={domain.name}
                onClick={() => handleInquire(domain.name)}
                className="w-full text-left p-2 rounded-md bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {domain.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{domain.category}</div>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
            <button
              onClick={handlePrevious}
              className="hover:text-foreground transition-colors"
            >
              ← Previous
            </button>
            <span>
              {currentGroup + 1} / {totalGroups}
            </span>
            <button
              onClick={handleNext}
              className="hover:text-foreground transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Banner */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-3 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              <h3 className="text-xs font-bold text-foreground">Premium Domains</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                ←
              </button>
              <span className="text-xs text-muted-foreground">
                {currentGroup + 1}/{totalGroups}
              </span>
              <button
                onClick={handleNext}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                →
              </button>
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {currentDomains.map((domain) => (
              <button
                key={domain.name}
                onClick={() => handleInquire(domain.name)}
                className="flex-shrink-0 px-3 py-1.5 rounded-md bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <div className="text-xs font-semibold text-foreground whitespace-nowrap">
                  {domain.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Inquire About {selectedDomain}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Domain</label>
              <Input
                value={formData.domain}
                readOnly
                className="bg-muted"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Your Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Message (Optional)</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="I'm interested in purchasing this domain..."
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Send Inquiry
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
