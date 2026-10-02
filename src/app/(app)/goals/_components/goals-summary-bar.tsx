"use client";

import { Target, PiggyBank, Calendar, Clock } from "lucide-react";

interface GoalsSummaryBarProps {
  totalTarget: number;
  totalSaved: number;
  monthlyRequired: number;
  maturingCount: number;
}

export function GoalsSummaryBar({
  totalTarget = 520000,
  totalSaved = 364500,
  monthlyRequired = 28500,
  maturingCount = 2,
}: GoalsSummaryBarProps) {
  const savedPct = Math.round((totalSaved / totalTarget) * 1000) / 10;

  return (
    <section className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 shadow-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/30">
        {/* Metric 1: Total Target */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-primary shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase text-outline tracking-wider">
              Total Target
            </div>
            <div className="text-2xl font-extrabold text-on-surface mt-0.5">
              ৳{totalTarget.toLocaleString()}
            </div>
            <div className="text-xs text-outline mt-0.5">Across 4 active sinking funds</div>
          </div>
        </div>

        {/* Metric 2: Total Saved */}
        <div className="flex items-start gap-4 lg:pl-6 pt-4 lg:pt-0">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-primary shrink-0">
            <PiggyBank className="w-6 h-6" />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-outline tracking-wider">
                Total Saved
              </span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {savedPct}%
              </span>
            </div>
            <div className="text-2xl font-extrabold text-on-surface mt-0.5">
              ৳{totalSaved.toLocaleString()}
            </div>
            {/* Progress bar */}
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-primary h-1.5 rounded-full transition-all duration-700"
                style={{ width: `${savedPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Metric 3: Monthly Required Saving */}
        <div className="flex items-start gap-4 lg:pl-6 pt-4 lg:pt-0">
          <div className="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-secondary shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase text-outline tracking-wider">
              Monthly Required
            </div>
            <div className="text-2xl font-extrabold text-on-surface mt-0.5">
              ৳{monthlyRequired.toLocaleString()}
            </div>
            <div className="text-xs text-outline mt-0.5">43.8% of monthly net income</div>
          </div>
        </div>

        {/* Metric 4: Projected Milestones */}
        <div className="flex items-start gap-4 lg:pl-6 pt-4 lg:pt-0">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-primary shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase text-outline tracking-wider">
              Projected Milestones
            </div>
            <div className="text-lg font-bold text-on-surface mt-0.5">
              {maturingCount} goals maturing
            </div>
            <div className="text-xs text-primary font-medium mt-0.5">Target: Q4 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}
