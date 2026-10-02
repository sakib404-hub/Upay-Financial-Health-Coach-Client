"use client";

import { useState } from "react";
import { AppSidebar } from "./_components/app-sidebar";
import { AppHeader } from "./_components/app-header";
import { AddTransactionModal } from "./_components/add-transaction-modal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [addTransactionOpen, setAddTransactionOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-transparent text-on-surface antialiased overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Sidebar Navigation */}
      <AppSidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 min-h-screen">
        <AppHeader
          onMobileMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onOpenAddTransaction={() => setAddTransactionOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-7">
          {children}
        </main>

        <footer className="py-6 border-t border-outline-variant/30 text-center text-xs text-outline">
          <p>© 2024 Upay Financial Coach. Intelligent Personal Finance &amp; Wealth Management. All rights reserved.</p>
        </footer>
      </div>

      {/* Global Add Transaction Modal */}
      <AddTransactionModal
        isOpen={addTransactionOpen}
        onClose={() => setAddTransactionOpen(false)}
      />
    </div>
  );
}
