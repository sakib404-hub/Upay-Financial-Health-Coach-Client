"use client";

import { Receipt, LineChart, BrainCircuit } from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";
import { AnimatedCard } from "@/components/animations/animated-card";

export function ProblemSection() {
  return (
    <section className="glass-card rounded-3xl p-8 lg:p-12 space-y-8">
      <div className="max-w-3xl space-y-3">
        <FadeInText direction="down">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            The Challenge
          </span>
        </FadeInText>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
          <AnimatedWords
            text="Your financial life is more than a transaction history."
            highlightWords={["financial", "life"]}
            delay={0.1}
          />
        </h2>

        <FadeInText direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Most people know how much they earn, but struggle with where it vanished, why overspending happens,
            how much they can safely put into savings, or whether a major purchase fits into their life.
          </p>
        </FadeInText>
      </div>

      {/* Pipeline Transformation Nodes */}
      <div className="pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <AnimatedCard
            delay={0.15}
            hoverEffect="lift"
            className="p-6 rounded-2xl bg-surface-container-lowest/90 border border-outline-variant/30 space-y-3 relative group h-full cursor-pointer hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface font-bold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Receipt className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
            <div>
              <span className="text-xs font-bold text-outline uppercase tracking-wider">
                Step 01
              </span>
              <h4 className="text-base font-bold text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                Raw Transactions
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Disconnected SMS alerts from bKash, Nagad, card swipes, and bank feeds leave you guessing where
              ৳15,000 vanished every month.
            </p>
          </AnimatedCard>

          {/* Step 2 */}
          <AnimatedCard
            delay={0.25}
            hoverEffect="lift"
            className="p-6 rounded-2xl bg-surface-container-lowest/90 border border-outline-variant/30 space-y-3 relative group h-full cursor-pointer hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center text-primary font-bold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <LineChart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Step 02
              </span>
              <h4 className="text-base font-bold text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                Spending Intelligence
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Upay classifies purchases, detects lifestyle inflation, flags recurring subscriptions, and
              benchmarks your essentials against average local budgets.
            </p>
          </AnimatedCard>

          {/* Step 3 */}
          <AnimatedCard
            delay={0.35}
            hoverEffect="glow"
            className="p-6 rounded-2xl bg-primary text-on-primary space-y-3 relative shadow-lg h-full cursor-pointer transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-on-primary font-bold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-secondary-fixed uppercase tracking-wider">
                Step 03
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Real-Time AI Guidance
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Get conversational clarity: exact affordability checks on major items, automated ৳1,00,000 goal
              blueprints, and timely mid-month nudges.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
