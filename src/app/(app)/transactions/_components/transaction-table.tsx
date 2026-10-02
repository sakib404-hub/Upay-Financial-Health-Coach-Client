"use client";

import { ChevronRight, ShieldCheck, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { TransactionItem } from "./transaction-detail-drawer";

interface TransactionTableProps {
  transactions: TransactionItem[];
  onSelectTransaction: (tx: TransactionItem) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  totalCount: number;
}

export function TransactionTable({
  transactions,
  onSelectTransaction,
  currentPage,
  totalPages,
  onPageChange,
  totalCount,
}: TransactionTableProps) {
  if (transactions.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center space-y-3">
        <p className="text-sm font-bold text-on-surface">No transactions match your current filters</p>
        <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
          Try clearing your search query or adjusting your category and type selections.
        </p>
      </div>
    );
  }

  return (
    <section className="glass-card rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-surface-container-low/80 border-b border-outline-variant/30 text-[11px] font-bold text-outline uppercase tracking-wider">
              <th className="py-3.5 pl-6 pr-4" scope="col">
                Merchant &amp; Details
              </th>
              <th className="py-3.5 px-4" scope="col">
                Category
              </th>
              <th className="py-3.5 px-4" scope="col">
                Date &amp; Time
              </th>
              <th className="py-3.5 px-4" scope="col">
                Channel / Type
              </th>
              <th className="py-3.5 px-4 text-right" scope="col">
                Amount
              </th>
              <th className="py-3.5 px-4 text-center" scope="col">
                Status
              </th>
              <th className="py-3.5 pr-6 pl-4 text-right" scope="col">
                Receipt
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-outline-variant/20 text-sm font-normal">
            {transactions.map((tx) => {
              const isSalary = tx.category === "Salary Income";

              return (
                <tr
                  key={tx.id}
                  onClick={() => onSelectTransaction(tx)}
                  className={`transition-colors duration-150 group cursor-pointer ${
                    isSalary
                      ? "bg-secondary-container/20 hover:bg-secondary-container/40"
                      : "hover:bg-surface-container-high/30"
                  }`}
                >
                  {/* Merchant & Details */}
                  <td className="py-4 pl-6 pr-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ${tx.avatarColor}`}
                      >
                        {tx.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className={`font-bold transition-colors truncate ${
                              isSalary
                                ? "text-primary group-hover:text-primary-container"
                                : "text-on-surface group-hover:text-primary"
                            }`}
                          >
                            {tx.merchant}
                          </p>
                          {isSalary && (
                            <span className="text-[10px] font-extrabold bg-secondary-container text-primary px-1.5 py-0.2 rounded border border-primary/20">
                              PRIMARY INFLOW
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-outline truncate">{tx.detail}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${tx.categoryBadge}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {tx.category}
                    </span>
                  </td>

                  {/* Date & Time */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="text-xs font-semibold text-on-surface">{tx.date}</div>
                    <div className="text-[11px] text-outline">{tx.time}</div>
                  </td>

                  {/* Channel / Method */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="text-xs font-medium text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md border border-outline-variant/30">
                      {tx.channel}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <div
                      className={`font-black text-sm sm:text-base tracking-tight flex items-center justify-end gap-1 ${
                        tx.isIncome ? "text-primary text-base" : "text-rose-600"
                      }`}
                    >
                      {tx.isIncome ? (
                        <>
                          <ArrowDownLeft className="w-4 h-4 text-primary" />
                          <span>+৳{tx.amount.toLocaleString("en-BD")}.00</span>
                        </>
                      ) : (
                        <>
                          <ArrowUpRight className="w-4 h-4 text-rose-500" />
                          <span>-৳{tx.amount.toLocaleString("en-BD")}.00</span>
                        </>
                      )}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-container/60 text-primary border border-primary/20">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      Verified
                    </span>
                  </td>

                  {/* Actions / View Details */}
                  <td className="py-4 pr-6 pl-4 text-right whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTransaction(tx);
                      }}
                      className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                      title="View Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 sm:px-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-outline font-medium">
          Showing {transactions.length} of {totalCount} transactions
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg border border-outline-variant/40 text-on-surface font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container transition-colors"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-8 h-8 rounded-lg font-bold transition-all ${
                  currentPage === pageNum
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg border border-outline-variant/40 text-on-surface font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
