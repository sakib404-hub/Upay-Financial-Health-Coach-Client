"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Check, ArrowDownLeft, ArrowUpRight, RefreshCw } from "lucide-react";

export interface NewTransactionPayload {
  type: "expense" | "income" | "transfer";
  amount: number;
  merchant: string;
  category: string;
  account: string;
  date: string;
  notes?: string;
}

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction?: (transaction: NewTransactionPayload) => void;
}

export function AddTransactionModal({ isOpen, onClose }: AddTransactionModalProps) {
  const [type, setType] = useState<"expense" | "income" | "transfer">("expense");
  const [amount, setAmount] = useState("");
  const [merchant, setMerchant] = useState("");
  const [category, setCategory] = useState("Food & Dining");
  const [account, setAccount] = useState("bKash");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Food & Dining",
    "Shopping",
    "Transportation",
    "Utilities & Bills",
    "Groceries",
    "Healthcare",
    "Entertainment",
    "Salary",
    "Freelance",
    "Investment",
  ];

  const accounts = ["bKash (017••••982)", "Nagad (018••••412)", "EBL Skybanking", "City Bank", "Cash Wallet"];

  const popularMerchants = [
    { name: "Shwapno Superstore", cat: "Food & Dining" },
    { name: "Pathao Rides", cat: "Transportation" },
    { name: "Chaldal Express", cat: "Groceries" },
    { name: "Daraz Bangladesh", cat: "Shopping" },
    { name: "DESCO Electricity", cat: "Utilities & Bills" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !merchant) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset form
      setAmount("");
      setMerchant("");
      setNotes("");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl border border-outline-variant/30 shadow-2xl p-6 sm:p-7 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Record New Transaction</h3>
                  <p className="text-xs text-on-surface-variant">Update your real-time ledger</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Check className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-on-surface">Transaction Logged!</h4>
                <p className="text-xs text-on-surface-variant">
                  ৳{amount} recorded for {merchant}. AI Coach will analyze the impact shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Transaction Type Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setType("expense")}
                    className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      type === "expense"
                        ? "bg-rose-50 text-rose-700 shadow-sm border border-rose-200"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>Expense</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("income")}
                    className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      type === "income"
                        ? "bg-emerald-50 text-primary shadow-sm border border-emerald-200"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <ArrowDownLeft className="w-3.5 h-3.5" />
                    <span>Income</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("transfer")}
                    className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                      type === "transfer"
                        ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-200"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Transfer</span>
                  </button>
                </div>

                {/* Amount Input (BDT) */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    Amount (৳ BDT) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-base font-bold text-primary">৳</span>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 1500"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-base font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Merchant / Description */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    Merchant / Payee <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shwapno Superstore, Pathao, Salary..."
                    value={merchant}
                    onChange={(e) => setMerchant(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  {/* Quick Merchant Suggestions */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {popularMerchants.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => {
                          setMerchant(item.name);
                          setCategory(item.cat);
                        }}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-surface-container-high/60 hover:bg-secondary-container hover:text-primary transition-colors text-on-surface-variant font-medium"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category & Account (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">Account</label>
                    <select
                      value={account}
                      onChange={(e) => setAccount(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      {accounts.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                {/* Notes (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Notes (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Split with Farhan, Weekend dinner..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold primary-btn-bevel shadow-md shadow-primary/20 transition-all active:scale-95"
                  >
                    Confirm &amp; Log
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
