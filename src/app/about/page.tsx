"use client";

import { motion } from "framer-motion";
import { awards } from "@/src/data/awards";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const scaleIn = {
  initial: { scale: 0.92, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7, ease } },
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
          >
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
              Recognition
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4">
              Awards &amp; Fellowships
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl leading-relaxed mb-12 md:mb-16">
              Siklab has been recognized by global and regional institutions for its work in youth
              leadership, social innovation, and development across Asia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
          >
            {awards.map((award) => (
              <motion.div
                key={award.title}
                variants={fadeUp}
                className="group flex items-start gap-4"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 p-2">
                  <img
                    src={award.imgSrc}
                    alt={award.organization}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm md:text-base font-semibold text-foreground leading-snug">
                    {award.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mt-0.5 mb-1.5">
                    {award.organization}
                  </p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
