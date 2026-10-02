"use client";

import { AlertCircle } from "lucide-react";

interface CategoryBudgetItem {
  id: string;
  name: string;
  spent: number;
  budget: number;
  color: string;
  isOver: boolean;
}

const CATEGORY_ITEMS: CategoryBudgetItem[] = [
  { id: "food", name: "Food & Dining", spent: 8450, budget: 9000, color: "bg-rose-500", isOver: false },
  { id: "shopping", name: "Shopping", spent: 6250, budget: 8000, color: "bg-blue-500", isOver: false },
  { id: "transport", name: "Transportation", spent: 4800, budget: 4000, color: "bg-amber-500", isOver: true },
  { id: "bills", name: "Bills & Utilities", spent: 5000, budget: 5500, color: "bg-cyan-500", isOver: false },
  { id: "entertainment", name: "Entertainment", spent: 3100, budget: 4000, color: "bg-amber-400", isOver: false },
  { id: "health", name: "Health & Wellness", spent: 1800, budget: 2500, color: "bg-teal-500", isOver: false },
  { id: "education", name: "Education & Books", spent: 1200, budget: 2000, color: "bg-indigo-500", isOver: false },
  { id: "misc", name: "Miscellaneous", spent: 650, budget: 1000, color: "bg-slate-400", isOver: false },
];

export function InsightsCategoryBudgetBars() {
  const totalSpent = 31250;
  const totalBudget = 35000;
  const overallPct = Math.round((totalSpent / totalBudget) * 100);

  return (
    <section className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 shadow-xs space-y-6">
      {/* Header with aggregate pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-on-surface text-base">Category Spending Allocation &amp; Budgets</h3>
          <p className="text-xs text-on-surface-variant">
            Tracked across 8 active spending categories for September 2024
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30">
            Total Spent: <strong className="text-on-surface">৳31,250</strong> / ৳35,000 Budget ({overallPct}%)
          </span>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {CATEGORY_ITEMS.map((item) => {
          const pct = Math.round((item.spent / item.budget) * 100);
          const barWidth = Math.min(pct, 100);

          return (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-on-surface flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <span>{item.name}</span>
                  {item.isOver && (
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded flex items-center gap-0.5">
                      <AlertCircle className="w-3 h-3" />
                      Over Budget
                    </span>
                  )}
                </span>
                <span className="text-on-surface-variant font-medium">
                  <strong className={item.isOver ? "text-rose-600" : "text-on-surface"}>
                    ৳{item.spent.toLocaleString()}
                  </strong>{" "}
                  / ৳{item.budget.toLocaleString()} ({pct}%)
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    item.isOver ? "bg-rose-500" : item.color
                  }`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
