import React, { useState } from "react";
import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onToggleSidebar?: () => void;
  appName?: string;
  logoUrl?: string;
  userName?: string;
  userAvatarUrl?: string;
}

const Header = ({
  onToggleSidebar = () => {},
  appName = "HutechHR",
  logoUrl = "",
  userName = "Pravat",
  userAvatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Pravat",
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#1e2844] text-white z-50 shadow-md flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="text-white hover:bg-[#2a3659] hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center space-x-2">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-8 w-8" />
          ) : (
            <h1 className="text-xl font-bold">
              <span className="text-white">Hutech</span>
              <span className="text-orange-500">HR</span>
            </h1>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1 mx-4">
        <h2 className="text-xl font-medium">Hi {userName}!</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center relative max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              type="text"
              placeholder="Search Employees"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "w-full bg-[#2a3659] text-white placeholder:text-white/60",
                "rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-white/30",
              )}
            />
          </div>
        </div>

        <div className="text-right mr-2 hidden md:block">
          <div className="text-sm font-medium">{formattedDate}</div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#2a3659] hover:text-white relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        <Button
          variant="destructive"
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 h-auto rounded"
        >
          WEB CLOCK-IN
        </Button>

        <div className="flex items-center space-x-1">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img
              src={userAvatarUrl}
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
