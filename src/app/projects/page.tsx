"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const enactusBrand = "lab(74.3059% 21.7583 74.0995)";

const projects = [
  {
    id: "ai-for-asia",
    number: "01",
    name: "AI for Asia",
    tagline: "Unlocking Asia's future with AI.",
    description:
      "A regional capacity-building initiative empowering ASEAN youth with the knowledge, skills, and networks to thrive in an AI-driven future. The 12-week fellowship brings together emerging leaders from across Southeast Asia for intensive learning sessions with world-class speakers, industry leaders, and policy experts &mdash; culminating in capstone projects that apply AI to real-world challenges.",
    url: "https://aiforasean.org",
    logoSrc: "/ai-for-asia-logo.png",
    logoAlt: "AI for Asia logo",
    metrics: [
      { value: "12", label: "Weeks intensive" },
      { value: "11", label: "ASEAN nations" },
      { value: "57", label: "Fellows across Asia" },
      { value: "1", label: "Annual Asia-wide summit" },
    ],
    theme: {
      section: "bg-[#050505] text-white border-white/10",
      number: "text-white/[0.03]",
      borderAccent: "border-l-[#0060ba]/50",
      label: "text-white/50",
      name: "text-white",
      tagline: "text-white/80",
      desc: "text-neutral-400",
      btn: "bg-[#0060ba] text-white hover:bg-[#336fcf]",
      metricCard: "bg-white/5 border-white/10",
      metricValue: "text-white",
      metricLabel: "text-neutral-400",
      metricGradient: "from-[#0060ba]/10 to-[#8561c5]/10",
    },
  },
  {
    id: "enactus",
    number: "02",
    name: "Enactus Philippines",
    tagline: "Entrepreneurial action for others.",
    description:
      "A team-based experiential learning platform that catalyzes students to take entrepreneurial action for their communities. Operating across partner universities nationwide, Enactus Philippines supports student-led ventures spanning tech-enabled innovation, climate-positive enterprise, and community-inclusive projects &mdash; co-built with farmers, MSMEs, and out-of-school youth across Luzon, Visayas, and Mindanao.",
    url: "https://dev.app.enactus.ph",
    logoSrc: "/enactus-logo.webp",
    logoAlt: "Enactus Philippines logo",
    metrics: [
      { value: "33", label: "Countries in network" },
      { value: "1000+", label: "Universities" },
      { value: "60,000+", label: "Filipino students" },
      { value: "15", label: "Years of impact" },
    ],
    theme: {
      section: "bg-transparent",
      number: "text-foreground/[0.02]",
      borderAccent: "border-l-[#EEAD2E]/60",
      label: "text-[#EEAD2E]",
      name: "text-foreground",
      tagline: "text-foreground/85",
      desc: "text-muted-foreground",
      btn: "text-white hover:opacity-90",
      metricCard: "border-[#EEAD2E]/30",
      metricValue: "text-[#1a1a1a]",
      metricLabel: "text-[#EEAD2E]/80",
      metricGradient: "from-[#EEAD2E]/15 to-[#EEAD2E]/5",
      brand: enactusBrand,
    },
  },
];

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6"
          >
            Current Initiatives
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl tracking-tight leading-[1.08]"
          >
            Live. <span className="text-primary">Active.</span> Growing.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            Two flagship initiatives driving youth leadership, innovation, and
            entrepreneurial action across Asia.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      {projects.map((project, i) => (
        <motion.section
          key={project.id}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
          className={`relative overflow-hidden border-t ${project.theme.section} ${i > 0 ? "" : "border-t-0"}`}
        >
          {project.id === "ai-for-asia" && (
            <div
              aria-hidden
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <div
                className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #336fcf 0%, transparent 70%)",
                  filter: "blur(120px)",
                  opacity: 0.25,
                }}
              />
              <div
                className="absolute top-1/3 right-0 w-1/3 h-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #8561c5 0%, transparent 70%)",
                  filter: "blur(100px)",
                  opacity: 0.2,
                }}
              />
              <div
                className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #e39297 0%, transparent 70%)",
                  filter: "blur(120px)",
                  opacity: 0.15,
                }}
              />

              <div
                className="absolute top-0 -right-32 w-96 h-[2px] rotate-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #336fcf, #8561c5, #e39297, transparent)",
                  filter: "blur(40px)",
                  opacity: 0.3,
                }}
              />
              <div
                className="absolute top-1/3 -left-40 w-[500px] h-[1px] -rotate-6"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #8561c5, #e39297, transparent)",
                  filter: "blur(50px)",
                  opacity: 0.25,
                }}
              />
              <div
                className="absolute bottom-1/4 -right-48 w-[400px] h-[3px] rotate-45"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #0060ba, #8561c5, transparent)",
                  filter: "blur(60px)",
                  opacity: 0.2,
                }}
              />
              <div
                className="absolute -bottom-20 left-1/4 w-80 h-[2px] -rotate-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #336fcf, #c671af, transparent)",
                  filter: "blur(45px)",
                  opacity: 0.25,
                }}
              />
            </div>
          )}
          <div
            aria-hidden
            className={`absolute top-0 right-0 text-[12rem] md:text-[22rem] font-display font-bold leading-none select-none pointer-events-none ${project.theme.number}`}
          >
            {project.number}
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <motion.div
                variants={fadeUp}
                className={`md:col-span-7 space-y-6 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div
                  className={`pl-5 border-l-2 ${project.theme.borderAccent}`}
                >
                  <Image
                    src={project.logoSrc}
                    alt={project.logoAlt}
                    width={140}
                    height={56}
                    className="h-10 md:h-14 w-auto object-contain mb-5"
                  />
                  <div className="mb-4">
                    <p
                      className={`text-xs uppercase tracking-[0.25em] ${project.theme.label}`}
                    >
                      Flagship Initiative
                    </p>
                    <h2
                      className={`font-display text-3xl md:text-4xl ${project.theme.name}`}
                    >
                      {project.name}
                    </h2>
                  </div>
                  <p
                    className={`text-lg font-medium italic leading-snug font-display mb-4 ${project.theme.tagline}`}
                  >
                    &ldquo;{project.tagline}&rdquo;
                  </p>
                  <p
                    className={`leading-relaxed ${project.theme.desc}`}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
                <div className="pt-2 pl-5">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${project.theme.btn}`}
                    style={
                      project.theme.brand
                        ? { backgroundColor: project.theme.brand }
                        : undefined
                    }
                  >
                    Visit website
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl p-5 md:p-6 bg-gradient-to-br border ${project.theme.metricGradient} ${project.theme.metricCard}`}
                    >
                      <p
                        className={`font-display text-2xl md:text-3xl font-semibold ${project.theme.metricValue}`}
                      >
                        {m.value}
                      </p>
                      <p
                        className={`text-sm mt-1 leading-snug ${project.theme.metricLabel}`}
                      >
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}
    </>
  );
}
