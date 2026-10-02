"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  PieChart,
  HeartPulse,
  Flag,
  Calculator,
  Bot,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Sparkles,
} from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";

export function FeaturesBento() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const isAnyHovered = hoveredCard !== null;

  return (
    <section className="space-y-10" id="features">
      {/* Elevated Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-7xl mx-auto">
        <div className="space-y-2 max-w-2xl">
          <FadeInText direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>CORE ARCHITECTURE &amp; CAPABILITIES</span>
            </div>
          </FadeInText>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            <AnimatedWords
              text="Engineered for total command over every Taka."
              highlightWords={["total", "command", "Taka."]}
              delay={0.1}
            />
          </h2>
        </div>

        <FadeInText direction="left" delay={0.2}>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            Beyond simple bookkeeping. Upay combines automated leak detection, proactive health scoring,
            and conversational intelligence into one cohesive financial operating system.
          </p>
        </FadeInText>
      </div>

      {/* ASYMMETRIC BENTO GRID WITH HOVER EXPAND & SIBLING SHRINK */}
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto"
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* CARD 1: HERO BENTO (7 Columns) - Spending Intelligence */}
        <motion.div
          onMouseEnter={() => setHoveredCard("spending")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "spending" ? 1.025 : isAnyHovered ? 0.97 : 1,
                  opacity: hoveredCard === "spending" ? 1 : isAnyHovered ? 0.68 : 1,
                  zIndex: hoveredCard === "spending" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 lg:col-span-7 glass-card-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md relative overflow-hidden group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                Algorithmic ML Categorization
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                Automated Spending Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed max-w-lg">
                Instantly transforms cryptic SMS alerts and slips into clean categories calibrated for Bangladeshi
                merchants like Shwapno, Chaldal, Pathao, and local utilities.
              </p>
            </div>

            {/* Visual Micro-Telemetry */}
            <div className="p-4 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold text-outline uppercase tracking-wider">
                <span>Monthly Burn Telemetry</span>
                <span className="text-primary font-bold">Bangladeshi Taka (৳)</span>
              </div>

              {/* Progress 1 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-on-surface">Household Food &amp; Dining (Shwapno, Chaldal)</span>
                  <span className="font-bold text-on-surface">৳12,450 (52%)</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[52%]" />
                </div>
              </div>

              {/* Progress 2 */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-on-surface">Commute &amp; Ride-sharing (Pathao, Uber)</span>
                  <span className="font-bold text-on-surface">৳5,200 (22%)</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-[22%]" />
                </div>
              </div>
            </div>

            {/* Leak Alert Pill */}
            <div className="p-3 rounded-xl bg-surface-container-lowest border border-primary/30 flex items-center gap-2.5 text-xs text-on-surface">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <span>
                <strong>Leak Detected:</strong> ৳2,800 in unoptimized coffee and weekend ride surges.
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Explore spending intelligence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 2: TALL BENTO (5 Columns) - Financial Health Diagnostic */}
        <motion.div
          onMouseEnter={() => setHoveredCard("health")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "health" ? 1.025 : isAnyHovered ? 0.97 : 1,
                  opacity: hoveredCard === "health" ? 1 : isAnyHovered ? 0.68 : 1,
                  zIndex: hoveredCard === "health" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 lg:col-span-5 glass-card-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md relative overflow-hidden group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                <HeartPulse className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                100-Point Score
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                Financial Health Diagnostic
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                Holistic stability index benchmarked against typical urban earning tiers in Dhaka and Chittagong.
              </p>
            </div>

            {/* Score Callout Card */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-outline uppercase tracking-wider block">
                  Wellness Index
                </span>
                <p className="text-4xl font-black text-primary mt-0.5">78 / 100</p>
                <span className="text-xs text-on-surface-variant font-medium">Strong Buffer</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center text-primary font-bold text-lg">
                78%
              </div>
            </div>

            {/* Micro Breakdown Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <span className="text-outline block text-[11px]">Emergency Runway</span>
                <span className="font-bold text-on-surface text-sm mt-0.5 block">3.4 Months</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <span className="text-outline block text-[11px]">Debt-to-Income</span>
                <span className="font-bold text-primary text-sm mt-0.5 block">12% (Low)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Check your health score</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 3: STANDARD BENTO (4 Columns) - 24/7 AI Money Coach */}
        <motion.div
          onMouseEnter={() => setHoveredCard("coach")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "coach" ? 1.025 : isAnyHovered ? 0.97 : 1,
                  opacity: hoveredCard === "coach" ? 1 : isAnyHovered ? 0.68 : 1,
                  zIndex: hoveredCard === "coach" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 lg:col-span-4 glass-card-elevated rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md group"
        >
          <div className="space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
              <Bot className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                24/7 Conversational AI Coach
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Chat in natural English, standard Bangla, or conversational Banglish. Receive judgment-free guidance
                anchored to your live balance.
              </p>
            </div>

            {/* Chat Snippet */}
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-1.5 text-xs">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                Live Upay Coach Response
              </span>
              <p className="text-on-surface leading-snug">
                “You have <strong>৳7,200</strong> discretionary buffer left for this week before rent is due.”
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Chat with Coach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 4: STANDARD BENTO (4 Columns) - What-If Scenario Simulator */}
        <motion.div
          onMouseEnter={() => setHoveredCard("simulator")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "simulator" ? 1.025 : isAnyHovered ? 0.97 : 1,
                  opacity: hoveredCard === "simulator" ? 1 : isAnyHovered ? 0.68 : 1,
                  zIndex: hoveredCard === "simulator" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 lg:col-span-4 glass-card-elevated rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md group"
        >
          <div className="space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
              <Calculator className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                What-If Scenario Simulator
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Explore hypothetical scenarios before committing. Model rent increments, salary raises, or Eid
                windfalls with instant projections.
              </p>
            </div>

            {/* Scenario Pills */}
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-error/20 flex items-center justify-between">
                <span className="text-error font-semibold">+৳4,000 Rent Surge</span>
                <span className="text-on-surface-variant font-medium">-18 Days Runway</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-primary/20 flex items-center justify-between">
                <span className="text-primary font-semibold">+৳45,000 Eid Bonus</span>
                <span className="text-on-surface font-bold">+2.2 Months Buffer</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Simulate financial what-ifs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 5: STANDARD BENTO (4 Columns) - Savings Goals & Sinking Funds */}
        <motion.div
          onMouseEnter={() => setHoveredCard("goals")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "goals" ? 1.025 : isAnyHovered ? 0.97 : 1,
                  opacity: hoveredCard === "goals" ? 1 : isAnyHovered ? 0.68 : 1,
                  zIndex: hoveredCard === "goals" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 lg:col-span-4 glass-card-elevated rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md group"
        >
          <div className="space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
              <Flag className="w-6 h-6 text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                Milestone Velocity Tracker
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Turn life aspirations (Hajj, family wedding, laptop, land down payment) into automated monthly sinking
                funds with dynamic pace alerts.
              </p>
            </div>

            {/* Goal Progress Micro Card */}
            <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-on-surface">3-Month Emergency Fund</span>
                <span className="text-primary font-bold">75% Complete</span>
              </div>
              <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-[75%]" />
              </div>
              <div className="flex justify-between text-[11px] text-outline pt-0.5">
                <span>৳45,000 of ৳60,000</span>
                <span className="text-primary font-semibold">৳10,000 / mo pace</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Build milestone targets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 6: WIDE PANORAMIC BENTO (12 Columns) - Instant Affordability Engine */}
        <motion.div
          onMouseEnter={() => setHoveredCard("affordability")}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: hoveredCard === "affordability" ? 1.02 : isAnyHovered ? 0.98 : 1,
                  opacity: hoveredCard === "affordability" ? 1 : isAnyHovered ? 0.72 : 1,
                  zIndex: hoveredCard === "affordability" ? 20 : 1,
                }
          }
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="md:col-span-12 glass-card-elevated rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer border border-primary/20 hover:border-primary/50 shadow-md group relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
                    Debt-Prevention Protection
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mt-0.5">
                    Instant Purchase Affordability Engine
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Before swiping for a high-ticket item, test whether buying outright damages your 3-to-6 month
                emergency survival buffer. Upay automatically designs a debt-free sinking fund allocation instead.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-primary">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Zero Credit Card Debt Risk
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Preserves Essential Rent &amp; Food Buffers
                </span>
              </div>
            </div>

            {/* Right Verdict Showcase */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-surface-container-low border border-primary/30 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-outline uppercase tracking-wider">Purchase Check Verdict</span>
                <span className="text-primary font-bold">৳120,000 Item</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-error shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-error font-bold">Upfront Cash:</strong> Delays emergency fund by 45 days.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-secondary-container/50 border border-secondary/30 flex items-start gap-2.5">
                <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-on-secondary-container">
                  <strong className="text-primary font-bold">Recommended:</strong> ৳15,000 / mo over 8 months with 0% debt.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
            <Link
              href="/onboarding"
              className="text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Test affordability on your next purchase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
