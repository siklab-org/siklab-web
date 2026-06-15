"use client";

import { motion } from "framer-motion";
import { workAreas } from "@/src/data/areas";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

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
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {workAreas.map((area) => (
            <motion.div
              key={area.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
              className="group relative rounded-2xl border border-foreground/10 bg-gradient-to-br from-transparent to-foreground/[0.02] p-6 md:p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/20 hover:from-primary/[0.02] before:absolute before:inset-y-4 before:left-0 before:w-0.5 before:rounded-r before:bg-primary before:scale-y-0 before:transition-transform before:duration-300 group-hover:before:scale-y-100"
            >
              <motion.div variants={fadeUp} className="flex items-start justify-between mb-3">
                <h2 className="font-display text-2xl text-foreground">{area.title}</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mb-4">
                {area.description}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5">
                {area.subareas.map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] uppercase tracking-[0.08em] px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground/70 border border-foreground/10"
                  >
                    {sub}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
