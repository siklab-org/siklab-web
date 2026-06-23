"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { pastProjects } from "@/src/data/past-projects";
import { ArrowLeft } from "lucide-react";

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
                    <div className="group relative rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-transparent">
                      <img
                        src={src}
                        alt={`${project.name} — event photo ${i + 1}`}
                        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02]"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : undefined}
                        decoding="async"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
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

      {project.logos && project.logos.length > 0 && (
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
                Partners
              </motion.span>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
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
