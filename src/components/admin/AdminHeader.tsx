"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  FileText,
  LayoutDashboard,
} from "lucide-react";

interface AdminHeaderProps {
  onOpenMobileSidebar: () => void;
  userEmail: string | null;
  userRole: string | null;
}

export function AdminHeader({
  onOpenMobileSidebar,
  userEmail,
  userRole,
}: AdminHeaderProps) {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    if (pathname === "/admin") {
      return {
        title: "Dashboard Overview",
        subtitle: "Total blogs posted & today's publication overview",
        icon: LayoutDashboard,
      };
    }
    if (pathname === "/admin/blog/generate") {
      return {
        title: "AI Blog Generator",
        subtitle: "Write and publish new articles with AI",
        icon: Sparkles,
      };
    }
    if (pathname.startsWith("/admin/blog")) {
      return {
        title: "Blog Management",
        subtitle: "Review, edit, and publish editorial content",
        icon: FileText,
      };
    }
    return {
      title: "Admin Panel",
      subtitle: "MySecretGirl69 Indore Management",
      icon: Layers,
    };
  };

  const breadcrumb = getBreadcrumbs();
  const Icon = breadcrumb.icon;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-pink-100/60 shadow-2xs">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-pink-50 border border-gray-200 transition"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:flex p-2 rounded-xl bg-pink-50 border border-pink-200/80 text-[#e31777] shrink-0">
              <Icon className="w-4 h-4" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <span>Admin</span>
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <span className="text-[#e31777] font-semibold truncate">
                  {breadcrumb.title}
                </span>
              </div>
              <p className="text-xs text-gray-500 hidden md:block truncate">
                {breadcrumb.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Quick Actions & Live Site */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick AI Generator Launch Button (if not already on generate page) */}
          {pathname !== "/admin/blog/generate" && (
            <Link
              href="/admin/blog/generate"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#e31777] to-rose-600 hover:from-[#c2185b] hover:to-rose-700 text-white font-bold text-xs shadow-sm shadow-pink-500/25 transition-all transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Blog Studio</span>
              <span className="sm:hidden">AI Blog</span>
            </Link>
          )}

          {/* View Public Live Site */}
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-pink-50/50 hover:border-pink-300 text-gray-700 hover:text-[#e31777] font-semibold text-xs transition"
          >
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e31777]" />
            <span className="hidden md:inline">Live Website</span>
          </Link>

          {/* User Badge */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-gray-200">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#e31777] to-amber-500 flex items-center justify-center text-white text-[11px] font-bold shadow-2xs">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "A"}
            </div>
            <div className="text-left text-xs leading-tight">
              <span className="block font-semibold text-gray-900 truncate max-w-[120px]">
                {userEmail || "Admin"}
              </span>
              <span className="text-[10px] text-pink-600 font-bold uppercase">
                {userRole || "SUPERADMIN"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
