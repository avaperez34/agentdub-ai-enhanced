import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Check } from "lucide-react";

export function SubscriptionPlans() {
  const { data: plans, isLoading } = trpc.subscriptions.listPlans.useQuery();
  const createSubscription = trpc.subscriptions.createSubscription.useMutation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-96 bg-card rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans?.map((plan) => (
        <Card
          key={plan.id}
          className={`flex flex-col ${
            plan.priority === 1
              ? "border-accent ring-2 ring-accent/50 md:scale-105"
              : ""
          }`}
        >
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${plan.price}
              </span>
              <span className="text-muted-foreground ml-2">
                /{plan.billingCycle}
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-3 mb-6 flex-1">
              {plan.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm text-muted-foreground">
              {plan.maxSignals && (
                <p>📊 Up to {plan.maxSignals} signals/month</p>
              )}
              {plan.maxExports && (
                <p>📥 Up to {plan.maxExports} exports/month</p>
              )}
            </div>

            <Button
              disabled
              className="w-full mt-6"
              variant="outline"
            >
              Coming Soon
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Join our waitlist to be notified when subscriptions launch
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
