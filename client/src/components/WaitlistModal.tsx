import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, AlertCircle } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addToWaitlist = trpc.waitlist.add.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll notify you when we launch.");
      setSubmitted(true);
      setEmail("");

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 3000);
    },
    onError: (error) => {
      if (error.message.includes("already")) {
        toast.info("You're already on the waitlist!");
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 2000);
      } else {
        toast.error("Failed to join waitlist. Please try again.");
      }
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToWaitlist.mutate({ email, source: "premium" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join AgentDubai Waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to access exclusive GCC AI intelligence signals and market insights
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <Check className="text-accent" size={24} />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Welcome to the Waitlist!</h3>
              <p className="text-sm text-muted-foreground">
                We'll notify you as soon as new intelligence signals are available.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={addToWaitlist.isPending}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                disabled={addToWaitlist.isPending}
                className="w-full bg-accent hover:bg-accent/90"
              >
                {addToWaitlist.isPending ? "Joining..." : "Join Waitlist"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={addToWaitlist.isPending}
                className="w-full"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
