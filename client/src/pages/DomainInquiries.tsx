import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mail, User, Calendar, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function DomainInquiries() {
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  
  const { data: inquiries, isLoading, refetch } = trpc.domainInquiries.list.useQuery({
    status: selectedStatus as any,
  });
  
  const { data: stats } = trpc.domainInquiries.getStats.useQuery();
  
  const updateStatus = trpc.domainInquiries.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status updated successfully");
      refetch();
    },
    onError: (error) => {
      toast.error(`Failed to update status: ${error.message}`);
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "contacted":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "negotiating":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "sold":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "declined":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Domain Inquiries</h1>
          <p className="text-muted-foreground">
            Manage premium domain purchase requests
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  New
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-500">{stats.new}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Contacted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">{stats.contacted}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Negotiating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-500">{stats.negotiating}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Sold
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">{stats.sold}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Declined
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">{stats.declined}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filter */}
        <div className="mb-6">
          <Select
            value={selectedStatus || "all"}
            onValueChange={(value) => setSelectedStatus(value === "all" ? undefined : value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Inquiries</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="negotiating">Negotiating</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="declined">Declined</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Inquiries List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin" size={32} />
          </div>
        ) : inquiries && inquiries.length > 0 ? (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">{inquiry.domain}</h3>
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User size={16} />
                          <span>{inquiry.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail size={16} />
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="hover:text-foreground transition-colors"
                          >
                            {inquiry.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>
                            {new Date(inquiry.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      {inquiry.message && (
                        <div className="flex gap-2 text-sm">
                          <MessageSquare size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{inquiry.message}</p>
                        </div>
                      )}
                    </div>

                    <div className="md:w-48">
                      <Select
                        value={inquiry.status}
                        onValueChange={(value) =>
                          updateStatus.mutate({
                            id: inquiry.id,
                            status: value as any,
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="negotiating">Negotiating</SelectItem>
                          <SelectItem value="sold">Sold</SelectItem>
                          <SelectItem value="declined">Declined</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              No inquiries found. When users submit domain purchase requests, they'll appear here.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
