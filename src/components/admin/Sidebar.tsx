"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  FileText,
  LogOut,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  userEmail: string | null;
  userRole: string | null;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
  badge?: string;
  badgeColor?: string;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

export function Sidebar({ isOpen, setIsOpen, userEmail, userRole }: SidebarProps) {
  const pathname = usePathname();

  const navGroups: NavGroup[] = [
    {
      group: "Overview",
      items: [
        {
          name: "Dashboard",
          href: "/admin",
          icon: LayoutDashboard,
          exact: true,
        },
      ],
    },
    {
      group: "AI Content Studio",
      items: [
        {
          name: "AI Blog Generator",
          href: "/admin/blog/generate",
          icon: Sparkles,
          badge: "AI TURBO",
          badgeColor: "bg-gradient-to-r from-[#e31777] to-rose-500 text-white shadow-sm shadow-pink-500/30",
        },
        {
          name: "Blog Articles",
          href: "/admin/blog",
          icon: FileText,
          exact: true,
        },
      ],
    },
  ];

  const isLinkActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0c0714] text-slate-200 border-r border-pink-900/30 select-none">
      {/* Brand & Header */}
      <div className="p-5 border-b border-pink-900/30 flex items-center justify-between">
        <Link
          href="/admin"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e31777] via-rose-600 to-[#990a4b] p-0.5 shadow-lg shadow-pink-600/30 flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0c0714]/60 backdrop-blur-xs rounded-[10px] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 text-pink-400 fill-pink-400/20" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-pink-300 transition-colors">
                MySecretGirl<span className="text-[#e31777]">69</span>
              </span>
            </div>
            <p className="text-[10px] font-semibold tracking-wider text-pink-400 uppercase">
              Indore Admin VIP
            </p>
          </div>
        </Link>

        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
          aria-label="Close Sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Online Status Pill */}
      <div className="px-5 pt-3 pb-1">
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-pink-950/40 border border-pink-800/30 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium text-slate-300">Indore Core Active</span>
          </div>
          <span className="text-[10px] font-bold tracking-wider text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
            24/7
          </span>
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-6 scrollbar-thin scrollbar-thumb-pink-950 scrollbar-track-transparent">
        {navGroups.map((group) => (
          <div key={group.group} className="space-y-1">
            <div className="px-3 pb-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              {group.group}
            </div>

            {group.items.map((item) => {
              const active = isLinkActive(item.href, item.exact);
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all relative ${
                    active
                      ? "bg-gradient-to-r from-pink-600/25 via-pink-500/15 to-transparent text-white border-l-4 border-[#e31777] shadow-sm shadow-pink-900/20 font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        active ? "text-[#e31777]" : "text-slate-500"
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {active && <ChevronRight className="w-3.5 h-3.5 text-[#e31777]" />}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer / User Profile & Logout */}
      <div className="p-4 border-t border-pink-900/30 bg-[#090510]">
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-pink-950/20 border border-pink-900/40">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#e31777] to-amber-500 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-md shadow-pink-600/30">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "A"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white truncate leading-tight">
                {userEmail || "Admin User"}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] text-pink-400 font-semibold uppercase tracking-wider">
                  {userRole || "SUPERADMIN"}
                </span>
              </div>
            </div>
          </div>

          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              title="Sign Out"
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/50 transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-72 max-w-[85vw] shadow-2xl transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
