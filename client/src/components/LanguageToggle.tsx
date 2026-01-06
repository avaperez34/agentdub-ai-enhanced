import { Languages } from "lucide-react";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,en',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    setIsArabic(!isArabic);
    
    // Trigger Google Translate
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom toggle button */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        aria-label="Toggle language"
      >
        <Languages size={18} />
        <span className="hidden sm:inline">{isArabic ? 'English' : 'العربية'}</span>
      </button>
    </>
  );
}
