import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Bot } from "lucide-react";
import { InsightsBehavioralCards } from "./_components/insights-behavioral-cards";
import { InsightsTrajectoryChart } from "./_components/insights-trajectory-chart";
import { InsightsCashDistribution } from "./_components/insights-cash-distribution";
import { InsightsCategoryBudgetBars } from "./_components/insights-category-budget-bars";
import { InsightsAiRecommendations } from "./_components/insights-ai-recommendations";

export const metadata: Metadata = {
  title: "Spending Insights | Upay Financial Coach",
  description: "Understand your financial behavior and discover personalized opportunities to save.",
};

export default function SpendingInsightsPage() {
  return (
    <div className="space-y-8">
      {/* Top Header Cluster */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
            <span>Intelligence</span>
            <span className="text-outline">/</span>
            <span className="text-primary font-medium">Spending Insights</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface">
            Spending Insights
          </h1>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Understand your financial behavior and discover personalized opportunities to save.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          {/* Date pill */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 text-xs font-semibold text-on-surface shadow-xs">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Last 30 Days</span>
          </div>

          {/* Ask Coach CTA */}
          <Link
            href="/ai-coach?prompt=Analyze+my+spending+insights+and+point+out+anomalies"
            className="h-9 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <Bot className="w-4 h-4" />
            <span>Ask Coach About Insights</span>
          </Link>
        </div>
      </div>

      {/* Section 1: Behavioral Intelligence Patterns (3 Cards) */}
      <InsightsBehavioralCards />

      {/* Section 2: Spending Overview & Trend Visualizations (12-Col Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <InsightsTrajectoryChart />
        </div>
        <div className="lg:col-span-4">
          <InsightsCashDistribution />
        </div>
      </div>

      {/* Section 3: Category Allocation & Budgets */}
      <InsightsCategoryBudgetBars />

      {/* Section 4: AI Recommendations */}
      <InsightsAiRecommendations />
    </div>
  );
}
