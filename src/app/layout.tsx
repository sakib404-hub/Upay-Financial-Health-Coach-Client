import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { GlassBackground } from "@/components/layout/glass-background";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Upay Financial Coach — Understand your money. Plan your future.",
  description:
    "AI-powered personal finance intelligence designed for Bangladesh. Understand your spending, plan savings goals, simulate scenarios, and chat with your 24/7 financial coach.",
  keywords: [
    "Upay Financial Coach",
    "Bangladesh personal finance",
    "BDT money management",
    "AI financial coach",
    "smart savings goals",
    "spending insights",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans ambient-bg text-[#131b2e] selection:bg-[#adedd3] selection:text-[#306d58] relative">
        <GlassBackground />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
