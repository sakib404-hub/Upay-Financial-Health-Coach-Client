"use client";

import { useState } from "react";
import { Paperclip, Mic, Send, ShieldCheck, Sparkles } from "lucide-react";

interface ChatInputBarProps {
  onSendMessage: (text: string) => void;
  isThinking: boolean;
  initialValue?: string;
}

export function ChatInputBar({ onSendMessage, isThinking, initialValue = "" }: ChatInputBarProps) {
  const [inputText, setInputText] = useState(initialValue);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isThinking) return;

    onSendMessage(inputText.trim());
    setInputText("");
    setAttachedFile(null);
  };

  const handleAttachMock = () => {
    setAttachedFile("bKash_Statement_Sep2024.pdf");
  };

  return (
    <footer className="p-4 sm:p-5 border-t border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-xl shrink-0 z-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        {/* Attachment preview if selected */}
        {attachedFile && (
          <div className="flex items-center gap-2 px-3 py-1 bg-secondary-container/60 border border-primary/20 rounded-xl text-xs text-primary self-start">
            <Paperclip className="w-3.5 h-3.5" />
            <span className="font-semibold">{attachedFile}</span>
            <button
              onClick={() => setAttachedFile(null)}
              className="text-on-surface-variant hover:text-rose-600 font-bold ml-1"
            >
              ×
            </button>
          </div>
        )}

        {/* Input Box Bar */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 p-2 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all"
        >
          {/* Attach receipt / statement */}
          <button
            type="button"
            onClick={handleAttachMock}
            title="Attach Receipt or Bank PDF"
            className="p-2 rounded-xl text-outline hover:text-primary hover:bg-secondary-container/40 transition-colors flex items-center justify-center"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          {/* Voice input */}
          <button
            type="button"
            onClick={() => setInputText("Can I afford to purchase a ৳35,000 workstation gadget?")}
            title="Voice Input (Sample prompt)"
            className="p-2 rounded-xl text-outline hover:text-primary hover:bg-secondary-container/40 transition-colors flex items-center justify-center"
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder="Ask Upay Coach anything (e.g. 'Can I afford a ৳25k phone?')..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isThinking}
            className="flex-1 bg-transparent border-0 text-xs sm:text-sm text-on-surface placeholder:text-outline focus:ring-0 px-2 py-1 outline-none"
          />

          {/* Context Tag & Send Button */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-secondary-container px-2.5 py-1 rounded-lg border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Oct 2024 Context</span>
            </span>

            <button
              type="submit"
              disabled={!inputText.trim() || isThinking}
              className="w-9 h-9 rounded-xl bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-sm shadow-primary/25 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick Suggestion Tip Below Input */}
        <div className="flex items-center justify-between text-[11px] text-outline px-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-primary font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" />
              Try asking:
            </span>
            <button
              onClick={() =>
                onSendMessage("How will dining out less impact my Cox's Bazar savings milestone?")
              }
              className="text-on-surface-variant italic truncate hover:text-primary transition-colors text-left"
            >
              &ldquo;How will dining out less impact my Cox&apos;s Bazar savings milestone?&rdquo;
            </button>
          </div>
          <span className="text-[10px] text-outline hidden sm:flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3 h-3 text-primary" />
            Protected by Upay Data Vault
          </span>
        </div>
      </div>
    </footer>
  );
}
