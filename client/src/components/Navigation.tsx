import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "./LanguageToggle";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Directory", href: "/directory" },
    { label: "Sentinel", href: "/sentinel" },
    { label: "Intelligence", href: "/intelligence" },
    { label: "News", href: "/news" },
    { label: "Investors", href: "/investors" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img 
              src="/logo-green.png" 
              alt="AgentDubai Logo" 
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline">AgentDubai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
