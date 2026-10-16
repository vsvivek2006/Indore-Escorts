"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { AdminHeader } from "./AdminHeader";

interface AdminShellProps {
  children: React.ReactNode;
  userEmail: string | null;
  userRole: string | null;
}

export function AdminShell({ children, userEmail, userRole }: AdminShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 selection:bg-pink-100 selection:text-pink-900">
      {/* Fixed Left Sidebar (Desktop fixed, Mobile drawer) */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        userEmail={userEmail}
        userRole={userRole}
      />

      {/* Main Content Area (Offset by lg:pl-64 for fixed sidebar) */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <AdminHeader
          onOpenMobileSidebar={() => setIsSidebarOpen(true)}
          userEmail={userEmail}
          userRole={userRole}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
