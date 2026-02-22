import { 
  Slack, 
  Mail, 
  MessageSquare,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const integrations = [
  {
    name: "Slack",
    description: "Extract requirements from team conversations and channel discussions.",
    icon: Slack,
    color: "text-[#4A154B]",
    bgColor: "bg-[#4A154B]/10",
    lastSync: "2 hours ago",
  },
  {
    name: "Gmail",
    description: "Parse requirements from email threads and stakeholder communications.",
    icon: Mail,
    color: "text-[#EA4335]",
    bgColor: "bg-[#EA4335]/10",
    lastSync: "5 hours ago",
  },
  {
    name: "Jira",
    description: "Sync user stories, epics, and requirements from Jira projects.",
    icon: MessageSquare,
    color: "text-[#0052CC]",
    bgColor: "bg-[#0052CC]/10",
    lastSync: "1 day ago",
  },
  {
    name: "Confluence",
    description: "Import requirements from documentation and specification pages.",
    icon: MessageSquare,
    color: "text-[#172B4D]",
    bgColor: "bg-[#172B4D]/10",
    lastSync: "3 days ago",
  },
  {
    name: "Microsoft Teams",
    description: "Extract insights from team meetings and chat conversations.",
    icon: MessageSquare,
    color: "text-[#5558AF]",
    bgColor: "bg-[#5558AF]/10",
    lastSync: "12 hours ago",
  },
  {
    name: "Linear",
    description: "Sync issues, requirements, and project specifications from Linear.",
    icon: MessageSquare,
    color: "text-[#5E6AD2]",
    bgColor: "bg-[#5E6AD2]/10",
    lastSync: "6 hours ago",
  },
];

export function Integrations() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Integrations</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Connect your tools to automatically extract requirements and insights
        </p>
      </div>

      {/* Demo Mode Notice */}
      <Card className="border-[#4F46E5] bg-[#4F46E5]/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-[#4F46E5] mt-2"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Demo Mode – Simulated Integration
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Real API integrations planned in production version. Currently showing simulated data for demonstration purposes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connected Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <Card key={integration.name} className="border-gray-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`${integration.bgColor} ${integration.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge className="bg-[#10B981] text-white hover:bg-[#10B981]">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Demo Active
                  </Badge>
                </div>
                <CardTitle className="mt-4">{integration.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {integration.description}
                </p>
                <div className="text-xs text-gray-500 mb-4">
                  Last synced: {integration.lastSync}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                    <Settings className="w-4 h-4" />
                    Configure
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                    disabled
                  >
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
