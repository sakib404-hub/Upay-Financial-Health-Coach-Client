"use client";

import { useState } from "react";
import { Sparkles, Plus, CheckCircle2 } from "lucide-react";
import { GoalsSummaryBar } from "./goals-summary-bar";
import { GoalsFilterTabs, GoalTab } from "./goals-filter-tabs";
import { GoalCard, GoalItem } from "./goal-card";
import { GoalDetailModal } from "./goal-detail-modal";
import { CreateGoalModal } from "./create-goal-modal";
import { SurplusRedirectionBanner } from "./surplus-redirection-banner";

const INITIAL_GOALS: GoalItem[] = [
  {
    id: "goal-1",
    title: "Emergency Fund",
    category: "Safety Net",
    status: "on_track",
    statusText: "On Track",
    currentBalance: 72000,
    targetAmount: 100000,
    targetDate: "Dec 31, 2024",
    remainingMonths: "4 mos left",
    requiredPace: 7000,
    iconName: "shield",
    gradient: "from-secondary to-primary",
  },
  {
    id: "goal-2",
    title: "Home Down Payment",
    category: "Property",
    status: "on_track",
    statusText: "On Track",
    currentBalance: 210000,
    targetAmount: 300000,
    targetDate: "Jun 30, 2025",
    remainingMonths: "9 mos left",
    requiredPace: 10000,
    iconName: "home",
    gradient: "from-secondary to-primary",
  },
  {
    id: "goal-3",
    title: "Cox's Bazar Vacation",
    category: "Travel & Leisure",
    status: "ahead",
    statusText: "Ahead of Pace",
    currentBalance: 42500,
    targetAmount: 50000,
    targetDate: "Nov 15, 2024",
    remainingMonths: "2 mos left",
    requiredPace: 3750,
    iconName: "plane",
    gradient: "from-secondary to-primary",
  },
  {
    id: "goal-4",
    title: "Tech Workstation Upgrade",
    category: "Productivity",
    status: "needs_attention",
    statusText: "Needs Attention",
    currentBalance: 40000,
    targetAmount: 70000,
    targetDate: "Feb 28, 2025",
    remainingMonths: "5 mos left",
    requiredPace: 6000,
    iconName: "laptop",
    gradient: "from-amber-500 to-primary",
  },
];

export function GoalsWorkspace() {
  const [goals, setGoals] = useState<GoalItem[]>(INITIAL_GOALS);
  const [currentTab, setCurrentTab] = useState<GoalTab>("active");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("urgency");

  // Modal states
  const [selectedGoal, setSelectedGoal] = useState<GoalItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddContribution = (goal: GoalItem) => {
    const boost = 2500;
    setGoals((prev) =>
      prev.map((g) =>
        g.id === goal.id ? { ...g, currentBalance: Math.min(g.currentBalance + boost, g.targetAmount) } : g
      )
    );
    showToast(`Added +৳${boost.toLocaleString()} to ${goal.title}!`);
  };

  const handleDistributeSurplus = (amount: number) => {
    const half = amount / 2;
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === "goal-1" || g.id === "goal-4") {
          return { ...g, currentBalance: g.currentBalance + half };
        }
        return g;
      })
    );
    showToast(`Distributed +৳${half.toLocaleString()} each to Emergency Fund & Tech Workstation!`);
  };

  const handleCreateGoal = (newGoal: GoalItem) => {
    setGoals((prev) => [newGoal, ...prev]);
    showToast(`Created new savings goal "${newGoal.title}"!`);
  };

  // Filtered & Sorted Goals
  const filteredGoals = goals.filter((g) => {
    if (currentTab === "active" && (g.status === "completed" || g.status === "paused")) return false;
    if (currentTab === "completed" && g.status !== "completed") return false;
    if (currentTab === "paused" && g.status !== "paused") return false;
    if (categoryFilter !== "all" && g.category !== categoryFilter) return false;
    return true;
  });

  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const totalSaved = goals.reduce((acc, g) => acc + g.currentBalance, 0);
  const monthlyRequired = goals.reduce((acc, g) => acc + g.requiredPace, 0);

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Title Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
            Savings Goals
          </h1>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Turn your plans into achievable financial goals with precision AI guidance.
          </p>
        </div>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="h-10 px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-2 shadow-xs active:scale-95 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Create Goal</span>
        </button>
      </div>

      {/* Financial Coach Insight Alert Banner */}
      <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-l-4 border-l-primary p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-secondary-container/60 text-primary flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-on-surface">Coach Recommendation for October</h4>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Allocating an extra ৳3,500 from your discretionary dining surplus will bring your{" "}
              <strong className="text-primary font-bold">Emergency Fund</strong> completion date forward by 22 days.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={() => {
              const goal = goals.find((g) => g.id === "goal-1");
              if (goal) handleAddContribution(goal);
            }}
            className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-xs active:scale-95 transition-all"
          >
            Apply Optimization (+৳2,500)
          </button>
        </div>
      </div>

      {/* Overview Summary Bar (Bento Metrics Bar) */}
      <GoalsSummaryBar
        totalTarget={totalTarget}
        totalSaved={totalSaved}
        monthlyRequired={monthlyRequired}
        maturingCount={2}
      />

      {/* Status Filter Tabs & Controls */}
      <GoalsFilterTabs
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        activeCount={goals.filter((g) => g.status !== "completed" && g.status !== "paused").length}
        completedCount={goals.filter((g) => g.status === "completed").length}
        pausedCount={goals.filter((g) => g.status === "paused").length}
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Glass Goal Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onViewDetails={(g) => {
              setSelectedGoal(g);
              setIsDetailOpen(true);
            }}
            onAddContribution={handleAddContribution}
          />
        ))}
      </section>

      {/* Bottom Interactive AI Forecast Shelf */}
      <SurplusRedirectionBanner onDistribute={handleDistributeSurplus} />

      {/* Goal Details Modal */}
      <GoalDetailModal
        goal={selectedGoal}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onAddContribution={handleAddContribution}
      />

      {/* Create Goal Modal */}
      <CreateGoalModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreateGoal={handleCreateGoal}
      />
    </div>
  );
}
