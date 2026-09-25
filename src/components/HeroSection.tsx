"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const hoverQuery = "(hover: hover) and (pointer: fine)";

function subscribeHover(callback: () => void) {
  const mql = window.matchMedia(hoverQuery);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 20 + Math.random() * 60,
  y: 30 + Math.random() * 60,
  size: 1.5 + Math.random() * 3.5,
  driftX: (Math.random() - 0.5) * 60,
  driftY: -(30 + Math.random() * 70),
  duration: 1.6 + Math.random() * 1.6,
  delay: i * 0.07,
  color:
    i % 4 === 0
      ? "rgba(217,119,6,0.85)"
      : i % 4 === 1
        ? "rgba(234,88,12,0.85)"
        : i % 4 === 2
          ? "rgba(251,191,36,0.8)"
          : "rgba(249,115,22,0.8)",
  shadowColor:
    i % 2 === 0 ? "rgba(217,119,6,0.45)" : "rgba(234,88,12,0.35)",
}));

function MaskReveal({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className="inline-block will-change-transform">
      <motion.span
        initial={{ clipPath: "inset(0 0 100% 0)", y: 16 }}
        animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 + index * 0.09, ease: EASE_OUT }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function EmberParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.shadowColor}`,
              animation: `ember-rise ${p.duration}s ease-out ${p.delay}s infinite`,
              willChange: "transform, opacity",
              "--drift-x": `${p.driftX}px`,
              "--drift-y": `${p.driftY}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const canHover = useSyncExternalStore(
    subscribeHover,
    () => window.matchMedia(hoverQuery).matches,
    () => false,
  );
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden cursor-default"
      style={{ height: "65vh", minHeight: "480px" }}
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduce ? 0.3 : 1.6, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 animate-kenburns will-change-transform">
          <Image
            src="/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover select-none pointer-events-none"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />

      {imageLoaded && (
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center pt-8 md:pt-12 items-center text-center">
          <span
            aria-hidden
            className="animate-spark mb-5 inline-block h-2 w-2"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              backgroundColor: "#fbbf24",
            }}
          />

          <div className="group relative">
            <AnimatePresence>
              {canHover && isHovered && !reduce && (
                <motion.div
                  key="embers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <EmberParticles />
                </motion.div>
              )}
            </AnimatePresence>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground max-w-4xl">
              <span className="inline-flex items-baseline flex-wrap gap-x-[0.15em] justify-center">
                <MaskReveal index={0}>Tomorrow&apos;s way of</MaskReveal>
                <span className="basis-full h-0" aria-hidden />
                <MaskReveal index={1}>doing things,</MaskReveal>

                <span className="group/em relative inline-flex items-baseline">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-20 -inset-y-10"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9, delay: 0.45, ease: EASE_OUT }}
                      className="animate-breathe block h-full w-full will-change-transform"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(217,119,6,0.24) 0%, rgba(234,88,12,0.1) 45%, transparent 72%)",
                        filter: "blur(40px)",
                      }}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover/em:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(251,191,36,0.32) 0%, rgba(234,88,12,0.14) 50%, transparent 78%)",
                        filter: "blur(28px)",
                      }}
                    />
                  </span>
                  <MaskReveal index={2}>
                    <em className="hero-flame not-italic">
                      today<span className="text-amber-600/80">.</span>
                    </em>
                  </MaskReveal>
                </span>
              </span>
            </h1>

            <div className="mx-auto mt-4 h-px w-[70%]">
              <span className="animate-breathe-line block h-full w-full rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent will-change-transform" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}