"use client";

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

function ScrollController() {
  const lenis = useLenis();
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position for "Back to Top" button
  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      setShowScrollTop(lenis.scroll > 350);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  // Fallback scroll listener if lenis isn't attached yet
  useEffect(() => {
    const handleNativeScroll = () => {
      if (!lenis) {
        setShowScrollTop(window.scrollY > 350);
      }
    };

    window.addEventListener("scroll", handleNativeScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleNativeScroll);
  }, [lenis]);

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  // Intercept anchor link clicks for smooth animated navigation with navbar offset
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Match anchors like '#features' or '/#features' on the current root page
      const isHash = href.startsWith("#");
      const isRootHash = href.startsWith("/#") && (pathname === "/" || pathname === "");

      if (isHash || isRootHash) {
        const hash = isHash ? href : href.slice(1);
        const targetId = hash.replace("#", "");
        if (!targetId) return;

        const elem = document.getElementById(targetId);
        if (elem) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(elem, {
              offset: -88, // 88px offset to clear the sticky glass navbar
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            const y = elem.getBoundingClientRect().top + window.scrollY - 88;
            window.scrollTo({ top: y, behavior: "smooth" });
          }

          window.history.pushState(null, "", hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis, pathname]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          aria-label="Scroll back to top"
          title="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-card-elevated hover:bg-white text-primary border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-transform group flex items-center gap-2"
        >
          <ArrowUp className="w-5 h-5 text-primary group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-xs font-bold text-on-surface pr-1 hidden sm:inline">Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // If user prefers reduced motion, disable inertial scrolling for accessibility
  if (prefersReducedMotion) {
    return (
      <>
        {children}
        <ScrollController />
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
      }}
    >
      {children}
      <ScrollController />
    </ReactLenis>
  );
}
