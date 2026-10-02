"use client";

import { motion } from "framer-motion";

export function SavingsTrajectoryChart() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.15 }}
      whileHover={{ y: -2 }}
      className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-on-surface">Projected Savings Trajectory</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                Predictive Path
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Progression curve from current ৳72,000 to targeted ৳100,000 over 4 months
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-primary inline-block" />
              <span className="text-on-surface text-[11px] font-semibold">Trajectory</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t border-dashed border-outline inline-block" />
              <span className="text-outline text-[11px]">Goal Target (৳100k)</span>
            </div>
          </div>
        </div>

        {/* SVG Chart Canvas */}
        <div className="relative w-full h-64 mt-3 bg-surface-container/20 rounded-xl p-3 border border-outline-variant/30 flex flex-col justify-between">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 220">
            <defs>
              <linearGradient id="planCurveGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#006948" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#006948" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gridlines */}
            <line x1="40" y1="30" x2="580" y2="30" stroke="currentColor" strokeDasharray="4 4" className="text-outline-variant/40" />
            <line x1="40" y1="80" x2="580" y2="80" stroke="currentColor" className="text-outline-variant/20" />
            <line x1="40" y1="130" x2="580" y2="130" stroke="currentColor" className="text-outline-variant/20" />
            <line x1="40" y1="180" x2="580" y2="180" stroke="currentColor" className="text-outline-variant/40" />

            {/* Y-Axis labels */}
            <text x="32" y="34" fill="#6d7a72" fontSize="10" fontWeight="500" textAnchor="end">৳100k</text>
            <text x="32" y="84" fill="#6d7a72" fontSize="10" textAnchor="end">৳90k</text>
            <text x="32" y="134" fill="#6d7a72" fontSize="10" textAnchor="end">৳80k</text>
            <text x="32" y="184" fill="#6d7a72" fontSize="10" textAnchor="end">৳70k</text>

            {/* Target 100k dashed line */}
            <line x1="60" y1="30" x2="560" y2="30" stroke="#006948" strokeWidth="1.5" strokeDasharray="5 5" />

            {/* Fill Under Curve */}
            <path d="M 70 170 C 180 145, 290 100, 550 30 L 550 180 L 70 180 Z" fill="url(#planCurveGrad)" />

            {/* Trajectory Curve */}
            <path
              d="M 70 170 C 180 145, 290 100, 550 30"
              fill="none"
              stroke="#006948"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Stepper Dots */}
            {/* Today */}
            <circle cx="70" cy="170" r="4.5" fill="#006948" stroke="#ffffff" strokeWidth="2" />
            <text x="70" y="200" fill="#131b2e" fontSize="10.5" fontWeight="700" textAnchor="middle">Today</text>

            {/* Month 1 */}
            <circle cx="190" cy="135" r="4" fill="#006948" stroke="#ffffff" strokeWidth="2" />
            <text x="190" y="200" fill="#6d7a72" fontSize="10.5" textAnchor="middle">Month 1</text>

            {/* Month 2 */}
            <circle cx="310" cy="100" r="4" fill="#006948" stroke="#ffffff" strokeWidth="2" />
            <text x="310" y="200" fill="#6d7a72" fontSize="10.5" textAnchor="middle">Month 2</text>

            {/* Month 3 */}
            <circle cx="430" cy="65" r="4" fill="#006948" stroke="#ffffff" strokeWidth="2" />
            <text x="430" y="200" fill="#6d7a72" fontSize="10.5" textAnchor="middle">Month 3</text>

            {/* Month 4 Goal Met */}
            <circle cx="550" cy="30" r="6" fill="#006948" stroke="#ffffff" strokeWidth="2.5" />
            <text x="550" y="200" fill="#006948" fontSize="10.5" fontWeight="bold" textAnchor="middle">Dec (Goal)</text>

            {/* Tooltip Badge at target */}
            <g transform="translate(465, 8)">
              <rect width="90" height="20" rx="4" fill="#006948" />
              <text x="45" y="14" fill="#ffffff" fontSize="9.5" fontWeight="700" textAnchor="middle">
                🎯 ৳100,000 Met
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-on-surface-variant">
        <span>Projection Model: Compound Inflow &amp; Auto-Transfer Velocity</span>
        <span className="font-semibold text-primary">
          Dec 12–28 window (98% confidence)
        </span>
      </div>
    </motion.section>
  );
}
