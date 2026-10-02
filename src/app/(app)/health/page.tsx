import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, Bot } from "lucide-react";
import { HealthHeroGauge } from "./_components/health-hero-gauge";
import { HealthPillarsGrid } from "./_components/health-pillars-grid";
import { HealthTrendChart } from "./_components/health-trend-chart";
import { HealthRecommendations } from "./_components/health-recommendations";
import { HealthPeerBenchmarks } from "./_components/health-peer-benchmarks";

export const metadata: Metadata = {
  title: "Financial Health | Upay Financial Coach",
  description: "Understand the strength of your financial habits with real-time 5-pillar wellness scoring.",
};

export default function FinancialHealthPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs & Header Controls Cluster */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-1">
            <span>Intelligence</span>
            <ChevronRight className="w-3.5 h-3.5 text-outline" />
            <span className="text-primary font-medium">Financial Health</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface">
            Financial Health
          </h1>
          <p className="text-sm text-on-surface-variant mt-0.5">
            Understand the holistic strength of your personal finance habits.
          </p>
        </div>

        {/* Controls Cluster */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          {/* Timeframe pill */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-xl border border-white/80 text-xs font-semibold text-on-surface shadow-xs">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Last 30 Days</span>
          </div>

          {/* Ask Coach CTA */}
          <Link
            href="/ai-coach?prompt=Evaluate+my+financial+health+breakdown+and+recommend+quick+wins"
            className="h-9 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
          >
            <Bot className="w-4 h-4" />
            <span>Ask Coach About Health</span>
          </Link>
        </div>
      </div>

      {/* Prominent Hero Section */}
      <HealthHeroGauge
        score={78}
        tier="Good"
        percentile={18}
        lastUpdated="Today"
      />

      {/* Four Visual Pillar Scores */}
      <HealthPillarsGrid />

      {/* Historical Trend Chart Card */}
      <HealthTrendChart />

      {/* How to Improve Section */}
      <HealthRecommendations />

      {/* Regional Peer Benchmarks & Verification Footer */}
      <HealthPeerBenchmarks />
    </div>
  );
}
