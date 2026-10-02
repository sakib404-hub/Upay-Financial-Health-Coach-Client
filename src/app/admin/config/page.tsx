"use client";

import { useState } from "react";
import {
  Sliders,
  ShieldCheck,
  HeartPulse,
  Bot,
  Cpu,
  PiggyBank,
  RotateCcw,
  Save,
  CloudUpload,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminConfigPage() {
  // Card 1: Financial Health Benchmarks
  const [optimalCutoff, setOptimalCutoff] = useState(75);
  const [moderateCutoff, setModerateCutoff] = useState(55);
  const [savingsRateWeight, setSavingsRateWeight] = useState(30);
  const [spendingDisciplineWeight, setSpendingDisciplineWeight] = useState(30);
  const [goalVelocityWeight, setGoalVelocityWeight] = useState(20);
  const [emergencyDepthWeight, setEmergencyDepthWeight] = useState(20);
  const [calcCadence, setCalcCadence] = useState("Daily Real-time Ledger Sync");

  // Card 2: AI Recommendation Heuristics & Tone
  const [engineActive, setEngineActive] = useState(true);
  const [surgeThreshold, setSurgeThreshold] = useState("+15%");
  const [diningThreshold, setDiningThreshold] = useState("+20%");
  const [coachTone, setCoachTone] = useState<"conservative" | "balanced" | "proactive" | "strict">("proactive");

  // Card 3: Machine Learning & Model Pipeline
  const [mlEngine, setMlEngine] = useState("Fintech-BERT v3.8 - Dhaka Region MFS Specialized");
  const [confidenceCutoff, setConfidenceCutoff] = useState(92);
  const [llmProvider, setLlmProvider] = useState("Isolated Private Financial LLM Node - Zero Data Retention");
  const [maxTokens, setMaxTokens] = useState(2048);
  const [rateLimit, setRateLimit] = useState(100);

  // Card 4: Automated Surplus & Sinking Funds
  const [defaultBuffer, setDefaultBuffer] = useState("20,000");
  const [roundUpSweep, setRoundUpSweep] = useState("Round up to nearest ৳50");
  const [highValueLimit, setHighValueLimit] = useState("5,000");
  const [maintenanceWindow, setMaintenanceWindow] = useState("Every Sunday 03:00 - 04:00 AM BST");

  // Save / Toast State
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleResetDefaults = () => {
    setOptimalCutoff(75);
    setModerateCutoff(55);
    setSavingsRateWeight(30);
    setSpendingDisciplineWeight(30);
    setGoalVelocityWeight(20);
    setEmergencyDepthWeight(20);
    setCalcCadence("Daily Real-time Ledger Sync");
    setEngineActive(true);
    setSurgeThreshold("+15%");
    setDiningThreshold("+20%");
    setCoachTone("proactive");
    setMlEngine("Fintech-BERT v3.8 - Dhaka Region MFS Specialized");
    setConfidenceCutoff(92);
    setLlmProvider("Isolated Private Financial LLM Node - Zero Data Retention");
    setMaxTokens(2048);
    setRateLimit(100);
    setDefaultBuffer("20,000");
    setRoundUpSweep("Round up to nearest ৳50");
    setHighValueLimit("5,000");
    setMaintenanceWindow("Every Sunday 03:00 - 04:00 AM BST");
    showToast("Restored all configuration parameters to baseline defaults.");
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast("System Configuration v4.2.2 published successfully across Bangladesh cluster.");
    }, 1200);
  };

  const totalWeight =
    savingsRateWeight + spendingDisciplineWeight + goalVelocityWeight + emergencyDepthWeight;

  return (
    <div className="space-y-8 pb-28">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-800 text-white font-medium text-xs shadow-xl flex items-center gap-2 animate-in fade-in duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Headline Anchor */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
              <Sliders className="w-4 h-4 text-primary" />
              <span>Central Parametric Governance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Admin Center - System Configuration
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl mt-1">
              Globally calibrate AI scoring algorithms, financial health benchmarks, recommendation heuristics, and automation rules across the Upay Coach network.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 shadow-xs text-right">
              <div className="text-[10px] text-outline uppercase font-bold">Cluster Region</div>
              <div className="text-xs font-bold text-on-surface">BD-Central (Dhaka Core)</div>
            </div>
          </div>
        </div>

        {/* System Governance Banner */}
        <div className="rounded-xl glass-card-elevated p-4 border-l-4 border-l-primary border border-white/85 shadow-glass-card flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-on-surface">Active Algorithmic Safeguard Protocol</p>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Changes applied here dynamically update scoring models for all registered Bangladeshi retail accounts in real-time ledger batches.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
            v4.2.1-PROD
          </span>
        </div>
      </section>

      {/* 4 Major Settings Cards (Bento / Symmetric Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CARD 1: Financial Health Scoring Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between space-y-5"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-on-surface">
                    1. Financial Health Scoring Benchmarks
                  </h2>
                  <p className="text-xs text-outline">Composite Index (PHI) Weighting Matrix</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-surface-container text-on-surface px-2 py-0.5 rounded-full">
                Scoring Engine
              </span>
            </div>

            {/* Score Cutoffs */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                Personal Health Index Baseline Cutoffs
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-on-surface">Optimal Cutoff</label>
                    <span className="text-xs text-primary font-bold">/ 100</span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      min={50}
                      max={100}
                      value={optimalCutoff}
                      onChange={(e) => setOptimalCutoff(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                    />
                    <span className="absolute right-3 text-[10px] text-outline font-bold">PTS</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-on-surface">Moderate Cutoff</label>
                    <span className="text-xs text-secondary font-bold">/ 100</span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      min={30}
                      max={75}
                      value={moderateCutoff}
                      onChange={(e) => setModerateCutoff(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                    />
                    <span className="absolute right-3 text-[10px] text-outline font-bold">PTS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Sliders */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Pillar Weightings Calibration
                </span>
                <span
                  className={`text-xs font-bold ${
                    totalWeight === 100 ? "text-primary" : "text-rose-600"
                  }`}
                >
                  Total: {totalWeight}% {totalWeight !== 100 && "(Must equal 100%)"}
                </span>
              </div>

              {/* Savings Rate */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-on-surface">Savings Rate Weight</span>
                  <span className="font-bold text-primary">{savingsRateWeight}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  value={savingsRateWeight}
                  onChange={(e) => setSavingsRateWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg cursor-pointer accent-primary"
                />
              </div>

              {/* Spending Discipline */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-on-surface">Spending Discipline (Needs/Wants)</span>
                  <span className="font-bold text-primary">{spendingDisciplineWeight}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  value={spendingDisciplineWeight}
                  onChange={(e) => setSpendingDisciplineWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg cursor-pointer accent-primary"
                />
              </div>

              {/* Goal Milestone Velocity */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-on-surface">Goal Milestone Velocity</span>
                  <span className="font-bold text-primary">{goalVelocityWeight}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={goalVelocityWeight}
                  onChange={(e) => setGoalVelocityWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg cursor-pointer accent-primary"
                />
              </div>

              {/* Emergency Cushion Depth */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-on-surface">Emergency Cushion Depth</span>
                  <span className="font-bold text-primary">{emergencyDepthWeight}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={emergencyDepthWeight}
                  onChange={(e) => setEmergencyDepthWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg cursor-pointer accent-primary"
                />
              </div>
            </div>

            {/* Calculation Cadence */}
            <div className="pt-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-outline mb-1.5">
                Calculation Cadence
              </label>
              <select
                value={calcCadence}
                onChange={(e) => setCalcCadence(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Daily Real-time Ledger Sync</option>
                <option>Hourly Incremental Event Stream</option>
                <option>End of Business Day Batch (23:59 BST)</option>
                <option>Manual Pipeline Trigger Only</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: AI Recommendation Heuristics & Tone */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between space-y-5"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-on-surface">
                    2. AI Recommendation Heuristics &amp; Tone
                  </h2>
                  <p className="text-xs text-outline">Automated Nudges &amp; Cognitive Tone Guardrails</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                Heuristics v3
              </span>
            </div>

            {/* Engine Status Toggle */}
            <div className="p-4 rounded-xl bg-surface-container-high/30 border border-primary/20 flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold text-on-surface block">
                  Automated Recommendation Engine Status
                </span>
                <p className="text-[11px] text-on-surface-variant mt-0.5">
                  Active algorithmic synthesis for user notifications and prompt feed.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEngineActive(!engineActive)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  engineActive ? "bg-primary" : "bg-outline-variant"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    engineActive ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Surge Alert Threshold */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                Proactive Spending Surge Alert Threshold
              </label>
              <select
                value={surgeThreshold}
                onChange={(e) => setSurgeThreshold(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Trigger warning when discretionary spending spikes by: +10%</option>
                <option>Trigger warning when discretionary spending spikes by: +15%</option>
                <option>Trigger warning when discretionary spending spikes by: +20%</option>
                <option>Trigger warning when discretionary spending spikes by: +25%</option>
              </select>
            </div>

            {/* Dining Outflow Nudge */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                Dining Outflow Nudge Threshold
              </label>
              <select
                value={diningThreshold}
                onChange={(e) => setDiningThreshold(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Flag when weekend dining exceeds weekly food allocation by: +15%</option>
                <option>Flag when weekend dining exceeds weekly food allocation by: +20%</option>
                <option>Flag when weekend dining exceeds weekly food allocation by: +30%</option>
              </select>
            </div>

            {/* Fallback Coach Tone Radio Cards */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-outline">
                Fallback AI Coach Tone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: "conservative", label: "Conservative", desc: "Caution-first" },
                  { key: "balanced", label: "Balanced", desc: "Standard peer" },
                  { key: "proactive", label: "Proactive", desc: "Analytical Edge" },
                  { key: "strict", label: "Strict", desc: "Zero-slack" },
                ].map((tone) => (
                  <button
                    type="button"
                    key={tone.key}
                    onClick={() => setCoachTone(tone.key as typeof coachTone)}
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      coachTone === tone.key
                        ? "border-2 border-primary bg-primary/10 text-primary font-bold"
                        : "border-outline-variant/60 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high/40"
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{tone.label}</div>
                    <div className="text-[10px] text-outline mt-0.5">{tone.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Machine Learning & Model Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between space-y-5"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-on-surface">
                    3. Machine Learning &amp; Model Pipeline
                  </h2>
                  <p className="text-xs text-outline">Inference Engine, Token Allotments &amp; Confidence Gates</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-surface-container text-on-surface px-2 py-0.5 rounded-full">
                LLM Gateway
              </span>
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                Transaction Classification Engine
              </label>
              <select
                value={mlEngine}
                onChange={(e) => setMlEngine(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Fintech-BERT v3.8 - Dhaka Region MFS Specialized</option>
                <option>Fintech-BERT v3.2 - Standard Banking Ledger</option>
                <option>DistilBERT-Finance - Ultra Low-Latency</option>
                <option>Custom Bangladesh Bank NBR Taxonomy Parser v2</option>
              </select>
            </div>

            {/* Confidence Cutoff Slider */}
            <div className="space-y-2 p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-on-surface">
                  Minimum Confidence Cutoff for Auto-Approval
                </label>
                <span className="text-sm font-bold text-primary">{confidenceCutoff}%</span>
              </div>
              <input
                type="range"
                min={70}
                max={99}
                value={confidenceCutoff}
                onChange={(e) => setConfidenceCutoff(Number(e.target.value))}
                className="w-full h-1.5 bg-surface-container-highest rounded-lg cursor-pointer accent-primary"
              />
              <p className="text-[11px] text-outline">
                Transactions below {confidenceCutoff}% confidence trigger explicit user category confirmation in feed.
              </p>
            </div>

            {/* LLM Synthesis Provider */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                Real-time LLM Synthesis Provider
              </label>
              <select
                value={llmProvider}
                onChange={(e) => setLlmProvider(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Isolated Private Financial LLM Node - Zero Data Retention</option>
                <option>Enterprise Sovereign Gateway (Dhaka Datacenter Tier-IV)</option>
                <option>Hybrid On-Device Edge Embedder + Central Synthesizer</option>
              </select>
            </div>

            {/* Tokens & Rate Limit Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40">
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Max Tokens / Session
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    step={256}
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                  />
                  <span className="absolute right-3 text-[10px] text-outline">tokens</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40">
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Rate Limiting / User
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    value={rateLimit}
                    onChange={(e) => setRateLimit(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                  />
                  <span className="absolute right-3 text-[10px] text-outline">queries/day</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Automated Surplus & Sinking Funds */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card flex flex-col justify-between space-y-5"
        >
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-outline-variant/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-on-surface">
                    4. Automated Surplus &amp; Sinking Funds
                  </h2>
                  <p className="text-xs text-outline">Micro-Savings Thresholds &amp; Buffer Governance</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-surface-container text-on-surface px-2 py-0.5 rounded-full">
                Auto-Sweep
              </span>
            </div>

            {/* Emergency Buffer */}
            <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40 space-y-1">
              <label className="block text-xs font-semibold text-on-surface">
                Global Default Emergency Buffer Recommendation
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm font-bold text-on-surface">৳</span>
                <input
                  type="text"
                  value={defaultBuffer}
                  onChange={(e) => setDefaultBuffer(e.target.value)}
                  className="w-full pl-8 pr-14 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                />
                <span className="absolute right-3 text-[10px] font-bold text-outline">BDT</span>
              </div>
              <p className="text-[11px] text-outline">
                Baseline target prompt seeded into fresh onboarded personal accounts.
              </p>
            </div>

            {/* Round-up Multiplier */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                Micro-savings Round-up Multiplier
              </label>
              <select
                value={roundUpSweep}
                onChange={(e) => setRoundUpSweep(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Round up to nearest ৳10</option>
                <option>Round up to nearest ৳50</option>
                <option>Round up to nearest ৳100</option>
                <option>Adaptive 2% fractional sweep per transaction</option>
              </select>
            </div>

            {/* High-Value Transaction Limit */}
            <div className="p-3.5 rounded-xl bg-surface-container-high/30 border border-outline-variant/40 space-y-1">
              <label className="block text-xs font-semibold text-on-surface">
                High-Value Transaction Verification Threshold
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm font-bold text-on-surface">৳</span>
                <input
                  type="text"
                  value={highValueLimit}
                  onChange={(e) => setHighValueLimit(e.target.value)}
                  className="w-full pl-8 pr-14 py-1.5 rounded-lg text-sm font-bold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                />
                <span className="absolute right-3 text-[10px] font-bold text-outline">BDT</span>
              </div>
              <p className="text-[11px] text-outline">
                Transactions exceeding this limit trigger deliberate coach impact review.
              </p>
            </div>

            {/* System Maintenance Window */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface">
                System Maintenance Window
              </label>
              <select
                value={maintenanceWindow}
                onChange={(e) => setMaintenanceWindow(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl text-xs font-medium bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
              >
                <option>Every Sunday 03:00 - 04:00 AM BST</option>
                <option>Every Friday 04:00 - 05:00 AM BST</option>
                <option>First Calendar Day of Month 02:00 - 03:00 AM BST</option>
              </select>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Floating Action Dock / Audit Bar */}
      <div className="fixed bottom-0 right-0 left-0 lg:left-64 bg-surface-container-lowest/95 backdrop-blur-2xl border-t border-outline-variant/40 px-4 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 z-40 shadow-lg">
        {/* Version Audit Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <CloudUpload className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface">Active Config Version 4.2.1</p>
            <p className="text-[10px] text-outline">
              Last published by Shakib Al Hasan (Master Admin) • Today 09:12 AM BST
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-4 py-2 rounded-full text-xs font-semibold text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-high border border-outline-variant/60 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-outline" />
            <span>Reset Defaults</span>
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-sm active:scale-95 flex items-center gap-1.5 disabled:opacity-60"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isSaving ? "Publishing v4.2.2..." : "Save System Configuration"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
