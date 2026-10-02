"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldAlert,
  LayoutDashboard,
  Users,
  FolderTree,
  Settings2,
  Activity,
  ArrowLeft,
  ExternalLink,
  Shield,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function AdminSidebar({ mobileOpen, onMobileClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Overview",
      href: "/admin",
      icon: LayoutDashboard,
      isActive: pathname === "/admin",
    },
    {
      label: "Users",
      href: "/admin/users",
      icon: Users,
      isActive: pathname === "/admin/users",
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon: FolderTree,
      isActive: pathname === "/admin/categories",
    },
    {
      label: "Configuration",
      href: "/admin/config",
      icon: Settings2,
      isActive: pathname === "/admin/config",
    },
    {
      label: "Activity",
      href: "/admin/activity",
      icon: Activity,
      isActive: pathname === "/admin/activity",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/40 shadow-sm flex flex-col justify-between z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 space-y-6">
          {/* Admin Header / Brand */}
          <div className="flex items-center justify-between px-1 pt-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm shadow-primary/20">
                <ShieldAlert className="w-5 h-5 text-on-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-on-surface leading-tight">
                  Upay COACH ADMIN
                </span>
                <span className="text-[11px] text-on-surface-variant font-medium">Control Center</span>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onMobileClose}
              className="lg:hidden p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            <div className="px-2 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                Management
              </span>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onMobileClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-xs transition-all duration-150 relative ${
                    item.isActive
                      ? "bg-primary/10 text-primary font-bold shadow-xs border border-primary/20"
                      : "text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${item.isActive ? "text-primary" : "text-outline"}`}
                  />
                  <span>{item.label}</span>
                  {item.isActive && (
                    <span className="ml-auto w-1.5 h-4 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions / Switch Workspace */}
        <div className="p-4 border-t border-outline-variant/30 space-y-3 bg-surface-container-low/30">
          {/* Bangladesh Compliance Telemetry pill */}
          <div className="px-3 py-2 rounded-xl bg-surface-container/60 border border-outline-variant/30 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-bold text-on-surface truncate">MFS Security Layer</span>
              <span className="text-[10px] text-on-surface-variant truncate">Bangladesh Bank v3.4</span>
            </div>
          </div>

          {/* Exit to Personal Coach */}
          <Link
            href="/dashboard"
            onClick={onMobileClose}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-xs font-semibold hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-150 shadow-xs"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5 text-primary" />
              <span>Exit to Personal Coach</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-outline" />
          </Link>

          {/* Admin Identity Bar */}
          <div className="flex items-center gap-2.5 pt-1 px-1">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              SA
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-on-surface truncate">Shakib Al Hasan</span>
              <span className="text-[10px] text-on-surface-variant truncate flex items-center gap-1">
                <Shield className="w-2.5 h-2.5 text-primary inline" /> Master Admin (Dhaka Ops)
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
