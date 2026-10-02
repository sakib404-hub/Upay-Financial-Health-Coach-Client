"use client";

import { Sparkles } from "lucide-react";

export function InsightsCashDistribution() {
  return (
    <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 shadow-xs flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-on-surface text-base mb-1">Income vs Expenses</h3>
        <p className="text-xs text-on-surface-variant mb-6">Net Cash Distribution Breakdown</p>

        <div className="space-y-4">
          {/* Earned */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-on-surface-variant">Earned Inflow (৳65,000)</span>
              <span className="font-bold text-emerald-700">100% Inflow</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all duration-700" style={{ width: "100%" }} />
            </div>
          </div>

          {/* Spent */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-on-surface-variant">Consumed Spent (৳31,250)</span>
              <span className="font-bold text-rose-600">48.1% Consumed</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 rounded-full transition-all duration-700" style={{ width: "48.1%" }} />
            </div>
          </div>

          {/* Retained / Saved */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-on-surface-variant">Retained / Saved (৳33,750)</span>
              <span className="font-bold text-teal-700">51.9% Retained</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full transition-all duration-700" style={{ width: "51.9%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 50/30/20 Rule Adherence Note */}
      <div className="mt-6 pt-4 border-t border-outline-variant/30 bg-secondary-container/30 p-3.5 rounded-xl border border-primary/15">
        <div className="flex items-center gap-1.5 text-xs font-bold text-on-secondary-container">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Health Ratio Evaluation</span>
        </div>
        <p className="text-[11px] text-on-secondary-container mt-1 leading-relaxed">
          Your 50/30/20 guideline adherence is exceptionally strong. Needs represent{" "}
          <strong className="font-bold">32.0%</strong>, Wants{" "}
          <strong className="font-bold">16.1%</strong>, and Wealth Savings{" "}
          <strong className="font-bold">51.9%</strong>.
        </p>
      </div>
    </div>
  );
}
