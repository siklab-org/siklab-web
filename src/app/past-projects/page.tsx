"use client";

import { motion } from "framer-motion";
import { pastProjects, categories } from "@/src/data/past-projects";

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
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
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
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-amber-700/70 mb-3">
                    {category.label}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">
                    {category.label}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground/70 max-w-2xl">
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  {projects.map((project) => (
                    <motion.article
                      key={project.name}
                      variants={fadeUp}
                      className="group relative rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-8px_rgba(217,119,6,0.12)] hover:border-amber-600/25 hover:from-amber-500/[0.04]"
                    >
                      {project.impacts && (
                        <div aria-hidden className="absolute top-0 right-0 p-6 md:p-8 text-right opacity-[0.03] font-display text-6xl md:text-7xl font-bold leading-none text-amber-700 select-none pointer-events-none">
                          {project.impacts[0]?.value}
                        </div>
                      )}

                      {project.projectLogo && (
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-100/80 border border-amber-200/60 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img
                              src={project.projectLogo}
                              alt={`${project.name} logo`}
                              className="w-full h-full object-contain p-1.5"
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

                      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                        {project.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.15em] text-amber-700/60 mb-3">
                        {project.subtitle}
                      </p>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed mb-5"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />

                      {project.logos && project.logos.length > 0 && (
                        <div className="mb-5">
                          <span className="block text-[9px] uppercase tracking-widest text-muted-foreground/50 mb-3">
                            Partners
                          </span>
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {project.logos.map((logo) => (
                              <div
                                key={logo.src}
                                className="h-8 md:h-10 flex items-center"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.alt}
                                  className="max-h-full w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

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
                    </motion.article>
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
