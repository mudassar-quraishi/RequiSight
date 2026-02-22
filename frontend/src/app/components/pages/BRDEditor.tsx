import { useState } from "react";
import { 
  Save, 
  FileDown, 
  Download,
  Bold,
  Italic,
  List,
  ListOrdered,
  Table as TableIcon,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Circle,
  PanelRightOpen
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Sheet, SheetContent } from "../ui/sheet";

const sections = [
  "Executive Summary",
  "Functional Requirements",
  "Non-Functional Requirements",
  "Business Context",
  "Stakeholders",
  "Success Criteria",
];

const aiInsights = [
  { text: "Dark mode feature requested in 12 conversations", type: "feature", confidence: 94 },
  { text: "Performance requirements need clarification", type: "risk", confidence: 87 },
  { text: "Timeline constraint: Q2 2026 delivery", type: "timeline", confidence: 92 },
];

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
    status: "pending",
  },
];

export function BRDEditor() {
  const [activeSection, setActiveSection] = useState("Executive Summary");
  const [aiMessage, setAiMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{role: string, message: string}>>([]);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const handleAiSubmit = () => {
    if (!aiMessage.trim()) return;
    
    setChatHistory([
      ...chatHistory, 
      { role: "user", message: aiMessage },
      { role: "ai", message: "I've added that requirement to the Non-Functional Requirements section." }
    ]);
    setAiMessage("");
  };

  const RightPanelContent = () => (
    <>
      {/* AI Chat Panel */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#4F46E5]" />
          <h3 className="font-semibold text-gray-900">AI Assistant</h3>
        </div>
        
        {/* Chat History */}
        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
          {chatHistory.length === 0 && (
            <p className="text-sm text-gray-500 italic">
              Ask the AI to help modify your document...
            </p>
          )}
          {chatHistory.map((msg, index) => (
            <div key={index} className={`${msg.role === "user" ? "text-right" : "text-left"}`}>
              <div className={`inline-block p-3 rounded-lg text-sm ${
                msg.role === "user" 
                  ? "bg-[#4F46E5] text-white" 
                  : "bg-gray-100 text-gray-900"
              }`}>
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="space-y-2">
          <Textarea
            placeholder="Ask AI to modify the document..."
            value={aiMessage}
            onChange={(e) => setAiMessage(e.target.value)}
            className="min-h-[80px] text-sm resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAiSubmit();
              }
            }}
          />
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA]"
              onClick={handleAiSubmit}
            >
              Send
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => setAiMessage("")}
            >
              Clear
            </Button>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Example: "Add scalability requirement for 10,000 users"
        </p>
      </div>

      {/* Traceability Matrix Mini View */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Traceability</h3>
        
        <div className="space-y-2">
          {traceabilityData.map((item) => (
            <button
              key={item.id}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#4F46E5] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-medium text-gray-600">
                  {item.id}
                </span>
                <div className="flex items-center gap-1">
                  {item.status === "traced" && (
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  )}
                  {item.status === "conflict" && (
                    <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                  )}
                  {item.status === "pending" && (
                    <Circle className="w-4 h-4 text-[#F59E0B]" />
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-900 mb-2">{item.requirement}</p>
              <p className="text-xs text-gray-500">{item.source}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-4 sm:p-6 space-y-6">
        {/* AI Insights Card */}
        <Card className="border-gray-200 bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4F46E5]" />
                <CardTitle className="text-base sm:text-lg">AI Insights Summary</CardTitle>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="lg:hidden gap-2"
                onClick={() => setRightPanelOpen(true)}
              >
                <PanelRightOpen className="w-4 h-4" />
                AI Panel
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {aiInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <div className={`w-2 h-2 rounded-full ${
                      insight.type === "feature" ? "bg-[#10B981]" :
                      insight.type === "timeline" ? "bg-[#4F46E5]" :
                      "bg-[#F59E0B]"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{insight.text}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* BRD Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Section Navigator */}
          <div className="lg:col-span-1">
            <Card className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm sm:text-base">Document Sections</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`
                        w-full text-left px-3 py-2 rounded-md text-xs sm:text-sm transition-colors
                        ${activeSection === section 
                          ? "bg-[#4F46E5] text-white" 
                          : "text-gray-700 hover:bg-gray-100"
                        }
                      `}
                    >
                      {section}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Toolbar */}
            <Card className="border-gray-200">
              <CardContent className="p-3">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <Button variant="ghost" size="sm" className="gap-1.5 flex-shrink-0">
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5 flex-shrink-0">
                    <Italic className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-200 flex-shrink-0" />
                  <Button variant="ghost" size="sm" className="gap-1.5 flex-shrink-0">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5 flex-shrink-0">
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-200 flex-shrink-0" />
                  <Button variant="ghost" size="sm" className="gap-1.5 flex-shrink-0">
                    <TableIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Editor Content */}
            <Card className="border-gray-200">
              <CardContent className="p-6 min-h-[400px]">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {activeSection}
                </h2>
                
                {activeSection === "Executive Summary" && (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      The Enterprise Portal Redesign project aims to modernize our customer-facing portal 
                      to improve user experience, increase engagement, and support future business growth.
                    </p>
                    <p>
                      This initiative will deliver a responsive, accessible, and performant web application 
                      that serves over 50,000 active users across multiple regions.
                    </p>
                  </div>
                )}

                {activeSection === "Functional Requirements" && (
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      The following functional requirements have been identified and prioritized:
                    </p>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-24">ID</TableHead>
                            <TableHead>Requirement</TableHead>
                            <TableHead className="w-24">Priority</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-sm">FR-001</TableCell>
                            <TableCell className="text-sm">User authentication via OAuth 2.0</TableCell>
                            <TableCell>
                              <Badge className="bg-[#EF4444]">High</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-sm">FR-002</TableCell>
                            <TableCell className="text-sm">Dashboard with customizable widgets</TableCell>
                            <TableCell>
                              <Badge className="bg-[#4F46E5]">Medium</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-sm">FR-003</TableCell>
                            <TableCell className="text-sm">Export data to CSV and Excel formats</TableCell>
                            <TableCell>
                              <Badge className="bg-[#4F46E5]">Medium</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-sm">FR-004</TableCell>
                            <TableCell className="text-sm">Multi-language support (5 languages)</TableCell>
                            <TableCell>
                              <Badge className="bg-[#10B981]">Low</Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                {!["Executive Summary", "Functional Requirements"].includes(activeSection) && (
                  <div className="text-gray-500 italic">
                    Content for {activeSection} will be displayed here. Click on different sections 
                    to navigate through the document.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="gap-2 bg-[#4F46E5] hover:bg-[#4338CA] w-full sm:w-auto">
                <Save className="w-4 h-4" />
                Save Draft
              </Button>
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <FileDown className="w-4 h-4" />
                Export as PDF
              </Button>
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download Traceability CSV
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Desktop */}
      <div className="hidden lg:block w-96 border-l border-gray-200 bg-white overflow-auto">
        <RightPanelContent />
      </div>

      {/* Right Panel - Mobile Sheet */}
      <Sheet open={rightPanelOpen} onOpenChange={setRightPanelOpen}>
        <SheetContent side="right" className="w-full sm:w-96 p-0 overflow-auto">
          <RightPanelContent />
        </SheetContent>
      </Sheet>
    </div>
  );
}
