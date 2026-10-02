"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ShieldCheck, Laptop, Check } from "lucide-react";

export function GoalsTracker() {
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);

  const [goals, setGoals] = useState([
    {
      id: "emergency-fund",
      title: "Emergency Fund",
      targetDate: "Dec 2024 (3 months left)",
      icon: ShieldCheck,
      iconColor: "text-primary bg-secondary-container/60",
      current: 72000,
      target: 100000,
      pct: 72,
      gradient: "from-primary to-teal-400",
    },
    {
      id: "macbook-pro",
      title: "New MacBook Pro",
      targetDate: "Mar 2025 (6 months left)",
      icon: Laptop,
      iconColor: "text-blue-700 bg-blue-50",
      current: 45000,
      target: 120000,
      pct: 37.5,
      gradient: "from-blue-600 to-cyan-400",
    },
  ]);

  const handleQuickAdd = (goalId: string, amount: number) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const newCurrent = Math.min(g.target, g.current + amount);
          return {
            ...g,
            current: newCurrent,
            pct: Math.round((newCurrent / g.target) * 1000) / 10,
          };
        }
        return g;
      })
    );
    setActiveFeedback(goalId);
    setTimeout(() => setActiveFeedback(null), 1800);
  };

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-on-surface">Your Goals</h3>
          <p className="text-xs text-on-surface-variant">
            Track milestones and automated contributions
          </p>
        </div>
        <Link
          href="/goals"
          className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-container bg-secondary-container px-2.5 py-1 rounded-lg border border-primary/20 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create New Goal</span>
        </Link>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const remaining = goal.target - goal.current;
          const isAdded = activeFeedback === goal.id;

          return (
            <div
              key={goal.id}
              className="p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/30 shadow-sm hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${goal.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-on-surface">{goal.title}</h4>
                    <p className="text-[11px] text-on-surface-variant">{goal.targetDate}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-primary">{goal.pct}%</span>
                  <p className="text-[11px] text-on-surface-variant font-medium">
                    ৳{goal.current.toLocaleString()} / ৳{goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-surface-container-high/60 h-2 rounded-full overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${goal.gradient} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${goal.pct}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs pt-1">
                <span className="text-[11px] text-on-surface-variant">
                  ৳{remaining.toLocaleString()} remaining
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/goals#${goal.id}`}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => handleQuickAdd(goal.id, 5000)}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-secondary-container text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 flex items-center gap-1 active:scale-95"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span>+৳5,000 Added!</span>
                      </>
                    ) : (
                      <>
                        <span>+ Add ৳5,000</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
