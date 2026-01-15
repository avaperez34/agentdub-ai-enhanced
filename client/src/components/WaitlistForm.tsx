import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface WaitlistFormProps {
  source: "directory" | "premium";
}

export function WaitlistForm({ source }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const addToWaitlist = trpc.waitlist.add.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll notify you when we launch.");
      localStorage.setItem(`waitlist_${source}`, "true");
      setHasSubmitted(true);
      setEmail("");
    },
    onError: (error) => {
      if (error.message.includes("already")) {
        toast.info("You're already on the waitlist!");
        localStorage.setItem(`waitlist_${source}`, "true");
        setHasSubmitted(true);
      } else {
        toast.error("Failed to join waitlist. Please try again.");
      }
    },
  });

  useEffect(() => {
    const submitted = localStorage.getItem(`waitlist_${source}`);
    if (submitted === "true") {
      setHasSubmitted(true);
    }
  }, [source]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    addToWaitlist.mutate({ email, source });
  };

  if (hasSubmitted) {
    return (
      <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
        ✓ You're on the waitlist! We'll notify you at launch.
      </div>
    );
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={addToWaitlist.isPending}
        className="flex-1 px-4 py-2 rounded-lg border border-emerald-500/30 bg-background/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={addToWaitlist.isPending}
        className="px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors whitespace-nowrap disabled:opacity-50"
      >
        {addToWaitlist.isPending ? "..." : "Notify Me"}
      </button>
    </form>
  );
}
