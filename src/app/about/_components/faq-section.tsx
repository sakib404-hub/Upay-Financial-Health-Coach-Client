"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do I have to share my bank password, OTP, or bKash/Nagad PIN?",
    answer:
      "Never. Upay Financial Coach operates on a zero-knowledge, read-only principle. We never request, store, or have access to transactional PINs, passwords, or OTPs. All insights are generated from exported statements or read-only SMS alerts that you control.",
  },
  {
    question: "How does Upay understand Bangladeshi merchants and local habits?",
    answer:
      "Unlike Western budgeting apps that only understand Amazon or Starbucks, Upay's transaction intelligence is specifically trained on local Bangladeshi vendors (like Chaldal, Shwapno, Aarong, Pathao, Daraz, and DPDC bills) and understands local expense rhythms including Eid bonuses, family support remittances, and festival expenditures.",
  },
  {
    question: "Can I chat with the AI Coach in conversational Bangla or Banglish?",
    answer:
      "Yes! Upay Coach is designed to understand natural English, standard Bangla, as well as colloquial Banglish (e.g., 'Ami ki ei mashe ৳40k laptop kinte parbo?'). You don't need formal financial terminology to ask for help.",
  },
  {
    question: "How does the Affordability Engine protect me from debt traps?",
    answer:
      "When you consider a high-ticket purchase, Upay Coach checks your liquidity runway against your 3-to-6 month emergency survival fund and non-negotiable upcoming fixed bills. It warns you if a purchase will deplete your safety cushion and proposes debt-free sinking funds instead.",
  },
  {
    question: "Is there a free assessment to get started?",
    answer:
      "Yes. Our 2-minute onboarding assessment evaluates your income tier, baseline fixed commitments, and gives you an instant Financial Health Score and customized savings recommendations at zero cost.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="space-y-8" id="faq">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-wider text-primary font-bold">
          Common Questions
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant">
          Everything you need to know about privacy, security, and using Upay Coach in Bangladesh.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-outline-variant/30 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-on-surface hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-outline transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
