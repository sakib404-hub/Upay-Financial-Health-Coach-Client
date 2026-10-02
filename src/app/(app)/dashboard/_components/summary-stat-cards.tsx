"use client";

import { Wallet, ArrowDownLeft, ArrowUpRight, PiggyBank, TrendingUp, CheckCircle2, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export function SummaryStatCards() {
  const cards = [
    {
      title: "Available Balance",
      amount: "৳48,750",
      icon: Wallet,
      iconColor: "text-primary bg-secondary-container/50 border border-primary/20",
      badgeText: "+8.4%",
      badgeIcon: TrendingUp,
      badgeColor: "text-primary bg-secondary-container/60",
      subtext: "vs. last month",
      sparklineColor: "#006948",
      sparklineFill: "rgba(0, 105, 72, 0.12)",
      path: "M2 18 L15 15 L28 17 L40 9 L52 11 L68 4",
      polygon: "M2 18 L15 15 L28 17 L40 9 L52 11 L68 4 L68 24 L2 24 Z",
    },
    {
      title: "Total Income",
      amount: "৳65,000",
      icon: ArrowDownLeft,
      iconColor: "text-teal-700 bg-teal-50 border border-teal-200",
      badgeText: "On Schedule",
      badgeIcon: CheckCircle2,
      badgeColor: "text-teal-700 bg-teal-50",
      subtext: "2 active sources",
      sparklineColor: "#0f766e",
      sparklineFill: "rgba(15, 118, 110, 0.12)",
      path: "M2 14 L15 14 L28 14 L42 8 L54 8 L68 4",
      polygon: "M2 14 L15 14 L28 14 L42 8 L54 8 L68 4 L68 24 L2 24 Z",
    },
    {
      title: "Total Spending",
      amount: "৳31,250",
      icon: ArrowUpRight,
      iconColor: "text-rose-700 bg-rose-50 border border-rose-200",
      badgeText: "48% of Income",
      badgeIcon: PieChart,
      badgeColor: "text-amber-700 bg-amber-50",
      subtext: "৳33.7k budget left",
      sparklineColor: "#f43f5e",
      sparklineFill: "rgba(244, 63, 94, 0.10)",
      path: "M2 8 L16 12 L28 10 L44 16 L56 12 L68 18",
      polygon: "M2 8 L16 12 L28 10 L44 16 L56 12 L68 18 L68 24 L2 24 Z",
    },
    {
      title: "Monthly Savings",
      amount: "৳18,500",
      icon: PiggyBank,
      iconColor: "text-primary bg-secondary-container/50 border border-primary/20",
      badgeText: "28.5% Rate",
      badgeIcon: TrendingUp,
      badgeColor: "text-primary bg-secondary-container/60",
      subtext: "Target: 25%",
      sparklineColor: "#006948",
      sparklineFill: "rgba(0, 105, 72, 0.15)",
      path: "M2 20 L16 17 L30 14 L42 10 L56 6 L68 2",
      polygon: "M2 20 L16 17 L30 14 L42 10 L56 6 L68 2 L68 24 L2 24 Z",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const BadgeIcon = card.badgeIcon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-on-surface-variant">{card.title}</span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl lg:text-3xl font-extrabold text-on-surface tracking-tight">
                {card.amount}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between pt-3 border-t border-outline-variant/20 text-xs">
              <span
                className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full ${card.badgeColor}`}
              >
                <BadgeIcon className="w-3.5 h-3.5" />
                <span>{card.badgeText}</span>
              </span>
              <span className="text-outline text-[11px]">{card.subtext}</span>

              {/* Sparkline Visualizer */}
              <svg
                className="w-16 h-6 overflow-visible"
                fill="none"
                stroke={card.sparklineColor}
                strokeWidth="2"
                viewBox="0 0 70 24"
              >
                <path d={card.polygon} fill={card.sparklineFill} stroke="none" />
                <path d={card.path} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
