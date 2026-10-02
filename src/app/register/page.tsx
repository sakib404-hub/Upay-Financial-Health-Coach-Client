import { Metadata } from "next";
import { RegisterForm } from "./_components/register-form";

export const metadata: Metadata = {
  title: "Register — Upay Financial Coach",
  description:
    "Create your Upay Financial Coach account to start analyzing spending, automating savings goals, and receiving 24/7 AI financial guidance.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 ambient-bg relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-fixed/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none" />

      <main className="w-full max-w-md relative z-10">
        <RegisterForm />
      </main>
    </div>
  );
}
