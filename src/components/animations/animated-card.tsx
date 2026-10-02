"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "lift" | "glow" | "scale" | "subtle" | "none";
  enableTap?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = "lift",
  enableTap = true,
  ...props
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  const getHoverProps = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          y: -6,
          boxShadow: "0 20px 32px -4px rgba(0, 105, 72, 0.12), 0 8px 16px -2px rgba(19, 27, 46, 0.06)",
        };
      case "glow":
        return {
          y: -4,
          boxShadow: "0 0 25px 2px rgba(0, 105, 72, 0.2), 0 12px 24px -4px rgba(19, 27, 46, 0.08)",
        };
      case "scale":
        return {
          scale: 1.025,
          boxShadow: "0 16px 28px -4px rgba(0, 105, 72, 0.1)",
        };
      case "subtle":
        return {
          y: -3,
          boxShadow: "0 10px 20px -2px rgba(19, 27, 46, 0.06)",
        };
      case "none":
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      }}
      whileHover={getHoverProps()}
      whileTap={enableTap ? { scale: 0.98 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
