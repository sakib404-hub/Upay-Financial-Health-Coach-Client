"use client";

import { PiggyBank, ShoppingBag, Flag, Shield, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

interface PillarData {
  id: string;
  pillarNum: string;
  title: string;
  score: number;
  delta: number;
  deltaText: string;
  isPositive: boolean;
  metricLabel: string;
  metricHighlight: string;
  icon: typeof PiggyBank;
  iconColor: string;
  barColor: string;
}

const PILLARS: PillarData[] = [
  {
    id: "savings",
    pillarNum: "Pillar 01",
    title: "Savings Velocity",
    score: 84,
    delta: 4,
    deltaText: "↑ +4 pts vs last month",
    isPositive: true,
    metricLabel: "Saving 28.5% of net monthly income (৳18,500/mo auto-saved).",
    metricHighlight: "28.5%",
    icon: PiggyBank,
    iconColor: "text-emerald-700 bg-emerald-100",
    barColor: "bg-emerald-600",
  },
  {
    id: "spending",
    pillarNum: "Pillar 02",
    title: "Spending Discipline",
    score: 72,
    delta: -2,
    deltaText: "↓ -2 pts vs last month",
    isPositive: false,
    metricLabel: "Needs vs Wants ratio at 52:48 within healthy disciplined limits.",
    metricHighlight: "52:48",
    icon: ShoppingBag,
    iconColor: "text-secondary bg-secondary-container/50",
    barColor: "bg-secondary",
  },
  {
    id: "goals",
    pillarNum: "Pillar 03",
    title: "Goal Velocity",
    score: 80,
    delta: 6,
    deltaText: "↑ +6 pts vs last month",
    isPositive: true,
    metricLabel: "3 of 4 active savings goals ahead of targeted timeline schedule.",
    metricHighlight: "3 of 4",
    icon: Flag,
    iconColor: "text-primary bg-primary/10",
    barColor: "bg-primary",
  },
  {
    id: "emergency",
    pillarNum: "Pillar 04",
    title: "Emergency Runway",
    score: 76,
    delta: 3,
    deltaText: "↑ +3 pts vs last month",
    isPositive: true,
    metricLabel: "4.2 months of essential living expenses secured in liquid savings.",
    metricHighlight: "4.2 months",
    icon: Shield,
    iconColor: "text-primary-container bg-primary-container/15",
    barColor: "bg-primary-container",
  },
];

export function HealthPillarsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PILLARS.map((pillar, idx) => {
        const Icon = pillar.icon;
        // Mini gauge circumference for r=15: 2 * PI * 15 = 94.2
        const miniCircumference = 94.2;
        const miniDashoffset = miniCircumference - (pillar.score / 100) * miniCircumference;

        return (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div>
              {/* Header: Pillar index & monthly delta */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                  {pillar.pillarNum}
                </span>
                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    pillar.isPositive
                      ? "text-primary bg-primary/10"
                      : "text-rose-700 bg-rose-50"
                  }`}
                >
                  {pillar.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {pillar.deltaText}
                </span>
              </div>

              {/* Title & Score + Mini SVG Gauge */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-on-surface">
                    {pillar.title}
                  </h3>
                  <div className="flex items-baseline mt-1">
                    <span className="text-2xl font-extrabold text-on-surface">
                      {pillar.score}
                    </span>
                    <span className="text-xs text-on-surface-variant font-medium ml-1">
                      / 100
                    </span>
                  </div>
                </div>

                {/* Mini SVG Radial Gauge */}
                <div className="relative w-12 h-12 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      className="text-surface-container"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeDasharray={miniCircumference}
                      strokeDashoffset={miniDashoffset}
                      strokeLinecap="round"
                      className={`${pillar.isPositive ? "text-primary" : "text-secondary"} transition-all duration-700`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-on-surface" />
                  </div>
                </div>
              </div>

              {/* Horizontal Progress Bar */}
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mb-3">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${pillar.barColor}`}
                  style={{ width: `${pillar.score}%` }}
                />
              </div>
            </div>

            {/* Bottom metric callout */}
            <p className="text-xs text-on-surface-variant pt-2.5 border-t border-outline-variant/30 leading-relaxed">
              {pillar.metricLabel}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}
