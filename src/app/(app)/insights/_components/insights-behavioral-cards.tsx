"use client";

import Link from "next/link";
import { Clock, Repeat, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function InsightsBehavioralCards() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Behavioral Intelligence Patterns</span>
        </h2>
        <span className="text-xs text-outline">Updated 2 hours ago from 42 ledger entries</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Behavioral Card 1: Dining Pattern */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-l-4 border-l-amber-500 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Dining Pattern</span>
              </span>
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded-full">
                Fri–Sun Peak
              </span>
            </div>

            <h3 className="text-base font-bold text-on-surface mb-1.5 leading-snug">
              You spend significantly more on dining during weekends.
            </h3>

            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Weekend restaurant and Foodpanda delivery accounts for{" "}
              <strong className="text-on-surface font-semibold">64% of total dining</strong> expenditure (avg. ৳1,420/order vs ৳450 on weekdays).
            </p>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
            <span className="text-outline">
              Weekend Total: <strong className="text-on-surface">৳5,408</strong>
            </span>
            <Link
              href="/transactions?category=Food+%26+Dining"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>View orders</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* Behavioral Card 2: Recurring Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-l-4 border-l-blue-500 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1.5">
                <Repeat className="w-3.5 h-3.5 text-blue-600" />
                <span>Recurring Expenses</span>
              </span>
              <span className="text-[11px] font-semibold text-blue-800 bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded-full">
                Fixed Outflows
              </span>
            </div>

            <h3 className="text-base font-bold text-on-surface mb-1.5 leading-snug">
              You have 4 recurring monthly commitments.
            </h3>

            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Fixed monthly obligations total{" "}
              <strong className="text-on-surface font-semibold">৳8,650</strong> (DESCO electricity, Dot Internet Fiber, Netflix, and fitness membership) representing 27.6% of spending.
            </p>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
            <span className="text-outline">
              Next due: <strong className="text-on-surface">Oct 05 (WiFi)</strong>
            </span>
            <Link
              href="/transactions?type=expense"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>Manage bills</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* Behavioral Card 3: Spending Change Surge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 border-l-4 border-l-rose-500 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wide flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>Spending Surge Alert</span>
              </span>
              <span className="text-[11px] font-semibold text-rose-800 bg-rose-100/70 border border-rose-200 px-2 py-0.5 rounded-full">
                +16% Spike
              </span>
            </div>

            <h3 className="text-base font-bold text-on-surface mb-1.5 leading-snug">
              Shopping spending increased 16% compared with last month.
            </h3>

            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Purchases from Daraz and Aarong reached{" "}
              <strong className="text-on-surface font-semibold">৳6,250</strong> vs ৳5,380 in August. ৳3,800 remains safe for discretionary buffers.
            </p>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
            <span className="text-outline">
              Variance: <strong className="text-rose-600 font-bold">+৳870</strong>
            </span>
            <Link
              href="/ai-coach?prompt=Why+did+my+shopping+spending+spike+16+percent+this+month"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>Analyze trend</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
