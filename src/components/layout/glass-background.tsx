"use client";

import { motion } from "framer-motion";

export function GlassBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#faf8ff]"
    >
      {/* Primary Radial Glow Orbs */}
      <motion.div
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{
          opacity: [0.6, 0.85, 0.6],
          scale: [0.95, 1.05, 0.95],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 105, 72, 0.16) 0%, rgba(133, 248, 196, 0.12) 45%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.08, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] -left-[10%] w-[700px] h-[700px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(43, 105, 84, 0.14) 0%, rgba(176, 240, 214, 0.18) 50%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0.4, scale: 0.9 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.9, 1.04, 0.9],
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(133, 248, 196, 0.22) 0%, rgba(0, 105, 71, 0.08) 55%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-[15%] left-[25%] w-[450px] h-[450px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(218, 226, 253, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Micro-Pattern Mesh Overlay for Depth Refraction */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 105, 72, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
