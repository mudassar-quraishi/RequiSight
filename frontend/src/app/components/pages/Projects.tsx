import { FolderKanban, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

const projects = [
  {
    name: "Enterprise Portal Redesign",
    requirements: 45,
    progress: 75,
    status: "Draft",
  },
  {
    name: "Mobile App v2.0",
    requirements: 32,
    progress: 100,
    status: "Final",
  },
  {
    name: "Payment Gateway Integration",
    requirements: 28,
    progress: 60,
    status: "Draft",
  },
  {
    name: "Customer Analytics Dashboard",
    requirements: 51,
    progress: 40,
    status: "Draft",
  },
  {
    name: "User Authentication System",
    requirements: 22,
    progress: 100,
    status: "Final",
  },
  {
    name: "Inventory Management Module",
    requirements: 38,
    progress: 85,
    status: "Draft",
  },
];

const statusColors: Record<string, string> = {
  Draft: "bg-[#F59E0B] text-white",
  Final: "bg-[#10B981] text-white",
};

export function Projects() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Projects</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage and track all your BRD projects
          </p>
        </div>
        <Button className="gap-2 bg-[#4F46E5] hover:bg-[#4338CA] w-full sm:w-auto">
          <FolderKanban className="w-4 h-4" />
          New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {project.name}
                  </h3>
                  <Badge className={statusColors[project.status]}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600">
                    {project.requirements} Requirements
                  </span>
                  <Button size="sm" className="gap-2 bg-[#4F46E5] hover:bg-[#4338CA]">
                    <ExternalLink className="w-4 h-4" />
                    Open BRD
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
