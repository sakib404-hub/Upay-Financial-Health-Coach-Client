"use client";

import { ArrowDownLeft, ArrowUpRight, PiggyBank, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface TransactionSummaryCardsProps {
  totalIncome: number;
  totalExpenses: number;
  netCashflow: number;
}

export function TransactionSummaryCards({
  totalIncome,
  totalExpenses,
  netCashflow,
}: TransactionSummaryCardsProps) {
  const expenseRatio = Math.round((totalExpenses / totalIncome) * 100);
  const retainedRatio = Math.round((netCashflow / totalIncome) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
      {/* 1. Total Income */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:shadow-md transition-all"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Total Income
          </span>
          <div className="h-9 w-9 rounded-xl bg-secondary-container/50 text-primary flex items-center justify-center border border-primary/20">
            <ArrowDownLeft className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-on-surface tracking-tight">
            ৳{totalIncome.toLocaleString("en-BD")}
          </span>
          <span className="text-xs font-semibold text-primary bg-secondary-container px-2 py-0.5 rounded-full border border-primary/20 flex items-center gap-0.5">
            +12.4%
          </span>
        </div>
        <p className="text-xs text-outline mt-2 font-medium flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
          2 regular inflow sources verified this month
        </p>
      </motion.div>

      {/* 2. Total Expenses */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:shadow-md transition-all"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Total Expenses
          </span>
          <div className="h-9 w-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-on-surface tracking-tight">
            ৳{totalExpenses.toLocaleString("en-BD")}
          </span>
          <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full border border-outline-variant/30">
            {expenseRatio}% of Income
          </span>
        </div>
        <p className="text-xs text-primary mt-2 font-medium flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
          On track with 50/30/20 guideline
        </p>
      </motion.div>

      {/* 3. Net Cash Flow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.16 }}
        className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:shadow-md transition-all border-primary/30 bg-gradient-to-br from-surface-container-lowest via-surface-container-lowest to-secondary-container/20"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Net Cash Flow
          </span>
          <div className="h-9 w-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200">
            <PiggyBank className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-primary tracking-tight">
            +৳{netCashflow.toLocaleString("en-BD")}
          </span>
          <span className="text-xs font-bold text-primary bg-secondary-container px-2 py-0.5 rounded-full">
            Surplus
          </span>
        </div>
        <p className="text-xs text-on-surface-variant mt-2 font-medium flex items-center gap-1.5">
          <strong className="text-on-surface">{retainedRatio}%</strong> of total monthly income retained
        </p>
      </motion.div>
    </div>
  );
}
