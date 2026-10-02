"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  PiggyBank,
  Search,
  ShieldCheck,
  Laptop,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Bot,
  Gauge,
  TrendingUp,
  Target,
  DollarSign,
  Building,
  HeartHandshake,
  CreditCard,
} from "lucide-react";

interface FocusOption {
  id: string;
  icon: typeof PiggyBank;
  title: string;
  description: string;
}

const focusOptions: FocusOption[] = [
  {
    id: "save-more",
    icon: PiggyBank,
    title: "Save more every month",
    description: "Build a consistent surplus without feeling deprived of daily comforts.",
  },
  {
    id: "plug-leaks",
    icon: Search,
    title: "Plug mystery expense leaks",
    description: "Identify where cash vanishes between dining, rides, and impulsive spending.",
  },
  {
    id: "emergency-buffer",
    icon: ShieldCheck,
    title: "Build emergency survival buffer",
    description: "Establish a 3 to 6-month safety net for unexpected medical or family needs.",
  },
  {
    id: "major-goal",
    icon: Laptop,
    title: "Plan for a major purchase / milestone",
    description: "Sinking fund for a laptop, Hajj pilgrimage, wedding, or home deposit.",
  },
];

export function OnboardingWizard() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || "";

  const [step, setStep] = useState(1);
  const [selectedFocus, setSelectedFocus] = useState<string>("save-more");

  // Step 2: Income
  const [monthlyIncome, setMonthlyIncome] = useState<number>(65000);
  const [salaryCycle, setSalaryCycle] = useState<string>("1-5");
  const [incomeSource, setIncomeSource] = useState<string>("bank");

  // Step 3: Fixed commitments
  const [rent, setRent] = useState<number>(20000);
  const [familySupport, setFamilySupport] = useState<number>(8000);
  const [groceries, setGroceries] = useState<number>(12000);
  const [emi, setEmi] = useState<number>(0);

  // Step 4: First goal
  const [goalName, setGoalName] = useState<string>("Emergency Fund");
  const [goalTarget, setGoalTarget] = useState<number>(60000);
  const [goalMonths, setGoalMonths] = useState<number>(6);

  // Calculations for Step 5
  const totalEssentials = rent + familySupport + groceries + emi;
  const surplus = Math.max(0, monthlyIncome - totalEssentials);
  const recommendedSavings = Math.round(surplus * 0.75);
  const savingsPerMonthNeeded = Math.round(goalTarget / Math.max(1, goalMonths));

  // Health score calculation
  const surplusRatio = monthlyIncome > 0 ? (surplus / monthlyIncome) * 100 : 0;
  const healthScore = Math.min(
    95,
    Math.max(45, Math.round(50 + surplusRatio * 1.2 - (emi > 0 ? 10 : 0)))
  );

  const nextStep = () => setStep((prev) => Math.min(5, prev + 1));
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  return (
    <div className="max-w-3xl mx-auto w-full space-y-8">
      {/* Progress Bar & Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-outline uppercase tracking-wider">
          <span>Step {step} of 5</span>
          <span className="text-primary font-bold">
            {step === 1 && "Primary Objective"}
            {step === 2 && "Income Profile"}
            {step === 3 && "Essential Commitments"}
            {step === 4 && "Milestone Goal"}
            {step === 5 && "Your Personalized Plan"}
          </span>
        </div>

        {/* Multi-step indicator bar */}
        <div className="w-full bg-outline-variant/30 h-2 rounded-full overflow-hidden flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-full flex-1 transition-all duration-300 rounded-full ${
                s <= step ? "bg-primary" : "bg-outline-variant/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1: PRIMARY FOCUS */}
      {step === 1 && (
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 space-y-6 border border-white/85 shadow-glass-card">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Personalized Orientation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              What would you like your AI Coach to help you solve first?
            </h2>
            <p className="text-sm text-on-surface-variant">
              We calibrate every recommendation and chart around your primary life objective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {focusOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedFocus === opt.id;
              return (
                <motion.div
                  key={opt.id}
                  onClick={() => setSelectedFocus(opt.id)}
                  whileHover={{ y: -4, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-colors duration-150 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? "bg-secondary-container/40 border-primary ring-2 ring-primary/30 shadow-md"
                      : "bg-surface-container-lowest/80 border-outline-variant/30 hover:border-primary/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform ${
                        isSelected
                          ? "bg-primary text-on-primary scale-105"
                          : "bg-secondary-container/70 text-primary"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-on-surface">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {initialPrompt && (
            <div className="p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-start gap-2.5 text-xs text-on-surface">
              <Bot className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Your initial query:</strong> &ldquo;{initialPrompt}&rdquo; has been saved to your
                AI Coach session.
              </span>
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-md active:scale-95 transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: INCOME PROFILE */}
      {step === 2 && (
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 space-y-6 border border-white/85 shadow-glass-card">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Financial Baseline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              What is your approximate monthly take-home income?
            </h2>
            <p className="text-sm text-on-surface-variant">
              Denominated in Bangladeshi Taka (৳ BDT). Kept strictly confidential under zero-knowledge storage.
            </p>
          </div>

          {/* Quick presets */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Quick Presets (৳ BDT)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[35000, 65000, 100000, 150000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlyIncome(preset)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    monthlyIncome === preset
                      ? "bg-primary text-on-primary border-primary shadow-xs"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:border-primary/40"
                  }`}
                >
                  ৳{preset.toLocaleString("en-BD")}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Exact Net Monthly Income
            </label>
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
              <span className="text-base font-bold text-primary">৳</span>
              <input
                type="number"
                value={monthlyIncome || ""}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                placeholder="65,000"
                className="w-full bg-transparent border-none text-base font-bold text-on-surface focus:outline-none"
              />
              <span className="text-xs font-medium text-outline">BDT / month</span>
            </div>
          </div>

          {/* Salary arrival window */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              When does your primary salary arrive?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "1-5", label: "1st to 5th of Month" },
                { id: "6-10", label: "6th to 10th of Month" },
                { id: "irregular", label: "Variable / Freelancer" },
              ].map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSalaryCycle(cycle.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    salaryCycle === cycle.id
                      ? "bg-secondary-container text-on-secondary-container border-secondary font-bold"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:bg-white"
                  }`}
                >
                  {cycle.label}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Deposit Channel */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Primary Payout Channel
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "bank", label: "Bank Account Transfer" },
                { id: "mfs", label: "bKash / Nagad Wallet" },
                { id: "cash", label: "Cash / Mixed Disbursal" },
              ].map((channel) => (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setIncomeSource(channel.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    incomeSource === channel.id
                      ? "bg-secondary-container text-on-secondary-container border-secondary font-bold"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:bg-white"
                  }`}
                >
                  {channel.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-md active:scale-95 transition-all"
            >
              <span>Next: Commitments</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: ESSENTIAL COMMITMENTS */}
      {step === 3 && (
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 space-y-6 border border-white/85 shadow-glass-card">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Fixed Outflows
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Tell us about your essential monthly commitments.
            </h2>
            <p className="text-sm text-on-surface-variant">
              These are non-negotiable living costs. Upay protects these buffers before advising any savings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Rent & Utilities */}
            <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                <Building className="w-4 h-4 text-primary" />
                <span>Rent &amp; Utilities (DESCO, WASA)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="text-sm font-bold text-primary">৳</span>
                <input
                  type="number"
                  value={rent || ""}
                  onChange={(e) => setRent(Number(e.target.value))}
                  className="w-full bg-transparent border-none text-sm font-bold text-on-surface focus:outline-none"
                />
              </div>
            </div>

            {/* Family Support */}
            <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                <HeartHandshake className="w-4 h-4 text-primary" />
                <span>Family Support &amp; Remittances</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="text-sm font-bold text-primary">৳</span>
                <input
                  type="number"
                  value={familySupport || ""}
                  onChange={(e) => setFamilySupport(Number(e.target.value))}
                  className="w-full bg-transparent border-none text-sm font-bold text-on-surface focus:outline-none"
                />
              </div>
            </div>

            {/* Groceries & Meals */}
            <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>Household Food &amp; Groceries</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="text-sm font-bold text-primary">৳</span>
                <input
                  type="number"
                  value={groceries || ""}
                  onChange={(e) => setGroceries(Number(e.target.value))}
                  className="w-full bg-transparent border-none text-sm font-bold text-on-surface focus:outline-none"
                />
              </div>
            </div>

            {/* Debt / EMI */}
            <div className="p-4 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Loans or Credit Card EMI (if any)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <span className="text-sm font-bold text-primary">৳</span>
                <input
                  type="number"
                  value={emi || ""}
                  onChange={(e) => setEmi(Number(e.target.value))}
                  placeholder="0"
                  className="w-full bg-transparent border-none text-sm font-bold text-on-surface focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Quick Summary Pill */}
          <div className="p-4 rounded-2xl bg-secondary-container/40 border border-secondary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-medium text-on-secondary-container">
              Total Essentials: <strong>৳{totalEssentials.toLocaleString("en-BD")}</strong>
            </span>
            <span className="text-xs font-bold text-primary">
              Projected Monthly Surplus: ৳{surplus.toLocaleString("en-BD")}
            </span>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-md active:scale-95 transition-all"
            >
              <span>Next: Set Goal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: FIRST GOAL */}
      {step === 4 && (
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 space-y-6 border border-white/85 shadow-glass-card">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Target Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Let&apos;s configure your first financial milestone.
            </h2>
            <p className="text-sm text-on-surface-variant">
              Every wealthy journey starts with one clear, measurable target.
            </p>
          </div>

          {/* Goal Name Presets */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Goal Objective
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "3-Month Emergency Fund",
                "New Laptop / Workstation",
                "Eid Family Festival Buffer",
                "Hajj / Umrah Fund",
                "Home Deposit / Savings",
              ].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoalName(g)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    goalName === g
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:bg-white"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Goal Target Amount */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Target Amount (৳ BDT)
            </label>
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
              <span className="text-base font-bold text-primary">৳</span>
              <input
                type="number"
                value={goalTarget || ""}
                onChange={(e) => setGoalTarget(Number(e.target.value))}
                className="w-full bg-transparent border-none text-base font-bold text-on-surface focus:outline-none"
              />
            </div>
          </div>

          {/* Target Timeline */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
              Timeline Horizon
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { months: 3, label: "3 Months (Fast)" },
                { months: 6, label: "6 Months (Balanced)" },
                { months: 12, label: "12 Months (Steady)" },
              ].map((t) => (
                <button
                  key={t.months}
                  type="button"
                  onClick={() => setGoalMonths(t.months)}
                  className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    goalMonths === t.months
                      ? "bg-secondary-container text-on-secondary-container border-secondary font-bold"
                      : "bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant hover:bg-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projected Pace Indicator */}
          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-xs text-on-surface font-medium">
                Required Pace to hit target:
              </span>
            </div>
            <span className="text-sm font-bold text-primary">
              ৳{savingsPerMonthNeeded.toLocaleString("en-BD")} / month
            </span>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              onClick={nextStep}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-md active:scale-95 transition-all"
            >
              <span>Generate My Financial Plan</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: COMPLETED PLAN & AI SUMMARY */}
      {step === 5 && (
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 space-y-8 border border-white/85 shadow-glass-card">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>AI Coaching Blueprint Ready</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Here is your personal financial diagnosis.
            </h2>
            <p className="text-sm text-on-surface-variant">
              We&apos;ve formulated your cashflow ratios, health score, and goal allocation in Bangladeshi Taka.
            </p>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Health Score */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-2 shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-outline uppercase tracking-wider">
                  Health Index
                </span>
                <Gauge className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary">{healthScore} / 100</p>
                <span className="text-xs text-on-surface-variant mt-0.5 block">
                  {healthScore >= 75 ? "Strong Stability Buffer" : "Moderate Runway"}
                </span>
              </div>
            </motion.div>

            {/* Safe Monthly Savings */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-2 shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-outline uppercase tracking-wider">
                  Safe Monthly Savings
                </span>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">
                  ৳{recommendedSavings.toLocaleString("en-BD")}
                </p>
                <span className="text-xs text-on-surface-variant mt-0.5 block">
                  Without touching rent or food
                </span>
              </div>
            </motion.div>

            {/* Goal Projection */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between space-y-2 shadow-xs hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-outline uppercase tracking-wider">
                  Goal Completion
                </span>
                <Target className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-secondary font-mono">
                  {goalMonths} Mos
                </p>
                <span className="text-xs text-on-surface-variant mt-0.5 block">
                  ৳{goalTarget.toLocaleString("en-BD")} for {goalName}
                </span>
              </div>
            </motion.div>
          </div>

          {/* AI Coach Personalized Advice Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="p-6 rounded-2xl bg-surface-container-low border border-primary/20 space-y-3 shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xs">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-bold text-on-surface">
                Upay Coach First Strategic Insight
              </h4>
            </div>

            <p className="text-sm text-on-surface leading-relaxed">
              &ldquo;With an income of{" "}
              <strong className="text-on-surface font-bold">
                ৳{monthlyIncome.toLocaleString("en-BD")}
              </strong>{" "}
              and fixed outflows of{" "}
              <strong className="text-on-surface font-bold">
                ৳{totalEssentials.toLocaleString("en-BD")}
              </strong>
              , you have a healthy potential surplus of{" "}
              <strong className="text-primary font-bold">
                ৳{surplus.toLocaleString("en-BD")}
              </strong>
              . By committing ৳{savingsPerMonthNeeded.toLocaleString("en-BD")}/month to your{" "}
              <strong>{goalName}</strong>, you will reach your ৳{goalTarget.toLocaleString("en-BD")}{" "}
              target cleanly in {goalMonths} months without stress.&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/80 text-on-secondary-container">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Plan Saved to Profile
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant">
                Bank-Grade Protected
              </span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-lg active:scale-95 transition-all text-center"
            >
              <span>Explore Dashboard Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all text-center"
            >
              <span>Recalculate Assessment</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
