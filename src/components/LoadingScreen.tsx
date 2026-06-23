"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DISPLAY_MS = 1800;

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    let mounted = true;

    const tick = () => {
      setProgress((prev) => {
        if (prev >= 85) return 85;
        return Math.min(prev + Math.random() * 14, 85);
      });
    };

    const interval = setInterval(tick, 200);

    const finish = () => {
      clearInterval(interval);
      if (!mounted) return;
      setProgress(100);
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        if (mounted) setIsLoading(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      mounted = false;
      clearInterval(interval);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <>
      {children}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          >
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              src="/siklab-logo.png"
              alt="Siklab"
              className="h-10 md:h-12 w-auto brightness-0 dark:invert mb-10"
            />

            <div className="w-48 md:w-56 h-[2px] bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
