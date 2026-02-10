import { useAuth } from "@/_core/hooks/useAuth";
import { SubscriptionManagement } from "@/components/SubscriptionManagement";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { CreditCard, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: activeSubscription } = trpc.subscriptions.getActiveSubscription.useQuery();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name || "Client"}</h1>
        <p className="text-muted-foreground mt-2">
          Manage your agentdub.ai subscription and access premium intelligence signals
        </p>
      </div>

      {/* Active Subscription Status */}
      {activeSubscription && (
        <Card className="border-accent/50 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-accent" />
              Active Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Plan</p>
                <p className="text-2xl font-bold text-accent">Plan #{activeSubscription.planId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-lg font-semibold capitalize text-green-500">
                  {activeSubscription.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Renewal</p>
                <p className="text-lg font-semibold">
                  {activeSubscription.renewalDate
                    ? new Date(activeSubscription.renewalDate).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Signals Accessed</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-accent">
              {activeSubscription?.signalsUsedThisMonth || 0}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Exports Used</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-accent">
              {activeSubscription?.exportsUsedThisMonth || 0}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Subscriptions and Plans */}
      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="subscriptions">My Subscriptions</TabsTrigger>
          <TabsTrigger value="plans">View Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="subscriptions" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscription Management</h2>
            <SubscriptionManagement />
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
            <p className="text-muted-foreground mb-6">
              Choose the plan that best fits your intelligence needs
            </p>
            <SubscriptionPlans />
          </div>
        </TabsContent>
      </Tabs>

      {/* Features Coming Soon */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Coming Soon
          </CardTitle>
          <CardDescription>
            Additional features being developed for your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full" />
              Signal recommendations based on your interests
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full" />
              Advanced analytics and insights dashboard
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full" />
              File export and report generation
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full" />
              Team collaboration features
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
