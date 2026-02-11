import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Download, Trash2, Mail } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminWaitlist() {
  const { user, loading } = useAuth({ redirectOnUnauthenticated: false });
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  
  const { data: waitlistEntries, isLoading } = trpc.waitlist.getAll.useQuery(undefined, {
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
    if (!waitlistEntries || waitlistEntries.length === 0) {
      toast.error("No waitlist entries to download");
      return;
    }

    const headers = ["Email", "Source", "Joined Date"];
    const rows = waitlistEntries.map((entry) => [
      entry.email,
      entry.source,
      new Date(entry.createdAt).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `agentdub-waitlist-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("Waitlist downloaded as CSV");
  };

  const handleSelectAll = () => {
    if (!waitlistEntries) return;
    if (selectedEmails.length === waitlistEntries.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(waitlistEntries.map((e) => e.email));
    }
  };

  const handleToggleEmail = (email: string) => {
    setSelectedEmails((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const sourceColors: Record<string, string> = {
    directory: "bg-blue-500/20 text-blue-400",
    premium: "bg-emerald-500/20 text-emerald-400",
    news: "bg-purple-500/20 text-purple-400",
    dashboard: "bg-orange-500/20 text-orange-400",
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
          <h1 className="text-4xl font-bold mb-2">Waitlist Management</h1>
          <p className="text-muted-foreground">
            {waitlistEntries?.length || 0} subscribers on the agentdub.ai waitlist
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
            disabled={!waitlistEntries || waitlistEntries.length === 0}
          >
            {selectedEmails.length === waitlistEntries?.length
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

        {/* Waitlist Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">Loading waitlist...</div>
          ) : !waitlistEntries || waitlistEntries.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No waitlist entries yet. Share the platform to start collecting signups!
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
                          selectedEmails.length === waitlistEntries.length &&
                          waitlistEntries.length > 0
                        }
                        onChange={handleSelectAll}
                        className="rounded"
                      />
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-semibold">Source</th>
                    <th className="px-6 py-4 text-left font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {waitlistEntries.map((entry) => (
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
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            sourceColors[entry.source] || "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {entry.source}
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              label: "Total Subscribers",
              value: waitlistEntries?.length || 0,
              color: "text-emerald-400",
            },
            {
              label: "From Directory",
              value: waitlistEntries?.filter((e) => e.source === "directory").length || 0,
              color: "text-blue-400",
            },
            {
              label: "From Premium",
              value: waitlistEntries?.filter((e) => e.source === "premium").length || 0,
              color: "text-emerald-400",
            },
            {
              label: "From News",
              value: waitlistEntries?.filter((e) => e.source === "news").length || 0,
              color: "text-purple-400",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
