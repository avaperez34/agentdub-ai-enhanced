/**
 * ShareButton - Reusable social sharing component with mobile Web Share API support
 */

import { useState } from "react";
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
}

export function ShareButton({ url, title, description }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check if Web Share API is available (native mobile sharing)
  const canUseWebShare = typeof navigator !== 'undefined' && !!navigator.share;

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
    setShowMenu(false);
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=600');
    setShowMenu(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: description || title,
        url: url,
      });
      setShowMenu(false);
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Failed to share:', err);
      }
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => {
          // On mobile with Web Share API, use native sharing directly
          if (canUseWebShare) {
            handleNativeShare();
          } else {
            setShowMenu(!showMenu);
          }
        }}
        className="flex items-center gap-1 hover:text-accent transition-colors"
      >
        <Share2 size={14} />
        Share
      </button>
      
      {showMenu && !canUseWebShare && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          {/* Mobile-optimized positioning: center on small screens, right-aligned on desktop */}
          <div className="fixed md:absolute bottom-0 left-0 right-0 md:right-0 md:top-8 z-50 bg-card border border-border rounded-t-lg md:rounded-lg shadow-lg p-2 min-w-[180px] md:min-w-[180px] max-w-full md:max-w-none">
            <button
              onClick={shareOnLinkedIn}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-left"
            >
              <Linkedin size={16} className="text-blue-500" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={shareOnTwitter}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-left"
            >
              <Twitter size={16} className="text-cyan-500" />
              <span>Twitter</span>
            </button>
            <button
              onClick={copyLink}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-accent/10 rounded transition-colors text-left"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <LinkIcon size={16} />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
