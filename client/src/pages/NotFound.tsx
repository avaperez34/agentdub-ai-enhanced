import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";

export default function NotFound() {
  const [location, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  // Detect malformed URLs and suggest corrections
  const getSuggestedUrl = () => {
    // Handle duplicated path segments like /signals/009/signals/009
    const duplicatePattern = /^(\/[^\/]+\/\d+)\1$/;
    const match = location.match(duplicatePattern);
    if (match) {
      return match[1]; // Return the first occurrence
    }

    // Handle /signals/signals/009 pattern
    const signalDuplicatePattern = /^\/signals\/signals\/(\d+)$/;
    const signalMatch = location.match(signalDuplicatePattern);
    if (signalMatch) {
      return `/signals/${signalMatch[1]}`;
    }

    return null;
  };

  const suggestedUrl = getSuggestedUrl();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          {suggestedUrl && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-slate-700 mb-3">
                <strong>Did you mean:</strong>
              </p>
              <Link href={suggestedUrl}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  {suggestedUrl}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}

          <div
            id="not-found-button-group"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
