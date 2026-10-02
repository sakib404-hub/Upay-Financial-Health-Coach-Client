"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  RefreshCw,
  Sparkles,
  Gauge,
  Target,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";

interface WorkflowStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: typeof RefreshCw;
  dataSnippet: string;
  metricLabel: string;
  metricValue: string;
  color: string;
}

const steps: WorkflowStep[] = [
  {
    num: "01",
    title: "Transaction Data Ingestion",
    subtitle: "Raw feeds & notifications",
    description:
      "Captures SMS alerts from bKash, Nagad, Rocket, card swipes, and bank feeds in real time. Standardizes merchant names with bank-grade encryption and zero credential storage.",
    badge: "Encrypted Ingestion",
    icon: RefreshCw,
    dataSnippet: "bKash Txn ID 9A82J • ৳2,450 to Shwapno Superstore",
    metricLabel: "Sync Latency",
    metricValue: "< 1.2s Real-time",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    num: "02",
    title: "Spending Intelligence",
    subtitle: "Local merchant ML parsing",
    description:
      "Algorithmic model identifies local Dhaka/Chittagong vendors, filters recurring utilities (DESCO, DPDC, WASA), and isolates subtle lifestyle spending leaks before month-end.",
    badge: "98.4% Classification",
    icon: Sparkles,
    dataSnippet: "Classified: Household Essentials (Groceries & Nutrition)",
    metricLabel: "Accuracy Rate",
    metricValue: "98.4% Verified",
    color: "from-teal-500/20 to-emerald-500/10",
  },
  {
    num: "03",
    title: "Financial Health Scoring",
    subtitle: "Runway & debt diagnostics",
    description:
      "Calculates a dynamic 100-point wellness score measuring emergency runway months, debt-to-income ratio, and discretionary buffer safety without complex spreadsheets.",
    badge: "Health Index Score",
    icon: Gauge,
    dataSnippet: "Liquidity Ratio: 3.4 Months Runway • Surplus: ৳16,500",
    metricLabel: "Health Index",
    metricValue: "78 / 100 Safe",
    color: "from-emerald-600/20 to-teal-600/10",
  },
  {
    num: "04",
    title: "Dynamic Goal Sinking Funds",
    subtitle: "Milestone velocity tracking",
    description:
      "Allocates surplus into dedicated sinking funds for Hajj, laptop purchases, or Eid family gifts. Dynamically re-balances if an unexpected medical or household bill occurs.",
    badge: "Velocity Tracking",
    icon: Target,
    dataSnippet: "Target: ৳60,000 Emergency Buffer • Pace: ৳10,000 / mo",
    metricLabel: "Goal Velocity",
    metricValue: "On Schedule (6 Mos)",
    color: "from-teal-600/20 to-emerald-600/10",
  },
  {
    num: "05",
    title: "Conversational AI Guidance",
    subtitle: "24/7 proactive money coach",
    description:
      "Delivers instant clarity in natural English or conversational Bangla. Receive proactive mid-month nudges, affordability evaluations, and personalized guidance before you swipe.",
    badge: "24/7 Proactive Coach",
    icon: MessageSquare,
    dataSnippet: "“You have ৳7,200 discretionary buffer left for this week.”",
    metricLabel: "Response Latency",
    metricValue: "Instant Advice",
    color: "from-emerald-700/20 to-teal-700/10",
  },
];

