"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, ArrowRight, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AiCoachBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [activeTab, setActiveTab] = useState<"observation" | "why" | "recommendation">("observation");

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="glass-card rounded-2xl p-5 border-l-4 !border-l-primary relative overflow-hidden bg-gradient-to-r from-emerald-50/70 via-white/85 to-teal-50/50 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          {/* Coach Avatar & Details */}
          <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center shadow-lg shadow-primary/25 shrink-0">
              <Bot className="w-6 h-6 text-white" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-secondary-container px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  AI Coach Observation
                </span>
                <span className="text-[11px] text-outline font-medium">Updated 2h ago</span>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-on-surface">
                Your Financial Coach noticed something
              </h2>

              {activeTab === "observation" && (
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  Your transportation spending is{" "}
                  <span className="font-bold text-amber-700">22% higher</span> than your usual monthly
                  average. If this continues, you may spend around{" "}
                  <strong className="text-on-surface font-extrabold">৳3,200</strong> more this month
                  across ridesharing and peak surges.
                </p>
              )}

              {activeTab === "why" && (
                <div className="text-xs text-on-surface-variant max-w-2xl bg-surface-container-lowest/80 p-2.5 rounded-xl border border-outline-variant/30 space-y-1 animate-in fade-in">
                  <p className="font-semibold text-on-surface">Why this happened:</p>
                  <p>
                    6 Pathao and Uber rides during evening rain surge hours (৳2,450) + 1 inter-district bus booking (৳2,350).
                  </p>
                </div>
              )}

              {activeTab === "recommendation" && (
                <div className="text-xs text-on-surface-variant max-w-2xl bg-surface-container-lowest/80 p-2.5 rounded-xl border border-outline-variant/30 space-y-1 animate-in fade-in">
                  <p className="font-semibold text-on-surface">Coach Recommendation:</p>
                  <p>
                    Switch to metro rail during peak morning commutes to save ~৳1,400, or allocate ৳2,000 from your dining surplus.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Context Actions */}
          <div className="flex items-center gap-2 flex-wrap self-end md:self-center">
            <button
              onClick={() => setActiveTab(activeTab === "why" ? "observation" : "why")}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors shadow-sm ${
                activeTab === "why"
                  ? "bg-secondary-container text-primary border-primary/30"
                  : "bg-surface-container-lowest border-outline-variant/40 text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              Understand why
            </button>

            <button
              onClick={() =>
                setActiveTab(activeTab === "recommendation" ? "observation" : "recommendation")
              }
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors shadow-sm ${
                activeTab === "recommendation"
                  ? "bg-secondary-container text-primary border-primary/30"
                  : "bg-surface-container-lowest border-outline-variant/40 text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              See recommendations
            </button>

            <Link
              href="/ai-coach?prompt=Help%20me%20optimize%20my%20transportation%20spending"
              className="px-4 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold primary-btn-bevel shadow-sm shadow-primary/25 transition-all flex items-center gap-1 active:scale-95"
            >
              <span>Ask Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setDismissed(true)}
              className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors ml-1"
              title="Dismiss"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
