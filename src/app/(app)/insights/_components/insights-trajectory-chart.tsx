"use client";

import { useState } from "react";

interface TrajectoryDataPoint {
  month: string;
  income: number;
  expenses: number;
  savings: number;
  incomeY: number;
  expenseY: number;
  savingsY: number;
  cx: number;
}

const TRAJECTORY_DATA: TrajectoryDataPoint[] = [
  { month: "Apr", income: 60000, expenses: 38200, savings: 21800, cx: 60, incomeY: 60, expenseY: 140, savingsY: 165 },
  { month: "May", income: 60000, expenses: 36400, savings: 23600, cx: 180, incomeY: 58, expenseY: 135, savingsY: 160 },
  { month: "Jun", income: 62000, expenses: 39500, savings: 22500, cx: 300, incomeY: 62, expenseY: 145, savingsY: 162 },
  { month: "Jul", income: 65000, expenses: 35000, savings: 30000, cx: 420, incomeY: 55, expenseY: 138, savingsY: 158 },
  { month: "Aug", income: 65000, expenses: 33800, savings: 31200, cx: 540, incomeY: 50, expenseY: 132, savingsY: 148 },
  { month: "Sep", income: 65000, expenses: 31250, savings: 33750, cx: 660, incomeY: 45, expenseY: 126, savingsY: 140 },
];

export function InsightsTrajectoryChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(5);
  const activeItem = TRAJECTORY_DATA[hoveredIndex];

  return (
    <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-on-surface text-base">Monthly Spending &amp; Income Trajectory</h3>
          <p className="text-xs text-on-surface-variant">6-month longitudinal view: Apr 2024 – Sep 2024</p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Income
          </span>
          <span className="inline-flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Expenses
          </span>
          <span className="inline-flex items-center gap-1.5 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500" /> Net Surplus
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative h-64 w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 720 240" fill="none">
          <defs>
            <linearGradient id="insightsIncomeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="insightsExpenseFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="30" x2="700" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="40" y1="80" x2="700" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="40" y1="130" x2="700" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="40" y1="180" x2="700" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-outline-variant/30" />

          {/* Y Axis text */}
          <text x="32" y="34" fill="#6d7a72" fontSize="10" textAnchor="end">৳70k</text>
          <text x="32" y="84" fill="#6d7a72" fontSize="10" textAnchor="end">৳50k</text>
          <text x="32" y="134" fill="#6d7a72" fontSize="10" textAnchor="end">৳30k</text>
          <text x="32" y="184" fill="#6d7a72" fontSize="10" textAnchor="end">৳10k</text>

          {/* Income Area & Line */}
          <path
            d="M 60,60 C 160,58 260,62 360,55 C 460,50 560,52 660,45 L 660,200 L 60,200 Z"
            fill="url(#insightsIncomeFill)"
          />
          <path
            d="M 60,60 C 160,58 260,62 360,55 C 460,50 560,52 660,45"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Expense Area & Line */}
          <path
            d="M 60,140 C 160,135 260,145 360,138 C 460,130 560,132 660,126 L 660,200 L 60,200 Z"
            fill="url(#insightsExpenseFill)"
          />
          <path
            d="M 60,140 C 160,135 260,145 360,138 C 460,130 560,132 660,126"
            stroke="#f43f5e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Savings Dotted Line */}
          <path
            d="M 60,165 C 160,160 260,162 360,158 C 460,152 560,148 660,140"
            stroke="#0d9488"
            strokeWidth="2"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* Interactive Month Columns */}
          {TRAJECTORY_DATA.map((pt, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <g
                key={pt.month}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
              >
                {/* Vertical hover indicator */}
                {isHovered && (
                  <line
                    x1={pt.cx}
                    y1={25}
                    x2={pt.cx}
                    y2={200}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    className="text-primary/40"
                  />
                )}

                {/* Expense node */}
                <circle
                  cx={pt.cx}
                  cy={pt.expenseY}
                  r={isHovered ? 6 : 4}
                  fill="#f43f5e"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all"
                />

                {/* Income node */}
                <circle
                  cx={pt.cx}
                  cy={pt.incomeY}
                  r={isHovered ? 6 : 4}
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all"
                />

                {/* X Axis Label */}
                <text
                  x={pt.cx}
                  y="218"
                  fill={isHovered ? "#006948" : "#6d7a72"}
                  fontWeight={isHovered ? "700" : "500"}
                  fontSize="11"
                  textAnchor="middle"
                >
                  {pt.month} {index === 5 ? "(Now)" : ""}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip Callout */}
        <div className="absolute right-4 top-2 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-3 border border-emerald-300 shadow-md text-xs space-y-1">
          <p className="font-bold text-on-surface">
            {activeItem.month} 2024 Surplus:{" "}
            <span className="text-emerald-700">
              +৳{activeItem.savings.toLocaleString()}
            </span>
          </p>
          <div className="flex items-center gap-3 text-[11px] text-on-surface-variant">
            <span>Inflow: ৳{activeItem.income.toLocaleString()}</span>
            <span>Spend: ৳{activeItem.expenses.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