export function WorkflowSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance step from left to right
  useEffect(() => {
    if (!isAutoPlaying || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, shouldReduceMotion]);

  const activeStep = steps[activeStepIndex];

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveStepIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveStepIndex((prev) => (prev + 1) % steps.length);
  };

  return (
    <section className="space-y-8" id="how-it-works">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <FadeInText direction="down">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            Interactive Progression
          </span>
        </FadeInText>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
          <AnimatedWords
            text="How Upay Financial Intelligence Works"
            highlightWords={["Financial", "Intelligence"]}
            delay={0.1}
          />
        </h2>

        <FadeInText direction="up" delay={0.2}>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Watch your money data travel through 5 intelligent stages from raw alerts to proactive guidance.
          </p>
        </FadeInText>
      </div>

      {/* CONNECTED HORIZONTAL PROGRESSION RAIL (LEFT TO RIGHT) */}
      <div className="max-w-4xl mx-auto px-2">
        <div className="relative flex items-center justify-between pb-2">
          {/* Background Connecting Rail */}
          <div className="absolute top-5 left-6 right-6 h-1 bg-outline-variant/30 -z-10 rounded-full" />

          {/* Animated Glowing Progress Beam (fills left to right) */}
          <motion.div
            className="absolute top-5 left-6 h-1 bg-gradient-to-r from-primary via-secondary to-primary-fixed rounded-full -z-10 shadow-sm"
            initial={false}
            animate={{
              width: `${(activeStepIndex / (steps.length - 1)) * 92}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
            }}
          />

          {/* 5 Step Indicator Nodes from Left to Right */}
          {steps.map((s, idx) => {
            const isCompleted = idx < activeStepIndex;
            const isCurrent = idx === activeStepIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className="group flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-200 shadow-md ${
                    isCurrent
                      ? "bg-primary text-on-primary ring-4 ring-primary/20 shadow-primary/30"
                      : isCompleted
                      ? "bg-secondary-container text-primary border border-primary/40"
                      : "bg-surface-container-high text-outline hover:text-on-surface border border-outline-variant/40"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4 text-primary" /> : s.num}
                </motion.div>

                <span
                  className={`text-[11px] font-semibold hidden sm:inline-block transition-colors ${
                    isCurrent ? "text-primary font-bold" : "text-outline group-hover:text-on-surface"
                  }`}
                >
                  Step {s.num}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE STAGE SPOTLIGHT CARD (WITH SPRING TRANSITIONS) */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-primary/25 shadow-xl">
          {/* Ambient Corner Glow */}
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.num}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
              }}
              className="space-y-6"
            >
              {/* Card Header & Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -15, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold shadow-md shadow-primary/20"
                  >
                    <activeStep.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-secondary-container">
                        Step {activeStep.num} of 05
                      </span>
                      <span className="text-xs font-semibold text-outline">
                        {activeStep.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-on-surface tracking-tight mt-0.5">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                {/* Auto-Play Toggle & Step Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-card hover:bg-white text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-primary" />
                        <span>Auto-Flowing</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-primary" />
                        <span>Play Flow</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      className="w-8 h-8 rounded-full glass-card hover:bg-white flex items-center justify-center text-on-surface hover:text-primary transition-colors active:scale-95"
                      title="Previous Step"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-colors active:scale-95 shadow-xs"
                      title="Next Step"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {activeStep.description}
                  </p>

                  {/* Simulated Data Snippet */}
                  <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-mono text-on-surface">
                      {activeStep.dataSnippet}
                    </span>
                  </div>
                </div>

                {/* Right Metric Pill */}
                <div className="lg:col-span-5 flex flex-col justify-center p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-1.5">
                  <span className="text-xs font-semibold text-outline uppercase tracking-wider">
                    {activeStep.metricLabel}
                  </span>
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary">
                    {activeStep.metricValue}
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-on-surface-variant font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>Calibrated for Bangladesh</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 5-STEP HORIZONTAL TABS (LEFT TO RIGHT) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
        {steps.map((s, idx) => {
          const isCurrent = idx === activeStepIndex;
          const Icon = s.icon;
          return (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveStepIndex(idx);
              }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group ${
                isCurrent
                  ? "bg-secondary-container/50 border-primary ring-2 ring-primary/30 shadow-md scale-102"
                  : "glass-card hover:bg-white hover:border-outline-variant/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    isCurrent
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-outline group-hover:text-on-surface"
                  }`}
                >
                  {s.num}
                </span>

                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isCurrent ? "text-primary" : "text-outline"
                  }`}
                />
              </div>

              <div>
                <h4
                  className={`text-xs sm:text-sm font-bold transition-colors ${
                    isCurrent ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {s.title}
                </h4>
                <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                  {s.subtitle}
                </p>
              </div>

              {isCurrent && (
                <motion.div
                  layoutId="active-workflow-pill"
                  className="h-1 bg-primary rounded-full w-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
