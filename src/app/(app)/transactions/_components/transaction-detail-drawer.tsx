"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Bot, Calendar, CreditCard, Tag, ArrowDownLeft, ArrowUpRight } from "lucide-react";

export interface TransactionItem {
  id: string;
  initials: string;
  avatarColor: string;
  merchant: string;
  detail: string;
  category: string;
  categoryBadge: string;
  date: string;
  time: string;
  channel: string;
  amount: number;
  isIncome: boolean;
  status: "verified" | "pending" | "flagged";
  txnRef: string;
  notes?: string;
  coachInsight: string;
  account: string;
}

interface TransactionDetailDrawerProps {
  transaction: TransactionItem | null;
  onClose: () => void;
}

export function TransactionDetailDrawer({ transaction, onClose }: TransactionDetailDrawerProps) {
  if (!transaction) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Slide-Over Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-md bg-surface-container-lowest/95 backdrop-blur-2xl border-l border-outline-variant/30 shadow-2xl p-6 sm:p-7 flex flex-col justify-between z-10 overflow-y-auto"
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Transaction Receipt
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-primary">
                  <ShieldCheck className="w-3 h-3 text-primary" />
                  Verified
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Merchant Avatar & Big Amount */}
            <div className="text-center py-4 space-y-2">
              <div
                className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-extrabold text-lg shadow-sm ${transaction.avatarColor}`}
              >
                {transaction.initials}
              </div>
              <h2 className="text-xl font-extrabold text-on-surface tracking-tight">
                {transaction.merchant}
              </h2>
              <p className="text-xs text-on-surface-variant font-medium">{transaction.detail}</p>
              <div
                className={`text-3xl sm:text-4xl font-black pt-2 tracking-tight ${
                  transaction.isIncome ? "text-primary" : "text-rose-600"
                }`}
              >
                {transaction.isIncome ? "+" : "-"}৳{transaction.amount.toLocaleString("en-BD")}
              </div>
            </div>

            {/* AI Coach Contextual Insight */}
            <div className="p-4 rounded-2xl bg-secondary-container/40 border border-primary/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                <Bot className="w-4 h-4 text-primary" />
                <span>Coach Intelligence</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {transaction.coachInsight}
              </p>
            </div>

            {/* Transaction Metadata Grid */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
                <span className="text-outline flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Date &amp; Time
                </span>
                <span className="font-bold text-on-surface">
                  {transaction.date} • {transaction.time}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
                <span className="text-outline flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Category
                </span>
                <span className={`font-semibold px-2 py-0.5 rounded-md ${transaction.categoryBadge}`}>
                  {transaction.category}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
                <span className="text-outline flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  Account / Method
                </span>
                <span className="font-bold text-on-surface">{transaction.account}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-outline-variant/20">
                <span className="text-outline">Transaction Type</span>
                <span className="font-semibold flex items-center gap-1 text-on-surface">
                  {transaction.isIncome ? (
                    <>
                      <ArrowDownLeft className="w-3.5 h-3.5 text-primary" />
                      <span>Credit Inflow</span>
                    </>
                  ) : (
                    <>
                      <ArrowUpRight className="w-3.5 h-3.5 text-rose-600" />
                      <span>Debit Outflow</span>
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-outline">Reference Hash</span>
                <span className="font-mono text-[11px] text-outline font-semibold">
                  {transaction.txnRef}
                </span>
              </div>
            </div>

            {/* Notes if present */}
            {transaction.notes && (
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-xs">
                <span className="text-outline font-semibold block mb-0.5">Notes:</span>
                <p className="text-on-surface-variant font-medium">{transaction.notes}</p>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="pt-6 border-t border-outline-variant/20 flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-xs font-bold text-on-surface transition-colors"
            >
              Close Receipt
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
