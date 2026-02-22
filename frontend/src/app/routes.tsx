import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Dashboard } from "./components/pages/Dashboard";
import { BRDEditor } from "./components/pages/BRDEditor";
import { Projects } from "./components/pages/Projects";
import { TraceabilityMatrix } from "./components/pages/TraceabilityMatrix";
import { Integrations } from "./components/pages/Integrations";
import { Settings } from "./components/pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "brd-editor", Component: BRDEditor },
      { path: "projects", Component: Projects },
      { path: "traceability", Component: TraceabilityMatrix },
      { path: "integrations", Component: Integrations },
      { path: "settings", Component: Settings },
    ],
  },
]);