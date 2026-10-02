"use client";

import { useState, useMemo } from "react";
import {
  ShieldCheck,
  Users,
  HeartPulse,
  Gavel,
  UserPlus,
  TrendingUp,
  Search,
  Download,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Building2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

interface UserRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  walletUid: string;
  role: "Premium Coach Tier" | "Standard User" | "Business / Coach" | "Master Admin";
  status: "Active" | "Pending KYC" | "Blocked (AML Flag)" | "Suspended";
  created: string;
  healthScore: number | null;
  healthLevel: string;
}

const INITIAL_USERS: UserRecord[] = [
  {
    id: "1",
    name: "Shakib Al Hasan",
    phone: "+880 1711-209841",
    email: "shakib.hasan@fintechbd.io",
    walletUid: "UP-DK-8921",
    role: "Premium Coach Tier",
    status: "Active",
    created: "Jan 15, 2023",
    healthScore: 78,
    healthLevel: "Very High",
  },
  {
    id: "2",
    name: "Nusrat Jahan",
    phone: "+880 1822-441029",
    email: "nusrat.j@dhakamail.com",
    walletUid: "UP-DK-3490",
    role: "Standard User",
    status: "Active",
    created: "Mar 12, 2023",
    healthScore: 82,
    healthLevel: "High",
  },
  {
    id: "3",
    name: "Tanvir Ahmed",
    phone: "+880 1913-902188",
    email: "t.ahmed@innovatebd.org",
    walletUid: "UP-SY-1052",
    role: "Premium Coach Tier",
    status: "Active",
    created: "May 04, 2023",
    healthScore: 64,
    healthLevel: "Moderate",
  },
  {
    id: "4",
    name: "Farhana Rahman",
    phone: "+880 1670-334901",
    email: "farhana.rahman@northsouth.edu",
    walletUid: "UP-DK-9043",
    role: "Standard User",
    status: "Pending KYC",
    created: "Aug 21, 2024",
    healthScore: null,
    healthLevel: "Initializing",
  },
  {
    id: "5",
    name: "Kazi Mahfuzur",
    phone: "+880 1300-881240",
    email: "kazi.mahfuz@chittagongtrade.net",
    walletUid: "UP-CTG-7721",
    role: "Business / Coach",
    status: "Blocked (AML Flag)",
    created: "Feb 10, 2024",
    healthScore: null,
    healthLevel: "Inactive",
  },
  {
    id: "6",
    name: "Ayesha Siddiqua",
    phone: "+880 1740-993215",
    email: "ayesha.s@grameen.com",
    walletUid: "UP-DK-6109",
    role: "Standard User",
    status: "Active",
    created: "Sep 01, 2024",
    healthScore: 74,
    healthLevel: "Good",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.phone.includes(searchQuery) ||
        u.walletUid.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        roleFilter === "all" ||
        (roleFilter === "standard" && u.role === "Standard User") ||
        (roleFilter === "premium" && u.role === "Premium Coach Tier") ||
        (roleFilter === "coach" && u.role === "Business / Coach");

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && u.status === "Active") ||
        (statusFilter === "pending" && u.status === "Pending KYC") ||
        (statusFilter === "blocked" && u.status === "Blocked (AML Flag)");

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const handleToggleBlock = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          const isBlocked = u.status === "Blocked (AML Flag)";
          const nextStatus = isBlocked ? "Active" : "Blocked (AML Flag)";
          showToast(
            `${u.name} status updated to ${isBlocked ? "Active" : "Blocked (AML hold)"}`
          );
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
  };

  const handleActivateKyc = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          showToast(`KYC Approved for ${u.name}. Standard limit activated.`);
          return { ...u, status: "Active", healthScore: 70, healthLevel: "Good" };
        }
        return u;
      })
    );
  };

  const exportCsv = () => {
    const header = "Name,Phone,Email,UID,Role,Status,Created,HealthScore\n";
    const rows = filteredUsers
      .map(
        (u) =>
          `"${u.name}","${u.phone}","${u.email}","${u.walletUid}","${u.role}","${u.status}","${u.created}","${u.healthScore ?? "N/A"}"`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `upay_users_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Exported users ledger to CSV.");
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

      {/* Hero Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/60 border border-primary/20 text-on-secondary-fixed-variant text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Bangladesh Bank MFS Regulatory Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Admin Center - Users Management
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1">
            Supervise registered Upay Financial Coach members, tiers, coaching telemetry, and security access states.
          </p>
        </div>

        {/* Telemetry Sync Status */}
        <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-surface-container-lowest/80 border border-outline-variant/40 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-on-surface-variant">
            Live DB Sync: <strong className="text-on-surface font-semibold">Dhaka Central Cluster (18ms)</strong>
          </span>
        </div>
      </section>

      {/* 4 Operational Metrics Bento Row */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Metric 1: Total Users */}
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
              Total Users
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
            <span>↑ +12.4% vs last mo</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal-400" />
        </motion.div>

        {/* Metric 2: Active Users */}
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
              Active Users
            </span>
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <HeartPulse className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              98,420
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-secondary font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            <span>79% MAU retention rate</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary-container" />
        </motion.div>

        {/* Metric 3: Blocked Users */}
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
              Blocked Users
            </span>
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Gavel className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              142
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-600 font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>0.11% fraud/compliance holds</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-rose-300" />
        </motion.div>

        {/* Metric 4: New Users (30d) */}
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
              New Users (30d)
            </span>
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              8,650
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-on-surface-variant truncate">
            <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">Surge from Dhaka &amp; Ctg MFS</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-300" />
        </motion.div>
      </section>

      {/* Filter and Controls Toolbar */}
      <section className="rounded-2xl glass-card-elevated border border-white/85 p-4 space-y-4 shadow-glass-card">
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
          {/* Search input */}
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users by name, email, phone, or Upay Wallet ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>

          {/* Filter Cluster */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Role Filter */}
            <div className="relative">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="pl-3 pr-8 py-2 rounded-xl text-xs font-semibold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="all">Role: All Roles</option>
                <option value="standard">Role: Standard</option>
                <option value="premium">Role: Premium</option>
                <option value="coach">Role: Coach Tier</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-3 pr-8 py-2 rounded-xl text-xs font-semibold bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="all">Status: All</option>
                <option value="active">Status: Active</option>
                <option value="pending">Status: Pending KYC</option>
                <option value="blocked">Status: Blocked</option>
              </select>
            </div>

            {/* Date Range Picker */}
            <button
              onClick={() => showToast("Date filter locked to past 30 days active ledger window.")}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-outline" />
              <span>Past 30 Days</span>
            </button>

            {/* Export CSV Button */}
            <button
              onClick={exportCsv}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-all shadow-xs active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Active Filter Scope Pills */}
        <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-on-surface-variant overflow-x-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
            Active Filter Scope:
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-fixed-variant text-[11px] font-semibold border border-primary/20">
            Region: All Bangladesh (MFS)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-highest/60 text-on-surface-variant text-[11px] font-semibold border border-outline-variant/40">
            Verified Phone: Mandatory
          </span>
          {(searchQuery || roleFilter !== "all" || statusFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setRoleFilter("all");
                setStatusFilter("all");
              }}
              className="text-primary hover:underline text-xs font-semibold ml-auto"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </section>

      {/* Main Admin Glass Data Table */}
      <section className="rounded-2xl glass-card-elevated border border-white/85 overflow-hidden shadow-glass-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/70 border-b border-outline-variant/40 text-[11px] uppercase tracking-wider text-outline font-bold">
                <th className="py-3.5 px-5" scope="col">
                  Name
                </th>
                <th className="py-3.5 px-5" scope="col">
                  Email &amp; Wallet
                </th>
                <th className="py-3.5 px-5" scope="col">
                  Role
                </th>
                <th className="py-3.5 px-5" scope="col">
                  Status
                </th>
                <th className="py-3.5 px-5" scope="col">
                  Created
                </th>
                <th className="py-3.5 px-5" scope="col">
                  Coaching Engagement
                </th>
                <th className="py-3.5 px-5 text-right" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 text-xs text-on-surface">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className={`hover:bg-surface-container-high/20 transition-colors ${
                    user.status === "Blocked (AML Flag)"
                      ? "bg-rose-50/30"
                      : user.status === "Pending KYC"
                        ? "bg-amber-50/20"
                        : ""
                  }`}
                >
                  {/* Name & Phone */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-on-surface flex items-center gap-1.5">
                          <span>{user.name}</span>
                          {user.status === "Active" && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          )}
                        </div>
                        <div className="text-[11px] text-on-surface-variant font-mono">
                          {user.phone}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Email & Wallet UID */}
                  <td className="py-4 px-5">
                    <div className="font-medium text-on-surface">{user.email}</div>
                    <div className="text-[11px] text-outline font-mono">
                      UID: {user.walletUid}
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                        user.role === "Premium Coach Tier"
                          ? "bg-secondary-container/60 border border-primary/20 text-on-secondary-fixed-variant"
                          : user.role === "Business / Coach"
                            ? "bg-teal-50 border border-teal-200 text-teal-800"
                            : "bg-surface-container/70 border border-outline-variant/40 text-on-surface-variant"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        user.status === "Active"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : user.status === "Pending KYC"
                            ? "bg-amber-50 text-amber-800 border border-amber-300"
                            : "bg-rose-50 text-rose-800 border border-rose-300"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === "Active"
                            ? "bg-emerald-600"
                            : user.status === "Pending KYC"
                              ? "bg-amber-500 animate-pulse"
                              : "bg-rose-600"
                        }`}
                      />
                      {user.status}
                    </span>
                  </td>

                  {/* Created Date */}
                  <td className="py-4 px-5 text-on-surface-variant text-[11px]">
                    {user.created}
                  </td>

                  {/* Coaching Engagement */}
                  <td className="py-4 px-5">
                    {user.healthScore !== null ? (
                      <div className="flex flex-col gap-1 max-w-[160px]">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-primary">
                            {user.healthScore} Health Score
                          </span>
                          <span className="text-outline">{user.healthLevel}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${user.healthScore}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="text-[11px] text-outline italic">
                        {user.healthLevel}
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="px-2.5 py-1 rounded-lg text-primary hover:bg-primary/10 font-bold transition-colors"
                        title="View Details"
                      >
                        View
                      </button>

                      {user.status === "Pending KYC" ? (
                        <button
                          onClick={() => handleActivateKyc(user.id)}
                          className="px-2.5 py-1 rounded-lg text-emerald-700 bg-emerald-100 hover:bg-emerald-200 font-bold transition-colors"
                        >
                          Approve KYC
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggleBlock(user.id)}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                            user.status === "Blocked (AML Flag)"
                              ? "text-emerald-700 hover:bg-emerald-50"
                              : "text-rose-600 hover:bg-rose-50"
                          }`}
                        >
                          {user.status === "Blocked (AML Flag)" ? "Unblock" : "Block"}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 bg-surface-container-lowest/80 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <div>
            Showing <strong className="text-on-surface font-bold">1 to {filteredUsers.length}</strong> of{" "}
            <strong className="text-on-surface font-bold">124,580</strong> registered accounts
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-outline disabled:opacity-50"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <div className="flex items-center gap-1">
              <span className="w-7 h-7 rounded-lg bg-primary text-white font-bold flex items-center justify-center">
                1
              </span>
              <button className="w-7 h-7 rounded-lg text-on-surface-variant hover:bg-surface-container-high flex items-center justify-center">
                2
              </button>
              <span className="px-1 text-outline">...</span>
              <button className="w-7 h-7 rounded-lg text-on-surface-variant hover:bg-surface-container-high flex items-center justify-center">
                20,764
              </button>
            </div>
            <button
              onClick={() => showToast("Navigating to page 2")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Domain-Specific AI Coach Telemetry Alert Banner */}
      {!bannerDismissed && (
        <section className="rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl p-5 border-l-4 border-l-primary border border-white/80 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-on-surface">
                    AI Coach Telemetry Alert: MFS Account Engagement
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container/80 text-on-secondary-fixed-variant text-[10px] font-bold">
                    Automated Diagnostic
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 max-w-3xl leading-relaxed">
                  482 users in Chittagong division are currently flagged for high monthly micro-savings completion rate (94%). Recommended action: Dispatch automated eligibility for upgraded <strong>Premium Coach Tier</strong> discount vouchers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              <button
                onClick={() => setBannerDismissed(true)}
                className="px-3.5 py-1.5 rounded-xl border border-outline-variant/50 text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  showToast("Batch recommendation dispatched to 482 Chittagong users via Upay Push notification.");
                  setBannerDismissed(true);
                }}
                className="px-4 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-xs active:scale-95"
              >
                Apply Batch Recommendation
              </button>
            </div>
          </div>
        </section>
      )}

      {/* User Details Slide-over Drawer / Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-lg rounded-2xl bg-surface-container-lowest border border-outline-variant/60 shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {selectedUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">{selectedUser.name}</h3>
                  <p className="text-xs text-outline font-mono">UID: {selectedUser.walletUid}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-outline hover:text-on-surface p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-surface-container-high/40">
                <span className="text-[10px] text-outline uppercase font-bold">Email Address</span>
                <p className="font-semibold text-on-surface mt-0.5 truncate">{selectedUser.email}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-high/40">
                <span className="text-[10px] text-outline uppercase font-bold">Phone Number</span>
                <p className="font-semibold text-on-surface mt-0.5 font-mono">{selectedUser.phone}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-high/40">
                <span className="text-[10px] text-outline uppercase font-bold">Assigned Tier</span>
                <p className="font-semibold text-primary mt-0.5">{selectedUser.role}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-high/40">
                <span className="text-[10px] text-outline uppercase font-bold">Registration Date</span>
                <p className="font-semibold text-on-surface mt-0.5">{selectedUser.created}</p>
              </div>
            </div>

            {selectedUser.healthScore !== null && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-on-surface">Financial Health Evaluation</span>
                  <span className="font-bold text-primary">{selectedUser.healthScore}/100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${selectedUser.healthScore}%` }}
                  />
                </div>
                <p className="text-[11px] text-on-surface-variant">
                  Coaching Engagement status is rated <strong>{selectedUser.healthLevel}</strong>. Emergency buffer and savings habits are well maintained.
                </p>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-outline-variant/30">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleToggleBlock(selectedUser.id);
                  setSelectedUser(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  selectedUser.status === "Blocked (AML Flag)"
                    ? "bg-emerald-700 text-white hover:bg-emerald-800"
                    : "bg-rose-600 text-white hover:bg-rose-700"
                }`}
              >
                {selectedUser.status === "Blocked (AML Flag)" ? "Unblock Account" : "Place AML Hold"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
