"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";

function WordReveal({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="inline-block overflow-hidden leading-[1.1]">
      <motion.span
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 20 + Math.random() * 60,
  y: 40 + Math.random() * 40,
  size: 1.5 + Math.random() * 4,
  driftX: (Math.random() - 0.5) * 50,
  driftY: -(20 + Math.random() * 60),
  duration: 1.2 + Math.random() * 1.8,
  delay: i * 0.08,
  color:
    i % 4 === 0
      ? "rgba(217,119,6,0.8)"
      : i % 4 === 1
        ? "rgba(234,88,12,0.8)"
        : i % 4 === 2
          ? "rgba(251,191,36,0.7)"
          : "rgba(249,115,22,0.7)",
  shadowColor:
    i % 2 === 0
      ? "rgba(217,119,6,0.4)"
      : "rgba(234,88,12,0.3)",
}));

function EmberParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [0, p.driftY],
            x: [0, p.driftX],
            scale: [0.2, 1.1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
            times: [0, 0.3, 1],
          }}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.shadowColor}`,
          }}
        />
      ))}
    </div>
  );
}

const glowBreathing = [
  "drop-shadow(0 0 4px rgba(217,119,6,0))",
  "drop-shadow(0 0 10px rgba(217,119,6,0.18)) drop-shadow(0 0 25px rgba(234,88,12,0.06))",
  "drop-shadow(0 0 4px rgba(217,119,6,0))",
];

const glowHover =
  "drop-shadow(0 0 14px rgba(217,119,6,0.3)) drop-shadow(0 0 35px rgba(234,88,12,0.12))";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [isBreathing, setIsBreathing] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isBreathing) return;
    controls.start({
      filter: glowBreathing,
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.8,
      },
    });
  }, [isBreathing, controls]);

  const handleGlowEnter = () => {
    setIsBreathing(false);
    controls.start({
      filter: glowHover,
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  const handleGlowLeave = () => {
    controls.start({
      filter: glowBreathing,
      transition: { duration: 0.5, ease: "easeOut" },
    }).then(() => setIsBreathing(true));
  };

  const breathe = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1.8,
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden cursor-default"
      style={{ height: "78vh", minHeight: "520px" }}
    >
      <motion.img
        ref={imgRef}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        src="/hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />

      {imageLoaded && (
        <div key="text-content" className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0, -4, 0],
            }}
            transition={{
              opacity: { duration: 1.2, delay: 0.6, ease: "easeOut" },
              y: { ...breathe, ease: [0.33, 1, 0.68, 1] },
            }}
            className="group relative"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground max-w-4xl">
              <WordReveal delay={0.6}>Leaders of</WordReveal>{" "}
              <span className="relative inline-block">
                <motion.span
                  animate={{ opacity: [0.08, 0.25, 0.08], scale: [1, 1.2, 1] }}
                  transition={breathe}
                  className="absolute -inset-x-16 -inset-y-8 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(217,119,6,0.18) 0%, rgba(234,88,12,0.08) 40%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <motion.em
                  animate={controls}
                  onMouseEnter={handleGlowEnter}
                  onMouseLeave={handleGlowLeave}
                  whileHover={{
                    backgroundPosition: "0% 0%",
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }}
                  className="not-italic bg-clip-text text-transparent group-hover:tracking-[0.02em] transition-[letter-spacing] duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #fbbf24 0%, #fb923c 25%, #ef4444 50%, #f59e0b 50%, #f97316 75%, #c2410c 100%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "100% 0%",
                  }}
                >
                  Tomorrow
                </motion.em>
              </span>
              ,<br className="hidden md:block" />{" "}
              <WordReveal delay={1.0}>partners of today.</WordReveal>
            </h1>

            <AnimatePresence>
              {isHovered && (
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

            <motion.div
              animate={{
                width: ["55%", "80%", "55%"],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={breathe}
              className="mx-auto mt-3 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400/70 transition-all duration-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
            className="mt-6 text-xs md:text-sm uppercase tracking-[0.35em] text-foreground/60"
          >
            Siklab Philippines
          </motion.p>
        </div>
      )}
    </section>
  );
}
