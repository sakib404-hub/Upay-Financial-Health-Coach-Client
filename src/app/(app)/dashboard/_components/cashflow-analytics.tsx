"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function CashflowAnalytics() {
  const [activeTimeframe, setActiveTimeframe] = useState<"7D" | "30D" | "3M" | "6M" | "1Y">("30D");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(4); // default to Sep 21 / peak point

  const dataPoints = [
    { label: "Sep 01", income: 65000, expense: 8400, savings: 56600, x: 50, yIncome: 45, yExpense: 140 },
    { label: "Sep 07", income: 65000, expense: 12200, savings: 52800, x: 130, yIncome: 42, yExpense: 132 },
    { label: "Sep 14", income: 65000, expense: 18500, savings: 46500, x: 220, yIncome: 50, yExpense: 115 },
    { label: "Sep 21", income: 65000, expense: 22400, savings: 42600, x: 310, yIncome: 38, yExpense: 128 },
    { label: "Sep 25", income: 65000, expense: 27800, savings: 37200, x: 410, yIncome: 40, yExpense: 105 },
    { label: "Sep 28", income: 65000, expense: 30100, savings: 34900, x: 500, yIncome: 32, yExpense: 118 },
    { label: "Sep 30", income: 65000, expense: 31250, savings: 33750, x: 580, yIncome: 30, yExpense: 110 },
  ];

  const currentHover = hoveredPoint !== null ? dataPoints[hoveredPoint] : dataPoints[4];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-2 glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-on-surface">Cash Flow Analytics</h3>
              <span className="text-[11px] font-semibold text-primary bg-secondary-container px-2.5 py-0.5 rounded-full border border-primary/20">
                Surplus +৳33,750
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Income, expenses, and savings trajectory over time
            </p>
          </div>

          {/* Time Filter Controls */}
          <div className="flex items-center bg-surface-container-high/60 p-1 rounded-xl text-xs font-semibold text-on-surface-variant self-start sm:self-auto">
            {(["7D", "30D", "3M", "6M", "1Y"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTimeframe(t)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activeTimeframe === t
                    ? "bg-surface-container-lowest text-on-surface shadow-sm font-bold"
                    : "hover:text-on-surface"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Chart Legend */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2 border-b border-outline-variant/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="font-medium text-on-surface-variant">Income (Avg. ৳65k)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="font-medium text-on-surface-variant">Expenses (৳31.2k)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-500" />
            <span className="font-medium text-on-surface-variant">Net Savings (৳18.5k)</span>
          </div>
        </div>
      </div>

      {/* SVG Data Visualizer Chart */}
      <div className="relative mt-4 w-full h-64 select-none">
        <svg className="w-full h-full" viewBox="0 0 600 240" preserveAspectRatio="none">
          {/* Horizontal Grid Lines */}
          <line x1="40" y1="20" x2="590" y2="20" stroke="#eaedff" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="40" y1="70" x2="590" y2="70" stroke="#eaedff" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="40" y1="120" x2="590" y2="120" stroke="#eaedff" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="40" y1="170" x2="590" y2="170" stroke="#eaedff" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="40" y1="210" x2="590" y2="210" stroke="#bccac0" strokeWidth="1" />

          {/* Y-Axis Labels */}
          <text x="5" y="24" className="text-[10px] fill-outline font-sans">৳70k</text>
          <text x="5" y="74" className="text-[10px] fill-outline font-sans">৳50k</text>
          <text x="5" y="124" className="text-[10px] fill-outline font-sans">৳30k</text>
          <text x="5" y="174" className="text-[10px] fill-outline font-sans">৳10k</text>

          {/* Gradients */}
          <defs>
            <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#006948" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#006948" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Income Polygon & Curve */}
          <polygon
            points="50,210 50,45 130,42 220,50 310,38 410,40 500,32 580,30 580,210"
            fill="url(#incomeGrad)"
          />
          <path
            d="M 50,45 C 90,43 170,52 220,50 C 270,48 360,39 410,40 C 460,41 540,32 580,30"
            fill="none"
            stroke="#006948"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Expense Polygon & Curve */}
          <polygon
            points="50,210 50,140 130,132 220,115 310,128 410,105 500,118 580,110 580,210"
            fill="url(#expenseGrad)"
          />
          <path
            d="M 50,140 C 90,135 170,118 220,115 C 270,112 360,132 410,105 C 460,112 540,116 580,110"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Net Savings Curve */}
          <path
            d="M 50,165 C 90,162 170,150 220,145 C 270,140 360,135 410,125 C 460,120 540,115 580,105"
            fill="none"
            stroke="#0f766e"
            strokeWidth="2"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />

          {/* Hover / Current Guide Line */}
          {currentHover && (
            <>
              <line
                x1={currentHover.x}
                y1="20"
                x2={currentHover.x}
                y2="210"
                stroke="#006948"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <circle
                cx={currentHover.x}
                cy={currentHover.yIncome}
                r="5"
                fill="#006948"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <circle
                cx={currentHover.x}
                cy={currentHover.yExpense}
                r="5"
                fill="#f43f5e"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
            </>
          )}

          {/* Invisible hover trigger columns */}
          {dataPoints.map((pt, i) => (
            <rect
              key={pt.label}
              x={pt.x - 30}
              y="20"
              width="60"
              height="190"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(i)}
            />
          ))}
        </svg>

        {/* Floating Tooltip */}
        {currentHover && (
          <div
            className="absolute top-[8%] bg-surface-container-lowest/95 border border-outline-variant/30 text-on-surface p-2.5 rounded-xl shadow-xl backdrop-blur-md text-[11px] pointer-events-none transform -translate-x-1/2 transition-all duration-150"
            style={{ left: `${(currentHover.x / 600) * 100}%` }}
          >
            <div className="font-bold text-on-surface border-b border-outline-variant/20 pb-1 mb-1 flex items-center justify-between gap-2">
              <span>{currentHover.label}</span>
              <span className="text-[10px] font-semibold text-primary bg-secondary-container px-1 rounded">
                Verified
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 text-primary font-semibold">
              <span>Income:</span>
              <span>৳{currentHover.income.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-rose-600 font-semibold">
              <span>Expense:</span>
              <span>৳{currentHover.expense.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-teal-700 font-semibold pt-0.5">
              <span>Savings:</span>
              <span>৳{currentHover.savings.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between px-6 sm:px-10 text-[10px] text-outline font-medium pt-2">
        {dataPoints.map((pt, i) => (
          <span
            key={pt.label}
            className={`cursor-pointer hover:text-on-surface transition-colors ${
              hoveredPoint === i ? "text-primary font-bold" : ""
            }`}
            onClick={() => setHoveredPoint(i)}
          >
            {pt.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
