import { CheckCircle2, AlertCircle, Circle, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const traceabilityData = [
  {
    id: "REQ-001",
    requirement: "User authentication via OAuth 2.0",
    source: "Stakeholder Meeting #3",
    status: "traced",
  },
  {
    id: "REQ-002",
    requirement: "Dashboard must load within 2 seconds",
    source: "Performance Document",
    status: "traced",
  },
  {
    id: "REQ-003",
    requirement: "Support for dark mode interface",
    source: "Slack Conversation",
    status: "conflict",
  },
  {
    id: "REQ-004",
    requirement: "Export data to CSV and Excel formats",
    source: "Email from PM",
    status: "traced",
  },
  {
    id: "REQ-005",
    requirement: "Multi-language support (English, Spanish, French)",
    source: "Product Requirements Doc",
    status: "pending",
  },
  {
    id: "REQ-006",
    requirement: "Real-time collaboration features",
    source: "Jira Ticket #1234",
    status: "conflict",
  },
  {
    id: "REQ-007",
    requirement: "Mobile responsive design",
    source: "Design Specifications",
    status: "traced",
  },
  {
    id: "REQ-008",
    requirement: "GDPR compliance for user data",
    source: "Legal Team Email",
    status: "traced",
  },
  {
    id: "REQ-009",
    requirement: "Offline mode capability",
    source: "User Feedback",
    status: "pending",
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  traced: { 
    label: "Traced", 
    color: "bg-[#10B981] text-white hover:bg-[#10B981]",
    icon: CheckCircle2,
  },
  conflict: { 
    label: "Conflict", 
    color: "bg-[#EF4444] text-white hover:bg-[#EF4444]",
    icon: AlertCircle,
  },
  pending: { 
    label: "Pending", 
    color: "bg-[#F59E0B] text-white hover:bg-[#F59E0B]",
    icon: Circle,
  },
};

export function TraceabilityMatrix() {
  const tracedCount = traceabilityData.filter(item => item.status === "traced").length;
  const conflictCount = traceabilityData.filter(item => item.status === "conflict").length;
  const pendingCount = traceabilityData.filter(item => item.status === "pending").length;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Traceability Matrix</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track requirements from source to implementation
          </p>
        </div>
        <Button variant="outline" className="gap-2 w-full sm:w-auto">
          <Download className="w-4 h-4" />
          Download CSV
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Traced</p>
                <p className="text-3xl font-semibold text-[#10B981] mt-1">{tracedCount}</p>
              </div>
              <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conflicts</p>
                <p className="text-3xl font-semibold text-[#EF4444] mt-1">{conflictCount}</p>
              </div>
              <AlertCircle className="w-10 h-10 text-[#EF4444]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-3xl font-semibold text-[#F59E0B] mt-1">{pendingCount}</p>
              </div>
              <Circle className="w-10 h-10 text-[#F59E0B]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traceability Table */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>All Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-28">Req ID</TableHead>
                    <TableHead className="min-w-[300px]">Requirement</TableHead>
                    <TableHead className="min-w-[200px]">Source</TableHead>
                    <TableHead className="w-32">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {traceabilityData.map((item) => {
                    const StatusIcon = statusConfig[item.status].icon;
                    return (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-mono text-sm font-medium text-gray-900">
                          {item.id}
                        </TableCell>
                        <TableCell className="text-sm text-gray-900">
                          {item.requirement}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {item.source}
                        </TableCell>
                        <TableCell>
                          <Badge className={statusConfig[item.status].color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig[item.status].label}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
