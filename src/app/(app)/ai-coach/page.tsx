import { Suspense } from "react";
import { Metadata } from "next";
import { AiCoachWorkspace } from "./_components/ai-coach-workspace";
import AiCoachLoading from "./loading";

export const metadata: Metadata = {
  title: "AI Financial Coach — Upay",
  description:
    "24/7 conversational personal financial intelligence for Bangladesh. Understand your spending, plan budgets, and evaluate purchase affordability.",
};

export default function AiCoachPage() {
  return (
    <Suspense fallback={<AiCoachLoading />}>
      <AiCoachWorkspace />
    </Suspense>
  );
}
