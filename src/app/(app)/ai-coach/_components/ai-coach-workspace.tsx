"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  Bot,
  ShieldCheck,
  RotateCcw,
  Download,
  Menu,
  Sparkles,
  Check,
} from "lucide-react";
import { ChatSidebar, ConversationSession } from "./chat-sidebar";
import { ChatMessages, ChatMessage } from "./chat-messages";
import { ChatInputBar } from "./chat-input-bar";

const INITIAL_SESSIONS: ConversationSession[] = [
  {
    id: "sess-1",
    title: "Monthly spending analysis",
    preview: "AI: Your spending increased mainly because transportation and dining expenses...",
    time: "Just now",
    category: "Spending Insights",
    categoryColor: "bg-secondary-container text-primary border-primary/20",
    msgCount: 2,
    isActive: true,
  },
  {
    id: "sess-2",
    title: "Emergency fund plan",
    preview: "Target ৳100,000 roadmap with ৳7,000 auto-deposit...",
    time: "Yesterday",
    category: "Goals",
    categoryColor: "bg-surface-container text-on-surface-variant border-outline-variant/30",
    msgCount: 14,
    isActive: false,
  },
  {
    id: "sess-3",
    title: "Laptop affordability",
    preview: "Evaluating ৳35,000 workstation gear impact...",
    time: "3 days ago",
    category: "Affordability",
    categoryColor: "bg-amber-50 text-amber-800 border-amber-200/50",
    msgCount: 8,
    isActive: false,
  },
  {
    id: "sess-4",
    title: "Savings strategy",
    preview: "Surplus reallocation of ৳4,200 into vault...",
    time: "Oct 21",
    category: "Strategy",
    categoryColor: "bg-surface-container text-on-surface-variant border-outline-variant/30",
    msgCount: 11,
    isActive: false,
  },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "msg-1",
    sender: "user",
    text: "Why did my spending increase this month?",
    time: "10:42 AM",
  },
  {
    id: "msg-2",
    sender: "coach",
    text: "Your spending increased mainly because transportation and dining expenses were higher than your usual monthly average. Specifically, weekend ride-hailing on Pathao and family food deliveries drove an additional ৳3,550 in outlays.",
    time: "10:42 AM",
    meta: {
      ledgerCount: 42,
      varianceBreakdown: {
        transport: { total: 5420, pctChange: 22, diff: 980 },
        dining: { total: 10250, pctChange: 18, diff: 1570 },
        weeklyBars: [
          { label: "Week 1", amount: "৳1.8k", isSurge: false, height: "h-8" },
          { label: "Week 2", amount: "৳2.1k", isSurge: false, height: "h-10" },
          { label: "Week 3", amount: "৳3.4k", isSurge: true, height: "h-14" },
          { label: "Week 4", amount: "৳2.9k", isSurge: true, height: "h-12" },
        ],
      },
      actionPlan: {
        reductionText: "Reducing food delivery by just 2 orders per week (cooking at home on alternate weekends)",
        savedPerMonth: 2400,
        acceleratesDays: 21,
        goalTitle: "Emergency Fund Goal",
        goalPct: 72,
        goalCurrent: 72000,
        goalTarget: 100000,
      },
    },
  },
];

