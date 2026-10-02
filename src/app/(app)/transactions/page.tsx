"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MessageSquare, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TransactionSummaryCards } from "./_components/transaction-summary-cards";
import { TransactionFilterToolbar } from "./_components/transaction-filter-toolbar";
import { TransactionTable } from "./_components/transaction-table";
import { TransactionDetailDrawer, TransactionItem } from "./_components/transaction-detail-drawer";

const INITIAL_TRANSACTIONS: TransactionItem[] = [
  {
    id: "txn-001",
    initials: "DZ",
    avatarColor: "bg-orange-100 text-orange-700 ring-1 ring-orange-200/60",
    merchant: "Daraz Bangladesh",
    detail: "Electronics • Order #8849102",
    category: "Shopping",
    categoryBadge: "bg-blue-50 text-blue-700 border border-blue-100",
    date: "Sep 28, 2024",
    time: "04:15 PM",
    channel: "Debit / Online",
    amount: 2450,
    isIncome: false,
    status: "verified",
    txnRef: "DZ-BD-982019-GCM",
    notes: "Noise-cancelling wireless earphones during Daraz 10.10 flash discount.",
    coachInsight: "This purchase was planned and within your monthly tech budget buffer.",
    account: "bKash (017••••982)",
  },
  {
    id: "txn-002",
    initials: "SW",
    avatarColor: "bg-red-100 text-red-700 ring-1 ring-red-200/60",
    merchant: "Shwapno Superstore",
    detail: "Dhanmondi Branch • Grocery",
    category: "Food & Dining",
    categoryBadge: "bg-rose-50 text-rose-700 border border-rose-100",
    date: "Sep 27, 2024",
    time: "07:30 PM",
    channel: "Debit / POS",
    amount: 1250,
    isIncome: false,
    status: "verified",
    txnRef: "SW-DH-44102-GCM",
    notes: "Organic eggs, brown bread, ghee, and pantry refills.",
    coachInsight: "Groceries spending is steady at ৳7,200 total this month — perfectly on track.",
    account: "EBL Skybanking",
  },
  {
    id: "txn-003",
    initials: "TC",
    avatarColor: "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30",
    merchant: "Tech Innovators Ltd",
    detail: "Monthly Salary Transfer • Ref #TXN99201",
    category: "Salary Income",
    categoryBadge: "bg-emerald-100 text-emerald-800 border border-emerald-300",
    date: "Sep 25, 2024",
    time: "10:00 AM",
    channel: "Direct Deposit",
    amount: 65000,
    isIncome: true,
    status: "verified",
    txnRef: "SAL-EBL-99201-GCM",
    notes: "Monthly net compensation after tax and provident fund contributions.",
    coachInsight: "Salary received on time! Automatically routed 28.5% into your Emergency Fund.",
    account: "City Bank Account",
  },
  {
    id: "txn-004",
    initials: "PH",
    avatarColor: "bg-red-100 text-red-600 ring-1 ring-red-200/60",
    merchant: "Pathao Rides",
    detail: "Gulshan to Banani • Commute",
    category: "Transportation",
    categoryBadge: "bg-amber-50 text-amber-800 border border-amber-200",
    date: "Sep 24, 2024",
    time: "08:45 PM",
    channel: "Debit / Upay Wallet",
    amount: 420,
    isIncome: false,
    status: "verified",
    txnRef: "PH-RIDE-7719-GCM",
    notes: "Evening commute during heavy rain surge.",
    coachInsight: "Notice: Transit spending is 22% higher this month due to rainy surge fares.",
    account: "bKash (017••••982)",
  },
  {
    id: "txn-005",
    initials: "FP",
    avatarColor: "bg-pink-100 text-pink-600 ring-1 ring-pink-200/60",
    merchant: "Foodpanda",
    detail: "Dinner Delivery • Sultan's Dine",
    category: "Food & Dining",
    categoryBadge: "bg-rose-50 text-rose-700 border border-rose-100",
    date: "Sep 23, 2024",
    time: "01:15 PM",
    channel: "Debit / App Checkout",
    amount: 880,
    isIncome: false,
    status: "verified",
    txnRef: "FP-DK-55192-GCM",
    notes: "Kacchi biryani platter with colleagues.",
    coachInsight: "Dining out has reached ৳8,450 this month (+18% vs August).",
    account: "Nagad (018••••412)",
  },
  {
    id: "txn-006",
    initials: "CD",
    avatarColor: "bg-amber-100 text-amber-700 ring-1 ring-amber-200/60",
    merchant: "Chaldal Express",
    detail: "Weekly Household Pantry Staples",
    category: "Groceries",
    categoryBadge: "bg-purple-50 text-purple-700 border border-purple-100",
    date: "Sep 21, 2024",
    time: "11:20 AM",
    channel: "Debit / Online",
    amount: 1840,
    isIncome: false,
    status: "verified",
    txnRef: "CD-EXP-33201-GCM",
    notes: "Rice, cooking oil, spices, and laundry detergent.",
    coachInsight: "Utilized Chaldal digital discount coupon to save ৳180.",
    account: "bKash (017••••982)",
  },
  {
    id: "txn-007",
    initials: "AR",
    avatarColor: "bg-orange-100 text-orange-800 ring-1 ring-orange-200/60",
    merchant: "Aarong Lifestyle",
    detail: "Uttara Flagship • Apparel & Craft",
    category: "Shopping",
    categoryBadge: "bg-blue-50 text-blue-700 border border-blue-100",
    date: "Sep 19, 2024",
    time: "06:10 PM",
    channel: "Debit / Card",
    amount: 3600,
    isIncome: false,
    status: "verified",
    txnRef: "AR-UT-22019-GCM",
    notes: "Gift for family occasion and cotton panjabi.",
    coachInsight: "Covered by your quarterly discretionary lifestyle allocation.",
    account: "EBL Skybanking",
  },
  {
    id: "txn-008",
    initials: "DS",
    avatarColor: "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200/60",
    merchant: "DESCO Electricity Bill",
    detail: "Monthly Utility • Consumer #491028",
    category: "Bills & Utilities",
    categoryBadge: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    date: "Sep 15, 2024",
    time: "10:05 AM",
    channel: "Utility Auto-pay",
    amount: 2450,
    isIncome: false,
    status: "verified",
    txnRef: "DES-UB-10492-GCM",
    notes: "Automatic bill clearance for residential meter.",
    coachInsight: "Electricity bill decreased by ৳320 compared to the peak summer bill.",
    account: "City Bank Account",
  },
  {
    id: "txn-009",
    initials: "GP",
    avatarColor: "bg-blue-100 text-blue-800 ring-1 ring-blue-200/60",
    merchant: "Grameenphone Postpaid",
    detail: "Mobile Postpaid & Fiber Internet Pack",
    category: "Bills & Utilities",
    categoryBadge: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    date: "Sep 12, 2024",
    time: "09:30 AM",
    channel: "Auto-pay",
    amount: 950,
    isIncome: false,
    status: "verified",
    txnRef: "GP-PAY-99120-GCM",
    notes: "Monthly 30GB data + 600 min talktime pack.",
    coachInsight: "Essential utility on fixed monthly recurring schedule.",
    account: "bKash (017••••982)",
  },
  {
    id: "txn-010",
    initials: "ST",
    avatarColor: "bg-purple-100 text-purple-800 ring-1 ring-purple-200/60",
    merchant: "Star Tech & Engineering",
    detail: "Multiport USB-C Hub & Cable",
    category: "Shopping",
    categoryBadge: "bg-blue-50 text-blue-700 border border-blue-100",
    date: "Sep 10, 2024",
    time: "03:45 PM",
    channel: "Debit / POS",
    amount: 3200,
    isIncome: false,
    status: "verified",
    txnRef: "ST-EC-88190-GCM",
    notes: "Hardware peripherals for remote work desk setup.",
    coachInsight: "Logged under Home Office investment tax exemption.",
    account: "EBL Skybanking",
  },
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionItem | null>(null);

  const itemsPerPage = 8;

  // Filter and sort transactions
  const filteredTransactions = useMemo(() => {
    return INITIAL_TRANSACTIONS.filter((tx) => {
      // Search
      const matchesSearch =
        searchQuery.trim() === "" ||
        tx.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.notes && tx.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        tx.txnRef.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory =
        selectedCategory === "All Categories" || tx.category === selectedCategory;

      // Type
      const matchesType =
        selectedType === "all" ||
        (selectedType === "inflow" && tx.isIncome) ||
        (selectedType === "outflow" && !tx.isIncome);

      return matchesSearch && matchesCategory && matchesType;
    }).sort((a, b) => {
      if (selectedSort === "amount-high") return b.amount - a.amount;
      if (selectedSort === "amount-low") return a.amount - b.amount;
      if (selectedSort === "oldest") return a.date.localeCompare(b.date);
      return 0; // Default latest
    });
  }, [searchQuery, selectedCategory, selectedType, selectedSort]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage) || 1;
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedType("all");
    setSelectedSort("latest");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Page Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-extrabold text-on-surface tracking-tight">
            Transactions
          </h1>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">
            Track and understand your financial activity with intelligent Bangladeshi merchant tagging.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Ask AI Coach Shortcut */}
          <Link
            href="/ai-coach?prompt=Analyze%20my%20recent%20spending%20leaks%20and%20transactions"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-primary bg-secondary-container/60 hover:bg-secondary-container rounded-xl transition border border-primary/20 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span>Ask Coach</span>
          </Link>

          {/* Quick Add Button */}
          <button
            onClick={() => {
              const addBtn = document.querySelector<HTMLButtonElement>(
                "header button:has(.lucide-plus-circle)"
              );
              if (addBtn) addBtn.click();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs rounded-xl transition primary-btn-bevel shadow-sm shadow-primary/25 active:scale-95"
          >
            <PlusCircle className="w-4 h-4 text-white" />
            <span>Add Transaction</span>
          </button>
        </div>
      </motion.div>

      {/* 1. Top Summary KPI Cards */}
      <TransactionSummaryCards
        totalIncome={65000}
        totalExpenses={31250}
        netCashflow={33750}
      />

      {/* 2. Comprehensive Filter Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <TransactionFilterToolbar
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
          selectedType={selectedType}
          onTypeChange={(t) => {
            setSelectedType(t);
            setCurrentPage(1);
          }}
          selectedSort={selectedSort}
          onSortChange={(s) => {
            setSelectedSort(s);
            setCurrentPage(1);
          }}
          onResetFilters={handleResetFilters}
          transactionsToExport={filteredTransactions}
        />
      </motion.div>

      {/* 3. Main Transactions Ledger Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <TransactionTable
          transactions={paginatedTransactions}
          onSelectTransaction={(tx) => setSelectedTransaction(tx)}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => setCurrentPage(p)}
          totalCount={filteredTransactions.length}
        />
      </motion.div>

      {/* 4. Slide-Over Detail Drawer */}
      <TransactionDetailDrawer
        transaction={selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      />
    </div>
  );
}
