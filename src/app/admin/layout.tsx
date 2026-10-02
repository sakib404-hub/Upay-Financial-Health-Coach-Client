"use client";

import { useState } from "react";
import { AdminSidebar } from "./_components/admin-sidebar";
import { AdminHeader } from "./_components/admin-header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("coach");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    setToastMessage(`Invitation dispatched to ${inviteEmail} (${inviteRole} role)`);
    setInviteEmail("");
    setInviteModalOpen(false);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen flex bg-transparent text-on-surface antialiased overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-fixed-variant">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-800 text-white font-medium text-xs shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Sidebar Navigation */}
      <AdminSidebar
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Viewport Canvas */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 min-h-screen">
        <AdminHeader
          onMobileMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onInviteUser={() => setInviteModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>

        <footer className="py-6 border-t border-outline-variant/30 text-center text-xs text-outline px-4">
          <p>
            Upay Financial Coach Administrative Gateway • Bangladesh Bank MFS Regulatory Framework • 256-bit AES Vault
          </p>
        </footer>
      </div>

      {/* Shared Invite User Modal */}
      {inviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-surface-container-lowest border border-outline-variant/60 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <h3 className="text-base font-bold text-on-surface">Invite Admin / Coach User</h3>
              <button
                onClick={() => setInviteModalOpen(false)}
                className="text-outline hover:text-on-surface p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSendInvite} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="analyst@fintechbd.io"
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Assigned Governance Role
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:border-primary"
                >
                  <option value="coach">Coach Tier (Advisor View)</option>
                  <option value="analyst">Financial Data Analyst</option>
                  <option value="compliance">AML / Compliance Officer</option>
                  <option value="admin">Operations Master Admin</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setInviteModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
