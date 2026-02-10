import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "./LanguageToggle";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", accent: "emerald" },
    { label: "Directory", href: "/directory", accent: "teal" },
    { label: "Sentinel", href: "/sentinel", accent: "cyan" },
    { label: "Intelligence", href: "/intelligence", accent: "blue" },
    { label: "GCC Map", href: "/gcc-map", accent: "indigo" },
    { label: "Premium", href: "/premium", accent: "amber" },
    { label: "Dashboard", href: "/dashboard", accent: "purple" },
    { label: "About", href: "/about", accent: "slate" },
    { label: "Contact", href: "/contact", accent: "emerald" },
  ];

  const getAccentClass = (accent: string) => {
    const accentMap: Record<string, string> = {
      emerald: "hover:text-emerald-600 dark:hover:text-emerald-400",
      teal: "hover:text-teal-600 dark:hover:text-teal-400",
      cyan: "hover:text-cyan-600 dark:hover:text-cyan-400",
      blue: "hover:text-blue-600 dark:hover:text-blue-400",
      indigo: "hover:text-indigo-600 dark:hover:text-indigo-400",
      purple: "hover:text-purple-600 dark:hover:text-purple-400",
      amber: "hover:text-amber-600 dark:hover:text-amber-400",
      slate: "hover:text-slate-600 dark:hover:text-slate-400",
    };
    return accentMap[accent] || "";
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo-green.png" 
              alt="AgentDubai Logo" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline text-lg font-semibold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent tracking-wide">
              AgentDubai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary/50 transition-all ${getAccentClass(item.accent)}`}
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
                className={`block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary/50 transition-all ${getAccentClass(item.accent)}`}
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
