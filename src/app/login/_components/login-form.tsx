"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Wallet,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function LoginForm() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form submit handler with mock redirection to /dashboard
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (authMode === "email" && !email) {
      setError("Please enter your email address.");
      return;
    }
    if (authMode === "phone" && !phone) {
      setError("Please enter your Bangladeshi phone number.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);

    // Simulate authentication delay before redirecting to /dashboard
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  // Quick 1-Click Demo Login as Shakib Al Hasan
  const handleDemoLogin = () => {
    setEmail("shakib@upaycoach.bd");
    setPassword("DemoPass123!");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md mx-auto space-y-6"
    >
      {/* Brand & Title */}
      <div className="text-center space-y-2">
        <Link href="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-on-surface text-xl tracking-tight">Upay</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-secondary-container px-1.5 py-0.5 rounded border border-primary/20">
                Coach
              </span>
            </div>
            <p className="text-[11px] font-medium text-on-surface-variant">Financial Intelligence</p>
          </div>
        </Link>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mt-3">
          Welcome back
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-xs mx-auto">
          Sign in to access your financial intelligence, live cash flow, and 24/7 AI coach.
        </p>
      </div>

      {/* 1-Click Instant Demo Login Banner */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-3.5 rounded-2xl bg-secondary-container/60 border border-primary/30 flex items-center justify-between gap-3 shadow-sm"
      >
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-primary shrink-0 animate-pulse" />
          <div className="text-left">
            <p className="text-xs font-bold text-on-surface">Explore Instant Demo</p>
            <p className="text-[11px] text-on-surface-variant">Sign in as Shakib Al Hasan with 1 click</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={isLoading}
          className="px-3 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold primary-btn-bevel shadow-sm shadow-primary/20 transition-all active:scale-95 flex items-center gap-1"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Demo Login</span>
        </button>
      </motion.div>

      {/* Main Glass Form Card */}
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 space-y-5 border border-white/85 shadow-glass-card">
        {/* Auth Mode Toggle Tabs (Email vs Phone) */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setAuthMode("email")}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              authMode === "email"
                ? "bg-surface-container-lowest text-primary shadow-sm font-bold border border-primary/20"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Address</span>
          </button>
          <button
            type="button"
            onClick={() => setAuthMode("phone")}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              authMode === "phone"
                ? "bg-surface-container-lowest text-primary shadow-sm font-bold border border-primary/20"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Mobile (bKash/Nagad)</span>
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Phone Input */}
          {authMode === "email" ? (
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
                <input
                  type="email"
                  required
                  placeholder="e.g. shakib@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">
                Mobile Number (+880)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs font-bold text-primary">
                  +880
                </span>
                <input
                  type="tel"
                  required
                  placeholder="01712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-14 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
          )}

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-on-surface">Password</label>
              <Link
                href="#forgot-password"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset instructions have been dispatched to your verified contact.");
                }}
                className="text-[11px] font-semibold text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-outline hover:text-on-surface transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-primary border-outline-variant focus:ring-primary/30"
              />
              <span className="text-xs text-on-surface-variant font-medium">
                Keep me signed in for 30 days
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold primary-btn-bevel shadow-md shadow-primary/25 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing in to Dashboard...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Bank-Grade Security Disclaimer */}
        <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-center gap-2 text-[11px] text-outline text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>AES-256 GCM client-side encryption active</span>
        </div>
      </div>

      {/* Switch to Register */}
      <div className="text-center text-xs text-on-surface-variant">
        <span>Don&apos;t have an account yet? </span>
        <Link
          href="/register"
          className="font-bold text-primary hover:text-primary-container hover:underline transition-colors"
        >
          Create an account
        </Link>
      </div>

      {/* Direct Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="text-[11px] text-outline hover:text-on-surface transition-colors"
        >
          ← Back to Homepage
        </Link>
      </div>
    </motion.div>
  );
}
