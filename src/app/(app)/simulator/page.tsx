import { Metadata } from "next";
import { SimulatorWorkspace } from "./_components/simulator-workspace";

export const metadata: Metadata = {
  title: "What-if Simulator | Upay Financial Coach",
  description: "Model interactive scenarios to see how budgeting decisions accelerate your financial goals.",
};

export default function WhatIfSimulatorPage() {
  return <SimulatorWorkspace />;
}
