import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OnboardingWizard } from "./_components/onboarding-wizard";

export const metadata = {
  title: "Onboarding & Financial Assessment — Upay Financial Coach",
  description:
    "Complete your 2-minute personal financial assessment. Receive an instant health score and customized BDT savings blueprint.",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full flex flex-col items-center justify-center">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
          }
        >
          <OnboardingWizard />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
