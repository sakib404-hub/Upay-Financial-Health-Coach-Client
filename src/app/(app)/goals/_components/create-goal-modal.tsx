"use client";

import { useState } from "react";
import { X, Target } from "lucide-react";
import { GoalItem } from "./goal-card";

interface CreateGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateGoal: (newGoal: GoalItem) => void;
}

export function CreateGoalModal({ isOpen, onClose, onCreateGoal }: CreateGoalModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Safety Net");
  const [targetAmount, setTargetAmount] = useState("50000");
  const [initialDeposit, setInitialDeposit] = useState("5000");
  const [months, setMonths] = useState("6");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const target = parseFloat(targetAmount) || 50000;
    const initial = parseFloat(initialDeposit) || 0;
    const numMonths = parseInt(months) || 6;
    const pace = Math.round((target - initial) / numMonths);

    let iconName: GoalItem["iconName"] = "shield";
    if (category === "Property") iconName = "home";
    else if (category === "Travel & Leisure") iconName = "plane";
    else if (category === "Productivity") iconName = "laptop";

    const newGoal: GoalItem = {
      id: `goal-${Date.now()}`,
      title: title.trim(),
      category,
      status: "on_track",
      statusText: "On Track",
      currentBalance: initial,
      targetAmount: target,
      targetDate: `${numMonths} months from now`,
      remainingMonths: `${numMonths} mos left`,
      requiredPace: pace,
      iconName,
      gradient: "from-secondary to-primary",
    };

    onCreateGoal(newGoal);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-surface-container-lowest border border-white/90 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-surface">Create New Savings Goal</h3>
            <p className="text-xs text-on-surface-variant">Set an AI-monitored sinking fund</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1">
              Goal Name
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Eid Vacation, New MacBook, Wedding Fund"
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Safety Net">Safety Net</option>
                <option value="Property">Property</option>
                <option value="Travel & Leisure">Travel &amp; Leisure</option>
                <option value="Productivity">Productivity</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">
                Target Timeline (Months)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">
                Target Amount (৳)
              </label>
              <input
                type="number"
                min="1000"
                step="500"
                required
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">
                Initial Deposit (৳)
              </label>
              <input
                type="number"
                min="0"
                step="500"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container/50 border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-outline-variant/40 text-xs font-semibold text-on-surface hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              Save Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
