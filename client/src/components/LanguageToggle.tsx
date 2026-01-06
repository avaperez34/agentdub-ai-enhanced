import { Languages } from "lucide-react";
import { useEffect } from "react";

export function LanguageToggle() {
  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      if (document.getElementById('google-translate-script')) return;
      
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    };

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,en',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        'google_translate_element'
      );
    };

    addScript();
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Languages size={18} className="text-foreground" />
      <div id="google_translate_element"></div>
    </div>
  );
}
