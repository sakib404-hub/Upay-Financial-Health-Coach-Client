"use client";

import { useState } from "react";
import { BrainCircuit } from "lucide-react";

export function ProfileAiPreferences() {
  const [tone, setTone] = useState<"gentle" | "analytical" | "strict">("analytical");
  const [bufferThreshold, setBufferThreshold] = useState(20000);
  const [smartMl, setSmartMl] = useState(true);
  const [rewards, setRewards] = useState(true);

  return (
    <div className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card space-y-5">
      <div className="flex items-center gap-2.5 pb-4 border-b border-outline-variant/30">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <BrainCircuit className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-on-surface">Preferences &amp; AI Coaching Logic</h3>
          <p className="text-xs text-on-surface-variant">
            Customize how the algorithmic intelligence interacts with your spending behaviors
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Base Currency */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-container/30 border border-outline-variant/30">
          <div>
            <span className="text-xs font-bold text-on-surface">Base Ledger Currency</span>
            <p className="text-[11px] text-outline">
              Primary monetary unit applied across budget engines and simulations
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-primary/30 text-primary font-bold text-xs shadow-xs self-start sm:self-auto">
            <span>৳ BDT</span>
            <span className="text-outline text-[10px]">Bangladeshi Taka</span>
          </div>
        </div>

        {/* Coaching Tone Radio Cards */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface">Coaching Tone &amp; Rigor</span>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Adaptive Algorithm
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Gentle */}
            <div
              onClick={() => setTone("gentle")}
              className={`cursor-pointer p-3 rounded-xl border text-xs transition-all ${
                tone === "gentle"
                  ? "border-2 border-primary bg-primary/5 shadow-xs"
                  : "border-outline-variant/40 bg-surface-container/20 hover:bg-surface-container/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${tone === "gentle" ? "text-primary" : "text-on-surface"}`}>
                  Gentle
                </span>
                <input
                  type="radio"
                  checked={tone === "gentle"}
                  onChange={() => setTone("gentle")}
                  className="accent-primary"
                />
              </div>
              <p className="text-[11px] text-outline">Encouraging advice; light nudge on overages.</p>
            </div>

            {/* Analytical */}
            <div
              onClick={() => setTone("analytical")}
              className={`cursor-pointer p-3 rounded-xl border text-xs transition-all ${
                tone === "analytical"
                  ? "border-2 border-primary bg-primary/5 shadow-xs"
                  : "border-outline-variant/40 bg-surface-container/20 hover:bg-surface-container/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${tone === "analytical" ? "text-primary" : "text-on-surface"}`}>
                  Proactive &amp; Analytical
                </span>
                <input
                  type="radio"
                  checked={tone === "analytical"}
                  onChange={() => setTone("analytical")}
                  className="accent-primary"
                />
              </div>
              <p className="text-[11px] text-on-surface-variant font-medium">
                Data-heavy forecasting with immediate risk mitigation prompts.
              </p>
            </div>

            {/* Strict */}
            <div
              onClick={() => setTone("strict")}
              className={`cursor-pointer p-3 rounded-xl border text-xs transition-all ${
                tone === "strict"
                  ? "border-2 border-primary bg-primary/5 shadow-xs"
                  : "border-outline-variant/40 bg-surface-container/20 hover:bg-surface-container/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${tone === "strict" ? "text-primary" : "text-on-surface"}`}>
                  Strict Guardrail
                </span>
                <input
                  type="radio"
                  checked={tone === "strict"}
                  onChange={() => setTone("strict")}
                  className="accent-primary"
                />
              </div>
              <p className="text-[11px] text-outline">Rigid spending caps with proactive lock warnings.</p>
            </div>
          </div>
        </div>

        {/* Emergency Cushion Threshold Slider */}
        <div className="p-4 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-on-surface">Emergency Cushion Threshold</span>
              <p className="text-[11px] text-outline">
                Trigger priority coaching alerts when liquid reserves dip below this buffer
              </p>
            </div>
            <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
              ৳{bufferThreshold.toLocaleString()}
            </span>
          </div>

          <input
            type="range"
            min="5000"
            max="100000"
            step="5000"
            value={bufferThreshold}
            onChange={(e) => setBufferThreshold(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-[10px] text-outline font-medium">
            <span>Min: ৳5,000</span>
            <span className="text-primary font-bold">Optimal Buffer for Dhaka Urban Living</span>
            <span>Max: ৳100,000</span>
          </div>
        </div>

        {/* Toggles */}
        <div className="divide-y divide-outline-variant/30 pt-1">
          {/* Smart ML */}
          <div className="py-3 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-on-surface">
                High Precision Smart ML Categorization
              </span>
              <p className="text-[11px] text-outline">
                Automatically parses SMS receipts, POS codes, and merchant descriptions locally.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSmartMl(!smartMl)}
              className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                smartMl ? "bg-primary" : "bg-outline-variant/60"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  smartMl ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Goal Celebrations */}
          <div className="py-3 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-on-surface">
                Goal Milestone Celebrations &amp; Micro-Rewards
              </span>
              <p className="text-[11px] text-outline">
                Receive celebratory breakdowns when your emergency fund hits 25%, 50%, and 100%.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setRewards(!rewards)}
              className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                rewards ? "bg-primary" : "bg-outline-variant/60"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  rewards ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
