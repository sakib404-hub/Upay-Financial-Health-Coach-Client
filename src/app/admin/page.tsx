"use client";

import Link from "next/link";
import {
  Users,
  FolderTree,
  Settings2,
  Activity,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Cpu,
  ArrowRight,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/60 border border-primary/20 text-on-secondary-fixed-variant text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Master Governance &amp; Supervisory Control</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Admin Center - Executive Control Center
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1">
            Real-time administrative operations, AI coaching heuristics telemetry, user access control, and national financial regulatory compliance.
          </p>
        </div>

        {/* Live Cluster Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-outline-variant/40 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-on-surface-variant">
            Cluster: <strong className="text-on-surface font-semibold">BD-Central Tier-IV (18ms)</strong>
          </span>
        </div>
      </motion.section>

      {/* 4 Global KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Supervised Accounts
            </span>
            <div className="w-9 h-9 rounded-xl bg-secondary-container/60 text-primary flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              124,580
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-primary font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12.4% MoM growth</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal-400" />
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Reconciled Volume
            </span>
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Receipt className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              ৳428M
            </span>
            <span className="text-xs text-outline font-semibold">BDT</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-secondary font-semibold">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>100% reconciliation ready</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary-container" />
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              ML Inference Precision
            </span>
            <div className="w-9 h-9 rounded-xl bg-secondary-container/60 text-primary flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              98.4%
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-primary font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fintech-BERT v3.8 Active</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal-300" />
        </motion.div>

        {/* Metric 4 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              System Integrity
            </span>
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Server className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              99.98%
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-on-surface-variant">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Bangladesh Bank Validated</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-300" />
        </motion.div>
      </section>

      {/* 4 Major Admin Modules Jump Cards */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-outline">
          Administrative Workspaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Users Management */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/admin/users"
              className="group rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 h-full"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Manage Users</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-on-surface">Users Management</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Supervise 124,580 retail and business accounts. Review pending KYC verifications, manage AML risk holds, and inspect coaching health scores.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-outline">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>1 Pending KYC review</span>
                <span className="mx-1">•</span>
                <span className="text-rose-600 font-semibold">142 AML holds</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Categories Management */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <Link
              href="/admin/categories"
              className="group rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 h-full"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FolderTree className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Taxonomies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-on-surface">Categories &amp; ML Taxonomies</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Configure 14 spending and income categories, 600+ regex merchant matching patterns, and run interactive classification sandbox tests.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-outline">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>98.4% Classification accuracy</span>
                <span className="mx-1">•</span>
                <span>8 Operational</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: System Configuration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href="/admin/config"
              className="group rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 h-full"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Settings2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Configure System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-on-surface">Central System Configuration</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Adjust Financial Health Index pillar weightings, automated coaching surge nudges, LLM provider routing, and micro-savings auto-sweep defaults.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-outline">
                <span className="text-primary font-bold">v4.2.1-PROD</span>
                <span className="mx-1">•</span>
                <span>Published by Master Admin</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 4: Activity & Audit Trail */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <Link
              href="/admin/activity"
              className="group rounded-2xl glass-card-elevated border border-white/85 p-6 shadow-glass-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 h-full"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Audit Stream</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-on-surface">Activity &amp; Audit Trail</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Immutable cryptographic Merkle audit logs recording every transactional classification, goal lifecycle event, and supervisory intervention.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-outline">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>18,492 events today</span>
                <span className="mx-1">•</span>
                <span>7-Yr Regulatory Retention</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cluster Infrastructure Health Strip */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card"
      >
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider">
              Dhaka Infrastructure &amp; Core Pipeline Health
            </h3>
          </div>
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            All Systems Nominal
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs">
          <div className="p-3 rounded-xl bg-surface-container-high/30">
            <span className="text-[10px] text-outline uppercase font-bold">MFS Webhook Gateway</span>
            <p className="font-bold text-on-surface mt-0.5">2,400 events/sec</p>
            <span className="text-[10px] text-primary">0 dropped packets</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-high/30">
            <span className="text-[10px] text-outline uppercase font-bold">Inference Latency</span>
            <p className="font-bold text-on-surface mt-0.5">18ms average</p>
            <span className="text-[10px] text-primary">99th percentile &lt; 45ms</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-high/30">
            <span className="text-[10px] text-outline uppercase font-bold">Regulatory Archival</span>
            <p className="font-bold text-on-surface mt-0.5">Merkle #AUD-2024-8921</p>
            <span className="text-[10px] text-primary">Signed by Bangladesh Bank Root</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
