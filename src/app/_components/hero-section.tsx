"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Quote,
  Bot,
  Lock,
  ArrowUp,
  PiggyBank,
  CheckCircle2,
} from "lucide-react";
import { AnimatedWords, FadeInText } from "@/components/animations/animated-text";

interface Scenario {
  id: string;
  tabLabel: string;
  userMessage: string;
  coachExplanation: string;
  breakdownTitle: string;
  items: { label: string; amount: string; pct: string; barWidth: string; color: string }[];
  coachFollowup: string;
  actionChips: { label: string; href: string }[];
}

const scenarios: Scenario[] = [
  {
    id: "salary",
    tabLabel: "৳65k Salary Review",
    userMessage: "I earn ৳65,000 a month but I feel like I never have enough left at the end of the month.",
    coachExplanation:
      "Let's look at where your money is going. Based on your recent spending, dining and ride-sharing are taking a larger share of your income than usual.",
    breakdownTitle: "Monthly Outflow Breakdown (৳ BDT)",
    items: [
      { label: "Food & Dining", amount: "৳8,450", pct: "13%", barWidth: "58%", color: "bg-primary" },
      { label: "Transportation (Pathao/Uber)", amount: "৳6,200", pct: "9.5%", barWidth: "42%", color: "bg-secondary" },
      { label: "Shopping & Lifestyle", amount: "৳4,850", pct: "7.4%", barWidth: "32%", color: "bg-outline" },
    ],
    coachFollowup:
      "If you'd like, I can help you create a plan to save ৳10,000 every month without disrupting your rent and grocery essentials.",
    actionChips: [
      { label: "+ Create a savings plan", href: "/onboarding" },
      { label: "Simulate in What-If", href: "/onboarding" },
    ],
  },
  {
    id: "laptop",
    tabLabel: "৳120k Purchase Check",
    userMessage: "I want to buy a laptop for ৳120,000. Can I afford it without hurting my emergency fund?",
    coachExplanation:
      "You currently have ৳72,000 in your emergency fund and an average monthly surplus of ৳12,000. An outright cash purchase will deplete your 3-month survival buffer.",
    breakdownTitle: "Affordability Risk Assessment",
    items: [
      { label: "Single Cash Payment", amount: "+45 Days Delay", pct: "High Risk", barWidth: "85%", color: "bg-error" },
      { label: "Recommended Sinking Fund", amount: "৳15,000 / mo", pct: "Safe", barWidth: "100%", color: "bg-primary" },
    ],
    coachFollowup:
      "By setting aside ৳15,000/mo over 8 months, you acquire the machine completely debt-free with zero risk to your emergency safety net.",
    actionChips: [
      { label: "Start 8-Month Sinking Fund", href: "/onboarding" },
      { label: "Adjust Monthly Allocation", href: "/onboarding" },
    ],
  },
  {
    id: "bonus",
    tabLabel: "Eid Bonus Allocation",
    userMessage: "I received an Eid bonus of ৳45,000. How should I allocate it wisely?",
    coachExplanation:
      "Great opportunity! Instead of letting it dissolve into discretionary spending, here is the optimal distribution for your financial profile:",
    breakdownTitle: "Targeted Bonus Split",
    items: [
      { label: "Emergency Runway Top-up (50%)", amount: "৳22,500", pct: "50%", barWidth: "50%", color: "bg-primary" },
      { label: "Next Milestone Goal (30%)", amount: "৳13,500", pct: "30%", barWidth: "30%", color: "bg-secondary" },
      { label: "Celebration & Discretionary (20%)", amount: "৳9,000", pct: "20%", barWidth: "20%", color: "bg-secondary-fixed-dim" },
    ],
    coachFollowup:
      "This immediately increases your emergency runway to 4.2 months while still giving you ৳9,000 for guilt-free celebration.",
    actionChips: [
      { label: "Lock in Bonus Allocation", href: "/onboarding" },
      { label: "Review Goals", href: "/onboarding" },
    ],
  },
];

