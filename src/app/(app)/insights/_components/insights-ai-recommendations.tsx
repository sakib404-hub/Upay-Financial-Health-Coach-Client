"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ActionStates {
  rule1: boolean;
  rule2: boolean;
  rule3: boolean;
}

export function InsightsAiRecommendations() {
  const [actions, setActions] = useState<ActionStates>({
    rule1: false,
    rule2: false,
    rule3: false,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section className="space-y-4">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>AI Coach Personalized Recommendations</span>
        </h2>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300 self-start sm:self-auto">
          Potential Monthly Savings: +৳6,100
        </span>
      </div>

      {/* 3 Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recommendation 1: Food Delivery Optimization */}
        <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-t-4 border-t-emerald-500 p-5 shadow-xs flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-100">
                High Priority
              </span>
              <span className="text-xs text-outline font-medium">Food &amp; Dining</span>
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2 leading-snug">
              Optimize Weekend Food Delivery
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              Reducing food delivery by 2 orders per week frees approximately{" "}
              <strong className="text-emerald-700 font-bold">৳2,400 per month</strong> without affecting your weekday meal habits.
            </p>
          </div>

          <div>
            <div className="p-3 bg-secondary-container/40 rounded-xl mb-4 border border-primary/20 flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Expected Monthly Impact:</span>
              <span className="text-sm font-extrabold text-primary">+৳2,400/mo</span>
            </div>
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, rule1: !prev.rule1 }));
                triggerToast(
                  actions.rule1
                    ? "Weekend delivery rule removed."
                    : "Weekend delivery capped. ৳2,400 auto-routed to surplus!"
                );
              }}
              className={`w-full py-2.5 px-4 font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95 ${
                actions.rule1
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-primary hover:bg-primary-container text-on-primary"
              }`}
            >
              {actions.rule1 ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Rule Active (+৳2,400)</span>
                </>
              ) : (
                <>
                  <span>Apply Savings Rule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recommendation 2: Commute Switching */}
        <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-t-4 border-t-teal-500 p-5 shadow-xs flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                Medium Priority
              </span>
              <span className="text-xs text-outline font-medium">Transportation</span>
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2 leading-snug">
              Switch Commute on Off-Peak Hours
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              Shifting 3 rideshare trips from peak surcharge hours saves approximately{" "}
              <strong className="text-teal-700 font-bold">৳1,500/month</strong> based on Pathao and Uber fare histories in Dhaka.
            </p>
          </div>

          <div>
            <div className="p-3 bg-secondary-container/40 rounded-xl mb-4 border border-primary/20 flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Expected Monthly Impact:</span>
              <span className="text-sm font-extrabold text-teal-800">+৳1,500/mo</span>
            </div>
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, rule2: !prev.rule2 }));
                triggerToast(
                  actions.rule2
                    ? "Commute target disabled."
                    : "Commute target set: avoid peak surge hours on Pathao/Uber."
                );
              }}
              className={`w-full py-2.5 px-4 font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95 ${
                actions.rule2
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-secondary hover:bg-secondary/90 text-on-secondary"
              }`}
            >
              {actions.rule2 ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Commute Target Set (+৳1,500)</span>
                </>
              ) : (
                <>
                  <span>Set Commute Target</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recommendation 3: Automated Micro-Goal Routing */}
        <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-t-4 border-t-blue-500 p-5 shadow-xs flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                Automated Goal
              </span>
              <span className="text-xs text-outline font-medium">Goal Engine</span>
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2 leading-snug">
              Route Shopping Cashback to Emergency Fund
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              Auto-sweep monthly payment refunds and merchant rebates directly into your{" "}
              <strong className="text-on-surface font-semibold">Emergency Fund</strong> to reach 100% 2 months earlier.
            </p>
          </div>

          <div>
            <div className="p-3 bg-blue-50/70 rounded-xl mb-4 border border-blue-100 flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Goal Accelerated:</span>
              <span className="text-sm font-extrabold text-blue-700">+৳2,200/mo</span>
            </div>
            <button
              onClick={() => {
                setActions((prev) => ({ ...prev, rule3: !prev.rule3 }));
                triggerToast(
                  actions.rule3
                    ? "Cashback auto-sweep disabled."
                    : "Cashback auto-sweep enabled! Rebates will route to Emergency Fund."
                );
              }}
              className={`w-full py-2.5 px-4 font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95 ${
                actions.rule3
                  ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                  : "bg-inverse-surface hover:bg-inverse-surface/90 text-inverse-on-surface"
              }`}
            >
              {actions.rule3 ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Auto-Sweep Active (+৳2,200)</span>
                </>
              ) : (
                <>
                  <span>Enable Auto-Sweep</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
