"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Cpu,
  Laptop,
  Download,
  Trash2,
  CheckCircle2,
} from "lucide-react";

export function ProfileSecurityPrivacy() {
  const [pushSpikes, setPushSpikes] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [smsLargeTx, setSmsLargeTx] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownloadArchive = () => {
    const data = {
      user: "Shakib Al Hasan",
      fintechId: "UPAY-BD-92841",
      exportedAt: new Date().toISOString(),
      currency: "BDT",
      healthScore: 78,
      goals: ["Emergency Fund", "Home Down Payment", "Cox's Bazar Vacation", "Tech Workstation"],
      dataStandard: "Bangladesh Bank Clearing Protocol v4.2",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "upay-financial-profile-shakib.json";
    a.click();
    URL.revokeObjectURL(url);
    triggerToast("Financial data archive exported successfully as JSON!");
  };

  return (
    <div className="rounded-2xl glass-card-elevated border border-primary/25 p-6 shadow-glass-card space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-outline-variant/30">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-on-surface">Data Sovereignty &amp; Security</h3>
          <p className="text-xs text-on-surface-variant">
            Enterprise cryptographic assurances for Shakib Al Hasan
          </p>
        </div>
      </div>

      {/* Zero Knowledge Banner */}
      <div className="relative pl-4 py-3 pr-3.5 rounded-xl bg-primary/5 border border-primary/25 flex flex-col gap-1">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-xl" />
        <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero-Knowledge Architecture</span>
        </div>
        <p className="text-xs text-on-surface leading-relaxed">
          All personal ledger records undergo AES-256 field-level client encryption before reaching cloud synchronization nodes.
        </p>
      </div>

      {/* Core Guarantees */}
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
          <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-on-surface">Bank-Grade 256-bit AES Encryption</span>
            <p className="text-[11px] text-outline mt-0.5">
              End-to-end encryption in transit (TLS 1.3) and at rest with hardware HSM token rotation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
          <EyeOff className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-on-surface">Zero Third-Party Monetization</span>
            <p className="text-[11px] text-outline mt-0.5">
              Your transaction history, balances, and lifestyle spending are strictly never sold or shared with ad networks.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
          <Cpu className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-on-surface">Isolated Zero-Retention AI Model</span>
            <p className="text-[11px] text-outline mt-0.5">
              Prompts and financial balances are scrubbed instantly after query generation. No public model training.
            </p>
          </div>
        </div>
      </div>

      {/* Current Active Device Session */}
      <div className="p-3.5 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-[11px] uppercase tracking-wider text-outline">Current Active Session</span>
          <span className="text-primary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span>Live Now</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-container-high/60 flex items-center justify-center text-on-surface shrink-0">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-on-surface">Next.js Client • Chrome Windows</p>
            <p className="text-[11px] text-outline">IP: 103.230.104.14 • Gulshan 2, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Notifications Risk Matrix */}
      <div className="space-y-3 pt-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
          Real-Time Risk Triggers
        </span>

        <div className="space-y-2.5 text-xs">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="font-semibold text-on-surface">Push Alerts for Budget Spikes</span>
              <p className="text-[11px] text-outline">Real-time alert when category spend spikes &gt;30%</p>
            </div>
            <input
              type="checkbox"
              checked={pushSpikes}
              onChange={() => setPushSpikes(!pushSpikes)}
              className="accent-primary h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="font-semibold text-on-surface">Weekly AI Financial Digest</span>
              <p className="text-[11px] text-outline">Consolidated algorithmic recap sent Sunday morning</p>
            </div>
            <input
              type="checkbox"
              checked={weeklyDigest}
              onChange={() => setWeeklyDigest(!weeklyDigest)}
              className="accent-primary h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="font-semibold text-on-surface">Instant SMS for Transactions &gt; ৳5,000</span>
              <p className="text-[11px] text-outline">High-value transaction dual verification notice</p>
            </div>
            <input
              type="checkbox"
              checked={smsLargeTx}
              onChange={() => setSmsLargeTx(!smsLargeTx)}
              className="accent-primary h-4 w-4"
            />
          </label>
        </div>
      </div>

      {/* Data Export & Account Control */}
      <div className="space-y-2.5 pt-3 border-t border-outline-variant/30">
        <span className="text-[11px] font-bold uppercase tracking-wider text-outline block">
          Portability &amp; Account Control
        </span>

        <button
          onClick={handleDownloadArchive}
          className="w-full h-11 px-4 rounded-xl border border-outline-variant/60 hover:bg-surface-container text-on-surface text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Download className="w-4 h-4 text-primary" />
          <span>Download Full Financial Data Archive (JSON/CSV)</span>
        </button>

        <button
          onClick={() => triggerToast("Account deletion request submitted for regulatory review.")}
          className="w-full h-11 px-4 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center gap-2 border border-rose-200 transition-all active:scale-95"
        >
          <Trash2 className="w-4 h-4" />
          <span>Request Account &amp; Data Deletion</span>
        </button>
      </div>
    </div>
  );
}