export function HeroSection() {
  const router = useRouter();
  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);
  const [customInput, setCustomInput] = useState("");

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      router.push(`/onboarding?prompt=${encodeURIComponent(customInput.trim())}`);
    } else {
      router.push("/onboarding");
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4" id="home">
      {/* Left Column: Copy & Value Proposition */}
      <div className="lg:col-span-6 space-y-6">
        {/* Tagline Pill */}
        <FadeInText direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill text-on-surface-variant text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-primary">✨ Intelligent Personal Finance</span>
            <span className="text-outline-variant">•</span>
            <span>Powered by Upay AI</span>
          </div>
        </FadeInText>

        {/* Main Headline with Animated Words */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            <AnimatedWords
              text="Meet your AI financial coach."
              highlightWords={["financial", "coach."]}
              highlightClassName="text-primary underline decoration-secondary-fixed decoration-wavy underline-offset-8"
              delay={0.15}
            />
          </h1>

          <FadeInText direction="up" delay={0.35}>
            <p className="text-xl sm:text-2xl text-primary font-semibold pt-1">
              Understand your money. Plan your future.
            </p>
          </FadeInText>
        </div>

        {/* Supporting Copy */}
        <FadeInText direction="up" delay={0.45}>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
            Talk naturally about your income, spending, savings and goals. Upay Financial Coach turns your everyday
            Bangladeshi transactions into clear, hyper-personalized financial guidance.
          </p>
        </FadeInText>

        {/* CTA Buttons */}
        <FadeInText direction="up" delay={0.55}>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel transition-all duration-150 active:scale-95 shadow-md group"
            >
              <span>Start Your Financial Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all duration-150 active:scale-95"
            >
              <PlayCircle className="w-5 h-5 text-primary" />
              <span>See How It Works</span>
            </Link>
          </div>
        </FadeInText>

        {/* Key Idea Quote Banner */}
        <FadeInText direction="up" delay={0.65}>
          <div className="p-4 rounded-2xl glass-card border-l-4 !border-l-primary flex items-start gap-3 mt-4">
            <Quote className="w-6 h-6 text-primary shrink-0 rotate-180" />
            <p className="text-sm sm:text-base italic text-on-surface-variant font-medium">
              “Your money is complicated. Your financial guidance shouldn&apos;t be.”
            </p>
          </div>
        </FadeInText>
      </div>

      {/* Right Column: Interactive AI Conversation Preview */}
      <div className="lg:col-span-6">
        <FadeInText direction="right" delay={0.25}>
          <div className="glass-card-elevated rounded-3xl p-5 sm:p-6 space-y-4 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-fixed rounded-full ring-2 ring-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-on-surface">Upay Coach</span>
                    <CheckCircle2 className="w-4 h-4 text-primary fill-primary/20" />
                  </div>
                  <p className="text-xs text-on-surface-variant">Personal Financial Guide • ৳ BDT</p>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high/70 text-on-surface-variant text-xs font-medium">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>256-bit Secure</span>
              </div>
            </div>

            {/* Scenario Selector Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScenario.id === sc.id
                      ? "bg-primary text-on-primary shadow-xs scale-102"
                      : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {sc.tabLabel}
                </button>
              ))}
            </div>

            {/* Chat Conversation Body with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5 pt-1 min-h-[280px]"
              >
                {/* User Bubble */}
                <div className="flex justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-[88%] bg-surface-container-high/90 text-on-surface rounded-2xl rounded-tr-xs px-4 py-3 shadow-xs"
                  >
                    <p className="text-sm font-medium leading-relaxed">{activeScenario.userMessage}</p>
                  </motion.div>
                </div>

                {/* AI Coach Response Bubble */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="space-y-3 max-w-[92%] w-full"
                  >
                    <div className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-2xl rounded-tl-xs p-4 shadow-sm space-y-3">
                      <p className="text-sm text-on-surface leading-relaxed">{activeScenario.coachExplanation}</p>

                      {/* Telemetry card */}
                      <div className="p-3.5 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 space-y-2.5">
                        <div className="flex justify-between items-center text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                          <span>{activeScenario.breakdownTitle}</span>
                          <span className="text-primary font-bold">Bangladeshi Taka (৳)</span>
                        </div>

                        {activeScenario.items.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-xs font-medium">
                              <span className="text-on-surface flex items-center gap-1.5">
                                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                                {item.label}
                              </span>
                              <span className="font-bold text-on-surface">
                                {item.amount}{" "}
                                <span className="text-on-surface-variant font-normal">({item.pct})</span>
                              </span>
                            </div>
                            <div className="w-full bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: item.barWidth }}
                                transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
                                className={`${item.color} h-full rounded-full`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-on-surface leading-relaxed">{activeScenario.coachFollowup}</p>
                    </div>

                    {/* Interactive Action Chips */}
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {activeScenario.actionChips.map((chip, idx) => (
                        <Link
                          key={idx}
                          href={chip.href}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary-container hover:bg-secondary-container/80 text-on-secondary-container text-xs font-semibold transition-all active:scale-95"
                        >
                          <PiggyBank className="w-3.5 h-3.5" />
                          <span>{chip.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Input Dock */}
            <form onSubmit={handleCustomSubmit} className="pt-2">
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xs focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask Upay Coach anything (e.g. Can I save ৳15k/mo?)..."
                  className="w-full bg-transparent border-none text-sm text-on-surface placeholder:text-outline focus:outline-none px-2 py-1.5"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-transform active:scale-95 shrink-0 shadow-xs"
                  title="Send to Coach"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[11px] text-outline px-2 pt-1.5">
                <span>Interactive preview calibrated for Dhaka &amp; Bangladesh</span>
                <span>Press Enter ↵</span>
              </div>
            </form>
          </div>
        </FadeInText>
      </div>
    </section>
  );
}
