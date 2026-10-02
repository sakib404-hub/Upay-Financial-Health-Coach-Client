"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Wallet,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Check,
} from "lucide-react";

export function RegisterForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Compute simple password strength
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, text: "", color: "bg-transparent" };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 25, text: "Weak", color: "bg-rose-500" };
    if (score === 2) return { score: 50, text: "Fair", color: "bg-amber-500" };
    if (score === 3) return { score: 75, text: "Good", color: "bg-teal-500" };
    return { score: 100, text: "Strong", color: "bg-primary" };
  };

  const strength = getPasswordStrength(password);
  const passwordsMatch = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName) {
      setError("Please provide your full name.");
      return;
    }
    if (!email) {
      setError("Please provide an email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreedTerms) {
      setError("You must agree to the Terms & Privacy Policy.");
      return;
    }

    setIsLoading(true);

    // Simulate account registration and redirect to /dashboard
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 900);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
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
          Create your account
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-xs mx-auto">
          Start building wealth with automated spending intelligence and 24/7 AI guidance.
        </p>
      </div>

      {/* Main Glass Form Card */}
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 space-y-5 border border-outline-variant/40 shadow-xl">
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
              <input
                type="text"
                required
                placeholder="e.g. Shakib Al Hasan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-1">Email Address</label>
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

          {/* Phone (Optional for bKash/Nagad sync) */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-1">
              Mobile Phone <span className="text-[10px] text-outline font-normal">(bKash / Nagad link)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs font-bold text-primary">+880</span>
              <input
                type="tel"
                placeholder="01712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-14 pr-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Create Password */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-1">Create Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="At least 6 characters"
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

            {/* Password Strength Indicator */}
            {password.length > 0 && (
              <div className="mt-1.5 space-y-1">
                <div className="w-full bg-surface-container-high/60 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${strength.color} h-full rounded-full transition-all duration-300`}
                    style={{ width: `${strength.score}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-outline">
                  <span>Strength: {strength.text}</span>
                  <span>Min. 6 characters</span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-outline" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              {passwordsMatch && (
                <Check className="w-4 h-4 text-primary absolute right-3.5 top-3" />
              )}
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-primary border-outline-variant focus:ring-primary/30"
              />
              <span className="text-[11px] text-on-surface-variant leading-relaxed">
                I agree to the{" "}
                <Link href="/about" className="font-semibold text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and acknowledge the{" "}
                <Link href="/about" className="font-semibold text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
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
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Complete Registration &amp; Go to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Feature Value Props */}
        <div className="pt-3 border-t border-outline-variant/20 space-y-1.5 text-[11px] text-on-surface-variant">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Encrypted locally with AES-256 GCM bank-grade security</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Calibrated for Bangladesh (৳ BDT, bKash, Nagad, Banks)</span>
          </div>
        </div>
      </div>

      {/* Switch to Login */}
      <div className="text-center text-xs text-on-surface-variant">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="font-bold text-primary hover:text-primary-container hover:underline transition-colors"
        >
          Sign in
        </Link>
      </div>

      {/* Direct Back to Home */}
      <div className="text-center">
        <Link href="/" className="text-[11px] text-outline hover:text-on-surface transition-colors">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
