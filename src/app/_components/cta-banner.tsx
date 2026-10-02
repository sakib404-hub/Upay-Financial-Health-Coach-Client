"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  Bot,
  Lock,
  ArrowUp,
  CheckCircle2,
  TrendingUp,
  Flag,
  ShieldCheck,
} from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";

export function CtaBanner() {
  const router = useRouter();
  const [chatInput, setChatInput] = useState("");

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      router.push(`/onboarding?prompt=${encodeURIComponent(chatInput.trim())}`);
    } else {
      router.push("/onboarding");
    }
  };

  return (
    <section className="space-y-10" id="get-started">
      {/* Main CTA Container with Subtle Emerald & Teal Gradient Glow Backdrop */}
      <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-14 glass-card-elevated border border-primary/20 shadow-2xl">
        {/* Ambient emerald and teal background glows */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/50 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.06] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <FadeInText direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide">
                <Bot className="w-3.5 h-3.5 text-primary" />
                <span>Conversational Financial Intelligence</span>
              </div>
            </FadeInText>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                <AnimatedWords
                  text="Your money has a story. Let's understand it."
                  highlightWords={["story.", "understand", "it."]}
                  delay={0.1}
                />
              </h2>
              <FadeInText direction="up" delay={0.25}>
                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  Whether you&apos;re trying to save more, control your spending, reach a goal, or simply understand
                  where your money is going — start by talking to your financial coach.
                </p>
              </FadeInText>
            </div>

            {/* Action Buttons */}
            <FadeInText direction="up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel transition-all duration-150 active:scale-95 shadow-lg group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full glass-card hover:bg-white text-on-surface text-sm font-semibold transition-all duration-150 active:scale-95"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>
            </FadeInText>

            <FadeInText direction="up" delay={0.45}>
              <p className="text-xs text-outline flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Private, encrypted, and calibrated for Bangladeshi Taka (৳).</span>
              </p>
            </FadeInText>
          </div>

          {/* Right Interactive AI Preview Window */}
          <div className="lg:col-span-6 w-full">
            <FadeInText direction="right" delay={0.25}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-primary/25 p-5 sm:p-7 shadow-xl ring-1 ring-primary/20 space-y-4 text-left">
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm font-bold">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary-fixed rounded-full ring-2 ring-white animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-on-surface">Upay Coach</h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="text-xs text-on-surface-variant">Live Financial Advisor</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    Ready to chat
                  </span>
                </div>

                {/* Chat Stream */}
                <div className="space-y-3 pt-1">
                  {/* User Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-surface-container-high/90 text-on-surface rounded-2xl rounded-tr-xs px-4 py-3 shadow-xs">
                      <p className="text-sm">I want to start saving but I don&apos;t know where to begin.</p>
                    </div>
                  </div>

                  {/* AI Bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="max-w-[90%] bg-surface-container-lowest border border-outline-variant/40 text-on-surface rounded-2xl rounded-tl-xs p-4 shadow-sm space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Upay Coach</span>
                        <span className="text-outline font-normal">Just now</span>
                      </div>
                      <p className="text-sm leading-relaxed text-on-surface">
                        Let&apos;s start with where you are today. Tell me about your monthly income and your biggest
                        regular expenses.
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold pt-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Instant savings breakdown &amp; personalized budget</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Chat Input Dock */}
                <form onSubmit={handleStartChat} className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-surface-container-lowest border border-primary/30 shadow-xs focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Tell Upay about your financial situation..."
                      className="w-full bg-transparent border-none text-sm text-on-surface placeholder:text-outline focus:outline-none px-2.5 py-1.5"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold shrink-0 transition-transform active:scale-95 shadow-sm primary-btn-bevel"
                    >
                      <span>Start Chat</span>
                      <ArrowUp className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-outline px-1.5">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Lock className="w-3 h-3 text-primary" />
                      Launches private assessment session
                    </span>
                    <span className="text-[11px] hidden sm:inline">Press Enter ↵</span>
                  </div>
                </form>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>

      {/* Trust Pills Row Underneath CTA */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <FadeInText direction="up" delay={0.1}>
          <div className="glass-pill rounded-xl p-3.5 flex items-center justify-center gap-2.5 text-center text-on-surface font-medium text-xs sm:text-sm hover:border-primary/40 transition-colors h-full">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Personalized guidance</span>
          </div>
        </FadeInText>
        <FadeInText direction="up" delay={0.18}>
          <div className="glass-pill rounded-xl p-3.5 flex items-center justify-center gap-2.5 text-center text-on-surface font-medium text-xs sm:text-sm hover:border-primary/40 transition-colors h-full">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Financial insights</span>
          </div>
        </FadeInText>
        <FadeInText direction="up" delay={0.26}>
          <div className="glass-pill rounded-xl p-3.5 flex items-center justify-center gap-2.5 text-center text-on-surface font-medium text-xs sm:text-sm hover:border-primary/40 transition-colors h-full">
            <Flag className="w-4 h-4 text-primary" />
            <span>Goal planning</span>
          </div>
        </FadeInText>
        <FadeInText direction="up" delay={0.34}>
          <div className="glass-pill rounded-xl p-3.5 flex items-center justify-center gap-2.5 text-center text-on-surface font-medium text-xs sm:text-sm hover:border-primary/40 transition-colors h-full">
            <Bot className="w-4 h-4 text-primary" />
            <span>AI conversation</span>
          </div>
        </FadeInText>
      </div>

      {/* Final Brand Message Anchor */}
      <FadeInText direction="up" delay={0.3}>
        <div className="pt-6 pb-2 text-center space-y-1.5">
          <p className="text-xl sm:text-2xl lg:text-3xl text-on-surface font-extrabold tracking-tight">
            Understand your money. Plan your future.
          </p>
          <p className="text-xs sm:text-sm text-primary font-bold uppercase tracking-wider">
            Upay Financial Coach
          </p>
        </div>
      </FadeInText>
    </section>
  );
}
