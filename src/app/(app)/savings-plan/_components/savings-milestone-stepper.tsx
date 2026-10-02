"use client";

import { motion } from "framer-motion";

export function SavingsMilestoneStepper() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base font-bold text-on-surface">
            Milestone Stepper (4-Month Sprint Trajectory)
          </h3>
          <p className="text-xs text-on-surface-variant">
            Progressive balance accumulation of +৳7,000 monthly contributions toward final target
          </p>
        </div>
        <div className="text-xs text-outline font-medium">
          Current Baseline: <span className="text-on-surface font-bold">৳72,000</span>
        </div>
      </div>

      {/* Stepper Grid with Connector */}
      <div className="relative mt-4">
        {/* Horizontal Connector Line (hidden on mobile) */}
        <div className="absolute top-5 left-10 right-10 h-1 bg-surface-container z-0 hidden md:block">
          <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: "25%" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {/* Month 1: Current */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-secondary-container/40 backdrop-blur-md border-2 border-primary/40 rounded-2xl p-4 flex flex-col justify-between relative shadow-xs"
          >
            <span className="absolute -top-2.5 right-3 bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Current
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs ring-4 ring-primary/20">
                  M1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Month 1 (Sep)</h4>
                  <span className="text-[11px] text-primary font-bold">+৳7,000 deposit</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/20">
                <span className="text-[11px] text-on-surface-variant block">Accumulated Balance</span>
                <span className="text-lg font-black text-on-surface tracking-tight">৳79,000</span>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-on-secondary-container bg-secondary-container font-semibold px-2 py-1 rounded">
              Automated deposit scheduled Sep 28
            </div>
          </motion.div>

          {/* Month 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass-card border border-outline-variant/30 rounded-2xl p-4 flex flex-col justify-between hover:border-outline-variant/60 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs border border-outline-variant/30">
                  M2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Month 2 (Oct)</h4>
                  <span className="text-[11px] text-outline font-medium">+৳7,000 deposit</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30">
                <span className="text-[11px] text-outline block">Accumulated Balance</span>
                <span className="text-lg font-bold text-on-surface tracking-tight">৳86,000</span>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-outline bg-surface-container/50 font-medium px-2 py-1 rounded">
              Yield milestone: +৳384 interest
            </div>
          </motion.div>

          {/* Month 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass-card border border-outline-variant/30 rounded-2xl p-4 flex flex-col justify-between hover:border-outline-variant/60 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs border border-outline-variant/30">
                  M3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Month 3 (Nov)</h4>
                  <span className="text-[11px] text-outline font-medium">+৳7,000 deposit</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30">
                <span className="text-[11px] text-outline block">Accumulated Balance</span>
                <span className="text-lg font-bold text-on-surface tracking-tight">৳93,000</span>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-outline bg-surface-container/50 font-medium px-2 py-1 rounded">
              Shields 5.5 months living buffer
            </div>
          </motion.div>

          {/* Month 4: Goal Completion */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-secondary-container/50 to-emerald-50 backdrop-blur-md border border-primary/30 rounded-2xl p-4 flex flex-col justify-between relative shadow-sm"
          >
            <span className="absolute -top-2.5 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Goal Reached
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-emerald-100">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">Month 4 (Dec)</h4>
                  <span className="text-[11px] text-emerald-700 font-bold">+৳7,000 deposit</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200/60">
                <span className="text-[11px] text-emerald-700 block font-medium">Final Goal Met</span>
                <span className="text-xl font-black text-on-surface tracking-tight">৳100,000</span>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-emerald-900 bg-emerald-100/80 font-bold px-2 py-1 rounded flex items-center gap-1">
              <span>🎉 Full financial resilience met</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
