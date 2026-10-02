"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Shield,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface ActionCardState {
  diningLimitApplied: boolean;
  emergencyBoostApplied: boolean;
  autoSweepEnabled: boolean;
}

export function HealthRecommendations() {
  const [actions, setActions] = useState<ActionCardState>({
    diningLimitApplied: false,
    emergencyBoostApplied: false,
    autoSweepEnabled: false,
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  return (
    <section className="space-y-4">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-on-surface">How to Improve</h3>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              +10 Potential Pts
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Actionable improvements tailored by Upay AI Coach to reach 85+ (Excellent)
          </p>
        </div>

        <Link
          href="/ai-coach?prompt=What+is+my+fastest+action+plan+to+reach+a+Health+Score+of+85"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-container transition-colors self-start sm:self-auto"
        >
          <span>Ask Coach for Custom Plan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3 Rich Glass Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Recommendation 1: Consolidate Discretionary Dining */}
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-5 flex flex-col justify-between shadow-xs hover:-translate-y-0.5 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container text-on-surface-variant border border-outline-variant/40">
                Priority: Medium
              </span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                +3 pts to Spending
              </span>
            </div>

            <div className="pt-1">
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <Utensils className="w-4 h-4 text-primary shrink-0" />
                <span>Consolidate Discretionary Dining</span>
              </h4>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Shifting 2 weekend restaurant meals to home-cooked meals frees{" "}
                <strong className="text-on-surface font-semibold">৳3,200/mo</strong> without affecting your weekday lunches.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, diningLimitApplied: !prev.diningLimitApplied }));
                showNotification(
                  actions.diningLimitApplied
                    ? "Dining limit budget rule removed."
                    : "Dining budget capped at ৳6,000/mo. +3 pts projected."
                );
              }}
              className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2 ${
                actions.diningLimitApplied
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-surface-container-lowest hover:bg-surface-container text-primary border border-primary/25"
              }`}
            >
              {actions.diningLimitApplied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Limit Active (৳6,000/mo)</span>
                </>
              ) : (
                <>
                  <span>Set Dining Limit</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recommendation 2: Boost Emergency Buffer */}
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-primary/25 p-5 flex flex-col justify-between shadow-xs hover:-translate-y-0.5 transition-all ring-1 ring-primary/20">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-container" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">
                Priority: High
              </span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                +5 pts to Emergency
              </span>
            </div>

            <div className="pt-1">
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span>Boost Emergency Liquid Buffer</span>
              </h4>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Increasing monthly auto-transfer by{" "}
                <strong className="text-on-surface font-semibold">৳2,500</strong> achieves full 6-month safety net by December 2024.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, emergencyBoostApplied: !prev.emergencyBoostApplied }));
                showNotification(
                  actions.emergencyBoostApplied
                    ? "Emergency boost recurring deposit adjusted back to ৳7,000."
                    : "Emergency auto-deposit increased to ৳9,500/mo. +5 pts projected."
                );
              }}
              className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2 ${
                actions.emergencyBoostApplied
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-primary hover:bg-primary-container text-on-primary"
              }`}
            >
              {actions.emergencyBoostApplied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Contribution Boosted (+৳2,500)</span>
                </>
              ) : (
                <>
                  <span>Increase Contribution</span>
                  <TrendingUp className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recommendation 3: Utility Sinking Fund */}
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-5 flex flex-col justify-between shadow-xs hover:-translate-y-0.5 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-surface-variant" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container text-on-surface-variant border border-outline-variant/40">
                Priority: Low
              </span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                +2 pts to Goal
              </span>
            </div>

            <div className="pt-1">
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary shrink-0" />
                <span>Automate Utility Sinking Fund</span>
              </h4>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Auto-allocating <strong className="text-on-surface font-semibold">৳5,000</strong> at the start of each month prevents month-end cash flow crunches.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, autoSweepEnabled: !prev.autoSweepEnabled }));
                showNotification(
                  actions.autoSweepEnabled
                    ? "Utility auto-sweep disabled."
                    : "Auto-sweep configured for 1st of month. +2 pts projected."
                );
              }}
              className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2 ${
                actions.autoSweepEnabled
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-surface-container-lowest hover:bg-surface-container text-primary border border-primary/25"
              }`}
            >
              {actions.autoSweepEnabled ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Auto-Sweep Enabled</span>
                </>
              ) : (
                <>
                  <span>Enable Auto-Sweep</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
