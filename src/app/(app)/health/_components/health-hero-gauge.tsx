"use client";

import Link from "next/link";
import { CheckCircle2, Info, Bot } from "lucide-react";

interface HealthHeroGaugeProps {
  score?: number;
  tier?: string;
  percentile?: number;
  lastUpdated?: string;
}

export function HealthHeroGauge({
  score = 78,
  tier = "Good",
  percentile = 18,
  lastUpdated = "Today",
}: HealthHeroGaugeProps) {
  // SVG circular gauge math: radius 68, circumference = 2 * PI * 68 = ~427.2
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 sm:p-8 shadow-sm">
      {/* Ambient background glow sheen */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Column: Score Narrative & Tier */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Personal Health Index
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Updated {lastUpdated}
            </span>
          </div>

          <div className="flex items-baseline gap-4 flex-wrap">
            <div className="flex items-baseline">
              <span className="text-5xl sm:text-6xl font-extrabold text-on-surface tracking-tight">
                {score}
              </span>
              <span className="text-xl sm:text-2xl font-normal text-on-surface-variant ml-2">
                / 100
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{tier}</span>
            </div>
          </div>

          <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Your financial wellness is in the{" "}
            <strong className="text-on-surface font-semibold">top {percentile}%</strong> of Upay members in Bangladesh. Consistent liquid savings and low debt burden drive your high score.
          </p>

          <div className="flex items-center gap-2 pt-1 text-xs text-outline">
            <Info className="w-4 h-4 text-outline" />
            <span>Personal Financial Wellness Indicator — Not a Credit Bureau Score</span>
          </div>
        </div>

        {/* Right Column: Radial SVG Gauge & Action */}
        <div className="shrink-0 flex flex-col items-center sm:items-end justify-center w-full lg:w-auto">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              {/* Background Track */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                className="text-surface-container"
              />
              <defs>
                <linearGradient id="healthHeroGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#85f8c4" />
                  <stop offset="100%" stopColor="#006948" />
                </linearGradient>
              </defs>
              {/* Active Animated Gauge */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="url(#healthHeroGaugeGrad)"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Inner Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-extrabold text-on-surface">{score}%</span>
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Optimal
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Link
              href="/ai-coach?prompt=Explain+my+78+financial+health+score+and+how+to+reach+85"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-container bg-primary/5 hover:bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask Coach About Health</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
