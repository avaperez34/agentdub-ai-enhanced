import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Investors() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Investors</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Investor resources and partnership opportunities.
          </p>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground">Content coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
