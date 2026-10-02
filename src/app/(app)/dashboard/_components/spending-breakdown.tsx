"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function SpendingBreakdown() {
  const categories = [
    { name: "Food & Dining", amount: "৳8,450", pct: "27%", color: "bg-rose-500", stroke: "#f43f5e" },
    { name: "Shopping", amount: "৳6,250", pct: "20%", color: "bg-blue-500", stroke: "#3b82f6" },
    { name: "Transport", amount: "৳4,800", pct: "15%", color: "bg-amber-500", stroke: "#f59e0b" },
    { name: "Utilities", amount: "৳4,500", pct: "14%", color: "bg-purple-500", stroke: "#8b5cf6" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-on-surface">Spending Breakdown</h3>
          <p className="text-xs text-on-surface-variant">Distribution by monthly expenditure categories</p>
        </div>
        <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-lg">
          8 Categories
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* SVG Donut Chart */}
        <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Donut Segments (circumference approx 251.3) */}
            {/* Food & Dining: 27% (68) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#f43f5e"
              strokeWidth="12"
              strokeDasharray="68 183.3"
              strokeDashoffset="0"
              fill="none"
            />
            {/* Shopping: 20% (50) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#3b82f6"
              strokeWidth="12"
              strokeDasharray="50 201.3"
              strokeDashoffset="-68"
              fill="none"
            />
            {/* Transportation: 15% (38) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#f59e0b"
              strokeWidth="12"
              strokeDasharray="38 213.3"
              strokeDashoffset="-118"
              fill="none"
            />
            {/* Utilities: 14% (35) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#8b5cf6"
              strokeWidth="12"
              strokeDasharray="35 216.3"
              strokeDashoffset="-156"
              fill="none"
            />
            {/* Health & Others: 24% (60) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#006948"
              strokeWidth="12"
              strokeDasharray="60 191.3"
              strokeDashoffset="-191"
              fill="none"
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-[10px] font-bold text-outline block uppercase">Top</span>
            <span className="text-xs font-black text-on-surface">Dining</span>
          </div>
        </div>

        {/* Category Legend List */}
        <div className="flex-1 w-full grid grid-cols-2 gap-2 text-xs">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low border border-outline-variant/30"
            >
              <div className="flex items-center gap-1.5 truncate">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.color} shrink-0`} />
                <span className="text-on-surface-variant font-medium truncate">{cat.name}</span>
              </div>
              <span className="font-bold text-on-surface ml-1">{cat.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spending AI Warning Pill */}
      <div className="mt-4 flex items-center justify-between bg-amber-50/80 border border-amber-200/80 px-3.5 py-2.5 rounded-xl text-xs">
        <div className="flex items-center gap-2 text-amber-900 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            Your dining spending increased <strong>18%</strong> this month vs. August.
          </span>
        </div>
        <Link
          href="/insights"
          className="text-amber-800 font-bold hover:underline ml-2 shrink-0 inline-flex items-center gap-1"
        >
          <span>Analyze</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}
