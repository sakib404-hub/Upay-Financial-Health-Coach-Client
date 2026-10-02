import { Metadata } from "next";
import { AiCoachBanner } from "./_components/ai-coach-banner";
import { SummaryStatCards } from "./_components/summary-stat-cards";
import { CashflowAnalytics } from "./_components/cashflow-analytics";
import { HealthScorecard } from "./_components/health-scorecard";
import { SpendingBreakdown } from "./_components/spending-breakdown";
import { GoalsTracker } from "./_components/goals-tracker";
import { RecentTransactions } from "./_components/recent-transactions";

export const metadata: Metadata = {
  title: "Dashboard — Upay Financial Coach",
  description:
    "Executive personal finance overview for Bangladesh. Real-time cash flow, AI observations, goal progress, and transaction intelligence.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-7">
      {/* 1. Proactive AI Coach Observation Banner */}
      <AiCoachBanner />

      {/* 2. Key Financial Summary KPI Cards (4 columns) */}
      <SummaryStatCards />

      {/* 3. Main Analytics Section: Cash Flow Chart + Financial Health Score (2/3 + 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CashflowAnalytics />
        <HealthScorecard />
      </div>

      {/* 4. Bottom Grid: Spending Breakdown & Goals (1/2) + Recent Transactions (1/2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          <SpendingBreakdown />
          <GoalsTracker />
        </div>
        <RecentTransactions />
      </div>
    </div>
  );
}
