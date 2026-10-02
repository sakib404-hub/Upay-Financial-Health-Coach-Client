"use client";

import { useState } from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

interface SurplusRedirectionBannerProps {
  onDistribute: (amount: number) => void;
}

export function SurplusRedirectionBanner({ onDistribute }: SurplusRedirectionBannerProps) {
  const [distributed, setDistributed] = useState(false);

  return (
    <section className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/90 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-secondary-container/60 text-primary flex items-center justify-center shrink-0 shadow-inner">
          <TrendingUp className="w-7 h-7" />
        </div>
        <div>
          <h4 className="text-base font-bold text-on-surface">
            Automated Surplus Redirection Active
          </h4>
          <p className="text-xs text-on-surface-variant max-w-xl mt-1 leading-relaxed">
            Upay Financial Intelligence calculates an extra{" "}
            <strong className="text-primary font-bold">৳4,200</strong> floating in your MFS wallet. Would you like to distribute it proportionally between your Emergency Fund and Tech Workstation?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
        {distributed ? (
          <div className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20">
            <CheckCircle2 className="w-4 h-4" />
            <span>৳4,200 Distributed!</span>
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                setDistributed(true);
                onDistribute(4200);
              }}
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-xs font-bold text-on-primary shadow-xs hover:scale-[1.02] active:scale-95 transition-all"
            >
              Distribute ৳4,200
            </button>
          </>
        )}
      </div>
    </section>
  );
}
