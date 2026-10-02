"use client";

import { Database, Cpu, Target, Bot, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { FadeInText, AnimatedWords } from "@/components/animations/animated-text";
import { AnimatedCard } from "@/components/animations/animated-card";

export function HowItWorksDetail() {
  const steps = [
    {
      step: "01",
      icon: Database,
      title: "Bank-Grade Ingestion & Statement Normalization",
      description:
        "Upay seamlessly structures financial data from SMS alerts (bKash, Nagad, Rocket, City Touch, EBL Skybanking), card statements, and manual entries without storing your banking credentials or login PINs.",
      details: [
        "Read-only parsing of merchant and SMS notifications",
        "Deterministic local hashing with AES-256 GCM encryption",
        "Zero access to transfer credentials or one-time OTPs",
      ],
    },
    {
      step: "02",
      icon: Cpu,
      title: "Local Market Intelligence & Categorization",
      description:
        "Unlike generic Western tools that misclassify Chaldal, Pathao, Shwapno, or Aarong, Upay's machine learning engine is tuned to Bangladeshi merchant nomenclature and Dhaka/Chittagong expenditure profiles.",
      details: [
        "Distinguishes discretionary dining vs essential household groceries",
        "Tracks recurring utility bills (DESCO, DPDC, WASA, Titas)",
        "Calculates your realistic discretionary burn rate per week",
      ],
    },
    {
      step: "03",
      icon: Target,
      title: "Adaptive Goal Sinking-Fund Algorithms",
      description:
        "When you set a target (whether an emergency fund, Eid family gifts, or a property down payment), Upay models a realistic contribution cadence and automatically adjusts when an emergency expense arises.",
      details: [
        "Milestone velocity forecasts with target dates in ৳ BDT",
        "Automatic buffering so goals don't force you into personal loans",
        "Dynamic re-balancing after irregular bonus or dividend payouts",
      ],
    },
    {
      step: "04",
      icon: Bot,
      title: "Conversational Financial Coaching",
      description:
        "Instead of staring at complex pivot tables or dry spreadsheets, ask your coach directly: 'Can I afford this gadget?', 'Why is my balance so low this week?', or 'How can I save an extra ৳8,000 this month?'",
      details: [
        "Contextual responses based on your actual verified balance",
        "Actionable simulation cards with installment comparisons",
        "Proactive early alerts before you slip into negative surplus",
      ],
    },
  ];

  return (
    <section className="space-y-12" id="how-it-works">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <FadeInText direction="down">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            Step-by-Step Architecture
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
            A transparent look under the hood at how raw transaction alerts become actionable financial wisdom.
          </p>
        </FadeInText>
      </div>

      <div className="space-y-8">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <AnimatedCard
              key={idx}
              delay={idx * 0.12}
              hoverEffect="subtle"
              className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-primary/40 transition-colors duration-200"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-primary font-mono">{s.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shadow-xs">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface">{s.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.description}</p>
              </div>

              <div className="lg:col-span-7 bg-surface-container-lowest/80 border border-outline-variant/30 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Key Highlights</h4>
                <ul className="space-y-2.5">
                  {s.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                      <div className="w-5 h-5 rounded-full bg-secondary-container/80 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      <div className="text-center pt-4">
        <Link
          href="/onboarding"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel shadow-lg active:scale-95 transition-all"
        >
          <span>Try Upay Coach Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
