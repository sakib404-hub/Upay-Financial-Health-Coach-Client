"use client";

import { Shield, Home, Plane, Laptop, Calendar, CreditCard, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export interface GoalItem {
  id: string;
  title: string;
  category: string;
  status: "on_track" | "ahead" | "needs_attention" | "completed" | "paused";
  statusText: string;
  currentBalance: number;
  targetAmount: number;
  targetDate: string;
  remainingMonths: string;
  requiredPace: number;
  iconName: "shield" | "home" | "plane" | "laptop";
  gradient: string;
}

interface GoalCardProps {
  goal: GoalItem;
  onViewDetails: (goal: GoalItem) => void;
  onAddContribution: (goal: GoalItem) => void;
}

export function GoalCard({ goal, onViewDetails, onAddContribution }: GoalCardProps) {
  const pct = Math.round((goal.currentBalance / goal.targetAmount) * 100);
  const remaining = Math.max(goal.targetAmount - goal.currentBalance, 0);

  const renderIcon = () => {
    switch (goal.iconName) {
      case "shield":
        return <Shield className="w-6 h-6 text-primary" />;
      case "home":
        return <Home className="w-6 h-6 text-primary" />;
      case "plane":
        return <Plane className="w-6 h-6 text-primary" />;
      case "laptop":
        return <Laptop className="w-6 h-6 text-outline" />;
    }
  };

  const getStatusBadge = () => {
    switch (goal.status) {
      case "on_track":
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>On Track</span>
          </span>
        );
      case "ahead":
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Ahead of Pace</span>
          </span>
        );
      case "needs_attention":
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span>Needs Attention</span>
          </span>
        );
      case "completed":
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white flex items-center gap-1.5">
            <span>✓ Completed</span>
          </span>
        );
      case "paused":
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant flex items-center gap-1.5">
            <span>Paused</span>
          </span>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
    >
      <div>
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-primary flex items-center justify-center shadow-xs shrink-0">
              {renderIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                {goal.category}
              </span>
              <h3 className="text-lg font-bold text-on-surface tracking-tight">
                {goal.title}
              </h3>
            </div>
          </div>
          {getStatusBadge()}
        </div>

        {/* Numbers: Balance & Target */}
        <div className="mt-6 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-outline">Current Balance</span>
            <div className="text-2xl font-extrabold text-on-surface">
              ৳{goal.currentBalance.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-outline">Target Amount</span>
            <div className="text-base font-semibold text-on-surface-variant">
              ৳{goal.targetAmount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
            <span className="font-bold text-primary">{pct}% Completed</span>
            <span className="text-outline">
              Remaining: <strong className="text-on-surface font-semibold">৳{remaining.toLocaleString()}</strong>
            </span>
          </div>
          <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                goal.status === "needs_attention"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600"
                  : "bg-gradient-to-r from-secondary to-primary"
              }`}
              style={{ width: `${Math.min(pct, 100)}%` }}
            />
          </div>
        </div>

        {/* Meta Data Grid */}
        <div className="grid grid-cols-2 gap-3 mt-5 p-3 rounded-xl bg-surface-container/40 border border-outline-variant/30">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-outline shrink-0" />
            <div>
              <div className="text-[10px] text-outline font-medium">Target Date</div>
              <div className="text-xs font-semibold text-on-surface">
                {goal.targetDate} <span className="text-outline font-normal">({goal.remainingMonths})</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 border-l border-outline-variant/30 pl-3">
            <CreditCard className="w-4 h-4 text-outline shrink-0" />
            <div>
              <div className="text-[10px] text-outline font-medium">Required Pace</div>
              <div
                className={`text-xs font-bold ${
                  goal.status === "needs_attention" ? "text-amber-800" : "text-on-surface"
                }`}
              >
                ৳{goal.requiredPace.toLocaleString()}/month
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-end gap-2.5">
        <button
          onClick={() => onViewDetails(goal)}
          className="px-4 py-2 rounded-full bg-surface-container-lowest hover:bg-white text-xs font-semibold text-on-surface border border-outline-variant/40 transition-colors"
        >
          View Details
        </button>
        <button
          onClick={() => onAddContribution(goal)}
          className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-xs font-bold text-on-primary flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add Contribution</span>
        </button>
      </div>
    </motion.article>
  );
}
