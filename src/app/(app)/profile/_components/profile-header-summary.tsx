"use client";

import { CheckCircle2, ShieldCheck, Zap, Calendar, Fingerprint } from "lucide-react";

export function ProfileHeaderSummary() {
  return (
    <section className="rounded-2xl glass-card-elevated border border-white/85 p-6 md:p-7 relative overflow-hidden shadow-glass-card">
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        {/* Left: Avatar & Identity Details */}
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-tr from-primary to-primary-fixed shadow-md shrink-0">
            <div className="w-full h-full rounded-[14px] bg-primary/20 text-primary flex items-center justify-center font-black text-2xl border border-white/80">
              SA
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-on-primary" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">
                Shakib Al Hasan
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Upay MFS Verified</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-container">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span>Upay Premium Coach Tier</span>
              </span>
            </div>
            <p className="text-xs text-outline flex items-center gap-2">
              <span>Fintech ID: UPAY-BD-92841</span>
              <span>•</span>
              <span>Shariah &amp; Standard Coaching Enabled</span>
            </p>
          </div>
        </div>

        {/* Right: Quick Stats Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t lg:border-t-0 lg:border-l border-outline-variant/30 pt-4 lg:pt-0 lg:pl-6">
          <div className="flex flex-col p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
            <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Member Since</span>
            <span className="text-base font-extrabold text-on-surface mt-0.5">Jan 2023</span>
            <span className="text-[11px] text-primary flex items-center gap-0.5 mt-0.5 font-medium">
              <Calendar className="w-3 h-3" />
              <span>26 Mos Active</span>
            </span>
          </div>

          <div className="flex flex-col p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
            <span className="text-[10px] text-outline uppercase font-bold tracking-wider">2FA Biometric</span>
            <span className="text-base font-extrabold text-primary mt-0.5 flex items-center gap-1">
              <Fingerprint className="w-4 h-4" />
              <span>Active</span>
            </span>
            <span className="text-[11px] text-outline mt-0.5">FaceID Linked</span>
          </div>

          <div className="flex flex-col p-3 rounded-xl bg-surface-container/30 border border-outline-variant/30">
            <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Synced Feeds</span>
            <span className="text-base font-extrabold text-on-surface mt-0.5">42 Feeds</span>
            <span className="text-[11px] text-outline mt-0.5">bKash, Banks, Cards</span>
          </div>

          <div className="flex flex-col p-3 rounded-xl bg-secondary-container/40 border border-primary/20">
            <span className="text-[10px] text-on-secondary-container uppercase font-bold tracking-wider">Privacy Score</span>
            <span className="text-base font-extrabold text-primary mt-0.5">98 / 100</span>
            <span className="text-[11px] text-primary flex items-center gap-1 mt-0.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Optimal Safety</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
