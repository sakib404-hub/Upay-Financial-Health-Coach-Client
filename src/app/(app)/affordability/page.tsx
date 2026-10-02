import { Metadata } from "next";
import { AffordabilityWorkspace } from "./_components/affordability-workspace";

export const metadata: Metadata = {
  title: "Affordability Assessment | Upay Financial Coach",
  description: "Evaluate large planned purchases before you spend to ensure your emergency buffer remains resilient.",
};

export default function AffordabilityPage() {
  return <AffordabilityWorkspace />;
}
