"use client";

import { useState } from "react";
import Link from "next/link";
import { Filter, Download, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function RecentTransactions() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const transactions = [
    {
      id: "tx-1",
      initials: "DZ",
      avatarColor: "bg-orange-100 text-orange-700",
      merchant: "Daraz Bangladesh",
      detail: "Online purchase • Electronics",
      category: "Shopping",
      categoryBadge: "bg-blue-50 text-blue-700",
      date: "Sep 28, 2024",
      amount: "-৳2,450",
      isIncome: false,
    },
    {
      id: "tx-2",
      initials: "SW",
      avatarColor: "bg-red-100 text-red-700",
      merchant: "Shwapno Superstore",
      detail: "Dhanmondi Branch • Grocery",
      category: "Food & Dining",
      categoryBadge: "bg-emerald-50 text-primary",
      date: "Sep 27, 2024",
      amount: "-৳1,250",
      isIncome: false,
    },
    {
      id: "tx-3",
      initials: "TC",
      avatarColor: "bg-emerald-100 text-primary",
      merchant: "Tech Innovators Ltd",
      detail: "Monthly Salary Transfer",
      category: "Salary Income",
      categoryBadge: "bg-teal-50 text-teal-700",
      date: "Sep 25, 2024",
      amount: "+৳65,000",
      isIncome: true,
    },
    {
      id: "tx-4",
      initials: "PH",
      avatarColor: "bg-red-50 text-red-600",
      merchant: "Pathao Rides",
      detail: "Gulshan to Banani",
      category: "Transportation",
      categoryBadge: "bg-amber-50 text-amber-700",
      date: "Sep 24, 2024",
      amount: "-৳420",
      isIncome: false,
    },
    {
      id: "tx-5",
      initials: "FP",
      avatarColor: "bg-pink-100 text-pink-700",
      merchant: "Foodpanda",
      detail: "Dinner Delivery",
      category: "Food & Dining",
      categoryBadge: "bg-emerald-50 text-primary",
      date: "Sep 23, 2024",
      amount: "-৳880",
      isIncome: false,
    },
    {
      id: "tx-6",
      initials: "CD",
      avatarColor: "bg-yellow-100 text-yellow-800",
      merchant: "Chaldal Express",
      detail: "Weekly Household Pantry",
      category: "Groceries",
      categoryBadge: "bg-purple-50 text-purple-700",
      date: "Sep 21, 2024",
      amount: "-৳1,840",
      isIncome: false,
    },
  ];

  const handleDownloadCsv = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Merchant,Category,Date,Amount", ...transactions.map((t) => `"${t.merchant}","${t.category}","${t.date}","${t.amount}"`)].join(
        "\n"
      );
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "upay-transactions-sep-2024.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-on-surface">Recent Transactions</h3>
            <p className="text-xs text-on-surface-variant">Verified transaction intelligence stream</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/transactions"
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              title="Filter Transactions"
            >
              <Filter className="w-4 h-4" />
            </Link>
            <button
              onClick={handleDownloadCsv}
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              title="Download CSV"
            >
              {downloadSuccess ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Download className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30 text-[11px] font-bold uppercase tracking-wider text-outline">
                <th className="py-2.5 px-2">Merchant</th>
                <th className="py-2.5 px-2">Category</th>
                <th className="py-2.5 px-2">Date</th>
                <th className="py-2.5 px-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-xs font-medium">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-surface-container-high/30 transition-colors group cursor-pointer"
                >
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-lg ${tx.avatarColor} font-bold flex items-center justify-center text-xs shrink-0`}
                      >
                        {tx.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-on-surface truncate">{tx.merchant}</p>
                        <p className="text-[10px] text-outline truncate">{tx.detail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${tx.categoryBadge}`}
                    >
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-on-surface-variant text-[11px] whitespace-nowrap">
                    {tx.date}
                  </td>
                  <td
                    className={`py-3 px-2 text-right font-bold whitespace-nowrap ${
                      tx.isIncome ? "text-primary font-extrabold" : "text-rose-600"
                    }`}
                  >
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
        <span className="text-xs text-outline font-medium">Showing 6 of 42 transactions</span>
        <Link
          href="/transactions"
          className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-container transition-colors group"
        >
          <span>View All Transactions</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
