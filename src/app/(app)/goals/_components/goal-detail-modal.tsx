"use client";

import {
  X,
  Shield,
  Plus,
  TrendingUp,
  Bot,
  RefreshCw,
  Building,
} from "lucide-react";
import { GoalItem } from "./goal-card";

interface GoalDetailModalProps {
  goal: GoalItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddContribution: (goal: GoalItem) => void;
}

export function GoalDetailModal({
  goal,
  isOpen,
  onClose,
  onAddContribution,
}: GoalDetailModalProps) {
  if (!isOpen || !goal) return null;

  const pct = Math.round((goal.currentBalance / goal.targetAmount) * 100);
  const remaining = Math.max(goal.targetAmount - goal.currentBalance, 0);

  // SVG Gauge math
  const radius = 68;
  const circumference = 2 * Math.PI * radius; // ~427.25
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  const mockContributions = [
    { id: "tx-901", date: "Sep 28, 2024", amount: 7500, method: "Tech Innovators Auto-Sweep", status: "Processed" },
    { id: "tx-844", date: "Aug 28, 2024", amount: 7500, method: "bKash Direct Transfer", status: "Processed" },
    { id: "tx-722", date: "Jul 28, 2024", amount: 7500, method: "BRAC Bank Salary Split", status: "Processed" },
    { id: "tx-610", date: "Jun 28, 2024", amount: 7000, method: "City Bank Visa Card", status: "Processed" },
    { id: "tx-501", date: "May 28, 2024", amount: 7000, method: "Manual Deposit", status: "Processed" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-inverse-surface/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-surface-container-lowest border border-white/90 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container/60 border border-secondary/20 text-primary flex items-center justify-center shrink-0 shadow-sm">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">
                  {goal.title}
                </h2>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>On Track ({pct}%)</span>
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                Target: {goal.category} • Planned completion by {goal.targetDate}
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onAddContribution(goal);
              }}
              className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Contribution</span>
            </button>
          </div>
        </div>

        {/* Bento Grid: Progress & Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Radial Progress & Sub-badges (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-container/30 border border-outline-variant/30 p-6 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                Accumulation Velocity
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Ahead by 19 days</span>
              </span>
            </div>

            {/* Radial Gauge & Big Amount */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-2">
              <div className="relative w-40 h-40 shrink-0">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-surface-container"
                  />
                  <defs>
                    <linearGradient id="goalDetailGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#85f8c4" />
                      <stop offset="100%" stopColor="#006948" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="transparent"
                    stroke="url(#goalDetailGrad)"
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-extrabold text-primary">{pct}%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                    Reached
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs text-outline font-medium">Accumulated Reserve</span>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                  <span className="text-3xl font-extrabold text-on-surface">
                    ৳{goal.currentBalance.toLocaleString()}
                  </span>
                  <span className="text-base text-outline">
                    / ৳{goal.targetAmount.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs pt-1">
                  You have shielded 4.3 months of necessary overhead. Only ৳{remaining.toLocaleString()} required to achieve full resilience.
                </p>
              </div>
            </div>

            {/* 4 Metrics Sub-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-outline-variant/30">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline font-medium">Remaining</span>
                <p className="text-sm font-bold text-on-surface mt-0.5">৳{remaining.toLocaleString()}</p>
                <span className="text-[10px] text-outline">{100 - pct}% left</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline font-medium">Target Date</span>
                <p className="text-sm font-bold text-on-surface mt-0.5">{goal.targetDate}</p>
                <span className="text-[10px] text-outline">{goal.remainingMonths}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline font-medium">Req. Pace</span>
                <p className="text-sm font-bold text-on-surface mt-0.5">৳{goal.requiredPace.toLocaleString()}/mo</p>
                <span className="text-[10px] text-outline">Baseline</span>
              </div>
              <div className="p-3 rounded-xl bg-secondary-container/40 border border-primary/20">
                <span className="text-[10px] text-primary font-bold">Current Inflow</span>
                <p className="text-sm font-bold text-primary mt-0.5">৳7,500/mo</p>
                <span className="text-[10px] text-primary">+৳500 surplus</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Coach Intelligence & Parameters (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* AI Coach Banner */}
            <div className="rounded-2xl bg-surface-container-lowest border border-primary/25 p-5 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
                  <Bot className="w-4 h-4" />
                  <span>AI Coach Intelligence</span>
                </div>
                <p className="text-xs text-on-surface font-medium leading-relaxed">
                  &ldquo;You are 12 days ahead of your initial projection. Maintaining your current ৳7,500/mo deposit will finalize this safety fund by December 12.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] text-outline">
                <span>Confidence: 94%</span>
                <span className="text-primary font-bold">Deterministic</span>
              </div>
            </div>

            {/* Execution Parameters */}
            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 p-5 space-y-3.5 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                  Execution Parameters
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Live Auto-Pilot
                </span>
              </div>

              {/* Trigger */}
              <div className="p-3 rounded-xl bg-surface-container/40 border border-outline-variant/30 flex items-start gap-3 text-xs">
                <RefreshCw className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-on-surface">Auto-Save Trigger</div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">
                    10% auto-transferred upon Tech Innovators salary deposit (Every 28th)
                  </div>
                </div>
              </div>

              {/* Vault */}
              <div className="p-3 rounded-xl bg-surface-container/40 border border-outline-variant/30 flex items-start gap-3 text-xs">
                <Building className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-surface">Upay High-Yield Vault</span>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.2 rounded">
                      6.5% p.a.
                    </span>
                  </div>
                  <div className="text-[11px] text-outline mt-0.5">
                    Yield accrued monthly: +৳384 BDT credited last period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution History Ledger */}
        <div className="rounded-2xl bg-surface-container/30 border border-outline-variant/30 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">
              Recent Contribution History
            </h4>
            <span className="text-xs text-outline">5 deposits recorded</span>
          </div>

          <div className="space-y-2">
            {mockContributions.map((c) => (
              <div
                key={c.id}
                className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-[11px]">
                    +৳
                  </div>
                  <div>
                    <span className="font-bold text-on-surface">{c.method}</span>
                    <p className="text-[11px] text-outline">{c.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-primary">+৳{c.amount.toLocaleString()}</span>
                  <p className="text-[10px] text-emerald-700 font-semibold">{c.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
