import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  FileText, 
  FolderKanban, 
  Plug, 
  GitBranch,
  Settings as SettingsIcon,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "BRD Editor", href: "/brd-editor", icon: FileText },
  { name: "Traceability", href: "/traceability", icon: GitBranch },
  { name: "Integrations", href: "/integrations", icon: Plug },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-[#F8F9FA] border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">RequiSight</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = 
              item.href === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(item.href);

            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? "bg-white text-[#4F46E5] shadow-sm border border-gray-200" 
                      : "text-gray-700 hover:bg-white hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#4F46E5]" : "text-gray-500"}`} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}