"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const partnerLogos: Record<string, string> = {
  "United Nations": "united-nations.png",
  "USAID": "usaid.png",
  "European Union": "european-union.png",
  "ASEAN": "asean.png",
  "ING": "ing.png",
  "UNICEF": "unicef.png",
  "UNDP": "undp.png",
  "National Youth Commission": "nyc.png",
  "IFRC": "ifrc.png",
  "United Nations Foundation": "un-foundation.png",
  "Enactus": "enactus.png",
  "World Scouts": "world-scouts.png",
  "Duke of Edinburgh": "duke-of-edinburgh.png",
  "The Asia Foundation": "the-asia-foundation.png",
  "RTI": "rti.png",
  "Resolution Project": "resolution-project.png",
  "Global Youth Mobilization": "global-youth-mobilization.png",
  "World YMCA": "world-ymca.png",
};

export default function Partners() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            Partners
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl tracking-tight">
            In good company.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            We work alongside multilateral institutions, governments, foundations, and
            industry leaders to deliver programs at scale across Asia.
          </motion.p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-foreground/10"
        >
          {Object.entries(partnerLogos).map(([name, file]) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="border-b border-r border-foreground/10 p-8"
            >
              <img
                src={`/partners/${file}`}
                alt={`${name} logo`}
                className="object-contain max-h-16 md:max-h-20 w-auto mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
