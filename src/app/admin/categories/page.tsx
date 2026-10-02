"use client";

import { useState } from "react";
import {
  FolderTree,
  BrainCircuit,
  Plus,
  CheckCircle2,
  Zap,
  Receipt,
  Search,
  Sparkles,
  Download,
  Utensils,
  Car,
  ShoppingBag,
  Zap as BillIcon,
  Film,
  HeartPulse,
  GraduationCap,
  MoreHorizontal,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

interface CategoryItem {
  id: string;
  name: string;
  subcategories: string;
  icon: typeof Utensils;
  volume: string;
  volumePercent: number;
  patternsCount: number;
  patternKeywords: string;
  status: "Active" | "Under Review" | "Disabled";
}

const INITIAL_CATEGORIES: CategoryItem[] = [
  {
    id: "1",
    name: "Food & Dining",
    subcategories: "Restaurants, Food Delivery (Foodpanda), Cafes, Street Food",
    icon: Utensils,
    volume: "৳42.8M",
    volumePercent: 24.1,
    patternsCount: 142,
    patternKeywords: "Foodpanda, Pathao Food, Sultan's Dine",
    status: "Active",
  },
  {
    id: "2",
    name: "Transportation",
    subcategories: "Ride-hailing (Pathao, Uber), CNG/Auto, Fuel, Public Transit",
    icon: Car,
    volume: "৳18.4M",
    volumePercent: 12.6,
    patternsCount: 88,
    patternKeywords: "Uber BV, Pathao Rides, Shohoz, PetroBangla",
    status: "Active",
  },
  {
    id: "3",
    name: "Shopping & Retail",
    subcategories: "E-commerce (Daraz), Fashion (Aarong), Electronics, Household",
    icon: ShoppingBag,
    volume: "৳36.2M",
    volumePercent: 19.4,
    patternsCount: 210,
    patternKeywords: "Daraz BD, Aarong Outlet, Apex Footwear, Pickaboo",
    status: "Active",
  },
  {
    id: "4",
    name: "Bills & Utilities",
    subcategories: "Electricity (DESCO/DPDC), Water (WASA), Internet/Broadband, Gas",
    icon: BillIcon,
    volume: "৳28.5M",
    volumePercent: 16.2,
    patternsCount: 64,
    patternKeywords: "DPDC Pre-paid, DESCO, Dhaka WASA, Link3",
    status: "Active",
  },
  {
    id: "5",
    name: "Entertainment & Leisure",
    subcategories: "Streaming (Netflix, Chorki), Gaming, Movies, Events",
    icon: Film,
    volume: "৳9.1M",
    volumePercent: 5.3,
    patternsCount: 45,
    patternKeywords: "Netflix.com, Chorki OTT, Cineplex BD, Steam",
    status: "Active",
  },
  {
    id: "6",
    name: "Health & Medical",
    subcategories: "Pharmacies (Lazz Pharma), Diagnostic Tests, Consultations, Insurance",
    icon: HeartPulse,
    volume: "৳14.7M",
    volumePercent: 8.1,
    patternsCount: 72,
    patternKeywords: "Lazz Pharma, Popular Diagnostic, Praava Health",
    status: "Active",
  },
  {
    id: "7",
    name: "Education & Skill",
    subcategories: "University Tuition, Coaching, Online Courses (10MS), Books",
    icon: GraduationCap,
    volume: "৳11.3M",
    volumePercent: 6.4,
    patternsCount: 38,
    patternKeywords: "10MS Online, Rokomari Books, NSU Edu Fee, Coursera",
    status: "Active",
  },
  {
    id: "8",
    name: "Others & Discretionary",
    subcategories: "Unclassified Outflows, Petty Cash, Gifts",
    icon: MoreHorizontal,
    volume: "৳8.2M",
    volumePercent: 4.8,
    patternsCount: 12,
    patternKeywords: "Low confidence (<70%) or unknown merchant tag fallback",
    status: "Active",
  },
];

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);
  const [filterTab, setFilterTab] = useState<"all" | "high" | "rules" | "review">("all");
  const [testString, setTestString] = useState("Pathao Gulshan 2");
  const [testResult, setTestResult] = useState<{
    category: string;
    subcategory: string;
    confidence: string;
  }>({
    category: "Transportation",
    subcategory: "Ride-hailing (Pathao, Uber)",
    confidence: "99.2%",
  });
  const [isRetraining, setIsRetraining] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatSub, setNewCatSub] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRetrain = () => {
    setIsRetraining(true);
    setTimeout(() => {
      setIsRetraining(false);
      showToast("Classifier Model v4.2.0 re-training completed across 420k historical Dhaka transactions.");
    }, 2000);
  };

  const handleEvaluateSandbox = () => {
    const q = testString.toLowerCase();
    if (q.includes("pathao") || q.includes("uber") || q.includes("cng") || q.includes("fuel")) {
      setTestResult({
        category: "Transportation",
        subcategory: "Ride-hailing (Pathao, Uber)",
        confidence: "99.4%",
      });
    } else if (q.includes("food") || q.includes("dine") || q.includes("restaurant") || q.includes("cafe")) {
      setTestResult({
        category: "Food & Dining",
        subcategory: "Restaurants, Cafes & Delivery",
        confidence: "98.7%",
      });
    } else if (q.includes("daraz") || q.includes("aarong") || q.includes("shop")) {
      setTestResult({
        category: "Shopping & Retail",
        subcategory: "E-Commerce & Outlets",
        confidence: "99.1%",
      });
    } else if (q.includes("desco") || q.includes("wasa") || q.includes("dpdc") || q.includes("bill")) {
      setTestResult({
        category: "Bills & Utilities",
        subcategory: "Public Utilities & Power",
        confidence: "99.8%",
      });
    } else {
      setTestResult({
        category: "Discretionary / Unclassified",
        subcategory: "Neural Heuristic Evaluation",
        confidence: "82.4%",
      });
    }
    showToast(`Evaluated "${testString}" with ML inference engine.`);
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName) return;
    const newCat: CategoryItem = {
      id: String(categories.length + 1),
      name: newCatName,
      subcategories: newCatSub || "General Outflows",
      icon: MoreHorizontal,
      volume: "৳0.5M",
      volumePercent: 1.2,
      patternsCount: 15,
      patternKeywords: "Custom merchant tags",
      status: "Active",
    };
    setCategories((prev) => [newCat, ...prev]);
    setNewCatName("");
    setNewCatSub("");
    setCreateModalOpen(false);
    showToast(`Created category "${newCat.name}" successfully.`);
  };

  const handleToggleStatus = (id: string) => {
    setCategories((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const nextStatus = c.status === "Active" ? "Disabled" : "Active";
          showToast(`Category "${c.name}" status changed to ${nextStatus}.`);
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  const filteredCategories = categories.filter((c) => {
    if (filterTab === "high") return c.volumePercent > 10;
    if (filterTab === "rules") return c.patternsCount > 50;
    if (filterTab === "review") return c.status !== "Active";
    return true;
  });

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
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Admin Center - Categories Management
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1">
            Manage and optimize expense and income taxonomies, ML classification confidence thresholds, and automated budgeting rules.
          </p>
        </div>

        {/* Operational Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleRetrain}
            disabled={isRetraining}
            className="h-10 sm:h-11 px-4 sm:px-5 rounded-full border border-primary/30 bg-surface-container-lowest/80 text-primary font-bold text-xs sm:text-sm hover:bg-primary/5 active:scale-95 transition-all flex items-center gap-2 shadow-xs disabled:opacity-60"
          >
            <BrainCircuit className={`w-4 h-4 ${isRetraining ? "animate-spin" : ""}`} />
            <span>{isRetraining ? "Training 420k Tx..." : "Re-train ML Classifier"}</span>
          </button>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create Category</span>
          </button>
        </div>
      </section>

      {/* Telemetry Bento Grid (3-Tier Glass Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Metric 1: Taxonomies Scope */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex items-center justify-between relative overflow-hidden"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Taxonomies Scope
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-on-surface">14 Active</span>
            <span className="text-xs text-secondary flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              8 Operational, 6 Under Watch
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 flex items-center justify-center text-primary z-10">
            <FolderTree className="w-6 h-6" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
        </motion.div>

        {/* Metric 2: Classification Accuracy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex items-center justify-between relative overflow-hidden"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Classification Accuracy
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-on-surface">98.4%</span>
              <span className="text-xs font-bold text-primary bg-secondary-fixed/50 px-2 py-0.5 rounded-full">
                +0.6% vs Q3
              </span>
            </div>
            <span className="text-xs text-on-surface-variant">420k inferred transactions</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 flex items-center justify-center text-primary z-10">
            <Zap className="w-6 h-6" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
        </motion.div>

        {/* Metric 3: Monthly Volume Mapped */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-2xl glass-card-elevated border border-white/85 p-5 shadow-glass-card flex items-center justify-between relative overflow-hidden"
        >
          <div className="flex flex-col gap-1 z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
              Current Month Volume
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
                ৳428M
              </span>
              <span className="text-xs text-outline font-semibold">BDT</span>
            </div>
            <span className="text-xs text-primary flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Reconciliation Ready
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 border border-primary/20 flex items-center justify-center text-primary z-10">
            <Receipt className="w-6 h-6" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
        </motion.div>
      </section>

      {/* Domain-Specific: Financial Coach / ML Rule Simulator Banner */}
      <section className="rounded-2xl glass-card-elevated p-5 border-l-4 border-l-primary border border-white/85 shadow-glass-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-secondary-container/70 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-on-surface">Category Rule Simulator Active</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                Test In-Flight
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Test string <code className="px-2 py-0.5 rounded bg-surface-container font-mono text-primary font-bold">&apos;Pathao Gulshan 2&apos;</code> auto-resolves with <span className="font-bold text-primary">99.2% confidence</span> to <strong className="text-on-surface">Transportation</strong> (Sub: Ride-hailing).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => showToast("ML Payload: BERT token embeddings [dim: 768] mapped with 0.992 cosine similarity.")}
            className="px-3.5 py-1.5 rounded-xl border border-outline-variant/60 text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
          >
            Inspect ML Payload
          </button>
          <button
            onClick={handleEvaluateSandbox}
            className="px-4 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-xs"
          >
            Run Batch Test
          </button>
        </div>
      </section>

      {/* Main Categories Data Matrix Table */}
      <section className="rounded-2xl glass-card-elevated border border-white/85 overflow-hidden shadow-glass-card">
        {/* Table Controls & Filter Tabs */}
        <div className="p-4 border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-3 bg-surface-container-low/30">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-on-surface">Operational Taxonomies</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
              {filteredCategories.length} Categories
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto text-xs">
            <button
              onClick={() => setFilterTab("all")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                filterTab === "all"
                  ? "bg-secondary-container text-on-secondary-fixed-variant border border-primary/20"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setFilterTab("high")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                filterTab === "high"
                  ? "bg-secondary-container text-on-secondary-fixed-variant border border-primary/20"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              High Volume (&gt;৳20M)
            </button>
            <button
              onClick={() => setFilterTab("rules")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                filterTab === "rules"
                  ? "bg-secondary-container text-on-secondary-fixed-variant border border-primary/20"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              ML Rules &gt; 50
            </button>
            <button
              onClick={() => setFilterTab("review")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                filterTab === "review"
                  ? "bg-secondary-container text-on-secondary-fixed-variant border border-primary/20"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              Disabled / Watch ({categories.filter((c) => c.status !== "Active").length})
            </button>
          </div>
        </div>

        {/* Categories Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30 bg-surface-container-low/60 text-[11px] font-bold uppercase tracking-wider text-outline">
                <th className="py-3.5 px-5" scope="col">
                  Category &amp; Subcategories
                </th>
                <th className="py-3.5 px-4" scope="col">
                  Monthly Volume (% Total)
                </th>
                <th className="py-3.5 px-4" scope="col">
                  ML Matching Engine Rules
                </th>
                <th className="py-3.5 px-4" scope="col">
                  Classifier Status
                </th>
                <th className="py-3.5 px-5 text-right" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-xs text-on-surface">
              {filteredCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <tr key={cat.id} className="hover:bg-surface-container-high/20 transition-colors">
                    {/* Category Title & Subcategories */}
                    <td className="py-4 px-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary-container/50 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-on-surface text-sm">{cat.name}</span>
                          <span className="text-[11px] text-on-surface-variant mt-0.5 max-w-sm">
                            {cat.subcategories}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Monthly Volume */}
                    <td className="py-4 px-4 align-middle">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                          <span className="font-bold text-on-surface">{cat.volume}</span>
                          <span className="text-[10px] text-outline">BDT</span>
                        </div>
                        <div className="w-28 sm:w-36 bg-surface-container-highest rounded-full h-1.5 mt-1.5 overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-500"
                            style={{ width: `${cat.volumePercent}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-outline mt-1 font-medium">
                          {cat.volumePercent}% of transactions
                        </span>
                      </div>
                    </td>

                    {/* ML Matching Rules */}
                    <td className="py-4 px-4 align-middle">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-on-surface">{cat.patternsCount}</span>
                          <span className="text-[11px] text-on-surface-variant">regex patterns</span>
                        </div>
                        <span className="text-[11px] text-outline truncate max-w-xs mt-0.5">
                          {cat.patternKeywords}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 align-middle">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                          cat.status === "Active"
                            ? "bg-secondary-container text-on-secondary-fixed-variant"
                            : "bg-surface-container text-outline"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            cat.status === "Active" ? "bg-primary" : "bg-outline"
                          }`}
                        />
                        {cat.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 align-middle text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => showToast(`Edit rules configured for ${cat.name}`)}
                          className="px-2.5 py-1 rounded-lg text-primary hover:bg-primary/10 font-bold transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggleStatus(cat.id)}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                            cat.status === "Active"
                              ? "text-outline hover:text-rose-600 hover:bg-rose-50"
                              : "text-emerald-700 hover:bg-emerald-50"
                          }`}
                        >
                          {cat.status === "Active" ? "Disable" : "Enable"}
                        </button>
                        <button
                          onClick={() =>
                            showToast(
                              `Patterns for ${cat.name}: [${cat.patternKeywords}]. Total regex: ${cat.patternsCount}.`
                            )
                          }
                          className="px-2.5 py-1 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
                        >
                          View Rules
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-4 border-t border-outline-variant/30 flex items-center justify-between text-xs text-outline bg-surface-container-low/30">
          <span>Showing {filteredCategories.length} taxonomies (6 system internal categories archived)</span>
          <span className="font-semibold text-primary">All taxonomies synced with NBR standard</span>
        </div>
      </section>

      {/* Diagnostics & Sandbox Matrix */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
        {/* Sandbox Tester Card */}
        <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                Classification Sandbox
              </span>
              <span className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Model v4.2.0 Live
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-on-surface">Test Merchant String Resolution</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Enter simulated bank SMS, payment narration, or POS merchant identifier to inspect automated category and confidence scoring.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-outline" />
                <input
                  type="text"
                  value={testString}
                  onChange={(e) => setTestString(e.target.value)}
                  placeholder="e.g. Sultan's Dine, Daraz, DESCO, Uber"
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 font-mono text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
              <button
                onClick={handleEvaluateSandbox}
                className="px-4 py-2 rounded-xl bg-secondary text-white font-bold text-xs hover:bg-primary transition-all shadow-xs"
              >
                Run Evaluation
              </button>
            </div>

            {/* Diagnostic Result Pill */}
            <div className="p-3.5 rounded-xl bg-surface-container-high/40 border border-outline-variant/40 flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    Resolved: {testResult.category}
                  </p>
                  <p className="text-[11px] text-outline">Sub: {testResult.subcategory}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-secondary-container text-on-secondary-fixed-variant">
                {testResult.confidence} Match
              </span>
            </div>
          </div>
        </div>

        {/* Precision Telemetry Card */}
        <div className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-outline">
                Precision Telemetry
              </span>
              <button
                onClick={() => showToast("Downloaded classification audit log (JSON).")}
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Audit Log</span>
              </button>
            </div>

            <div>
              <h3 className="font-bold text-sm text-on-surface">Automated Rule Distribution</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Breakdown of transactional classifications handled by deterministic regex vs deep neural inference.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-on-surface">Deterministic Exact Match</span>
                  <span className="font-bold text-primary">78.2% (334,800 tx)</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "78.2%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-on-surface">Neural Semantic Classifier</span>
                  <span className="font-bold text-secondary">20.2% (86,500 tx)</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div className="bg-teal-600 h-full rounded-full" style={{ width: "20.2%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-on-surface">Manual Flagged / Discretionary</span>
                  <span className="font-bold text-outline">1.6% (6,800 tx)</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div className="bg-outline h-full rounded-full" style={{ width: "1.6%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Category Modal */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-surface-container-lowest border border-outline-variant/60 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <h3 className="text-base font-bold text-on-surface">Create New Category</h3>
              <button
                onClick={() => setCreateModalOpen(false)}
                className="text-outline hover:text-on-surface p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  required
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="e.g. Travel & Vacations"
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Subcategories &amp; Merchant Patterns
                </label>
                <input
                  type="text"
                  value={newCatSub}
                  onChange={(e) => setNewCatSub(e.target.value)}
                  placeholder="e.g. Airlines (Biman), Hotels, Booking.com"
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
                >
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
