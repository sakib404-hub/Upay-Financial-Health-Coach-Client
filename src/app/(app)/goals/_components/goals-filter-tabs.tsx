"use client";

import { Filter, ArrowUpDown } from "lucide-react";

export type GoalTab = "active" | "completed" | "paused";

interface GoalsFilterTabsProps {
  currentTab: GoalTab;
  onTabChange: (tab: GoalTab) => void;
  activeCount: number;
  completedCount: number;
  pausedCount: number;
  categoryFilter: string;
  onCategoryFilterChange: (cat: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function GoalsFilterTabs({
  currentTab,
  onTabChange,
  activeCount,
  completedCount,
  pausedCount,
  categoryFilter,
  onCategoryFilterChange,
  sortBy,
  onSortChange,
}: GoalsFilterTabsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/30 pb-3">
      {/* Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onTabChange("active")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            currentTab === "active"
              ? "bg-primary text-on-primary shadow-xs"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <span>Active</span>
          <span
            className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
              currentTab === "active"
                ? "bg-white/20 text-on-primary"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {activeCount}
          </span>
        </button>

        <button
          onClick={() => onTabChange("completed")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            currentTab === "completed"
              ? "bg-primary text-on-primary shadow-xs"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <span>Completed</span>
          <span
            className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
              currentTab === "completed"
                ? "bg-white/20 text-on-primary"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {completedCount}
          </span>
        </button>

        <button
          onClick={() => onTabChange("paused")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            currentTab === "paused"
              ? "bg-primary text-on-primary shadow-xs"
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          }`}
        >
          <span>Paused</span>
          <span
            className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
              currentTab === "paused"
                ? "bg-white/20 text-on-primary"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {pausedCount}
          </span>
        </button>
      </div>

      {/* Filter and Sort Dropdowns */}
      <div className="flex items-center gap-3">
        {/* Category Filter */}
        <div className="relative">
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="appearance-none bg-surface-container-lowest/80 border border-white/80 rounded-xl px-3.5 py-1.5 pr-8 text-xs font-semibold text-on-surface cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          >
            <option value="all">All Categories</option>
            <option value="Safety Net">Safety Net</option>
            <option value="Property">Property</option>
            <option value="Travel & Leisure">Travel &amp; Leisure</option>
            <option value="Productivity">Productivity</option>
          </select>
          <Filter className="w-3.5 h-3.5 text-outline absolute right-2.5 top-2.5 pointer-events-none" />
        </div>

        {/* Sort By */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-surface-container-lowest/80 border border-white/80 rounded-xl px-3.5 py-1.5 pr-8 text-xs font-semibold text-on-surface cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          >
            <option value="urgency">Sort by: Urgency</option>
            <option value="progress">Sort by: Progress (%)</option>
            <option value="target">Sort by: Target (৳)</option>
          </select>
          <ArrowUpDown className="w-3.5 h-3.5 text-outline absolute right-2.5 top-2.5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
