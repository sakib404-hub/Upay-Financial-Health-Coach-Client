"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RotateCcw,
  TrendingUp,
  Bot,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function SimulatorWorkspace() {
  // Baseline initial values
  const BASELINE_SAVINGS = 12000;
  const FIXED_BILLS = 25000;
  const MONTHLY_INCOME = 65000;

  // Sliders state
  const [foodSpend, setFoodSpend] = useState(9000); // Baseline 12000
  const [shoppingSpend, setShoppingSpend] = useState(7000); // Baseline 8500
  const [transportSpend, setTransportSpend] = useState(4500); // Baseline 4500
  const [entertainmentSpend, setEntertainmentSpend] = useState(3000); // Baseline 3000

  const handleReset = () => {
    setFoodSpend(9000);
    setShoppingSpend(7000);
    setTransportSpend(4500);
    setEntertainmentSpend(3000);
  };

  // Calculations
  const totalOutflow = foodSpend + shoppingSpend + transportSpend + entertainmentSpend + FIXED_BILLS;
  const simulatedMonthlySavings = Math.max(MONTHLY_INCOME - totalOutflow, 0);
  const monthlyDelta = simulatedMonthlySavings - BASELINE_SAVINGS;
  const simulated12m = simulatedMonthlySavings * 12;

  // Months to reach remaining ৳28,000 of emergency fund
  const monthsRemaining = Math.max(Math.ceil(28000 / (simulatedMonthlySavings || 1)), 1);

  // Month names calculation
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIdx = 8; // Sep (0-indexed)
  const targetMonthIdx = (currentMonthIdx + monthsRemaining) % 12;
  const targetYear = 2024 + Math.floor((currentMonthIdx + monthsRemaining) / 12);
  const targetDateStr = `${monthNames[targetMonthIdx]} ${targetYear}`;

  const monthsSaved = Math.max(Math.ceil(28000 / BASELINE_SAVINGS) - monthsRemaining, 0);

  // 12-month trajectory SVG points
  const pointsCurrent = Array.from({ length: 13 }, (_, i) => ({
    x: 50 + i * 75,
    y: 200 - (i * BASELINE_SAVINGS * 150) / 250000,
  }));

  const pointsSim = Array.from({ length: 13 }, (_, i) => ({
    x: 50 + i * 75,
    y: 200 - (i * simulatedMonthlySavings * 150) / 250000,
  }));

  // Build SVG path strings
  const currentPathStr = pointsCurrent.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x},${pt.y}`, "");
  const simPathStr = pointsSim.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x},${pt.y}`, "");

  return (
    <div className="space-y-7">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
            <span>Tools</span>
            <span className="text-outline">/</span>
            <span className="text-primary font-medium">What-if Simulator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
            What-if Scenario Simulator
          </h1>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Model interactive budget adjustments to see how spending decisions accelerate your financial goals.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container border border-outline-variant/40 text-xs font-semibold text-on-surface flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-xs active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Defaults</span>
        </button>
      </motion.div>

      {/* Main Interactive Grid (Inputs vs Comparison) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* Left Column: Sliders (6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-6 rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card space-y-6"
        >
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
            <div>
              <h3 className="text-base font-bold text-on-surface">Discretionary Spending Sliders</h3>
              <p className="text-xs text-on-surface-variant">Adjust your monthly outflow allocation</p>
            </div>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Live Modeling
            </span>
          </div>

          <div className="space-y-5">
            {/* Slider 1: Food & Groceries */}
            <div className="p-4 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Food &amp; Dining
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-outline line-through text-[11px]">৳12,000</span>
                  <span className="font-extrabold text-on-surface bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/30">
                    ৳{foodSpend.toLocaleString()}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="6000"
                max="15000"
                step="500"
                value={foodSpend}
                onChange={(e) => setFoodSpend(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-outline font-medium">
                <span>Min ৳6,000</span>
                <span className={foodSpend < 12000 ? "text-primary font-bold" : "text-outline"}>
                  {foodSpend < 12000 ? `-৳${(12000 - foodSpend).toLocaleString()} saved` : "Increased spend"}
                </span>
                <span>Max ৳15,000</span>
              </div>
            </div>

            {/* Slider 2: Shopping & Lifestyle */}
            <div className="p-4 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Shopping &amp; Lifestyle
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-outline line-through text-[11px]">৳8,500</span>
                  <span className="font-extrabold text-on-surface bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/30">
                    ৳{shoppingSpend.toLocaleString()}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="3000"
                max="12000"
                step="500"
                value={shoppingSpend}
                onChange={(e) => setShoppingSpend(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-outline font-medium">
                <span>Min ৳3,000</span>
                <span className={shoppingSpend < 8500 ? "text-primary font-bold" : "text-outline"}>
                  {shoppingSpend < 8500 ? `-৳${(8500 - shoppingSpend).toLocaleString()} saved` : "Increased spend"}
                </span>
                <span>Max ৳12,000</span>
              </div>
            </div>

            {/* Slider 3: Transportation */}
            <div className="p-4 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Transportation
                </span>
                <span className="font-extrabold text-on-surface bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/30">
                  ৳{transportSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="8000"
                step="500"
                value={transportSpend}
                onChange={(e) => setTransportSpend(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-outline font-medium">
                <span>Min ৳2,000</span>
                <span>Baseline ৳4,500</span>
                <span>Max ৳8,000</span>
              </div>
            </div>

            {/* Slider 4: Entertainment & Leisure */}
            <div className="p-4 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Entertainment &amp; Leisure
                </span>
                <span className="font-extrabold text-on-surface bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/30">
                  ৳{entertainmentSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="7000"
                step="500"
                value={entertainmentSpend}
                onChange={(e) => setEntertainmentSpend(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-outline font-medium">
                <span>Min ৳1,000</span>
                <span>Baseline ৳3,000</span>
                <span>Max ৳7,000</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Fixed bills &amp; rent (৳25,000) preserved</span>
            <span>
              Simulated Total Outflow: <strong className="text-on-surface">৳{totalOutflow.toLocaleString()}</strong>
            </span>
          </div>
        </motion.div>

        {/* Right Column: Comparative Cards & Impact (6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-6 flex flex-col justify-between gap-5"
        >
          {/* Side-by-Side Current vs Simulated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Baseline Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl glass-card border border-outline-variant/40 p-5 shadow-glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-outline uppercase tracking-wider">
                    Current Path
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-surface-container text-on-surface-variant">
                    Baseline
                  </span>
                </div>
                <p className="text-xs text-outline">Monthly Savings</p>
                <p className="text-2xl font-black text-on-surface">৳{BASELINE_SAVINGS.toLocaleString()}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/30 space-y-1 text-xs text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Projected 12m:</span>
                  <span className="font-semibold text-on-surface">৳144,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Goal Target ETA:</span>
                  <span className="font-semibold text-on-surface">Dec 2024</span>
                </div>
              </div>
            </motion.div>

            {/* Simulated Optimized Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl bg-secondary-container/40 backdrop-blur-xl border-2 border-primary/40 p-5 shadow-glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                    Simulated Path
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-on-primary shadow-xs">
                    Optimized
                  </span>
                </div>
                <p className="text-xs text-on-secondary-container">Monthly Savings</p>
                <p className="text-2xl font-black text-primary">
                  ৳{simulatedMonthlySavings.toLocaleString()}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-primary/20 space-y-1 text-xs text-on-secondary-container">
                <div className="flex justify-between">
                  <span>Projected 12m:</span>
                  <span className="font-bold text-primary">৳{simulated12m.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Goal Target ETA:</span>
                  <span className="font-bold text-primary">{targetDateStr}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Potential Improvement Callout Badge Card */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-secondary-fixed" />
              </div>
              <div>
                <p className="text-[11px] uppercase font-semibold tracking-wider text-secondary-fixed">
                  Potential Monthly Surplus Delta
                </p>
                <p className="text-xl font-extrabold leading-tight mt-0.5">
                  {monthlyDelta >= 0 ? `+৳${monthlyDelta.toLocaleString()}` : `-৳${Math.abs(monthlyDelta).toLocaleString()}`} / month
                </p>
              </div>
            </div>

            <div className="text-right pl-4 border-l border-white/20">
              <p className="text-[10px] text-secondary-fixed">Goal Velocity</p>
              <p className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                <TrendingUp className="w-3.5 h-3.5 text-secondary-fixed" />
                <span>{monthsSaved > 0 ? `${monthsSaved} Mo Faster` : "On Standard Pace"}</span>
              </p>
            </div>
          </motion.div>

          {/* Milestone KPI Summary Pills */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl glass-card border border-outline-variant/30 text-center shadow-xs">
              <p className="text-[10px] text-outline font-medium">Completion Date</p>
              <p className="text-sm font-extrabold text-primary mt-0.5">{targetDateStr}</p>
              <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                {monthsSaved > 0 ? `${monthsSaved} mo earlier` : "On schedule"}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl glass-card border border-outline-variant/30 text-center shadow-xs">
              <p className="text-[10px] text-outline font-medium">Monthly Surplus</p>
              <p className="text-sm font-extrabold text-on-surface mt-0.5">
                ৳{simulatedMonthlySavings.toLocaleString()}
              </p>
              <p className="text-[10px] text-primary font-semibold mt-0.5">
                {monthlyDelta >= 0 ? `+৳${monthlyDelta.toLocaleString()}` : "Diverted"}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl glass-card border border-outline-variant/30 text-center shadow-xs">
              <p className="text-[10px] text-outline font-medium">12-Mo Accumulation</p>
              <p className="text-sm font-extrabold text-on-surface mt-0.5">
                ৳{simulated12m.toLocaleString()}
              </p>
              <p className="text-[10px] text-outline mt-0.5">Over 1 year</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 12-Month Future Savings Trajectory Line Chart */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-outline-variant/30 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-on-surface">
                12-Month Future Savings Trajectory
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                Predictive Simulation
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Comparative curve showing simulated delta growth against current trajectory
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 rounded-full bg-outline-variant" />
              <span className="text-outline text-[11px]">Current Path (৳12k/mo)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 rounded-full bg-primary" />
              <span className="text-primary font-bold text-[11px]">
                Simulated Path (৳{(simulatedMonthlySavings / 1000).toFixed(1)}k/mo)
              </span>
            </div>
          </div>
        </div>

        {/* SVG Comparative Chart */}
        <div className="relative w-full h-72 pt-4">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 240">
            <defs>
              <linearGradient id="simDeltaGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#006948" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#006948" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Gridlines */}
            <line x1="40" y1="40" x2="960" y2="40" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
            <line x1="40" y1="90" x2="960" y2="90" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
            <line x1="40" y1="140" x2="960" y2="140" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/30" />
            <line x1="40" y1="190" x2="960" y2="190" stroke="currentColor" className="text-outline-variant/50" />

            {/* Y Axis text */}
            <text x="32" y="44" fill="#6d7a72" fontSize="10" textAnchor="end">৳250k</text>
            <text x="32" y="94" fill="#6d7a72" fontSize="10" textAnchor="end">৳180k</text>
            <text x="32" y="144" fill="#6d7a72" fontSize="10" textAnchor="end">৳100k</text>
            <text x="32" y="194" fill="#6d7a72" fontSize="10" textAnchor="end">৳0</text>

            {/* Shaded Area between Simulated Curve and bottom */}
            <path
              d={`${simPathStr} L ${pointsSim[12].x},190 L ${pointsSim[0].x},190 Z`}
              fill="url(#simDeltaGradient)"
            />

            {/* Current Curve (gray baseline) */}
            <path d={currentPathStr} fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />

            {/* Simulated Curve (vibrant primary) */}
            <path d={simPathStr} fill="none" stroke="#006948" strokeWidth="3.5" strokeLinecap="round" />

            {/* End Point Milestone */}
            <circle cx={pointsSim[12].x} cy={pointsSim[12].y} r="6" fill="#006948" stroke="#ffffff" strokeWidth="2.5" />

            {/* Month Labels along X Axis */}
            {Array.from({ length: 13 }).map((_, i) => (
              <text
                key={i}
                x={50 + i * 75}
                y="216"
                fill={i === 12 ? "#006948" : "#6d7a72"}
                fontWeight={i === 12 ? "700" : "500"}
                fontSize="10"
                textAnchor="middle"
              >
                {i === 0 ? "Now" : `M${i}`}
              </text>
            ))}
          </svg>
        </div>
      </motion.section>

      {/* AI Recommendation Insight Footer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -2 }}
        className="rounded-2xl bg-secondary-container/30 backdrop-blur-xl border border-primary/20 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-glass-card"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-on-surface">Apply Simulated Scenario as Active Budget?</h4>
            <p className="text-xs text-on-surface-variant">
              The AI Coach can automatically lock these category limits into your October spending plan.
            </p>
          </div>
        </div>

        <Link
          href={`/ai-coach?prompt=Apply+simulated+budget:+Food+৳${foodSpend},+Shopping+৳${shoppingSpend},+Transport+৳${transportSpend}`}
          className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shrink-0 self-start sm:self-auto shadow-xs active:scale-95 transition-all"
        >
          Ask Coach to Apply Limits
        </Link>
      </motion.div>
    </div>
  );
}
