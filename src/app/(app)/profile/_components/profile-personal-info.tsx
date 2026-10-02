"use client";

import { useState } from "react";
import { UserCheck, Lock, CheckCircle2, Shield, Languages } from "lucide-react";

export function ProfilePersonalInfo() {
  const [lang, setLang] = useState<"en" | "bn">("en");

  return (
    <div className="rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card space-y-5">
      <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <UserCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-on-surface">Personal Information</h3>
            <p className="text-xs text-on-surface-variant">
              Verified credentials connected to Bangladesh Bank KYC regulatory registry
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-outline">
            Full Legal Name
          </label>
          <div className="flex items-center justify-between px-3.5 h-11 rounded-xl bg-surface-container/30 border border-outline-variant/40 text-on-surface text-xs font-semibold">
            <span>Shakib Al Hasan</span>
            <Lock className="w-3.5 h-3.5 text-outline" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-outline">
            Registered Email
          </label>
          <div className="flex items-center justify-between px-3.5 h-11 rounded-xl bg-surface-container/30 border border-outline-variant/40 text-on-surface text-xs font-medium">
            <span>shakib.hasan@fintechbd.io</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified</span>
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-outline">
            Phone (Upay Primary MFS Wallet)
          </label>
          <div className="flex items-center justify-between px-3.5 h-11 rounded-xl bg-surface-container/30 border border-outline-variant/40 text-on-surface text-xs font-semibold">
            <span>+880 1711-892401</span>
            <span className="text-[10px] font-bold text-primary">Linked</span>
          </div>
        </div>

        {/* Interface Language */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-outline">
            Preferred Language
          </label>
          <div className="h-11 p-1 rounded-xl bg-surface-container/50 border border-outline-variant/40 flex items-center">
            <button
              onClick={() => setLang("en")}
              className={`flex-1 h-full rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                lang === "en"
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>English (UK)</span>
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`flex-1 h-full rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                lang === "bn"
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              <span>বাংলা (Bengali)</span>
            </button>
          </div>
        </div>

        {/* Verified Smart NID */}
        <div className="md:col-span-2 pt-1">
          <label className="text-[11px] font-bold uppercase tracking-wider text-outline block mb-1">
            National ID / KYC Verification
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-secondary-container/20 border border-primary/20 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-on-surface">Verified Smart NID</span>
                <p className="text-[11px] text-outline">
                  Smart Card Number: •••• •••• 9284 (Election Commission Bangladesh verified)
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center gap-1 self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tier-3 Limit Active</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
