"use client";

import Link from "next/link";
import { CheckCircle2, Bot, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";

export function AiShowcase() {
  return (
    <section className="glass-card rounded-3xl p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Showcase Context */}
        <div className="lg:col-span-5 space-y-6">
          <FadeInText direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
              Real Decision Simulation
            </div>
          </FadeInText>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
            <AnimatedWords
              text="Don't search for generic advice. Talk about your exact numbers."
              highlightWords={["exact", "numbers."]}
              delay={0.1}
            />
          </h2>

          <FadeInText direction="up" delay={0.2}>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Generic rules like &quot;save 20%&quot; don&apos;t work when Eid festivals, family commitments, or Dhaka rent
              surges occur. Upay Coach analyzes your actual cash balances, scheduled outflows, and safety runways
              before answering.
            </p>
          </FadeInText>

          <div className="space-y-3 pt-1">
            <FadeInText direction="left" delay={0.3}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-on-surface">
                  Instant affordability checks before swipe or checkout
                </span>
              </div>
            </FadeInText>

            <FadeInText direction="left" delay={0.4}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-on-surface">
                  Dynamic sinking fund calculators that protect emergency reserves
                </span>
              </div>
            </FadeInText>

            <FadeInText direction="left" delay={0.5}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-on-surface">
                  Calibrated for Bangladeshi Taka (৳) salary cadences &amp; bonuses
                </span>
              </div>
            </FadeInText>
          </div>
        </div>

        {/* Realistic Conversation Card */}
        <div className="lg:col-span-7">
          <FadeInText direction="right" delay={0.25}>
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 shadow-md space-y-4">
              {/* User Prompt */}
              <div className="flex justify-end">
                <div className="bg-primary text-on-primary rounded-2xl rounded-tr-xs px-4 py-3 max-w-[90%] shadow-xs">
                  <p className="text-sm font-medium">
                    I want to buy a laptop for{" "}
                    <strong className="underline decoration-secondary-fixed">৳120,000</strong>. Can I afford it without
                    hurting my emergency fund?
                  </p>
                </div>
              </div>

              {/* Coach Response */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0 font-bold">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3 w-full">
                  <div className="bg-surface-container-low/70 border border-outline-variant/30 rounded-2xl rounded-tl-xs p-4 text-on-surface space-y-3">
                    <p className="text-sm leading-relaxed">
                      You currently have <strong className="text-on-surface">৳72,000</strong> in your emergency fund and
                      a projected monthly surplus of around <strong className="text-primary">৳12,000</strong>.
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Buying it immediately with upfront cash would deplete your safety buffer and set back your
                      3-month survival fund. Here is the scenario comparison:
                    </p>

                    {/* Impact Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-error/30">
                        <div className="flex items-center gap-1.5 text-xs text-error font-bold uppercase tracking-wider">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Emergency Fund Delay</span>
                        </div>
                        <p className="text-xl font-extrabold text-error mt-1">+45 Days</p>
                        <span className="text-xs text-on-surface-variant">
                          If purchased in single upfront cash payment
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-primary/40">
                        <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Smart Sinking Fund</span>
                        </div>
                        <p className="text-xl font-extrabold text-primary mt-1">৳15,000 / mo</p>
                        <span className="text-xs text-on-surface-variant">
                          Over 8 months with zero debt &amp; buffer intact
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Responses */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <Link
                      href="/onboarding"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-semibold transition-all active:scale-95 shadow-xs"
                    >
                      <span>Create This Savings Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/about"
                      className="px-4 py-2 rounded-xl glass-card hover:bg-white text-on-surface text-xs font-semibold transition-all"
                    >
                      Explore Simulation Logic
                    </Link>
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
