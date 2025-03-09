import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
}

interface SideNavigationProps {
  isExpanded?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
  navItems?: NavItem[];
}

const SideNavigation = ({
  isExpanded = true,
  onToggle = () => {},
  isMobile = false,
  navItems = [
    {
      icon: <img src="/icons/dashboard.svg" alt="" className="w-5 h-5" />,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: <img src="/icons/company.svg" alt="" className="w-5 h-5" />,
      label: "Company Profile",
      href: "/company-profile",
      hasSubmenu: true,
      submenuItems: [
        { label: "Address", href: "/company-profile/address" },
        { label: "Department", href: "/company-profile/department" },
        { label: "Designations", href: "/company-profile/designations" },
        { label: "Announcements", href: "/company-profile/announcements" },
        { label: "Policies", href: "/company-profile/policies" },
        { label: "Statutory Info", href: "/company-profile/statutory-info" },
        { label: "Admins", href: "/company-profile/admins" },
        { label: "My Plan", href: "/company-profile/my-plan" },
      ],
    },
    {
      icon: <img src="/icons/profile.svg" alt="" className="w-5 h-5" />,
      label: "Employee Onboarding",
      href: "/employee-onboarding",
    },
    {
      icon: <img src="/icons/profile.svg" alt="" className="w-5 h-5" />,
      label: "My Profile",
      href: "/my-profile",
      hasSubmenu: true,
      submenuItems: [
        { label: "Work", href: "/my-profile/work" },
        { label: "Team", href: "/my-profile/team" },
        { label: "Education", href: "/my-profile/education" },
        { label: "Family", href: "/my-profile/family" },
        { label: "Documents", href: "/my-profile/documents" },
        { label: "File Manager", href: "/my-profile/file-manager" },
      ],
    },
    {
      icon: <img src="/icons/directory.svg" alt="" className="w-5 h-5" />,
      label: "Directory",
      href: "/directory",
    },
    {
      icon: <img src="/icons/attendance.svg" alt="" className="w-5 h-5" />,
      label: "Attendance",
      href: "/attendance",
      hasSubmenu: true,
      submenuItems: [
        { label: "Logs", href: "/attendance/logs" },
        { label: "My Attendance", href: "/attendance/rules" },
        { label: "Approvals", href: "/attendance/approvals" },
      ],
    },
    {
      icon: <img src="/icons/leave.svg" alt="" className="w-5 h-5" />,
      label: "Leave",
      href: "/leave",
      hasSubmenu: true,
      submenuItems: [
        { label: "Logs", href: "/leave/logs" },
        { label: "Rules", href: "/leave/rules" },
        { label: "Balance", href: "/leave/balance" },
      ],
    },
    {
      icon: <img src="/icons/payroll.svg" alt="" className="w-5 h-5" />,
      label: "Payroll",
      href: "/payroll",
      hasSubmenu: true,
      submenuItems: [
        { label: "Run Payroll", href: "/payroll/run" },
        { label: "Setup Payroll", href: "/payroll/setup" },
        { label: "Declaration", href: "/payroll/declaration" },
        { label: "Advanced Settings", href: "/payroll/advanced-settings" },
        { label: "Audit History", href: "/payroll/audit-history" },
      ],
    },
    {
      icon: <img src="/icons/insurance.svg" alt="" className="w-5 h-5" />,
      label: "Insurance Management",
      href: "/insurance",
    },
    {
      icon: <img src="/icons/org-chart.svg" alt="" className="w-5 h-5" />,
      label: "Organization Chart",
      href: "/org-chart",
    },
    {
      icon: <img src="/icons/calendar.svg" alt="" className="w-5 h-5" />,
      label: "Holiday Calendar",
      href: "/leave/holiday-calendar",
    },
    {
      icon: <img src="/icons/konnect.svg" alt="" className="w-5 h-5" />,
      label: "Konnect",
      href: "/konnect",
    },
    {
      icon: <img src="/icons/rewards.svg" alt="" className="w-5 h-5" />,
      label: "Rewards",
      href: "/rewards",
    },
    {
      icon: <img src="/icons/settings.svg" alt="" className="w-5 h-5" />,
      label: "Settings",
      href: "/settings",
    },
  ],
}: SideNavigationProps) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSidebar = () => {
    setExpanded(!expanded);
    onToggle();
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSubmenu = (label: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Mobile drawer that appears as overlay
  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-40 text-white"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </Button>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          >
            <div
              className="fixed left-0 top-0 h-full w-[280px] bg-white text-[#1e2844] z-50 overflow-y-auto border-r border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center">
                <h2 className="font-bold text-xl text-[#1e2844]">App Name</h2>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <ChevronLeft size={20} />
                </Button>
              </div>
              <nav className="p-2">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <div>
                        <div
                          className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() =>
                            item.hasSubmenu && toggleSubmenu(item.label)
                          }
                        >
                          <a
                            href={item.href}
                            className="flex items-center gap-3"
                            onClick={(e) =>
                              item.hasSubmenu && e.preventDefault()
                            }
                          >
                            {item.icon}
                            <span className="text-gray-700">{item.label}</span>
                          </a>
                          {item.hasSubmenu &&
                            (expandedMenus[item.label] ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            ))}
                        </div>
                        {item.hasSubmenu &&
                          item.submenuItems &&
                          expandedMenus[item.label] && (
                            <div className="ml-8 mt-1 space-y-1 animate-accordion-down">
                              {item.submenuItems.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block py-1.5 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside
      className={`h-full bg-white text-[#1e2844] transition-all duration-300 ${expanded ? "w-[280px]" : "w-[70px]"} border-r border-gray-200`}
    >
      <div className="p-4 flex justify-between items-center">
        {expanded ? (
          <h2 className="font-bold text-xl text-[#1e2844]">App Name</h2>
        ) : null}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
      <nav className="p-2">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              {expanded ? (
                <div>
                  <div
                    className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => item.hasSubmenu && toggleSubmenu(item.label)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-3"
                      onClick={(e) => item.hasSubmenu && e.preventDefault()}
                    >
                      {item.icon}
                      <span className="text-gray-700">{item.label}</span>
                    </a>
                    {item.hasSubmenu &&
                      (expandedMenus[item.label] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                  {item.hasSubmenu &&
                    item.submenuItems &&
                    expandedMenus[item.label] && (
                      <div className="ml-8 mt-1 space-y-1 animate-accordion-down">
                        {item.submenuItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block py-1.5 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={item.href}
                        className="flex justify-center p-3 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        {item.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
