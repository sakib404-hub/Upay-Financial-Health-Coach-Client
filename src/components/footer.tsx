import Link from "next/link";
import { Wallet, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-outline-variant/30 glass-card !rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-on-surface">Upay Coach</span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Understand your money. Plan your future. Intelligent, conversation-first wealth guidance calibrated specifically for Bangladesh.
            </p>
            <div className="flex items-center gap-3 pt-2 text-on-surface-variant">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/60 text-xs font-medium text-outline">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Bank-Grade 256-Bit SSL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/60 text-xs font-semibold text-primary">
                ৳ BDT Engine
              </span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Features Suite
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-primary transition-colors">
                  AI Coach Chat
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Savings Goals
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Spending Insights
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  What-If Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Upay Coach
                </Link>
              </li>
              <li>
                <Link href="/about#how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-primary transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-primary transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Compliance & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">
              Compliance
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Data Protection
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Bangladesh Bank Regulations
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Grievance Redressal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
          <p>© 2026 Upay Digital Financial Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Engineered with precision for Bangladesh</span>
            <span>•</span>
            <span className="text-primary font-bold">৳ Bangladeshi Taka (BDT)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
