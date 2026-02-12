import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { Loader2, CheckCircle } from "lucide-react";

interface AgentWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentWaitlistModal({ isOpen, onClose }: AgentWaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const signupMutation = trpc.agentWaitlist.signup.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setEmail("");
      setName("");
      setCompany("");
      setInterest("general");
      setError("");
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 3000);
    },
    onError: (error: any) => {
      setError(error?.message || "Failed to join waitlist. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email is required");
      return;
    }
    
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    signupMutation.mutate({
      email,
      name: name || undefined,
      company: company || undefined,
      interest,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Sovereign AI Agent Waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to access our autonomous intelligence system powered by sovereign data architecture.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1">Welcome to the Waitlist!</h3>
              <p className="text-sm text-muted-foreground">
                We'll notify you as soon as the Sovereign AI Agent becomes available.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                disabled={signupMutation.isPending}
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={signupMutation.isPending}
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={signupMutation.isPending}
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest">Area of Interest</Label>
              <Select value={interest} onValueChange={setInterest} disabled={signupMutation.isPending}>
                <SelectTrigger id="interest" className="border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Interest</SelectItem>
                  <SelectItem value="predictive-analytics">Predictive Analytics</SelectItem>
                  <SelectItem value="fraud-detection">Fraud Detection</SelectItem>
                  <SelectItem value="investment-optimization">Investment Optimization</SelectItem>
                  <SelectItem value="compliance">Compliance & Risk</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {error && <div className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</div>}

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              We'll never share your email. You can unsubscribe at any time.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
