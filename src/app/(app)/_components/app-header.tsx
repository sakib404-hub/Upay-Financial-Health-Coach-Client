"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Bell,
  PlusCircle,
  Menu,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

interface AppHeaderProps {
  onMobileMenuToggle: () => void;
  onOpenAddTransaction: () => void;
}

export function AppHeader({ onMobileMenuToggle, onOpenAddTransaction }: AppHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("September 2024");
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Transportation Surge Detected",
      desc: "Spending in rides & transit is 22% higher than usual (৳4,800).",
      time: "2 hours ago",
      icon: AlertTriangle,
      iconColor: "text-amber-600 bg-amber-50",
    },
    {
      id: 2,
      title: "Salary Ingested Successfully",
      desc: "৳65,000 received from Tech Innovators Ltd.",
      time: "3 days ago",
      icon: CheckCircle2,
      iconColor: "text-primary bg-secondary-container/50",
    },
    {
      id: 3,
      title: "Goal Milestone Achieved",
      desc: "Emergency Fund reached 72% (৳72,000 / ৳100,000).",
      time: "5 days ago",
      icon: Sparkles,
      iconColor: "text-teal-600 bg-teal-50",
    },
  ];

  const months = ["September 2024", "August 2024", "July 2024", "June 2024"];

  return (
    <header className="h-20 glass-header sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30 bg-surface-container-lowest/70 backdrop-blur-xl">
      {/* Left: Mobile Toggle & Page Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          aria-label="Open sidebar navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base sm:text-xl font-extrabold text-on-surface tracking-tight flex items-center gap-1.5 sm:gap-2">
            <span>Good morning, Shakib</span>
            <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-[11px] sm:text-xs font-medium text-on-surface-variant hidden sm:block">
            Here&apos;s your real-time financial intelligence overview for this month.
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Global Search Bar */}
        <div className="relative hidden xl:block w-60">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-outline" />
          <input
            type="text"
            placeholder="Search transactions, insights..."
            className="w-full bg-surface-container-lowest/90 border border-outline-variant/40 rounded-xl pl-9 pr-3 py-2 text-xs font-medium text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Date / Month Selector */}
        <div className="relative">
          <button
            onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 text-xs font-semibold text-on-surface shadow-sm hover:bg-surface-container transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span className="hidden sm:inline">{selectedMonth}</span>
            <span className="sm:hidden">{selectedMonth.split(" ")[0]}</span>
            <ChevronDown className="w-3.5 h-3.5 text-outline" />
          </button>

          {monthDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xl py-1.5 z-50">
              {months.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setSelectedMonth(m);
                    setMonthDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors ${
                    selectedMonth === m
                      ? "text-primary font-bold bg-secondary-container/40"
                      : "text-on-surface-variant hover:bg-surface-container-high/40"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications with Badge & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-sm transition-all"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-on-surface-variant" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-outline-variant/20">
                <span className="text-xs font-bold text-on-surface">Notifications (3)</span>
                <span className="text-[10px] text-primary font-semibold cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="space-y-2">
                {notifications.map((n) => {
                  const Icon = n.icon;
                  return (
                    <div
                      key={n.id}
                      className="p-2.5 rounded-xl hover:bg-surface-container-high/40 transition-colors flex items-start gap-2.5 cursor-pointer"
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${n.iconColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-on-surface truncate">{n.title}</p>
                        <p className="text-[11px] text-on-surface-variant line-clamp-2 mt-0.5">
                          {n.desc}
                        </p>
                        <span className="text-[10px] text-outline mt-1 block">{n.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quick Action CTA: Add Transaction */}
        <button
          onClick={onOpenAddTransaction}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold primary-btn-bevel shadow-sm shadow-primary/25 transition-all active:scale-95"
        >
          <PlusCircle className="w-3.5 h-3.5 text-white" />
          <span className="hidden xs:inline">Add Transaction</span>
          <span className="xs:hidden">Add</span>
        </button>
      </div>
    </header>
  );
}
