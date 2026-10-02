"use client";

import { MessageSquare, Plus, Activity, ShieldCheck } from "lucide-react";

export interface ConversationSession {
  id: string;
  title: string;
  preview: string;
  time: string;
  category: string;
  categoryColor: string;
  msgCount: number;
  isActive: boolean;
}

interface ChatSidebarProps {
  sessions: ConversationSession[];
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  onNewConversation: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function ChatSidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewConversation,
  isOpenMobile,
  onCloseMobile,
}: ChatSidebarProps) {
  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      <aside
        className={`w-80 border-r border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-xl flex flex-col justify-between shrink-0 h-full overflow-hidden transition-all duration-300 z-30 ${
          isOpenMobile
            ? "fixed inset-y-0 left-0 shadow-2xl md:relative md:shadow-none"
            : "hidden md:flex"
        }`}
      >
        {/* Top Action & Header */}
        <div className="p-4 border-b border-outline-variant/20 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-on-surface flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Conversations</span>
            </h2>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container font-medium text-on-surface-variant">
              {sessions.length} Sessions
            </span>
          </div>

          {/* + New Conversation Button */}
          <button
            onClick={onNewConversation}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary text-xs font-semibold primary-btn-bevel shadow-sm shadow-primary/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Conversation</span>
          </button>

          {/* Live Sync Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-container/50 border border-primary/20 text-[11px] text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold truncate">Live Sync: Upay MFS &amp; Bank Ledger</span>
          </div>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="text-[10px] font-bold text-outline uppercase tracking-wider px-2 py-1">
            Recent Sessions
          </div>

          {sessions.map((sess) => {
            const isSelected = sess.id === activeSessionId;

            return (
              <div
                key={sess.id}
                onClick={() => {
                  onSelectSession(sess.id);
                  onCloseMobile();
                }}
                className={`group p-3 rounded-xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-surface-container-lowest border-primary/40 shadow-sm"
                    : "bg-surface-container-low/40 hover:bg-surface-container-lowest border-outline-variant/30 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className={`text-xs font-bold truncate flex-1 ${
                      isSelected ? "text-primary" : "text-on-surface"
                    }`}
                  >
                    {sess.title}
                  </h3>
                  <span className="text-[10px] text-outline font-semibold shrink-0">
                    {sess.time}
                  </span>
                </div>

                <p className="text-[11px] text-on-surface-variant line-clamp-2 leading-relaxed mb-2">
                  {sess.preview}
                </p>

                <div className="flex items-center justify-between text-[10px]">
                  <span
                    className={`px-2 py-0.5 rounded font-semibold border ${sess.categoryColor}`}
                  >
                    {sess.category}
                  </span>
                  <span className="text-outline flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>{sess.msgCount} msgs</span>
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-r-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Financial Context Vitals Card */}
        <div className="p-3.5 border-t border-outline-variant/20 bg-surface-container-low/50">
          <div className="p-3 rounded-xl bg-surface-container-lowest/90 border border-outline-variant/30 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-on-surface flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-primary" />
                Active Context Vitals
              </span>
              <span className="text-[10px] font-semibold text-primary bg-secondary-container px-1.5 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-primary" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-surface-container-low/60 p-2 rounded-lg">
                <span className="text-[10px] text-outline block">Health Index</span>
                <span className="font-bold text-primary">78 / 100</span>{" "}
                <span className="text-[9px] text-primary font-semibold">(Good)</span>
              </div>
              <div className="bg-surface-container-low/60 p-2 rounded-lg">
                <span className="text-[10px] text-outline block">Monthly Surplus</span>
                <span className="font-bold text-on-surface">+৳33,750</span>
              </div>
              <div className="bg-surface-container-low/60 p-2 rounded-lg">
                <span className="text-[10px] text-outline block">Emergency Fund</span>
                <span className="font-bold text-on-surface">72%</span>{" "}
                <span className="text-[9px] text-outline">(৳72k/100k)</span>
              </div>
              <div className="bg-surface-container-low/60 p-2 rounded-lg">
                <span className="text-[10px] text-outline block">Liquid Balance</span>
                <span className="font-bold text-on-surface">৳48,750</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
