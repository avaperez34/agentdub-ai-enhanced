import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { WaitlistModal } from "./WaitlistModal";

interface PremiumLockProps {
  title?: string;
  description?: string;
}

export function PremiumLock({ 
  title = "Premium Content",
  description = "Unlock the full Intelligence database to access all signals and market insights"
}: PremiumLockProps) {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 rounded-lg z-10 flex items-center justify-center">
          <div className="text-center">
            <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              {description}
            </p>
            <Button 
              onClick={() => setShowWaitlist(true)}
              className="bg-accent hover:bg-accent/90"
            >
              Unlock Premium Access
            </Button>
          </div>
        </div>
      </div>

      <WaitlistModal 
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
