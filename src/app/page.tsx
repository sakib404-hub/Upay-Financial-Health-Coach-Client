import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "./_components/hero-section";
import { TrustIndicators } from "./_components/trust-indicators";
import { ProblemSection } from "./_components/problem-section";
import { CorePillars } from "./_components/core-pillars";
import { AiShowcase } from "./_components/ai-showcase";
import { WorkflowSection } from "./_components/workflow-section";
import { FeaturesBento } from "./_components/features-bento";
import { SecurityBadge } from "./_components/security-badge";
import { CtaBanner } from "./_components/cta-banner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28 w-full">
        {/* 1. Hero Section with Interactive Scenario Simulation */}
        <HeroSection />

        {/* 2. Trust Indicators */}
        <TrustIndicators />

        {/* 3. Problem & Transformation Pipeline */}
        <ProblemSection />

        {/* 4. Core Architecture Pillars: Understand, Plan, Ask */}
        <CorePillars />

        {/* 5. Deep-Dive AI Conversation & Affordability Showcase */}
        <AiShowcase />

        {/* 6. End-to-End Financial Intelligence Workflow */}
        <WorkflowSection />

        {/* 7. Comprehensive Capabilities Bento Grid */}
        <FeaturesBento />

        {/* 8. Bank-Grade Security & Regulatory Standard */}
        <SecurityBadge />

        {/* 9. Final Hero Call-to-Action & Interactive Prompt Terminal */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
