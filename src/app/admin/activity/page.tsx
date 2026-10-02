"use client";

import { useState, useMemo } from "react";
import {
  ShieldCheck,
  Download,
  Activity,
  AlertTriangle,
  Wrench,
  Fingerprint,
  Search,
  RotateCcw,
  CheckCircle2,
  UserPlus,
  Receipt,
  Flag,
  Sliders,
  Bot,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

interface AuditEvent {
  id: string;
  timeAgo: string;
  exactTime: string;
  eventName: string;
  eventAction: string;
  icon: typeof UserPlus;
  details: string;
  actorName: string;
  actorRole: string;
  category: string;
  categoryStyle: string;
  metadataPrimary: string;
  metadataSecondary: string;
  isAlert?: boolean;
}

const INITIAL_EVENTS: AuditEvent[] = [
  {
    id: "1",
    timeAgo: "2 mins ago",
    exactTime: "10:48:12 AM BST",
    eventName: "User registered",
    eventAction: "Lifecycle Entry",
    icon: UserPlus,
    details:
      "New account created for +880 1744-991204 (Tariqul Islam) via Upay MFS app. Basic KYC tier established.",
    actorName: "System Onboarding",
    actorRole: "Pipeline Automated",
    category: "Info / User Lifecycle",
    categoryStyle: "bg-secondary-container/70 text-on-secondary-fixed-variant",
    metadataPrimary: "103.230.104.22",
    metadataSecondary: "Dhaka, Bangladesh",
  },
  {
    id: "2",
    timeAgo: "7 mins ago",
    exactTime: "10:43:05 AM BST",
    eventName: "Transaction logged",
    eventAction: "Auto-Classified",
    icon: Receipt,
    details:
      "Daraz Bangladesh payment ৳2,450.00 logged. ML classifier resolved to 'Shopping & Retail' with 98.6% confidence score.",
    actorName: "Shakib Al Hasan",
    actorRole: "UID: UP-DK-8921",
    category: "Ledger Sync",
    categoryStyle: "bg-surface-container text-on-surface-variant",
    metadataPrimary: "Txn #UP-9842185-BD",
    metadataSecondary: "MFS Merchant Gateway",
  },
  {
    id: "3",
    timeAgo: "18 mins ago",
    exactTime: "10:32:44 AM BST",
    eventName: "Goal created",
    eventAction: "Financial Planning",
    icon: Flag,
    details:
      "User initialized new target 'Cox's Bazar Vacation' with ৳50,000 ceiling, target date Nov 15, 2024. Auto-save rate set to ৳3,750/mo.",
    actorName: "Shakib Al Hasan",
    actorRole: "UID: UP-DK-8921",
    category: "Goals",
    categoryStyle: "bg-secondary-container/70 text-on-secondary-fixed-variant",
    metadataPrimary: "Goal #G-77401",
    metadataSecondary: "Auto-Debit Enabled",
  },
  {
    id: "4",
    timeAgo: "42 mins ago",
    exactTime: "10:08:19 AM BST",
    eventName: "Category rules edited",
    eventAction: "ML Rule Override",
    icon: Sliders,
    details:
      "Updated ML pattern regex for 'Food & Dining' to capture newly onboarded merchant 'Sultan's Dine Gulshan 2'.",
    actorName: "Shakib Al Hasan",
    actorRole: "Master Admin - Dhaka Ops",
    category: "Admin Governance",
    categoryStyle: "bg-surface-container text-on-surface border border-outline-variant/40",
    metadataPrimary: "Rule #R-142",
    metadataSecondary: "Regex Engine v2.4",
  },
  {
    id: "5",
    timeAgo: "1 hour ago",
    exactTime: "09:50:31 AM BST",
    eventName: "User status updated",
    eventAction: "AML Protocol",
    icon: AlertTriangle,
    details:
      "Kazi Mahfuzur (UID: UP-CTG-7721) flagged for AML compliance hold due to rapid multi-wallet structuring. Account status set to 'Blocked'.",
    actorName: "Automated AML Watchdog",
    actorRole: "Version 4.2 Ruleset",
    category: "Compliance Alert",
    categoryStyle: "bg-rose-100 text-rose-800 font-bold",
    metadataPrimary: "Case #AML-8821",
    metadataSecondary: "Escalated to Legal",
    isAlert: true,
  },
  {
    id: "6",
    timeAgo: "2 hours ago",
    exactTime: "08:44:11 AM BST",
    eventName: "AI Coach heuristic",
    eventAction: "Autonomous Dispatch",
    icon: Bot,
    details:
      "Discretionary dining surge alert (+18%) synthesized and delivered to 1,420 users ahead of weekend spending window.",
    actorName: "Upay AI Engine",
    actorRole: "Neural Synthesis v3",
    category: "Intelligence Dispatch",
    categoryStyle: "bg-secondary-container/70 text-on-secondary-fixed-variant",
    metadataPrimary: "Batch #AI-9912",
    metadataSecondary: "High Intent Segments",
  },
];

export default function AdminActivityPage() {
  const [events] = useState<AuditEvent[]>(INITIAL_EVENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchQuery =
        ev.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.actorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.metadataPrimary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCat =
        categoryFilter === "all" ||
        (categoryFilter === "lifecycle" && ev.category.includes("Lifecycle")) ||
        (categoryFilter === "ledger" && ev.category.includes("Ledger")) ||
        (categoryFilter === "ai" && ev.category.includes("Intelligence")) ||
        (categoryFilter === "governance" && ev.category.includes("Governance")) ||
        (categoryFilter === "compliance" && ev.category.includes("Compliance"));

      return matchQuery && matchCat;
    });
  }, [events, searchQuery, categoryFilter]);

  const handleExportAudit = () => {
    const jsonStr = JSON.stringify(events, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `upay_merkle_audit_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded cryptographic Merkle audit trail (JSON).");
  };

  return (
    <div className="space-y-8">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-800 text-white font-medium text-xs shadow-xl flex items-center gap-2 animate-in fade-in duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-xs mb-1">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Security Operations &amp; Heuristic Engine Trace</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Admin Center - System Activity &amp; Audit Trail
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl mt-1">
            Immutable security logs, real-time user lifecycle events, AI heuristic triggers, and administrative governance history.
          </p>
        </div>

        {/* Export Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleExportAudit}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-primary bg-surface-container-lowest border border-outline-variant/60 hover:bg-primary/5 active:scale-95 transition-all shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Export Audit Log (JSON)</span>
          </button>
        </div>
      </section>

      {/* Top Activity Telemetry Stat Cards (Bento Style) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Events Today */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Events Today
            </span>
            <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-on-surface leading-none">18,492</div>
            <div className="flex items-center gap-1.5 text-xs text-primary font-medium mt-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Real-time telemetry streaming</span>
            </div>
          </div>
        </motion.div>

        {/* Stat 2: Critical Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Critical Alerts
            </span>
            <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-primary leading-none">0</div>
            <div className="flex items-center gap-1.5 text-xs text-outline font-medium mt-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>All systems nominal</span>
            </div>
          </div>
        </motion.div>

        {/* Stat 3: Admin Interventions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Admin Interventions
            </span>
            <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-secondary">
              <Wrench className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-on-surface leading-none">14</div>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium mt-2 truncate">
              <Sliders className="w-3.5 h-3.5 text-primary" />
              <span>Rule updates &amp; config tweaks</span>
            </div>
          </div>
        </motion.div>

        {/* Stat 4: System Integrity Score */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              System Integrity Score
            </span>
            <div className="w-8 h-8 rounded-full bg-secondary-container/60 flex items-center justify-center text-primary">
              <Fingerprint className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-bold text-on-surface leading-none">99.98%</div>
            <div className="flex items-center gap-1.5 text-xs text-primary font-medium mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>SHA-256 hash verified</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter & Telemetry Controls Bar */}
      <section className="rounded-2xl glass-card-elevated border border-white/85 p-4 space-y-4 shadow-glass-card">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          {/* Search Activity Input */}
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search activity by IP, user ID, actor, or action keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>

          {/* Select Filters Cluster */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Event Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="all">All Events</option>
              <option value="lifecycle">User Lifecycle</option>
              <option value="ledger">Financial Ledgers</option>
              <option value="ai">AI Coaching</option>
              <option value="governance">Admin Governance</option>
              <option value="compliance">Compliance Alerts</option>
            </select>

            {/* Timeframe Selector */}
            <select className="px-3 py-2 rounded-xl text-xs font-semibold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary cursor-pointer">
              <option>Last 24 Hours</option>
              <option>Past 7 Days</option>
              <option>Past 30 Days</option>
            </select>

            {/* Live Stream Toggle */}
            <button
              onClick={() => {
                setIsLiveStreaming(!isLiveStreaming);
                showToast(isLiveStreaming ? "Live stream paused." : "Live stream resumed.");
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isLiveStreaming
                  ? "bg-secondary-container text-on-secondary-fixed-variant border border-primary/30"
                  : "bg-surface-container text-outline border border-outline-variant/50"
              }`}
            >
              {isLiveStreaming ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isLiveStreaming ? "Streaming Active" : "Stream Paused"}</span>
            </button>

            {/* Clear Filter */}
            <button
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                showToast("Filters reset to default.");
              }}
              className="p-2 rounded-xl border border-outline-variant/60 hover:bg-surface-container text-outline hover:text-on-surface transition-colors"
              title="Reset Filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Badges Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-outline mr-1">
            Active Scope:
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-secondary-container text-on-secondary-fixed-variant">
            Timeframe: Last 24 Hours
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-surface-container text-on-surface-variant">
            Scope: Bangladesh Cluster
          </span>
          {(searchQuery || categoryFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
              }}
              className="text-primary hover:underline text-xs font-semibold ml-auto"
            >
              Reset all filters
            </button>
          )}
        </div>
      </section>

      {/* Main Audit Trail Timeline & Table Container */}
      <section className="rounded-2xl glass-card-elevated border border-white/85 overflow-hidden shadow-glass-card">
        {/* Table Top Control Header */}
        <div className="px-6 py-4 bg-surface-container-low/70 border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold text-on-surface">Audited Activity Stream</h2>
          </div>
          <div className="text-[11px] font-medium text-outline">
            Protocol: Cryptographic Merkle Log (Audit ID: #AUD-2024-8921)
          </div>
        </div>

        {/* Activity Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30 bg-surface-container-low/50 text-[11px] font-bold uppercase tracking-wider text-outline">
                <th className="py-3.5 px-6 w-44">Timestamp</th>
                <th className="py-3.5 px-4 w-52">Event &amp; Action</th>
                <th className="py-3.5 px-6">Audit Event Details</th>
                <th className="py-3.5 px-4 w-48">Actor</th>
                <th className="py-3.5 px-4 w-36">Category</th>
                <th className="py-3.5 px-6 w-44">Metadata</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-xs">
              {filteredEvents.map((ev) => {
                const IconComponent = ev.icon;
                return (
                  <tr
                    key={ev.id}
                    className={`hover:bg-surface-container-high/20 transition-colors ${
                      ev.isAlert ? "bg-rose-50/20" : ""
                    }`}
                  >
                    {/* Timestamp */}
                    <td className="py-4 px-6 align-top">
                      <div
                        className={`font-semibold ${
                          ev.isAlert ? "text-rose-700" : "text-on-surface"
                        }`}
                      >
                        {ev.timeAgo}
                      </div>
                      <div className="text-outline text-[11px] font-mono">{ev.exactTime}</div>
                    </td>

                    {/* Event & Action */}
                    <td className="py-4 px-4 align-top">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            ev.isAlert
                              ? "bg-rose-100 text-rose-700"
                              : "bg-secondary-container/70 text-primary"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div
                            className={`font-bold text-xs ${
                              ev.isAlert ? "text-rose-700" : "text-on-surface"
                            }`}
                          >
                            {ev.eventName}
                          </div>
                          <div className="text-[11px] text-outline">{ev.eventAction}</div>
                        </div>
                      </div>
                    </td>

                    {/* Audit Details */}
                    <td className="py-4 px-6 align-top">
                      <p className="text-xs text-on-surface leading-relaxed max-w-xl">
                        {ev.details}
                      </p>
                    </td>

                    {/* Actor */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-semibold text-on-surface">{ev.actorName}</div>
                      <div className="text-outline text-[11px] font-mono">{ev.actorRole}</div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-4 align-top">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] ${ev.categoryStyle}`}
                      >
                        {ev.category}
                      </span>
                    </td>

                    {/* Metadata */}
                    <td className="py-4 px-6 align-top">
                      <div className="font-mono text-[11px] text-on-surface bg-surface-container px-2 py-0.5 rounded w-fit">
                        {ev.metadataPrimary}
                      </div>
                      <div className="text-outline text-[10px] mt-0.5 truncate">
                        {ev.metadataSecondary}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer Pagination & Attestation */}
        <div className="px-6 py-4 bg-surface-container-lowest/80 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-outline">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>
              Showing latest <strong className="text-on-surface">{filteredEvents.length}</strong> of{" "}
              <strong className="text-on-surface">18,492</strong> events • Cryptographically signed with Bangladesh Bank Root Cert.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled
              className="px-3 py-1.5 rounded-lg border border-outline-variant/50 text-outline disabled:opacity-40 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <span className="w-7 h-7 rounded-lg bg-primary text-white font-bold flex items-center justify-center">
              1
            </span>
            <button className="w-7 h-7 rounded-lg text-on-surface hover:bg-surface-container flex items-center justify-center">
              2
            </button>
            <button className="w-7 h-7 rounded-lg text-on-surface hover:bg-surface-container flex items-center justify-center">
              3
            </button>
            <span className="text-outline">...</span>
            <button
              onClick={() => showToast("Navigating to page 2")}
              className="px-3 py-1.5 rounded-lg border border-outline-variant/50 text-on-surface hover:bg-surface-container flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Compliance Advisory Note */}
      <footer className="rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-outline">
        <div className="flex items-center gap-2.5">
          <Shield className="w-4 h-4 text-secondary shrink-0" />
          <span>
            Retention Schedule: Standard 7-Year Ledger Retention pursuant to Section 18 of the Bangladesh National Payment Switch Regulatory Framework.
          </span>
        </div>
        <div className="font-mono text-[10px] text-outline">
          Node: dac-edge-04.fintech.upay.internal
        </div>
      </footer>
    </div>
  );
}
