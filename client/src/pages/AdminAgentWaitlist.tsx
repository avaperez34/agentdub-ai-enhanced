import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Download, Mail } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminAgentWaitlist() {
  const { user, loading } = useAuth({ redirectOnUnauthenticated: false });
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  
  // Fetch agent waitlist entries from database
  const { data: agentWaitlistEntries, isLoading } = trpc.agentWaitlist.getAll.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-8">You don't have permission to view this page.</p>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDownloadCSV = () => {
    if (!agentWaitlistEntries || agentWaitlistEntries.length === 0) {
      toast.error("No agent waitlist entries to download");
      return;
    }

    const headers = ["Email", "Name", "Company", "Interest", "Joined Date"];
    const rows = agentWaitlistEntries.map((entry: any) => [
      entry.email,
      entry.name || "N/A",
      entry.company || "N/A",
      entry.interest || "general",
      new Date(entry.createdAt).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `agentdub-agent-waitlist-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Agent waitlist downloaded as CSV");
  };

  const handleSelectAll = () => {
    if (!agentWaitlistEntries) return;
    if (selectedEmails.length === agentWaitlistEntries.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(agentWaitlistEntries.map((e: any) => e.email));
    }
  };

  const handleToggleEmail = (email: string) => {
    setSelectedEmails((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const interestColors: Record<string, string> = {
    "general": "bg-gray-500/20 text-gray-400",
    "predictive-analytics": "bg-blue-500/20 text-blue-400",
    "fraud-detection": "bg-red-500/20 text-red-400",
    "investment-optimization": "bg-emerald-500/20 text-emerald-400",
    "compliance": "bg-purple-500/20 text-purple-400",
    "other": "bg-orange-500/20 text-orange-400",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sovereign AI Agent Waitlist</h1>
          <p className="text-muted-foreground">
            {agentWaitlistEntries?.length || 0} signups for the Sovereign AI Agent launch
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button onClick={handleDownloadCSV} variant="outline">
            <Download className="mr-2" size={18} />
            Download CSV
          </Button>
          <Button
            onClick={handleSelectAll}
            variant="outline"
            disabled={!agentWaitlistEntries || agentWaitlistEntries.length === 0}
          >
            {selectedEmails.length === agentWaitlistEntries?.length
              ? "Deselect All"
              : "Select All"}
          </Button>
          {selectedEmails.length > 0 && (
            <Button variant="outline" disabled>
              <Mail className="mr-2" size={18} />
              Send Email to {selectedEmails.length}
            </Button>
          )}
        </div>

        {/* Agent Waitlist Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">Loading agent waitlist...</div>
          ) : !agentWaitlistEntries || agentWaitlistEntries.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No agent waitlist entries yet. Share the Sovereign AI Agent feature to start collecting signups!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={
                          selectedEmails.length === agentWaitlistEntries.length &&
                          agentWaitlistEntries.length > 0
                        }
                        onChange={handleSelectAll}
                        className="rounded"
                      />
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Company</th>
                    <th className="px-6 py-4 text-left font-semibold">Interest</th>
                    <th className="px-6 py-4 text-left font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {agentWaitlistEntries.map((entry: any) => (
                    <tr
                      key={entry.email}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedEmails.includes(entry.email)}
                          onChange={() => handleToggleEmail(entry.email)}
                          className="rounded"
                        />
                      </td>
                      <td className="px-6 py-4 font-mono text-sm">{entry.email}</td>
                      <td className="px-6 py-4 text-sm">{entry.name || "-"}</td>
                      <td className="px-6 py-4 text-sm">{entry.company || "-"}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            interestColors[entry.interest || "general"] || "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {entry.interest || "general"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(entry.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            {
              label: "Total Signups",
              value: agentWaitlistEntries?.length || 0,
              color: "text-emerald-400",
            },
            {
              label: "With Company Info",
              value: agentWaitlistEntries?.filter((e: any) => e.company).length || 0,
              color: "text-blue-400",
            },
            {
              label: "With Full Name",
              value: agentWaitlistEntries?.filter((e: any) => e.name).length || 0,
              color: "text-purple-400",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Interest Distribution */}
        {agentWaitlistEntries && agentWaitlistEntries.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Interest Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { interest: "predictive-analytics", label: "Predictive Analytics" },
                { interest: "fraud-detection", label: "Fraud Detection" },
                { interest: "investment-optimization", label: "Investment Optimization" },
                { interest: "compliance", label: "Compliance & Risk" },
                { interest: "general", label: "General Interest" },
                { interest: "other", label: "Other" },
              ].map((item) => {
                const count = agentWaitlistEntries.filter((e: any) => (e.interest || "general") === item.interest).length;
                return count > 0 ? (
                  <div key={item.interest} className="bg-card border border-border rounded-lg p-4">
                    <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-accent">{count}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
