import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "./_components/about-hero";
import { HowItWorksDetail } from "./_components/how-it-works-detail";
import { FaqSection } from "./_components/faq-section";
import { CtaBanner } from "../_components/cta-banner";

export const metadata = {
  title: "About & How It Works — Upay Financial Coach",
  description:
    "Discover how Upay Financial Coach transforms raw Bangladeshi financial data into clear, proactive money coaching with bank-grade security.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28 w-full">
        {/* 1. Hero & Philosophy */}
        <AboutHero />

        {/* 2. Detailed Technical & Conceptual Architecture */}
        <HowItWorksDetail />

        {/* 3. Frequently Asked Questions */}
        <FaqSection />

        {/* 4. Final CTA */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
