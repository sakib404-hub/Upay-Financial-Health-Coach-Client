"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Wallet,
  LayoutDashboard,
  ReceiptText,
  TrendingUp,
  HeartPulse,
  Flag,
  PiggyBank,
  Calculator,
  BadgeCheck,
  Bot,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react";

interface AppSidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function AppSidebar({ mobileOpen, onMobileClose }: AppSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      badge: null,
      isActive: pathname === "/dashboard",
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: ReceiptText,
      badge: "24",
      isActive: pathname === "/transactions",
    },
    {
      label: "Insights",
      href: "/insights",
      icon: TrendingUp,
      badge: null,
      isActive: pathname === "/insights",
    },
    {
      label: "Financial Health",
      href: "/health",
      icon: HeartPulse,
      badge: "78",
      badgeColor: "bg-emerald-100 text-emerald-800",
      isActive: pathname === "/health",
    },
    {
      label: "Goals",
      href: "/goals",
      icon: Flag,
      badge: null,
      isActive: pathname === "/goals",
    },
    {
      label: "Savings Plan",
      href: "/savings-plan",
      icon: PiggyBank,
      badge: null,
      isActive: pathname === "/savings-plan",
    },
    {
      label: "What-if Simulator",
      href: "/simulator",
      icon: Calculator,
      badge: null,
      isActive: pathname === "/simulator",
    },
    {
      label: "Affordability",
      href: "/affordability",
      icon: BadgeCheck,
      badge: null,
      isActive: pathname === "/affordability",
    },
    {
      label: "AI Coach",
      href: "/ai-coach",
      icon: Bot,
      isAi: true,
      badge: null,
      isActive: pathname === "/ai-coach",
    },
  ];

  const accountItems = [
    {
      label: "Profile & Privacy",
      href: "/profile",
      icon: User,
      isActive: pathname === "/profile",
    },
    {
      label: "Preferences",
      href: "/profile#preferences",
      icon: Settings,
      isActive: false,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onMobileClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-surface-container-lowest/85 backdrop-blur-2xl border-r border-outline-variant/30 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top: Logo & Main Navigation */}
        <div className="p-4 sm:p-5 overflow-y-auto">
          {/* Logo & Mobile Close */}
          <div className="flex items-center justify-between mb-6 px-1">
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-on-surface text-lg tracking-tight">Upay</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-secondary-container px-1.5 py-0.5 rounded border border-primary/20">
                    Coach
                  </span>
                </div>
                <p className="text-[11px] font-medium text-on-surface-variant">Financial Intelligence</p>
              </div>
            </Link>

            <button
              onClick={onMobileClose}
              className="lg:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section: Main Menu */}
          <div className="space-y-1">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-outline mb-2">Main</p>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onMobileClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    item.isActive
                      ? "text-primary bg-secondary-container/50 border border-primary/20 shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      item.isActive
                        ? "text-primary"
                        : item.isAi
                        ? "text-primary animate-pulse"
                        : "text-outline"
                    }`}
                  />
                  <span>{item.label}</span>

                  {item.isAi && (
                    <span className="ml-auto flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed-dim opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                  )}

                  {item.badge && (
                    <span
                      className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.badgeColor || "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.isActive && !item.isAi && !item.badge && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-sm" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Section: Account & Settings */}
          <div className="mt-6 pt-5 border-t border-outline-variant/30 space-y-1">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-outline mb-2">Account</p>
            {accountItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onMobileClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    item.isActive
                      ? "text-primary bg-secondary-container/50 font-bold border border-primary/20"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
                  }`}
                >
                  <Icon className="w-4 h-4 text-outline" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom: User Profile Card */}
        <div className="p-3 m-3 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/40 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-teal-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                SA
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-on-surface truncate">Shakib Al Hasan</p>
              <p className="text-[10px] text-on-surface-variant truncate">Premium Member</p>
            </div>
            <Link
              href="/"
              className="text-outline hover:text-rose-600 p-1.5 rounded-lg hover:bg-surface-container transition-colors"
              title="Sign Out / Back to Home"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
