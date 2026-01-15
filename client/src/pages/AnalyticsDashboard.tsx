import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Link as LinkIcon, BarChart3 } from "lucide-react";
import { getLoginUrl } from "@/const";

/**
 * AnalyticsDashboard - Admin dashboard for 404 errors and short link analytics
 * Accessible at /admin/analytics
 */
export default function AnalyticsDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const { data: stats, isLoading: statsLoading } = trpc.analytics404.getStats.useQuery();
  const { data: links } = trpc.shortLinks.list.useQuery();

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

  const totalClicks = links?.reduce((sum, link) => sum + link.clicks, 0) || 0;
  const avgClicksPerLink = links && links.length > 0 ? (totalClicks / links.length).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor 404 errors and short link performance
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total 404 Errors</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : stats?.total || 0}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                All time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Redirect Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsLoading ? "..." : `${stats?.redirectRate || 0}%`}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Users who clicked suggestions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Short Links</CardTitle>
              <LinkIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {links?.length || 0}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Active short links
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalClicks}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Avg {avgClicksPerLink} per link
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top 404 URLs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top 404 URLs</CardTitle>
            <CardDescription>
              Most frequently accessed broken links
            </CardDescription>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading...</p>
            ) : stats && stats.topUrls && (stats.topUrls as any[]).length > 0 ? (
              <div className="space-y-4">
                {(stats.topUrls as any[]).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <code className="text-sm font-mono text-foreground block truncate">
                        {item.requested_url}
                      </code>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last seen: {new Date(item.last_seen).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 ml-4">
                      <div className="text-right">
                        <div className="text-lg font-semibold">{item.count}</div>
                        <div className="text-xs text-muted-foreground">errors</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">
                          {item.redirected_count}
                        </div>
                        <div className="text-xs text-muted-foreground">redirected</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No 404 errors recorded yet
              </p>
            )}
          </CardContent>
        </Card>

        {/* Top Performing Short Links */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Short Links</CardTitle>
            <CardDescription>
              Most clicked short URLs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {links && links.length > 0 ? (
              <div className="space-y-4">
                {links
                  .sort((a, b) => b.clicks - a.clicks)
                  .slice(0, 10)
                  .map((link) => (
                    <div
                      key={link.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            /s/{link.slug}
                          </code>
                        </div>
                        {link.title && (
                          <p className="text-sm font-medium mb-1">{link.title}</p>
                        )}
                        <p className="text-xs text-muted-foreground truncate">
                          → {link.targetUrl}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-accent">{link.clicks}</div>
                        <div className="text-xs text-muted-foreground">clicks</div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No short links created yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
