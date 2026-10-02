"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

interface MonthlyHealthPoint {
  month: string;
  year: string;
  score: number;
  highlight: string;
  cx: number;
  cy: number;
}

const HISTORY_POINTS: MonthlyHealthPoint[] = [
  { month: "Apr", year: "2024", score: 68, highlight: "Emergency fund initiated with ৳10,000 base deposit", cx: 50, cy: 145 },
  { month: "May", year: "2024", score: 70, highlight: "Dining budget limit set; discretionary burn reduced 12%", cx: 180, cy: 130 },
  { month: "Jun", year: "2024", score: 71, highlight: "Inflow stability confirmed with regular bi-weekly salary", cx: 310, cy: 115 },
  { month: "Jul", year: "2024", score: 74, highlight: "Automated utility bill sweeping configured", cx: 440, cy: 92 },
  { month: "Aug", year: "2024", score: 76, highlight: "Tech goal surpassed 60% completion milestone", cx: 570, cy: 68 },
  { month: "Sep", year: "2024", score: 78, highlight: "Current Optimal Score: Top 18% in Bangladesh (৳33,750 net surplus)", cx: 700, cy: 45 },
];

export function HealthTrendChart() {
  const [activePoint, setActivePoint] = useState<MonthlyHealthPoint>(HISTORY_POINTS[5]);

  return (
    <section className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 sm:p-7 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-on-surface">Financial Health Over Time</h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              +10 pts Total Growth
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Continuous 6-month telemetry shows sustained discipline across key indicators. Hover points for milestones.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant bg-surface-container/60 px-3.5 py-1.5 rounded-full border border-outline-variant/30 self-start sm:self-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span>Overall Health Telemetry</span>
        </div>
      </div>

      {/* SVG Interactive Chart Canvas */}
      <div className="w-full h-64 relative">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 760 200">
          <defs>
            <linearGradient id="healthLineAreaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#006948" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#006948" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Reference Grid Lines */}
          <line x1="30" y1="40" x2="730" y2="40" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="30" y1="85" x2="730" y2="85" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="30" y1="130" x2="730" y2="130" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
          <line x1="30" y1="175" x2="730" y2="175" stroke="currentColor" className="text-outline-variant/50" />

          {/* Area Fill */}
          <path
            d="M 50,145 C 120,140 140,135 180,130 C 240,125 270,118 310,115 C 370,110 400,98 440,92 C 500,85 530,74 570,68 C 630,60 660,50 700,45 L 700,175 L 50,175 Z"
            fill="url(#healthLineAreaGradient)"
          />

          {/* Smooth Bezier Line */}
          <path
            d="M 50,145 C 120,140 140,135 180,130 C 240,125 270,118 310,115 C 370,110 400,98 440,92 C 500,85 530,74 570,68 C 630,60 660,50 700,45"
            fill="none"
            stroke="#006948"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Interactive Milestone Nodes */}
          {HISTORY_POINTS.map((pt) => {
            const isSelected = activePoint.month === pt.month;
            return (
              <g
                key={pt.month}
                className="cursor-pointer transition-transform group"
                onClick={() => setActivePoint(pt)}
                onMouseEnter={() => setActivePoint(pt)}
              >
                {/* Outer Glow Halo on Active */}
                {isSelected && (
                  <circle cx={pt.cx} cy={pt.cy} r="12" fill="#006948" fillOpacity="0.2" className="animate-pulse" />
                )}
                {/* Node Circle */}
                <circle
                  cx={pt.cx}
                  cy={pt.cy}
                  r={isSelected ? 6.5 : 5}
                  fill={isSelected ? "#006948" : "#ffffff"}
                  stroke="#006948"
                  strokeWidth={isSelected ? 3 : 2.5}
                  className="transition-all duration-200"
                />
                {/* Score Text Label */}
                <text
                  x={pt.cx}
                  y={pt.cy - 12}
                  textAnchor="middle"
                  fill={isSelected ? "#006948" : "#6d7a72"}
                  fontSize={isSelected ? "13" : "11"}
                  fontWeight={isSelected ? "700" : "600"}
                >
                  {pt.score}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Month Label Track */}
      <div className="flex justify-between px-3 sm:px-6 pt-3 text-xs font-semibold text-on-surface-variant border-t border-outline-variant/30">
        {HISTORY_POINTS.map((pt) => (
          <button
            key={pt.month}
            onClick={() => setActivePoint(pt)}
            className={`transition-colors ${
              activePoint.month === pt.month
                ? "text-primary font-bold underline underline-offset-4"
                : "hover:text-on-surface"
            }`}
          >
            {pt.month} {pt.year}
          </button>
        ))}
      </div>

      {/* Active Month Milestone Deep Dive Card */}
      <div className="mt-4 p-4 rounded-xl bg-surface-container/50 border border-outline-variant/30 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
          <Calendar className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-on-surface">
              {activePoint.month} {activePoint.year} Financial Milestone ({activePoint.score}/100)
            </h4>
            {activePoint.month === "Sep" && (
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-primary text-on-primary">
                Current
              </span>
            )}
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">{activePoint.highlight}</p>
        </div>
      </div>
    </section>
  );
}
