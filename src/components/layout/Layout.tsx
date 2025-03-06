import React, { useState } from "react";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        onToggleSidebar={toggleSidebar}
        appName="HutechHR"
        userName="Pravat"
      />
      <div className="flex flex-1 pt-16">
        <SideNavigation isExpanded={sidebarExpanded} onToggle={toggleSidebar} />
        <main className={`flex-1 transition-all duration-300 overflow-auto`}>
          <div className="p-6">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