export function AiCoachWorkspace() {
  const searchParams = useSearchParams();
  const promptParam = searchParams.get("prompt");

  const [sessions, setSessions] = useState<ConversationSession[]>(INITIAL_SESSIONS);
  const [activeSessionId, setActiveSessionId] = useState("sess-1");
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isThinking, setIsThinking] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const handleSendMessage = (userText: string) => {
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsThinking(true);

    // Dynamic simulated AI Coach intelligence based on input keywords
    setTimeout(() => {
      let coachReply = "";
      let coachMeta: ChatMessage["meta"] | undefined;

      const lower = userText.toLowerCase();

      if (lower.includes("save") || lower.includes("10,000") || lower.includes("savings")) {
        coachReply =
          "To save an extra ৳10,000 this month, we can reallocate ৳4,000 from dining surges, ৳3,000 from discretionary shopping, and channel ৳3,000 from your upcoming bonus directly into your Emergency Fund.";
        coachMeta = {
          ledgerCount: 42,
          actionPlan: {
            reductionText: "Adopting the 50/30/20 rebalance strategy",
            savedPerMonth: 10000,
            acceleratesDays: 45,
            goalTitle: "Emergency Fund Goal",
            goalPct: 82,
            goalCurrent: 82000,
            goalTarget: 100000,
          },
        };
      } else if (lower.includes("afford") || lower.includes("purchase") || lower.includes("phone") || lower.includes("laptop")) {
        coachReply =
          "Evaluating your current liquid balance of ৳48,750 and your ৳33,750 monthly surplus: a planned ৳30,000 purchase is classified as MODERATE IMPACT. If paid in 3-month zero-interest installments (৳10,000/mo), your emergency runway remains fully intact.";
        coachMeta = {
          ledgerCount: 42,
          varianceBreakdown: {
            transport: { total: 4200, pctChange: 5, diff: 200 },
            dining: { total: 8450, pctChange: 8, diff: 600 },
            weeklyBars: [
              { label: "Installment 1", amount: "৳10k", isSurge: true, height: "h-14" },
              { label: "Installment 2", amount: "৳10k", isSurge: true, height: "h-14" },
              { label: "Installment 3", amount: "৳10k", isSurge: true, height: "h-14" },
              { label: "Buffer Left", amount: "৳23k", isSurge: false, height: "h-16" },
            ],
          },
        };
      } else if (lower.includes("where am i spending") || lower.includes("most")) {
        coachReply =
          "Your top 3 expenditure buckets this month are Food & Dining (৳8,450 / 27%), Shopping (৳6,250 / 20%), and Transportation (৳4,800 / 15%). Dining is currently your largest variable drain.";
        coachMeta = {
          ledgerCount: 42,
          varianceBreakdown: {
            transport: { total: 4800, pctChange: 15, diff: 650 },
            dining: { total: 8450, pctChange: 27, diff: 1800 },
            weeklyBars: [
              { label: "Dining", amount: "৳8.5k", isSurge: true, height: "h-16" },
              { label: "Shopping", amount: "৳6.3k", isSurge: false, height: "h-12" },
              { label: "Transit", amount: "৳4.8k", isSurge: true, height: "h-10" },
              { label: "Utilities", amount: "৳4.5k", isSurge: false, height: "h-9" },
            ],
          },
        };
      } else {
        coachReply = `I've cross-referenced "${userText}" with your live ledger. With your ৳65,000 monthly income and ৳33,750 net surplus, your cash flow is strong. Let's make sure this allocation supports your upcoming milestones.`;
      }

      const coachMsg: ChatMessage = {
        id: `cch-${Date.now()}`,
        sender: "coach",
        text: coachReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        meta: coachMeta,
      };

      setMessages((prev) => [...prev, coachMsg]);
      setIsThinking(false);
    }, 900);
  };

  const handledPromptRef = useRef<string | null>(null);

  // If a prompt query param was passed, automatically send or prepare it asynchronously
  useEffect(() => {
    if (promptParam && promptParam.trim().length > 0 && handledPromptRef.current !== promptParam) {
      handledPromptRef.current = promptParam;
      const timer = setTimeout(() => {
        handleSendMessage(promptParam.trim());
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [promptParam]);

  const handleNewConversation = () => {
    const newSessionId = `sess-${Date.now()}`;
    const newSession: ConversationSession = {
      id: newSessionId,
      title: "New Advisory Session",
      preview: "Start asking questions about your personal finances...",
      time: "Just now",
      category: "Advisory",
      categoryColor: "bg-secondary-container text-primary border-primary/20",
      msgCount: 0,
      isActive: true,
    };

    setSessions((prev) => [newSession, ...prev.map((s) => ({ ...s, isActive: false }))]);
    setActiveSessionId(newSessionId);
    setMessages([]);
  };

  const handleClearThread = () => {
    setMessages([]);
  };

  const handleExportSummary = () => {
    const summaryText = messages.map((m) => `${m.sender.toUpperCase()} (${m.time}): ${m.text}`).join("\n\n");
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `upay-coach-advisory-${new Date().toISOString().split("T")[0]}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  return (
    <div className="h-[calc(100vh-8.5rem)] rounded-3xl overflow-hidden glass-card border border-outline-variant/30 flex shadow-xl">
      {/* 1. Left Panel: Conversations Sidebar & Personal Context */}
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={(id) => {
          setActiveSessionId(id);
          setSessions((prev) => prev.map((s) => ({ ...s, isActive: s.id === id })));
        }}
        onNewConversation={handleNewConversation}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Right Panel: Chat Interface */}
      <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-surface via-surface-container-low/20 to-surface overflow-hidden relative">
        {/* Header Top Bar */}
        <header className="h-16 border-b border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle for sidebar */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors md:hidden"
              aria-label="Open sessions drawer"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shadow-sm shadow-primary/25">
              <Bot className="w-5 h-5 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-on-surface">Upay Coach</h2>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary-container text-primary border border-primary/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Personal Financial Guide
                </span>
              </div>
              <p className="text-[11px] text-outline hidden sm:block">
                Synthesizing verified cash flow, spending habits &amp; savings goals
              </p>
            </div>
          </div>

          {/* Header Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-[11px] text-on-surface-variant font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>256-bit Encrypted Private Session</span>
            </div>

            <button
              onClick={handleClearThread}
              title="Clear Thread"
              className="p-2 rounded-lg text-outline hover:bg-surface-container hover:text-on-surface transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleExportSummary}
              title="Export Conversation"
              className="p-2 rounded-lg text-outline hover:bg-surface-container hover:text-on-surface transition-all"
            >
              {copiedSuccess ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Download className="w-4 h-4" />
              )}
            </button>
          </div>
        </header>

        {/* Chat Feed */}
        <ChatMessages
          messages={messages}
          isThinking={isThinking}
          onSelectPrompt={(p) => handleSendMessage(p)}
        />

        {/* Input Dock */}
        <ChatInputBar
          onSendMessage={(text) => handleSendMessage(text)}
          isThinking={isThinking}
        />
      </div>
    </div>
  );
}
