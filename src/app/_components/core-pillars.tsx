"use client";

import { Eye, Flag, MessagesSquare, TrendingUp, Target, Zap } from "lucide-react";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";
import { AnimatedCard } from "@/components/animations/animated-card";

export function CorePillars() {
  const pillars = [
    {
      icon: Eye,
      title: "Understand",
      description:
        "See where your money is going. Analyze spending patterns, categories, income, and cash flow with automated categorization calibrated for local Bangladeshi merchants.",
      badge: "Automated cashflow radar",
      badgeIcon: TrendingUp,
    },
    {
      icon: Flag,
      title: "Plan",
      description:
        "Turn aspirations into concrete milestones. Create savings targets for emergency funds, tech upgrades, or family events with dynamic velocity tracking.",
      badge: "Milestone pace forecasting",
      badgeIcon: Target,
    },
    {
      icon: MessagesSquare,
      title: "Ask",
      description:
        "Talk to your financial coach anytime. Ask questions about your balance, recurring debits, upcoming big purchases, or salary splits in everyday English or Bangla.",
      badge: "Natural language advisor",
      badgeIcon: Zap,
    },
  ];

  return (
    <section className="space-y-8" id="pillars">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <FadeInText direction="down">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            Core Architecture
          </span>
        </FadeInText>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
          <AnimatedWords
            text="Three pillars of intelligent wealth building."
            highlightWords={["wealth", "building."]}
            delay={0.1}
          />
        </h2>

        <FadeInText direction="up" delay={0.2}>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Engineered to give Bangladeshi earners total command over their monthly cash flow.
          </p>
        </FadeInText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const BadgeIcon = pillar.badgeIcon;
          return (
            <AnimatedCard
              key={idx}
              delay={idx * 0.12}
              hoverEffect="lift"
              className="glass-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm group h-full cursor-pointer hover:border-primary/40"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/70 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between text-xs font-semibold text-primary">
                <span>{pillar.badge}</span>
                <BadgeIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}
