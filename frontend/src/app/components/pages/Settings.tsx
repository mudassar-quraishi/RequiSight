import { User, Bell, Shield, Palette, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export function Settings() {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Manage your account and application preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Profile Settings */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#4F46E5]" />
              <CardTitle>Profile Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Business Analyst" />
            </div>
            <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA]">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#4F46E5]" />
              <CardTitle>Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">New Requirements</p>
                <p className="text-sm text-gray-500">Alert when new requirements are extracted</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Conflicts Detected</p>
                <p className="text-sm text-gray-500">Notify on requirement conflicts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Weekly Summary</p>
                <p className="text-sm text-gray-500">Get weekly project updates</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4F46E5]" />
              <CardTitle>Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label>Change Password</Label>
              <Button variant="outline" className="w-full">
                Update Password
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Active Sessions</Label>
              <p className="text-sm text-gray-500">3 active sessions</p>
              <Button variant="outline" className="w-full">
                Manage Sessions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#4F46E5]" />
              <CardTitle>Appearance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start border-[#4F46E5] bg-[#4F46E5]/5">
                  Light
                </Button>
                <Button variant="outline" className="justify-start">
                  Dark
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Accent Color</Label>
              <div className="flex gap-2">
                {["#4F46E5", "#7C3AED", "#10B981", "#F59E0B", "#EF4444"].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Compact View</p>
                <p className="text-sm text-gray-500">Reduce spacing between elements</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card className="border-gray-200 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#4F46E5]" />
              <CardTitle>Language & Region</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" defaultValue="English (US)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" defaultValue="Pacific Time (PT)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateformat">Date Format</Label>
              <Input id="dateformat" defaultValue="MM/DD/YYYY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeformat">Time Format</Label>
              <Input id="timeformat" defaultValue="12-hour" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}