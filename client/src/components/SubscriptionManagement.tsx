import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CheckCircle, Clock, Pause } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function SubscriptionManagement() {
  const { data: subscriptions, isLoading, refetch } = trpc.subscriptions.getUserSubscriptions.useQuery();
  const cancelSubscription = trpc.subscriptions.cancelSubscription.useMutation({
    onSuccess: () => refetch(),
  });

  if (isLoading) {
    return <div className="h-64 bg-card rounded-lg animate-pulse" />;
  }

  if (!subscriptions || subscriptions.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No active subscriptions</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {subscriptions.map((sub) => (
        <Card key={sub.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {sub.status === "active" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-amber-500" />
                  )}
                  Subscription #{sub.id}
                </CardTitle>
                <CardDescription>
                  Status: <span className="capitalize font-semibold">{sub.status}</span>
                </CardDescription>
              </div>
              <span className="text-2xl font-bold text-accent">Plan {sub.planId}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Started</p>
                <p className="font-semibold">
                  {new Date(sub.startDate).toLocaleDateString()}
                </p>
              </div>
              {sub.renewalDate && (
                <div>
                  <p className="text-sm text-muted-foreground">Renews</p>
                  <p className="font-semibold">
                    {formatDistanceToNow(new Date(sub.renewalDate), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground">Signals Used</p>
                <p className="font-semibold">{sub.signalsUsedThisMonth}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Exports Used</p>
                <p className="font-semibold">{sub.exportsUsedThisMonth}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() =>
                  cancelSubscription.mutate({ subscriptionId: sub.id })
                }
                disabled={cancelSubscription.isPending}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
