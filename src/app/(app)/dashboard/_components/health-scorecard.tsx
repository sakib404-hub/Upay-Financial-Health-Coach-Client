"use client";

import Link from "next/link";
import { Info, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HealthScorecard() {
  const factors = [
    { label: "Savings Consistency", pct: 85, color: "bg-primary" },
    { label: "Spending Discipline", pct: 68, color: "bg-amber-500", highlight: true },
    { label: "Goal Trajectory", pct: 82, color: "bg-teal-600" },
    { label: "Emergency Fund Buffer", pct: 72, color: "bg-primary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-on-surface">Financial Health</h3>
            <p className="text-xs text-on-surface-variant">Personal wellness indicator</p>
          </div>
          <Link
            href="/health"
            className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors"
            title="Health Details"
          >
            <Info className="w-4 h-4" />
          </Link>
        </div>

        {/* Radial Score Indicator */}
        <div className="flex items-center justify-center my-4 sm:my-5">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* SVG Circle Progress Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#eaedff"
                strokeWidth="8"
                fill="none"
              />
              {/* 78% of circumference (2 * PI * 50 = 314.15) => 314.15 * 0.78 = 245.03, offset = 69.1 */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#006948"
                strokeWidth="9"
                strokeDasharray="314.15"
                strokeDashoffset="69.1"
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-on-surface tracking-tight">78</span>
              <span className="text-[10px] uppercase font-bold text-outline">out of 100</span>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container border border-primary/20">
                Good Status
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown Factors */}
        <div className="space-y-2.5 text-xs">
          {factors.map((f) => (
            <div key={f.label}>
              <div className="flex justify-between font-medium text-on-surface-variant mb-1">
                <span>{f.label}</span>
                <span className={`font-bold ${f.highlight ? "text-amber-700" : "text-on-surface"}`}>
                  {f.pct}%
                </span>
              </div>
              <div className="w-full bg-surface-container-high/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`${f.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${f.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Wellness Recommendation Footer */}
      <div className="mt-5 pt-3 border-t border-outline-variant/20 space-y-3">
        <div className="text-[11px] text-on-surface-variant leading-relaxed bg-secondary-container/40 p-2.5 rounded-xl border border-primary/20 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            <strong className="text-on-surface">Coach Tip:</strong> Your savings behavior is steady,
            but dining and weekend transit increased 18% this month.
          </p>
        </div>

        <Link
          href="/health"
          className="flex items-center justify-between text-xs font-bold text-primary hover:text-primary-container transition-colors group"
        >
          <span>View Complete Health Breakdown</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
