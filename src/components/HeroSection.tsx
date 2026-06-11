"use client";

import { motion } from "framer-motion";

const breatheTransition = {
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "78vh", minHeight: "520px" }}
    >
      <motion.img
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        src="/hero.png"
        alt="Illustration of a farmer with mountains and an ornate winding road"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
            scale: [1, 1.012, 1],
            filter: [
              "drop-shadow(0 0 0px transparent)",
              "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
              "drop-shadow(0 0 0px transparent)",
            ],
          }}
          whileHover={{ scale: 1.03 }}
          transition={{
            opacity: { duration: 1.2, delay: 0.6, ease: "easeOut" },
            y: { ...breatheTransition, delay: 1.8 },
            scale: { ...breatheTransition, delay: 1.8, type: "tween" },
            filter: { ...breatheTransition, delay: 1.8 },
          }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground max-w-4xl cursor-default"
        >
          Leaders of <em className="text-primary not-italic">Tomorrow</em>,
          <br className="hidden md:block" /> partners of today.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
          className="mt-6 text-xs md:text-sm uppercase tracking-[0.35em] text-foreground/60"
        >
          Siklab Philippines
        </motion.p>
      </div>
    </section>
  );
}
