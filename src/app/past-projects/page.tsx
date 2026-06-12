"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const archive = [
  {
    name: "Hack the Future",
    subtitle: "Young Leaders for Asia Challenge",
    description:
      "A regional youth engagement and innovation challenge bridging digital gaps across Asia. The program mobilized young leaders to design technology-driven solutions addressing pressing social challenges, fostering cross-border collaboration and digital literacy among emerging innovators.",
    period: "2022 &mdash; 2024",
    tags: ["Innovation Challenge", "Regional", "Digital Literacy"],
  },
  {
    name: "Pathways Fellowship",
    subtitle: "10-Week Venture Launch Intensive",
    description:
      "An intensive fellowship exposing emerging founders to industry veterans and the principles of Industry 4.0. Over ten weeks, participants developed venture concepts, received mentorship from seasoned entrepreneurs, and built the foundational skills needed to launch and scale technology-driven enterprises.",
    period: "2023 &mdash; 2024",
    tags: ["Fellowship", "Mentorship", "Industry 4.0"],
  },
];

export default function PastProjects() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            Past Projects
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl tracking-tight leading-[1.08]">
            Archived initiatives.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Flagship programs that have completed their run &mdash; their impact continues through the communities they built.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="relative">
          <div aria-hidden className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-foreground/10" />

          <div className="space-y-20 md:space-y-28">
            {archive.map((item, i) => (
              <motion.article
                key={item.name}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
                className="relative pl-16 md:pl-24"
              >
                <div
                  aria-hidden
                  className="absolute left-3 md:left-5 top-3 w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-foreground/20 bg-background flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-foreground/30" />
                </div>

                <div className="max-w-3xl">
                  <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-mono" dangerouslySetInnerHTML={{ __html: item.period }} />
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground border border-foreground/10">
                      Completed
                    </span>
                  </motion.div>

                  <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl text-foreground mb-1">
                    {item.name}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
                    {item.subtitle}
                  </motion.p>
                  <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />

                  <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 text-muted-foreground border border-foreground/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
