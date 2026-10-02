"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pastProjects, categories } from "@/src/data/past-projects";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const scaleIn = {
  initial: { scale: 0.92, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7, ease } },
};

export default function PastProjects() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-20 pb-8 min-h-[52dvh] flex items-center">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-amber-600/5 blur-[100px]" />
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-amber-800/80 shadow-sm backdrop-blur dark:bg-amber-950/30 dark:text-amber-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Past Projects
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05]">
            Archived initiatives.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Flagship programs that have completed their run— their impact continues through the communities they built.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-20 md:space-y-28">
          {categories.map((category) => {
            const projects = pastProjects.filter((p) => p.category === category.id);
            if (projects.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
              >
                <motion.div variants={fadeUp} className="mb-8 md:mb-10">
                  <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-amber-700/70 mb-3">
                    {category.label}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.08] text-foreground">
                    {category.label}
                  </h2>
                  <p className="mt-2 text-base text-muted-foreground max-w-xl leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  {projects.map((project) => (
                    <Link
                      key={project.name}
                      href={`/past-projects/${project.slug}`}
                      className="block"
                    >
                      <motion.article
                        variants={fadeUp}
                        className="group relative cursor-pointer rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(217,119,6,0.12)] hover:border-amber-600/25 hover:from-amber-500/[0.04] flex flex-col h-full"
                      >
                        {project.impacts && (
                          <div aria-hidden className="absolute top-0 right-0 p-6 md:p-8 text-right opacity-[0.03] font-display text-6xl md:text-7xl font-bold leading-none text-amber-700 select-none pointer-events-none">
                            {project.impacts[0]?.value}
                          </div>
                        )}

                        {project.projectLogo && (
                          <div className="flex items-center mb-5">
                            <div className="h-20 md:h-24 flex items-center justify-center flex-shrink-0">
                              <img
                                src={project.projectLogo}
                                alt={`${project.name} logo`}
                                className="h-full w-auto object-contain max-w-[160px] md:max-w-[192px]"
                                decoding="async"
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="text-[10px] uppercase tracking-[0.2em] text-amber-700/60 font-mono"
                            dangerouslySetInnerHTML={{ __html: project.period }}
                          />
                          <span className="text-[9px] uppercase tracking-widest px-2 py-1 rounded-full bg-amber-100/60 text-amber-800/70 border border-amber-200/60">
                            Completed
                          </span>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl tracking-tighter leading-[1.08] text-foreground mb-1 group-hover:text-amber-700 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-amber-700/60 mb-3">
                          {project.subtitle}
                        </p>
                        <p
                          className="text-base text-muted-foreground leading-relaxed mb-5 max-w-prose"
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />

                        {project.impacts && (
                          <div className="grid grid-cols-2 gap-3 mb-5">
                            {project.impacts.map((imp) => (
                              <div
                                key={imp.label}
                                className="rounded-xl bg-amber-50/60 border border-amber-200/50 p-3 md:p-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_rgba(217,119,6,0.12)] hover:border-amber-300/60"
                              >
                                <p className="font-display text-lg md:text-xl font-semibold text-amber-800">
                                  {imp.value}
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.1em] text-amber-700/60 mt-0.5">
                                  {imp.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground/70 border border-foreground/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="mt-auto pt-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-amber-700/50 group-hover:text-amber-700 transition-colors">
                          View details
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </motion.article>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
