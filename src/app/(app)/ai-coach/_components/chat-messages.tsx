"use client";

import Link from "next/link";
import {
  Bot,
  Car,
  Utensils,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  PieChart,
  ShoppingBag,
  Flag,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export interface ChatMessage {
  id: string;
  sender: "user" | "coach";
  text: string;
  time: string;
  meta?: {
    ledgerCount?: number;
    varianceBreakdown?: {
      transport: { total: number; pctChange: number; diff: number };
      dining: { total: number; pctChange: number; diff: number };
      weeklyBars: { label: string; amount: string; isSurge: boolean; height: string }[];
    };
    actionPlan?: {
      reductionText: string;
      savedPerMonth: number;
      acceleratesDays: number;
      goalTitle: string;
      goalPct: number;
      goalCurrent: number;
      goalTarget: number;
    };
  };
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isThinking: boolean;
  onSelectPrompt: (promptText: string) => void;
}

export function ChatMessages({ messages, isThinking, onSelectPrompt }: ChatMessagesProps) {
  const promptSuggestions = [
    { label: "Where am I spending the most?", icon: PieChart },
    { label: "How can I save ৳10,000 this month?", icon: Sparkles },
    { label: "Can I afford a ৳30,000 purchase?", icon: ShoppingBag },
    { label: "Help me reach my emergency fund goal", icon: Flag },
    { label: "Why did my spending increase?", icon: TrendingUp },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 max-w-5xl mx-auto w-full custom-scrollbar">
      {/* 1. Welcome Card & Instant Starter Chips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 sm:p-6 rounded-3xl bg-surface-container-lowest/90 backdrop-blur-md border border-primary/20 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white shrink-0 shadow-md shadow-primary/25">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-on-surface mb-1 flex items-center gap-2">
              <span>Hi Shakib</span>
              <span className="inline-block animate-pulse">👋</span>
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              I&apos;ve analyzed your recent financial activity across your Upay wallet, linked bank
              accounts (EBL, City Bank), and utility feeds. What would you like to explore today?
            </p>

            {/* Instant Financial Queries Chips */}
            <div className="text-[11px] font-bold text-outline uppercase tracking-wider mb-2.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Instant Financial Queries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {promptSuggestions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => onSelectPrompt(item.label)}
                    className="px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-container/50 hover:border-primary/40 border border-outline-variant/30 text-xs font-medium text-on-surface transition-all flex items-center gap-2 text-left group shadow-xs active:scale-95"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Chat Stream */}
      {messages.map((msg) => {
        const isUser = msg.sender === "user";

        if (isUser) {
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end gap-3 items-end"
            >
              <div className="max-w-md bg-primary text-on-primary p-3.5 sm:p-4 rounded-2xl rounded-br-xs shadow-sm">
                <p className="text-xs sm:text-sm font-medium leading-relaxed">{msg.text}</p>
                <span className="text-[10px] text-primary-fixed-dim mt-1 block text-right font-light">
                  {msg.time}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-container text-white font-bold text-xs flex items-center justify-center border border-white shadow-xs shrink-0">
                SH
              </div>
            </motion.div>
          );
        }

        // Coach Response
        return (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 items-start"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-white shrink-0 shadow-sm shadow-primary/25 mt-1">
              <Bot className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 space-y-4 max-w-3xl">
              {/* Text Response Bubble */}
              <div className="p-4 sm:p-5 rounded-2xl rounded-tl-xs bg-surface-container-lowest border border-outline-variant/30 shadow-xs">
                <p className="text-xs sm:text-sm leading-relaxed text-on-surface">{msg.text}</p>
                {msg.meta?.ledgerCount && (
                  <span className="text-[10px] text-outline mt-2.5 block flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3 h-3 text-primary" />
                    Analyzed from {msg.meta.ledgerCount} ledger entries (Sep 1 – Oct 24, 2024)
                  </span>
                )}
              </div>

              {/* Rich Card 1: Category Variance Breakdown & Mini Chart */}
              {msg.meta?.varianceBreakdown && (
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-primary/25 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-amber-700" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-on-surface">Category Variance Breakdown</h4>
                        <p className="text-[10px] text-outline">Compared to your 3-month rolling baseline</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-container font-semibold text-on-surface-variant">
                      Month of October
                    </span>
                  </div>

                  {/* Two Key Variance Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Transportation Indicator */}
                    <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-on-surface">
                          <Car className="w-4 h-4 text-amber-600" />
                          <span>Transportation</span>
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          ৳{msg.meta.varianceBreakdown.transport.total.toLocaleString("en-BD")} total outflow
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                          +{msg.meta.varianceBreakdown.transport.pctChange}%
                        </span>
                        <span className="block text-[9px] text-outline mt-0.5">
                          +৳{msg.meta.varianceBreakdown.transport.diff} vs avg
                        </span>
                      </div>
                    </div>

                    {/* Dining Indicator */}
                    <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-on-surface">
                          <Utensils className="w-4 h-4 text-amber-600" />
                          <span>Dining &amp; Food</span>
                        </div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">
                          ৳{msg.meta.varianceBreakdown.dining.total.toLocaleString("en-BD")} total outflow
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                          +{msg.meta.varianceBreakdown.dining.pctChange}%
                        </span>
                        <span className="block text-[9px] text-outline mt-0.5">
                          +৳{msg.meta.varianceBreakdown.dining.diff} vs avg
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4-Week Mini Bar Chart */}
                  <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-on-surface">
                        Weekly Surge Trend (Pathao &amp; Foodpanda)
                      </span>
                      <div className="flex items-center gap-3 text-[10px] text-outline">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded bg-primary" /> Normal Baseline
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded bg-amber-500" /> Surge Variance
                        </span>
                      </div>
                    </div>

                    <div className="h-16 flex items-end justify-between gap-3 pt-2 px-2">
                      {msg.meta.varianceBreakdown.weeklyBars.map((bar) => (
                        <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className={`w-full rounded-t flex items-end justify-center ${bar.height} ${
                              bar.isSurge ? "bg-amber-400 shadow-xs" : "bg-secondary-container"
                            }`}
                          >
                            <span
                              className={`text-[9px] font-bold pb-0.5 ${
                                bar.isSurge ? "text-amber-950" : "text-primary"
                              }`}
                            >
                              {bar.amount}
                            </span>
                          </div>
                          <span
                            className={`text-[9px] font-medium ${
                              bar.isSurge ? "text-amber-800 font-bold" : "text-outline"
                            }`}
                          >
                            {bar.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Rich Card 2: Contextual Action Plan & Goal Acceleration */}
              {msg.meta?.actionPlan && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-surface-container-lowest to-teal-50/40 border border-primary/30 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Contextual Action Plan
                    </span>
                    <span className="text-[10px] ml-auto px-2 py-0.5 rounded-full bg-secondary-container text-primary font-semibold">
                      Priority: High
                    </span>
                  </div>

                  <p className="text-xs text-on-surface leading-relaxed">
                    {msg.meta.actionPlan.reductionText} frees approximately{" "}
                    <strong className="text-primary font-bold">
                      ৳{msg.meta.actionPlan.savedPerMonth.toLocaleString("en-BD")} per month
                    </strong>
                    . Here is how this surplus directly accelerates your targets:
                  </p>

                  {/* Goal Progress Impact */}
                  <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-on-surface flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        {msg.meta.actionPlan.goalTitle}
                      </span>
                      <span className="font-semibold text-primary">
                        {msg.meta.actionPlan.goalPct}% Completed
                      </span>
                    </div>

                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-teal-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${msg.meta.actionPlan.goalPct}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                      <span>
                        Current:{" "}
                        <strong className="text-on-surface">
                          ৳{msg.meta.actionPlan.goalCurrent.toLocaleString("en-BD")}
                        </strong>{" "}
                        / ৳{msg.meta.actionPlan.goalTarget.toLocaleString("en-BD")}
                      </span>
                      <span className="text-primary font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        Accelerates finish by {msg.meta.actionPlan.acceleratesDays} Days
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <Link
                      href="/savings-plan"
                      className="px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold primary-btn-bevel shadow-xs transition-all active:scale-95"
                    >
                      Create Savings Plan
                    </Link>
                    <Link
                      href="/simulator"
                      className="px-3.5 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/40 text-on-surface text-xs font-semibold transition-all"
                    >
                      Simulate in What-If
                    </Link>
                    <Link
                      href="/transactions"
                      className="text-[11px] text-primary hover:underline font-semibold ml-1 flex items-center gap-1"
                    >
                      <span>View 8 flagged transactions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* 3. Assistant Live Typing Indicator */}
      {isThinking && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 items-center"
        >
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant/30 px-3.5 py-2 rounded-2xl shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-medium text-on-surface-variant ml-1">
              Upay Coach is synthesizing your statement insights...
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
