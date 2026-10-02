"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Bot, ArrowDown } from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";

export function AboutHero() {
  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Copy & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <FadeInText direction="down">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full glass-card border border-primary/20 text-primary text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>NEXT-GENERATION BANGLADESHI WEALTH COACH</span>
            </div>
          </FadeInText>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            <AnimatedWords
              text="A smarter way to understand your financial life."
              highlightWords={["financial", "life."]}
              highlightClassName="text-primary underline decoration-secondary-fixed decoration-wavy underline-offset-8"
              delay={0.1}
            />
          </h1>

          <FadeInText direction="up" delay={0.25}>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Upay Financial Coach fuses deep transaction categorization, goal forecasting algorithms, and natural
              conversational AI to help Bangladeshi earners make confident financial decisions every day.
            </p>
          </FadeInText>

          {/* Metrics Micro-Bar */}
          <FadeInText direction="up" delay={0.35}>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-on-surface-variant border-t border-outline-variant/30">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>
                  <strong className="font-semibold text-on-surface">৳ BDT Native:</strong> Real-time ledger
                  context
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>
                  <strong className="font-semibold text-on-surface">Bank-Grade:</strong> Zero credential storage
                </span>
              </div>
            </div>
          </FadeInText>

          {/* Buttons */}
          <FadeInText direction="up" delay={0.45}>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#how-it-works-detail"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel transition-all duration-150 active:scale-95 shadow-md"
              >
                <span>See How It Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold border border-outline-variant/40 transition-all duration-150"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInText>
        </div>

        {/* Right Column: Interactive Glass AI Chat Mockup */}
        <div className="lg:col-span-6 relative">
          <FadeInText direction="right" delay={0.25}>
            {/* Ambient Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-secondary-fixed/40 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 pointer-events-none" />

            {/* Glass Chat Chassis */}
            <div className="glass-card-elevated rounded-3xl p-6 shadow-2xl relative border border-white/80 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                      Upay Coach
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </h3>
                    <p className="text-xs text-outline">Autonomous Financial Intelligence</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-outline text-xs font-semibold">
                  Live Simulation
                </span>
              </div>

              {/* Transcript Simulation */}
              <div className="space-y-3.5 pt-1">
                {/* User Message */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="bg-primary text-on-primary rounded-2xl rounded-tr-xs px-4 py-3 max-w-sm shadow-xs">
                    <p className="text-sm font-medium">
                      Can I afford to purchase a new laptop for ৳75,000 this month?
                    </p>
                    <span className="block text-right text-[10px] text-white/75 mt-1">10:42 AM</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline text-xs font-bold shrink-0">
                    SH
                  </div>
                </div>

                {/* AI Coach Response */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="glass-card rounded-2xl rounded-tl-xs p-4 max-w-md space-y-3 border border-outline-variant/30">
                    <p className="text-sm text-on-surface leading-relaxed">
                      Yes, but with caveats. You have a current safe liquidity buffer of{" "}
                      <strong className="text-on-surface">৳112,450</strong>, but an upfront purchase will reduce
                      your Q3 Emergency Fund progress by <strong className="text-primary">18%</strong>.
                    </p>

                    {/* Telemetry Badge in ৳ BDT */}
                    <div className="p-3 rounded-xl bg-surface/90 border border-outline-variant/20 space-y-2">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-outline uppercase tracking-wider">Affordability Telemetry</span>
                        <span className="text-primary font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Feasible / High Discretionary
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-left pt-1">
                        <div className="p-2.5 rounded-lg bg-surface-container/70">
                          <span className="text-[11px] text-outline block">Projected Balance</span>
                          <span className="text-sm font-bold text-on-surface">৳37,450</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-secondary-container/50">
                          <span className="text-[11px] text-on-secondary-container block">Monthly Surplus</span>
                          <span className="text-sm font-bold text-primary">+৳14,200</span>
                        </div>
                      </div>
                    </div>

                    {/* Context Suggestion Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="px-2.5 py-1 rounded-lg bg-secondary-container/40 border border-secondary/20 text-on-secondary-container text-xs font-semibold cursor-pointer hover:bg-secondary-container/70 transition-colors">
                        Simulate 3-month installment
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface-variant text-xs cursor-pointer hover:bg-surface-container-high transition-colors">
                        Protect emergency goal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInText>
        </div>
      </div>
    </section>
  );
}
