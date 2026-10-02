"use client";

import { Search, Download, ChevronDown, X, Check } from "lucide-react";
import { useState } from "react";
import { TransactionItem } from "./transaction-detail-drawer";

interface TransactionFilterToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  onResetFilters: () => void;
  transactionsToExport: TransactionItem[];
}

export function TransactionFilterToolbar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  selectedSort,
  onSortChange,
  onResetFilters,
  transactionsToExport,
}: TransactionFilterToolbarProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categories = [
    "All Categories",
    "Food & Dining",
    "Shopping",
    "Salary Income",
    "Transportation",
    "Groceries",
    "Bills & Utilities",
    "Entertainment",
  ];

  const types = [
    { label: "All Types", value: "all" },
    { label: "Inflows (Credit)", value: "inflow" },
    { label: "Outflows (Debit)", value: "outflow" },
  ];

  const sortOptions = [
    { label: "Latest First", value: "latest" },
    { label: "Oldest First", value: "oldest" },
    { label: "Amount: High to Low", value: "amount-high" },
    { label: "Amount: Low to High", value: "amount-low" },
  ];

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedCategory !== "All Categories" ||
    selectedType !== "all" ||
    selectedSort !== "latest";

  const handleExportCsv = () => {
    const csvHeader = "ID,Merchant,Detail,Category,Date,Time,Channel,Amount,Type,Status,Ref\n";
    const csvRows = transactionsToExport
      .map(
        (t) =>
          `"${t.id}","${t.merchant}","${t.detail}","${t.category}","${t.date}","${t.time}","${t.channel}","${t.amount}","${
            t.isIncome ? "Inflow" : "Outflow"
          }","${t.status}","${t.txnRef}"`
      )
      .join("\n");

    const blob = new Blob([csvHeader + csvRows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `upay-transactions-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <section className="glass-card rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      {/* Search & Selectors Row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-outline pointer-events-none" />
          <input
            type="text"
            placeholder="Search merchant, transaction ID, note..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low hover:bg-surface-container focus:bg-surface-container-lowest border border-outline-variant/40 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="appearance-none bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-xs sm:text-sm font-medium text-on-surface py-2.5 pl-3.5 pr-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer transition"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-3 w-4 h-4 text-outline" />
        </div>

        {/* Transaction Type Filter */}
        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="appearance-none bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-xs sm:text-sm font-medium text-on-surface py-2.5 pl-3.5 pr-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer transition"
          >
            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-3 w-4 h-4 text-outline" />
        </div>

        {/* Sort Order Selector */}
        <div className="relative">
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-xs sm:text-sm font-medium text-on-surface py-2.5 pl-3.5 pr-9 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer transition"
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-3 w-4 h-4 text-outline" />
        </div>

        {/* Export CSV Button */}
        <button
          onClick={handleExportCsv}
          className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/40 text-on-surface font-semibold text-xs sm:text-sm rounded-xl transition shadow-sm ml-auto active:scale-95"
          title="Export CSV Statement"
        >
          {downloadSuccess ? (
            <>
              <Check className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold">Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-outline" />
              <span>Export CSV</span>
            </>
          )}
        </button>
      </div>

      {/* Active Filter Tags Indicator */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20 text-xs text-outline">
        <span className="font-semibold text-on-surface">Active Filter Status:</span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-surface-container text-on-surface font-medium">
          Month: September 2024
        </span>

        {selectedCategory !== "All Categories" && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-secondary-container text-primary font-medium">
            Category: {selectedCategory}
            <button onClick={() => onCategoryChange("All Categories")} className="hover:text-rose-600">
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        {selectedType !== "all" && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-secondary-container text-primary font-medium">
            Type: {selectedType === "inflow" ? "Inflows" : "Outflows"}
            <button onClick={() => onTypeChange("all")} className="hover:text-rose-600">
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        {searchQuery.trim().length > 0 && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-secondary-container text-primary font-medium">
            Query: &ldquo;{searchQuery}&rdquo;
            <button onClick={() => onSearchChange("")} className="hover:text-rose-600">
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-secondary-container/50 text-primary border border-primary/20 font-medium ml-1">
          Verified Feeds Active
        </span>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs text-primary hover:underline font-semibold ml-auto"
          >
            Reset all filters
          </button>
        )}
      </div>
    </section>
  );
}
