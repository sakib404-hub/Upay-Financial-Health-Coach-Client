import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export function SecurityBadge() {
  return (
    <section
      className="p-6 sm:p-8 rounded-3xl glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-outline-variant/40"
      id="security"
    >
      <div className="flex items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-secondary-container/80 flex items-center justify-center text-primary shrink-0">
          <ShieldCheck className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-on-surface">
            Bank-Grade Protection &amp; Privacy Standard
          </h4>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Compliant with Bangladesh Bank digital data principles and encrypted end-to-end with AES-256 GCM.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-on-surface-variant">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/60">
          <Lock className="w-4 h-4 text-primary" />
          <span>Zero-Knowledge Pin Storage</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high/60">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>Read-Only Statement Feeds</span>
        </div>
      </div>
    </section>
  );
}
