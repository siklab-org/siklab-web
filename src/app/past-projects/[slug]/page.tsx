"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { pastProjects } from "@/src/data/past-projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const scaleIn = {
  initial: { scale: 0.92, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7, ease } },
};

export default function PastProjectPage() {
  const params = useParams();
  const project = pastProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl tracking-tight leading-[1.08] mb-6">
            Project not found
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/past-projects"
              className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Past Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Link
              href="/past-projects"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground/60 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Past Projects
            </Link>
          </motion.div>

          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <motion.span
                variants={fadeUp}
                className="inline-block text-[10px] uppercase tracking-[0.3em] text-amber-700/70 mb-4"
              >
                {project.category}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08]"
              >
                {project.name}
              </motion.h1>
            </div>

            {project.projectLogo && (
              <motion.div variants={fadeUp} className="flex-shrink-0">
                <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
                  <img
                    src={project.projectLogo}
                    alt={`${project.name} logo`}
                    className="h-full w-auto object-contain max-w-[160px] md:max-w-[200px] lg:max-w-[260px]"
                    decoding="async"
                  />
                </div>
              </motion.div>
            )}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            {project.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-6">
            <span
              className="text-xs uppercase tracking-[0.2em] text-amber-700/60 font-mono"
              dangerouslySetInnerHTML={{ __html: project.period }}
            />
            <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-100/60 text-amber-800/70 border border-amber-200/60">
              Completed
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/5 text-muted-foreground/70 border border-foreground/10"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {project.logos && project.logos.length > 0 && (
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-foreground/10">
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
                    decoding="async"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      {(() => {
        const images = project.images;
        if (!images || images.length === 0) return null;
        return (
          <>
            <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
                className={
                  images.length === 1
                    ? "max-w-3xl mx-auto"
                    : "grid md:grid-cols-2 gap-4 md:gap-6"
                }
              >
                {images.map((src, i) => (
                  <motion.div
                    key={src}
                    variants={scaleIn}
                    className={
                      images.length > 2 && i === 0
                        ? "md:col-span-2"
                        : ""
                    }
                  >
                    <div className="group relative rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent shadow-lg shadow-black/10">
                      <img
                        src={src}
                        alt={`${project.name} — event photo ${i + 1}`}
                        className="aspect-[4/3] w-full h-full object-cover brightness-[0.92] saturate-[1.15] contrast-[1.12] transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-[1.02]"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : undefined}
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-700/10 group-hover:ring-amber-600/25 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            <div className="border-t border-foreground/10" />
          </>
        );
      })()}

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[10px] uppercase tracking-[0.3em] text-amber-700/70 mb-4"
          >
            About this project
          </motion.span>
          <motion.div
            variants={fadeUp}
            className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </motion.div>
      </section>

      {project.impacts && project.impacts.length > 0 && (
        <>
          <div className="border-t border-foreground/10" />
          <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.span
                variants={fadeUp}
                className="block text-[10px] uppercase tracking-[0.3em] text-amber-700/70 mb-6"
              >
                Impact
              </motion.span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {project.impacts.map((imp) => (
                  <motion.div
                    key={imp.label}
                    variants={scaleIn}
                    className="rounded-xl bg-amber-50/60 border border-amber-200/50 p-4 md:p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_rgba(217,119,6,0.12)] hover:border-amber-300/60"
                  >
                    <p className="font-display text-xl md:text-2xl font-semibold text-amber-800">
                      {imp.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-amber-700/60 mt-1">
                      {imp.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </>
      )}

      {project.articles && project.articles.length > 0 && (
        <>
          <div className="border-t border-foreground/10" />
          <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.span
                variants={fadeUp}
                className="block text-[10px] uppercase tracking-[0.3em] text-amber-700/70 mb-6"
              >
                Media & Coverage
              </motion.span>
              <motion.div variants={fadeUp} className="space-y-4">
                {project.articles.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-4px_rgba(217,119,6,0.12)] hover:border-amber-600/25"
                  >
                    {article.image && (
                      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border border-foreground/10">
                        <img
                          src={article.image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm md:text-base font-medium text-foreground group-hover:text-amber-700 transition-colors line-clamp-2">
                        {article.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-amber-700/60">
                          {article.source}
                        </span>
                        {article.date && (
                          <>
                            <span className="text-[10px] text-foreground/20">·</span>
                            <span className="text-[10px] text-muted-foreground/50">
                              {article.date}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 text-foreground/30 group-hover:text-amber-700 transition-colors" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </section>
        </>
      )}

      <div className="border-t border-foreground/10" />

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/past-projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground/60 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              All Past Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
