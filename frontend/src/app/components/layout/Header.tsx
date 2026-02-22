import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6">
      {/* Left Section - Mobile Menu + Project Dropdown */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Project Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-1 sm:gap-2 hover:bg-gray-50 px-2 sm:px-4"
            >
              <span className="text-xs sm:text-sm font-medium truncate max-w-[120px] sm:max-w-none">
                Enterprise Portal
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuItem>Enterprise Portal Redesign</DropdownMenuItem>
            <DropdownMenuItem>Mobile App v2.0</DropdownMenuItem>
            <DropdownMenuItem>Payment Gateway Integration</DropdownMenuItem>
            <DropdownMenuItem>Customer Analytics Dashboard</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Bar - Hidden on mobile */}
      <div className="hidden md:flex flex-1 max-w-md mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search requirements, documents, insights..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search Icon for Mobile */}
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-50">
          <Search className="w-5 h-5 text-gray-600" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative hover:bg-gray-50">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
        </Button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 sm:gap-3 hover:bg-gray-50 rounded-lg p-1.5 sm:p-2 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="text-left hidden xl:block">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">Business Analyst</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}