"use client";

import { Sliders, ShieldCheck, CheckSquare2 } from "lucide-react";
import { AnimatedCard } from "@/components/animations/animated-card";

export function TrustIndicators() {
  const indicators = [
    {
      icon: Sliders,
      title: "Hyper-Personalized",
      description:
        "Calibrated around your unique income, family commitments, and real Dhaka/Chittagong living expenses.",
    },
    {
      icon: ShieldCheck,
      title: "Private & Compliant",
      description:
        "Protected with bank-grade 256-bit encryption. Zero storage of bank passwords or MFS transactional PINs.",
    },
    {
      icon: CheckSquare2,
      title: "Realistic & Actionable",
      description:
        "Practical savings targets that respect your daily essentials without vague or generic percentage rules.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {indicators.map((item, idx) => {
        const Icon = item.icon;
        return (
          <AnimatedCard
            key={idx}
            delay={idx * 0.1}
            hoverEffect="lift"
            className="glass-card rounded-2xl p-6 flex items-start gap-4 transition-all duration-200 h-full group cursor-pointer hover:border-primary/40"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/70 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </AnimatedCard>
        );
      })}
    </section>
  );
}
