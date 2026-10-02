import { Metadata } from "next";
import { GoalsWorkspace } from "./_components/goals-workspace";

export const metadata: Metadata = {
  title: "Savings Goals | Upay Financial Coach",
  description: "Turn your plans into achievable financial goals with precision AI guidance and automated sinking funds.",
};

export default function SavingsGoalsPage() {
  return <GoalsWorkspace />;
}
