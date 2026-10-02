"use client";

import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  HelpCircle,
  Building2,
  Users,
  FolderTree,
  Settings2,
  Activity,
  LayoutDashboard,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

interface AdminHeaderProps {
  onMobileMenuToggle: () => void;
  onInviteUser?: () => void;
}

export function AdminHeader({ onMobileMenuToggle, onInviteUser }: AdminHeaderProps) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getRouteInfo = () => {
    switch (pathname) {
      case "/admin/users":
        return { label: "Users Management", icon: Users };
      case "/admin/categories":
        return { label: "Categories Management", icon: FolderTree };
      case "/admin/config":
        return { label: "System Configuration", icon: Settings2 };
      case "/admin/activity":
        return { label: "Activity & Audit Trail", icon: Activity };
      default:
        return { label: "Overview Control Center", icon: LayoutDashboard };
    }
  };

  const routeInfo = getRouteInfo();
  const RouteIcon = routeInfo.icon;

  return (
    <header className="sticky top-0 z-30 w-full bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/40 shadow-xs">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Left: Mobile Toggle & Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-on-surface-variant flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-outline" />
              <span className="hidden sm:inline">Admin Center</span>
            </span>
            <span className="text-outline-variant font-bold">/</span>
            <span className="text-primary font-bold flex items-center gap-1.5">
              <RouteIcon className="w-3.5 h-3.5" />
              <span>{routeInfo.label}</span>
            </span>
          </div>
        </div>

        {/* Right: Search, Notifications, Help & Quick Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Global Search Input */}
          <div className="relative w-48 sm:w-64 hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Global admin search..."
              className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-surface-container-lowest/90 border border-outline-variant/50 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-outline" />
          </div>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                  <h4 className="text-xs font-bold text-on-surface">Administrative Alerts</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                    2 New
                  </span>
                </div>
                <div className="divide-y divide-outline-variant/20 mt-2 text-xs space-y-2">
                  <div className="pt-2">
                    <p className="font-semibold text-on-surface">AML Watchdog Hold</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      Account UP-CTG-7721 blocked due to multi-wallet structuring.
                    </p>
                    <span className="text-[10px] text-outline">1 hour ago</span>
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold text-on-surface">Chittagong Surge Alert</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      482 micro-savings goals completed. Batch voucher ready.
                    </p>
                    <span className="text-[10px] text-outline">2 hours ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Documentation Button */}
          <button
            className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 transition-colors"
            title="Bangladesh Bank MFS Compliance v3.4 Docs"
            aria-label="Documentation"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-outline-variant/40 mx-1 hidden sm:block" />

          {/* Quick Action Button */}
          <button
            onClick={onInviteUser}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-xs hover:bg-primary/90 transition-all active:scale-95 duration-150"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+ Invite User</span>
            <span className="sm:hidden">+ Invite</span>
          </button>
        </div>
      </div>
    </header>
  );
}
