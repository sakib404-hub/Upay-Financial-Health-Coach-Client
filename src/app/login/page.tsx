import { Metadata } from "next";
import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
  title: "Sign In — Upay Financial Coach",
  description:
    "Sign in to Upay Financial Coach to access your real-time cash flow, AI intelligence, and savings goals.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 ambient-bg relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none" />

      <main className="w-full max-w-md relative z-10">
        <LoginForm />
      </main>
    </div>
  );
}
