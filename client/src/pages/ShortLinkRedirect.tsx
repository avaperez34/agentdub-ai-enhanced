import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

/**
 * ShortLinkRedirect component handles /s/[slug] routes
 * Fetches the target URL and redirects the user
 */
export default function ShortLinkRedirect() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const slug = params.slug || "";

  const { data: link, isLoading, error } = trpc.shortLinks.getBySlug.useQuery(
    { slug },
    { enabled: !!slug, retry: false }
  );

  const incrementClicks = trpc.shortLinks.incrementClicks.useMutation();

  useEffect(() => {
    if (link) {
      // Increment click counter
      incrementClicks.mutate({ slug });

      // Redirect to target URL
      window.location.href = link.targetUrl;
    }
  }, [link, slug]);

  useEffect(() => {
    if (error) {
      // Redirect to 404 page if link not found
      setLocation("/404");
    }
  }, [error, setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-accent" />
        <p className="text-lg text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}
