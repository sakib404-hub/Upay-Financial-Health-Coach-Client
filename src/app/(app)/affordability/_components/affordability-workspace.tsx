"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Wallet,
  TrendingUp,
  CreditCard,
  Clock,
  RotateCcw,
  CheckCircle2,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export function AffordabilityWorkspace() {
  const [itemName, setItemName] = useState("MacBook Air M2 Tech Setup");
  const [purchaseAmount, setPurchaseAmount] = useState(35000);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sinkingFundCreated, setSinkingFundCreated] = useState(false);

  const presets = [15000, 35000, 50000, 75000];

  // Dynamic Financial Context
  const availableBalance = 48500;
  const monthlySurplus = 33750;
  const commitments = 22500;

  // Impact metrics
  const remainingLiquid = Math.max(availableBalance - purchaseAmount, 0);
  const surplusPctUsed = Math.min(Math.round((purchaseAmount / availableBalance) * 100), 100);
  const daysDelayed = Math.round((purchaseAmount / 7000) * 25);
  const recoveryMonths = (purchaseAmount / 12000).toFixed(1);

  // Status rating
  let statusBadgeColor = "bg-amber-100 text-amber-900 border-amber-200";
  let statusText = "Moderate Impact";
  let StatusIcon = AlertTriangle;
  let statusLevel: "safe" | "moderate" | "high" = "moderate";

  if (purchaseAmount <= 15000) {
    statusBadgeColor = "bg-secondary-container text-on-secondary-container border-primary/20";
    statusText = "Safe Purchase";
    StatusIcon = ShieldCheck;
    statusLevel = "safe";
  } else if (purchaseAmount > 45000) {
    statusBadgeColor = "bg-rose-100 text-rose-900 border-rose-200";
    statusText = "High Strain Risk";
    StatusIcon = ShieldAlert;
    statusLevel = "high";
  }

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="space-y-7">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
          <span>Tools</span>
          <span className="text-outline">/</span>
          <span className="text-primary font-medium">Affordability Assessment</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
          Affordability Assessment
        </h1>
        <p className="text-sm text-on-surface-variant mt-0.5">
          Evaluate large planned purchases before you spend to ensure your emergency buffer remains resilient.
        </p>
      </motion.div>

      {/* Hero Section: Inputs & Meter (12 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* Left: Input Panel (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span>Planned Purchase Details</span>
              </h3>
              <span className="text-xs text-outline">Upay Affordability Engine</span>
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                What are you planning to buy?
              </label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g. MacBook Air, Motorbike down payment, AC unit"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container/40 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Purchase Amount
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-2xl font-bold text-outline select-none">৳</div>
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-surface-container/40 border border-outline-variant/40 rounded-xl text-2xl font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Preset Chips */}
              <div className="flex items-center justify-between text-xs text-outline mt-2.5">
                <span>Quick Presets:</span>
                <div className="flex gap-2">
                  {presets.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setPurchaseAmount(amt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        purchaseAmount === amt
                          ? "bg-primary text-on-primary shadow-xs"
                          : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                      }`}
                    >
                      ৳{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-xs text-on-surface-variant">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>
              This calculation tests impacts against your <strong>6-month emergency cushion</strong> and monthly bills.
            </span>
          </div>
        </motion.div>

        {/* Right: Affordability Meter Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-5 rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between items-center text-center space-y-4"
        >
          <div className="w-full flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-outline">
              Affordability Gauge
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusBadgeColor}`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              <span>{statusText}</span>
            </span>
          </div>

          {/* Semicircle SVG Gauge */}
          <div className="relative w-48 h-28 flex items-end justify-center overflow-hidden my-2">
            <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 160 160">
              {/* Background semi track */}
              <circle
                cx="80"
                cy="80"
                r="64"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray="201 201"
                className="text-surface-container"
              />
              {/* Active semi track */}
              <circle
                cx="80"
                cy="80"
                r="64"
                fill="none"
                stroke={statusLevel === "safe" ? "#006948" : statusLevel === "moderate" ? "#d97706" : "#e11d48"}
                strokeWidth="12"
                strokeDasharray="201 201"
                strokeDashoffset={201 - (surplusPctUsed / 100) * 201}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Inner Percentage Readout */}
            <div className="absolute bottom-1 flex flex-col items-center">
              <span className="text-3xl font-black text-on-surface tracking-tight">
                {surplusPctUsed}%
              </span>
              <p className="text-[10px] text-outline font-medium">of liquid reserve utilized</p>
            </div>
          </div>

          {/* Safe Boundary Box */}
          <div className="w-full bg-surface-container/30 rounded-xl p-3 border border-outline-variant/30 space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-on-surface-variant">Safe Reserve Boundary: ৳24,000</span>
              <span className={statusLevel === "safe" ? "text-primary" : "text-amber-700"}>
                Remaining: ৳{remainingLiquid.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  statusLevel === "safe"
                    ? "bg-primary"
                    : statusLevel === "moderate"
                    ? "bg-amber-500"
                    : "bg-rose-500"
                }`}
                style={{ width: `${surplusPctUsed}%` }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Personal Financial Context Grid (5 Cards) */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
          <span>Personal Financial Context</span>
          <span className="text-outline font-normal">(Based on active Upay ledger)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Available Balance */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl glass-card border border-white/80 p-4 shadow-glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-xs font-medium">Available Balance</span>
              <div className="w-6 h-6 rounded-md bg-secondary-container/50 text-primary flex items-center justify-center">
                <Wallet className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-on-surface tracking-tight">
                ৳{availableBalance.toLocaleString()}
              </p>
              <p className="text-[10px] text-outline mt-0.5">Liquid wallet &amp; deposits</p>
            </div>
          </motion.div>

          {/* Card 2: Monthly Surplus */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="rounded-2xl glass-card border border-white/80 p-4 shadow-glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-xs font-medium">Monthly Surplus</span>
              <div className="w-6 h-6 rounded-md bg-secondary-container/50 text-primary flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-on-surface tracking-tight">
                ৳{monthlySurplus.toLocaleString()}
              </p>
              <p className="text-[10px] text-outline mt-0.5">Regular net savings per cycle</p>
            </div>
          </motion.div>

          {/* Card 3: Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="rounded-2xl glass-card border border-white/80 p-4 shadow-glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-xs font-medium">Fixed Obligations</span>
              <div className="w-6 h-6 rounded-md bg-surface-container text-on-surface-variant flex items-center justify-center">
                <CreditCard className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-on-surface tracking-tight">
                ৳{commitments.toLocaleString()}
              </p>
              <p className="text-[10px] text-outline mt-0.5">Recurring monthly bills</p>
            </div>
          </motion.div>

          {/* Card 4: Impact on Goals */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="rounded-2xl glass-card border border-amber-200/80 p-4 shadow-glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-xs font-medium text-amber-800">Goal Impact</span>
              <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-amber-800 tracking-tight">
                +{daysDelayed} Days
              </p>
              <p className="text-[10px] text-amber-800/80 mt-0.5">Extends Emergency milestone</p>
            </div>
          </motion.div>

          {/* Card 5: Estimated Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="rounded-2xl glass-card border border-white/80 p-4 shadow-glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-outline mb-2">
              <span className="text-xs font-medium">Recovery Time</span>
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                <RotateCcw className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-on-surface tracking-tight">
                {recoveryMonths} Months
              </p>
              <p className="text-[10px] text-outline mt-0.5">To restore liquid safety margin</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explanatory Coach Guidance Section */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        whileHover={{ y: -2 }}
        className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card"
      >
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-xs">
            <Bot className="w-6 h-6" />
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-on-surface">
                Coach Assessment: {statusLevel === "safe" ? "This purchase fits comfortably within your liquidity buffer." : "This purchase may slow down your current savings roadmap."}
              </h3>
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide border ${statusBadgeColor}`}>
                {statusText}
              </span>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              Paying <strong>৳{purchaseAmount.toLocaleString()} upfront</strong> leaves your liquid wallet balance at{" "}
              <strong>৳{remainingLiquid.toLocaleString()}</strong>. While you remain solvent, our recommendation is to preserve a minimum liquid safety floor of <strong>৳20,000</strong> for sudden medical or family obligations in Dhaka.
            </p>

            {/* Sinking Fund Suggestion Box */}
            <div className="mt-4 p-4 rounded-xl bg-surface-container/40 border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Recommended Alternative: 2-Month Sinking Fund
                </span>
                <p className="text-xs text-on-surface-variant">
                  Save <strong>৳{Math.round(purchaseAmount / 2).toLocaleString()}/month</strong> across the next <strong>2 months</strong>. You will buy this completely stress-free without stalling your Emergency Fund goal.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    setSinkingFundCreated(true);
                    triggerToast(`Created a 2-Month Sinking Fund for "${itemName}"!`);
                  }}
                  disabled={sinkingFundCreated}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs active:scale-95 ${
                    sinkingFundCreated
                      ? "bg-secondary-container text-on-secondary-container border border-primary/30"
                      : "bg-primary hover:bg-primary-container text-on-primary"
                  }`}
                >
                  {sinkingFundCreated ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span>Sinking Fund Created</span>
                    </span>
                  ) : (
                    <span>Create 2-Month Sinking Fund</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer Regulatory Note */}
      <footer className="pt-2 pb-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between text-xs text-outline gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>Upay Affordability Engine assesses real-time cash flow &amp; commitments. Not credit underwriting.</span>
        </div>
        <Link href="/simulator" className="text-primary hover:underline font-semibold flex items-center gap-1">
          <span>Model in What-if Simulator</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </footer>
    </div>
  );
}
