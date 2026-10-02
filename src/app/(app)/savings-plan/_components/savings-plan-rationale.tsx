"use client";

import Link from "next/link";
import { Bot, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function SavingsPlanRationale() {
  const points = [
    {
      title: "50/30/20 Urban Bangladesh Calibration",
      description:
        "Your ৳65,000 salary safely supports a ৳7,000 monthly auto-transfer with zero risk of overdraft or compromising essential household expenses.",
    },
    {
      title: "High-Yield Vault Compounding",
      description:
        "Deposits route into the Upay Digital Vault at 6.5% p.a. yielding an extra ~৳384/month in passive interest toward your finish line.",
    },
    {
      title: "Guaranteed Zero-Deficit Margin",
      description:
        "Leaves ৳26,750 for flexible discretionary spending, ensuring you never need to break the sinking fund early.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.2 }}
      whileHover={{ y: -2 }}
      className="rounded-2xl glass-card-elevated border border-white/85 border-l-4 border-l-primary p-6 shadow-glass-card flex flex-col justify-between space-y-6"
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
              AI Financial Rationale
            </span>
            <h3 className="text-base font-bold text-on-surface">Why this 4-month sprint?</h3>
          </div>
        </div>

        <div className="space-y-3.5 mt-4">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
              className="p-3.5 rounded-xl bg-surface-container/30 border border-outline-variant/30 space-y-1"
            >
              <h4 className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{pt.title}</span>
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed pl-5">
                {pt.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between">
        <span className="text-xs text-outline">Confidence: 98%</span>
        <Link
          href="/ai-coach?prompt=Can+I+adjust+my+savings+plan+pace+to+5000+or+9000"
          className="text-xs font-bold text-primary hover:text-primary-container flex items-center gap-1"
        >
          <span>Ask Coach to Recalibrate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.section>
  );
}
