import { Metadata } from "next";
import { SavingsPlanHero } from "./_components/savings-plan-hero";
import { SavingsMilestoneStepper } from "./_components/savings-milestone-stepper";
import { SavingsTrajectoryChart } from "./_components/savings-trajectory-chart";
import { SavingsPlanRationale } from "./_components/savings-plan-rationale";

export const metadata: Metadata = {
  title: "Savings Plan | Upay Financial Coach",
  description: "Structured 4-month emergency cushion roadmap calibrated with AI precision.",
};

export default function SavingsPlanPage() {
  return (
    <div className="space-y-7">
      {/* Header Title Section */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
          <span>Goals</span>
          <span className="text-outline">/</span>
          <span className="text-primary font-medium">Savings Plan</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
          Savings Plan
        </h1>
        <p className="text-sm text-on-surface-variant mt-0.5">
          Structured 4-month roadmap towards complete financial resilience in Bangladesh.
        </p>
      </div>

      {/* Hero Key Goal Card */}
      <SavingsPlanHero />

      {/* Visual Milestone Stepper */}
      <SavingsMilestoneStepper />

      {/* Trajectory Chart & AI Rationale Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        <div className="lg:col-span-7">
          <SavingsTrajectoryChart />
        </div>
        <div className="lg:col-span-5">
          <SavingsPlanRationale />
        </div>
      </div>
    </div>
  );
}
