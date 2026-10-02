"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Wallet } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="glass-card-elevated !border-b !border-[#bccac0]/30 !border-t-0 !border-x-0 !rounded-none">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-on-surface">
                  Upay Coach
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  AI Personal Finance
                </span>
              </div>
              <span className="text-xs text-on-surface-variant hidden sm:inline">
                Financial Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Workflow
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="/#security"
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Security
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-surface-container-high/40 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold primary-btn-bevel transition-all duration-150 active:scale-95 shadow-sm"
            >
              <span>Start Coaching</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/onboarding"
              className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary text-xs font-semibold"
            >
              Start
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-surface-container-low"
              >
                Home
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
              >
                Workflow
              </Link>
              <Link
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
              >
                Capabilities
              </Link>
              <Link
                href="/#security"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
              >
                Security &amp; Compliance
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
              >
                About
              </Link>
            </nav>
            <div className="pt-2 border-t border-outline-variant/30 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2.5 rounded-xl border border-outline-variant/50 text-on-surface font-semibold text-xs hover:bg-surface-container transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2.5 rounded-xl bg-secondary-container/60 border border-primary/20 text-primary font-bold text-xs hover:bg-secondary-container transition-colors"
                >
                  Dashboard
                </Link>
              </div>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold primary-btn-bevel shadow-sm"
              >
                Create Account (Free Assessment)
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
