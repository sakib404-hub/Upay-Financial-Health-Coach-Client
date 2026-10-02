"use client";

import Link from "next/link";
import { Shield, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function SavingsPlanHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -2 }}
      className="rounded-2xl glass-card-elevated border border-white/85 p-6 sm:p-7 shadow-glass-card relative overflow-hidden"
    >
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary-container/70 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                Primary Target Plan
              </span>
              <span className="text-xs font-semibold text-primary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Active Execution
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-on-surface tracking-tight mt-1">
              Emergency Fund Safety Shield (৳100,000)
            </h2>
            <p className="text-xs text-on-surface-variant max-w-xl mt-1 leading-relaxed">
              Targeted sprint allocating ৳7,000/mo to establish 6 months of living expenses in Dhaka. Currently at{" "}
              <strong className="text-on-surface font-semibold">৳72,000 (72% complete)</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto">
          <Link
            href="/ai-coach?prompt=How+can+I+optimize+my+monthly+savings+plan+to+finish+even+faster"
            className="h-10 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <Bot className="w-4 h-4" />
            <span>Ask Coach to Optimize Plan</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
