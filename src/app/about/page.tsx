"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            About
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl tracking-tight leading-[1.05]">
            A development organization rooted in <em className="text-primary not-italic">Asia</em>.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Siklab partners with governments, multilateral institutions, the private sector,
            and grassroots communities to design and deliver programs that develop the next
            generation of leaders. We work where policy meets practice — translating ambition
            into measurable change.
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
            <motion.h2 variants={fadeUp} className="font-display text-3xl text-foreground">Recognition</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
              Siklab was awarded the Misk 20 Under 30 at the Misk Global Forum in
              Riyadh by the Mohammed Bin Salman (Misk) Foundation.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
