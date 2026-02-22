import {
  FileText,
  AlertCircle,
  FolderKanban,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

export function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [extractionResult, setExtractionResult] = useState<any>(null);

  const handleExtract = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/extract", {
        method: "POST",
      });

      const data = await response.json();

      setExtractionResult(data.result || data);
    } catch (error) {
      console.error("Extraction failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalExtracted =
    extractionResult?.functional_requirements?.length || 0;

  const statsCards = [
    {
      title: "Total Requirements Extracted",
      value: totalExtracted.toString(),
      change: loading ? "Processing..." : "From latest extraction",
      icon: FileText,
      color: "text-[#4F46E5]",
      bgColor: "bg-[#4F46E5]/10",
    },
    {
      title: "Conflicts Detected",
      value: "0",
      change: "AI conflict detection coming soon",
      icon: AlertCircle,
      color: "text-[#EF4444]",
      bgColor: "bg-[#EF4444]/10",
    },
    {
      title: "Active Projects",
      value: "1",
      change: "Current demo project",
      icon: FolderKanban,
      color: "text-[#7C3AED]",
      bgColor: "bg-[#7C3AED]/10",
    },
    {
      title: "Sentiment Score",
      value: "N/A",
      change: "Sentiment analysis coming soon",
      icon: TrendingUp,
      color: "text-[#10B981]",
      bgColor: "bg-[#10B981]/10",
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Overview of your requirements and project analytics
          </p>
        </div>

        <button
          onClick={handleExtract}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? "Extracting..." : "Extract Requirements"}
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {stat.change}
                    </p>
                  </div>
                  <div
                    className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Extracted Requirements Display */}
      {extractionResult && (
        <Card className="border-gray-200">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Extracted Requirements
            </h2>

            {/* Functional */}
            <div>
              <h3 className="font-medium text-gray-800">
                Functional Requirements
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {extractionResult.functional_requirements?.map(
                  (item: string, i: number) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            {/* Non Functional */}
            <div>
              <h3 className="font-medium text-gray-800">
                Non-Functional Requirements
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {extractionResult.non_functional_requirements?.map(
                  (item: string, i: number) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            {/* Constraints */}
            <div>
              <h3 className="font-medium text-gray-800">Constraints</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {extractionResult.constraints?.map(
                  (item: string, i: number) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            {/* Target Users */}
            <div>
              <h3 className="font-medium text-gray-800">Target Users</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {extractionResult.target_users?.map(
                  (item: string, i: number) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      <Card className="border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  AI-powered requirement extraction enabled
                </p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}