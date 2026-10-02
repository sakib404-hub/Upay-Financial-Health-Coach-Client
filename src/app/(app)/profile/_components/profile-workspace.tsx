"use client";

import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ProfileHeaderSummary } from "./profile-header-summary";
import { ProfilePersonalInfo } from "./profile-personal-info";
import { ProfileAiPreferences } from "./profile-ai-preferences";
import { ProfileSecurityPrivacy } from "./profile-security-privacy";

export function ProfileWorkspace() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSave = () => {
    setToastMessage("Profile settings and coaching parameters updated successfully!");
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Screen Title & Action Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
            <span>Account</span>
            <span className="text-outline">/</span>
            <span className="text-primary font-medium">Profile &amp; Privacy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
            Profile &amp; Privacy Settings
          </h1>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Manage your personal identity, connected MFS accounts, and cryptographic security settings.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            onClick={() => {
              setToastMessage("Changes discarded.");
              setTimeout(() => setToastMessage(null), 2500);
            }}
            className="h-10 px-4 rounded-full border border-outline-variant/60 hover:bg-surface-container text-xs font-semibold text-on-surface transition-colors"
          >
            Discard
          </button>
          <button
            onClick={handleSave}
            className="h-10 px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <Check className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </motion.div>

      {/* SECTION 1: Top Profile Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <ProfileHeaderSummary />
      </motion.div>

      {/* TWO COLUMN BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal Info & AI Coaching (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="lg:col-span-7 space-y-6"
        >
          <ProfilePersonalInfo />
          <ProfileAiPreferences />
        </motion.div>

        {/* Right Column: Privacy Architecture & Security (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <ProfileSecurityPrivacy />
        </motion.div>
      </div>
    </div>
  );
}
