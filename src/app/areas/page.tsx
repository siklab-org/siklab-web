"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const areas = [
  { t: "Education", d: "Programs that expand access, quality, and equity in learning." },
  { t: "International Exchange", d: "Bridging youth across borders through global mobility." },
  { t: "Public-Private Partnership", d: "Bringing governments and industry together for shared outcomes." },
  { t: "Development Consulting", d: "Strategy and program design for institutions across Asia." },
  { t: "AI Application", d: "Applied AI literacy and tooling for the next generation." },
  { t: "Social Innovation", d: "Backing ventures that solve real community problems." },
];

export default function Areas() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            Areas of Work
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl tracking-tight">
            Where we focus.
          </motion.h1>
        </motion.div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {areas.map((a) => (
            <motion.div
              key={a.t}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              className="py-8 border-b border-foreground/10"
            >
              <motion.h2 variants={fadeUp} className="font-display text-2xl text-foreground">{a.t}</motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-muted-foreground leading-relaxed">{a.d}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
