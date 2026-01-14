/**
 * NewsletterPopup - Email capture popup for newsletter signups
 */

import { useState, useEffect } from "react";
import { X, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("newsletter_popup_seen");
    
    if (!hasSeenPopup) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // In production, this would send to your email service (ConvertKit, Substack, etc.)
    toast.success("Thanks for subscribing! Check your inbox for confirmation.");
    
    // Mark popup as seen
    localStorage.setItem("newsletter_popup_seen", "true");
    setIsOpen(false);
    setEmail("");
  };

  const handleClose = () => {
    localStorage.setItem("newsletter_popup_seen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-card border border-border rounded-lg shadow-2xl p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-accent/10 rounded-full">
            <Sparkles className="text-accent" size={32} />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Get Daily GCC AI Insights
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Join 2,400+ investors, executives, and AI leaders getting the top 5 GCC AI stories every morning at 8 AM GST.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Subscribe Free
          </Button>
        </form>

        {/* Benefits */}
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent">✓</span>
            <span>Daily brief delivered at 8 AM GST</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">✓</span>
            <span>Exclusive insights not on the website</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent">✓</span>
            <span>Unsubscribe anytime, no spam</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
