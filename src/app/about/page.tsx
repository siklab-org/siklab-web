"use client";

import { motion, useReducedMotion } from "framer-motion";
import { awards } from "@/src/data/awards";
import { useMemo, useRef } from "react";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.9, ease } },
};

const scaleIn = {
  initial: { scale: 0.92, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7, ease } },
};

const MaskReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", y: 12 }}
      animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
};

function AwardsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const orbitRadius = useMemo(() => {
    if (size.width === 0 || size.height === 0) return 0;
    const minDim = Math.min(size.width, size.height);
    return Math.max(160, Math.min(320, minDim * 0.42));
  }, [size.width, size.height]);

  const items = useMemo(() => awards.slice(0, 14), []);

  if (reduce || orbitRadius === 0 || items.length === 0) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {items.map((award) => (
          <motion.div
            key={award.title}
            variants={fadeUp}
            className="group flex flex-col items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent p-5 text-center shadow-sm shadow-black/5 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_10px_40px_-16px_rgba(59,130,246,0.35)]"
          >
            <div className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
              <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-100" />
              <img
                src={award.imgSrc}
                alt={award.organization}
                className="relative z-10 h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-3 font-display text-xs font-semibold leading-snug text-foreground sm:text-sm">
              {award.title}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground/70 sm:text-[10px]">
              {award.organization}
            </p>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[680px] sm:max-w-[760px]"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <span
          className="block h-[88%] w-[88%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <span className="absolute h-[60%] w-[60%] rounded-full border border-primary/10" />
      </motion.div>

      <motion.div
        className="absolute inset-0 will-change-transform [animation-play-state:running] group-hover:[animation-play-state:paused]"
        initial={{ rotate: -4, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        animate={{
          rotate: [0, 360],
        }}
        style={{
          animationDuration: "48s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((award, i) => {
          const angle = (360 / items.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = orbitRadius * Math.cos(rad);
          const y = orbitRadius * Math.sin(rad);

          return (
            <motion.div
              key={award.title}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-foreground/10 bg-background/80 px-3 py-3 text-center shadow-sm shadow-black/5 backdrop-blur-md will-change-transform sm:px-4 sm:py-4"
              style={{
                x,
                y,
                rotate: angle,
                transformOrigin: "center",
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
                <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 blur-lg transition-opacity duration-300 ease-out group-hover:opacity-100" />
                <img
                  src={award.imgSrc}
                  alt={award.organization}
                  className="relative z-10 h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-2 max-w-[140px] font-display text-[10px] font-semibold leading-tight text-foreground sm:text-xs">
                {award.title}
              </p>
              <p className="mt-0.5 max-w-[140px] text-[8px] uppercase tracking-[0.16em] text-muted-foreground/70 sm:text-[9px]">
                {award.organization}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative flex flex-col items-center justify-center rounded-full border border-foreground/10 bg-background/90 px-6 py-6 text-center shadow-sm shadow-black/5 backdrop-blur-md sm:px-8 sm:py-8">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/5 blur-2xl" />
          <p className="text-[10px] uppercase tracking-[0.32em] text-primary/80 sm:text-xs">
            Recognition
          </p>
          <h3 className="mt-2 font-display text-lg tracking-tight sm:text-xl md:text-2xl">
            Awards & Fellowships
          </h3>
          <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-muted-foreground sm:max-w-[240px] sm:text-sm">
            Global and regional institutions have recognized Siklab for its work
            in youth leadership, social innovation, and development across Asia.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Design Read (design-taste-frontend):
// Reading this as: org/about landing for institutional partners + youth audiences,
// with a premium professional language, leaning toward editorial-modern
// (Linear-adjacent). Dials: DESIGN_VARIANCE 7 / MOTION_INTENSITY 6 / VISUAL_DENSITY 3.

export default function About() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease }}
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 sm:h-[560px] sm:w-[560px]"
        >
          <span
            className="block h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 55%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-sm uppercase tracking-[0.32em] text-primary/80"
          >
            About
          </motion.p>
          <MaskReveal delay={0.05}>
            <h1 className="font-display text-5xl tracking-tight leading-[1.05] sm:text-6xl md:text-7xl">
              A development organization rooted in{" "}
              <span className="text-primary">Asia</span>.
            </h1>
          </MaskReveal>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            Siklab partners with governments, multilateral institutions, the
            private sector, and grassroots communities to design and deliver
            programs that develop the next generation of leaders. We work where
            policy meets practice — translating ambition into measurable change.
          </motion.p>
        </motion.div>
      </section>

      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl text-foreground">Mission</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
              To catalyze young leaders across Asia through experiential learning,
              international exchange, and entrepreneurial action.
            </motion.p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl text-foreground">Founded</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
              Siklab was conceptualized in the United Nations General Assembly Hall in New York
              in 2016, when the Sustainable Development Goals were newly minted. We believe in
              empowering the generations that will benefit most from achieving the goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            className="mb-12 md:mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-sm uppercase tracking-[0.32em] text-primary/80"
            >
              Recognition
            </motion.p>
            <MaskReveal delay={0.05}>
              <h2 className="font-display text-4xl tracking-tight leading-[1.08] sm:text-5xl md:text-6xl">
                Awards &amp; Fellowships
              </h2>
            </MaskReveal>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Siklab has been recognized by global and regional institutions for
              its work in youth leadership, social innovation, and development
              across Asia.
            </motion.p>
          </motion.div>

          <AwardsOrbit />
        </div>
      </section>
    </>
  );
}
