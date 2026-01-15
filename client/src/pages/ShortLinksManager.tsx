import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link as LinkIcon, Trash2, Copy, ExternalLink } from "lucide-react";
import { getLoginUrl } from "@/const";

/**
 * ShortLinksManager - Admin interface for creating and managing short links
 * Accessible at /admin/short-links
 */
export default function ShortLinksManager() {
  const { user, isAuthenticated, loading } = useAuth();
  const [slug, setSlug] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const utils = trpc.useUtils();
  const { data: links, isLoading: linksLoading } = trpc.shortLinks.list.useQuery();

  const createMutation = trpc.shortLinks.create.useMutation({
    onSuccess: () => {
      toast.success("Short link created successfully!");
      setSlug("");
      setTargetUrl("");
      setTitle("");
      setDescription("");
      utils.shortLinks.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteMutation = trpc.shortLinks.delete.useMutation({
    onSuccess: () => {
      toast.success("Short link deleted");
      utils.shortLinks.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug || !targetUrl) {
      toast.error("Slug and target URL are required");
      return;
    }

    createMutation.mutate({ slug, targetUrl, title, description });
  };

  const copyShortUrl = (slug: string) => {
    const shortUrl = `${window.location.origin}/s/${slug}`;
    navigator.clipboard.writeText(shortUrl);
    toast.success("Short URL copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = getLoginUrl();
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Short Links Manager</h1>
          <p className="text-muted-foreground">
            Create and manage custom short URLs for AgentDubai
          </p>
        </div>

        {/* Create New Short Link Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5" />
              Create New Short Link
            </CardTitle>
            <CardDescription>
              Generate a short URL like agentdub.ai/s/your-slug
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                    placeholder="gcc-ai-report"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Only lowercase letters, numbers, and hyphens
                  </p>
                </div>

                <div>
                  <Label htmlFor="targetUrl">Target URL *</Label>
                  <Input
                    id="targetUrl"
                    type="url"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    placeholder="https://agentdub.ai/signals/009"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="title">Title (optional)</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="GCC AI Compute Report"
                />
              </div>

              <div>
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short link for sharing GCC AI compute landscape report on social media"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={createMutation.isPending}
                className="w-full md:w-auto"
              >
                {createMutation.isPending ? "Creating..." : "Create Short Link"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Existing Short Links List */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Short Links</CardTitle>
            <CardDescription>
              {links?.length || 0} short links created
            </CardDescription>
          </CardHeader>
          <CardContent>
            {linksLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading links...</p>
            ) : links && links.length > 0 ? (
              <div className="space-y-4">
                {links.map((link) => (
                  <div
                    key={link.id}
                    className="border rounded-lg p-4 hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            /s/{link.slug}
                          </code>
                          <span className="text-sm text-muted-foreground">
                            {link.clicks} clicks
                          </span>
                        </div>

                        {link.title && (
                          <h3 className="font-semibold mb-1">{link.title}</h3>
                        )}

                        <p className="text-sm text-muted-foreground truncate mb-2">
                          → {link.targetUrl}
                        </p>

                        {link.description && (
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        )}

                        <p className="text-xs text-muted-foreground mt-2">
                          Created {new Date(link.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyShortUrl(link.slug)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.targetUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (confirm("Delete this short link?")) {
                              deleteMutation.mutate({ id: link.id });
                            }
                          }}
                          disabled={deleteMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No short links yet. Create your first one above!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
