"use client";

import { Users, ShieldCheck } from "lucide-react";

export function HealthPeerBenchmarks() {
  const benchmarks = [
    {
      metric: "Savings Rate",
      userValue: "28.5%",
      peerValue: "16.2%",
      delta: "+12.3% higher",
      isAdvantage: true,
      description: "You allocate nearly double the peer average to sinking funds & wealth accumulation.",
    },
    {
      metric: "Emergency Cushion",
      userValue: "4.2 months",
      peerValue: "1.8 months",
      delta: "+2.4 months buffer",
      isAdvantage: true,
      description: "Peer median can only sustain unexpected medical/job loss for 54 days.",
    },
    {
      metric: "Discretionary Ratio",
      userValue: "48% of spend",
      peerValue: "56% of spend",
      delta: "-8% lower spend",
      isAdvantage: true,
      description: "Your dining, entertainment, and shopping stay strictly inside discretionary caps.",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Peer Benchmark Comparison Card */}
      <section className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-on-surface">Regional Peer Benchmarks</h3>
              <p className="text-xs text-on-surface-variant">
                Compared against 14,200+ verified professionals in Dhaka earning ৳60k–৳80k/mo
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container self-start sm:self-auto">
            Top 18th Percentile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benchmarks.map((item) => (
            <div
              key={item.metric}
              className="p-4 rounded-xl bg-surface-container/40 border border-outline-variant/30 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-on-surface">{item.metric}</span>
                <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {item.delta}
                </span>
              </div>

              <div className="flex items-baseline gap-3 pt-1">
                <div>
                  <span className="text-xl font-extrabold text-on-surface">{item.userValue}</span>
                  <span className="text-[10px] text-primary font-bold uppercase ml-1.5">(You)</span>
                </div>
                <div className="text-xs text-outline">
                  vs <span className="font-semibold text-on-surface-variant">{item.peerValue}</span> (Peers)
                </div>
              </div>

              <p className="text-[11px] text-on-surface-variant leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Verification Note */}
      <div className="rounded-xl bg-surface-container/60 border border-outline-variant/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-on-surface-variant">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>
            Scores reflect verified transaction streams connected via Bangladesh Bank automated clearing protocols and encrypted read-only MFS telemetry.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-primary font-semibold hover:underline cursor-pointer">
            Methodology Details
          </span>
        </div>
      </div>
    </div>
  );
}
