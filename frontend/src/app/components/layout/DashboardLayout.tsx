import { Outlet } from "react-router";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFAFA]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Sidebar */}
      <MobileSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}