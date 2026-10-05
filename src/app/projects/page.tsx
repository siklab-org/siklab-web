"use client";

import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease } },
};

const enactusBrand = "#EEAD2E";

const projects = [
  {
    id: "ai-for-asia",
    number: "01",
    name: "AI for Asia",
    tagline: "Unlocking Asia's future with AI.",
    description:
      "A regional capacity-building initiative empowering ASEAN youth with the knowledge, skills, and networks to thrive in an AI-driven future. The 12-week fellowship brings together emerging leaders from across Southeast Asia for intensive learning sessions with world-class speakers, industry leaders, and policy experts — culminating in capstone projects that apply AI to real-world challenges.",
    url: "https://aiforasean.org",
    logoSrc: "/ai-for-asia-logo.png",
    logoAlt: "AI for Asia logo",
    coverImage: "/projectsimage/HacktheFuture.jpg",
    coverAlt: "AI for Asia fellowship participants in a collaborative session",
    metrics: [
      { value: "12", label: "Weeks intensive" },
      { value: "11", label: "ASEAN nations" },
      { value: "57", label: "Fellows across Asia" },
      { value: "1", label: "Annual Asia-wide summit" },
    ],
    displayFont: spaceGrotesk.className,
    theme: {
      section: "bg-[#050505] text-white",
      number: "text-white/[0.02]",
      accent: "text-[#4d9bff]",
      label: "text-white/60",
      name: "text-white",
      tagline: "text-white/90",
      desc: "text-neutral-400",
      btn: "bg-[#0060ba] text-white hover:bg-[#1a7ae6] shadow-[0_10px_40px_-15px_rgba(0,96,186,0.9)]",
      metricCard: "border-white/10 bg-white/[0.05] backdrop-blur-sm",
      metricValue: "text-transparent bg-clip-text bg-gradient-to-r from-[#4d9bff] via-[#9d7bff] to-[#ff8fa3]",
      metricLabel: "text-neutral-400",
    },
  },
  {
    id: "enactus",
    number: "02",
    name: "Enactus Philippines",
    tagline: "Entrepreneurial action for others.",
    description:
      "A team-based experiential learning platform that catalyzes students to take entrepreneurial action for their communities. Operating across partner universities nationwide, Enactus Philippines supports student-led ventures spanning tech-enabled innovation, climate-positive enterprise, and community-inclusive projects — co-built with farmers, MSMEs, and out-of-school youth across Luzon, Visayas, and Mindanao.",
    url: "https://enactus.ph",
    logoSrc: "/enactus-logo.webp",
    logoAlt: "Enactus Philippines logo",
    coverImage: "/projectsimage/EnactusSpeech.jpg",
    coverAlt: "Enactus Philippines student entrepreneurs engaging with community partners",
    metrics: [
      { value: "33", label: "Countries in network" },
      { value: "1000+", label: "Universities" },
      { value: "60,000+", label: "Filipino students" },
      { value: "15", label: "Years of impact" },
    ],
    displayFont: montserrat.className,
    theme: {
      section: "bg-white text-[#0f0f0f]",
      number: "text-[#EEAD2E]/[0.06]",
      accent: "text-[#0D8546]",
      label: "text-[#0D8546]",
      name: "text-[#0f0f0f]",
      tagline: "text-[#1f1f1f]",
      desc: "text-[#5f5f5f]",
      btn: "text-white hover:opacity-95 shadow-[0_10px_40px_-15px_rgba(13,133,70,0.9)]",
      metricCard: "border-[#f5d08a]/60 bg-white shadow-[0_1px_1px_rgba(238,173,46,0.02),0_20px_60px_-30px_rgba(13,133,70,0.4)]",
      metricValue: "text-[#0D8546]",
      metricLabel: "text-[#7a7a7a]",
      brand: enactusBrand,
    },
  },
];

export default function Projects() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[50dvh] max-w-6xl items-center px-6 pt-10 pb-10 md:pt-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[26rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#8561c5]/10 blur-[100px]" />
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="relative"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary/90 shadow-sm backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Current Initiatives
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl tracking-tighter leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Live. <span className="text-primary">Active.</span> Growing.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Two flagship initiatives driving youth leadership, innovation, and entrepreneurial action across Asia.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      {projects.map((project, i) => (
        <motion.section
          key={project.id}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ animate: { transition: { staggerChildren: 0.14 } } }}
          className={`relative overflow-hidden ${project.theme.section}`}
        >
          {/* AI for Asia decorative accents */}
          {project.id === "ai-for-asia" && (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/3 left-[-10%] h-[60%] w-[40%] rounded-full bg-[#336fcf]/20 blur-[140px]" />
              <div className="absolute bottom-[-20%] right-[-10%] h-[55%] w-[35%] rounded-full bg-[#8561c5]/15 blur-[130px]" />
            </div>
          )}

          {/* Enactus subtle glow */}
          {project.id === "enactus" && (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/4 right-[-15%] h-[50%] w-[30%] rounded-full bg-[#EEAD2E]/12 blur-[120px]" />
              <div className="absolute bottom-[-25%] left-[-10%] h-[45%] w-[25%] rounded-full bg-[#0D8546]/10 blur-[110px]" />
            </div>
          )}

          {/* Big background number */}
          <div
            aria-hidden
            className={`absolute right-0 top-0 select-none font-display text-[10rem] font-bold leading-none md:text-[18rem] lg:text-[22rem] ${project.theme.number}`}
          >
            {project.number}
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Text column */}
              <motion.div
                variants={fadeUp}
                className={`lg:col-span-5 xl:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Image
                      src={project.logoSrc}
                      alt={project.logoAlt}
                      width={140}
                      height={56}
                      className="h-9 w-auto object-contain md:h-12"
                    />
                    <div className="space-y-2">
                      <p
                        className={`text-[11px] uppercase tracking-[0.22em] ${project.theme.label}`}
                      >
                        Flagship Initiative
                      </p>
                      <h2
                        className={`${project.displayFont} text-3xl tracking-tighter leading-[1.08] md:text-4xl lg:text-5xl ${project.theme.name}`}
                      >
                        {project.name}
                      </h2>
                    </div>
                    <p
                      className={`${project.displayFont} text-xl leading-[1.12] tracking-tight md:text-2xl ${project.theme.tagline}`}
                    >
                      {project.tagline}
                    </p>
                    <p
                      className={`max-w-lg leading-relaxed ${project.theme.desc}`}
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:max-w-md">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className={`group rounded-2xl border p-4 transition-all duration-500 ease-out hover:-translate-y-0.5 ${project.theme.metricCard}`}
                      >
                        <p
                          className={`${project.displayFont} text-2xl font-semibold md:text-3xl ${project.theme.metricValue}`}
                        >
                          {m.value}
                        </p>
                        <p className={`mt-1 text-sm leading-snug ${project.theme.metricLabel}`}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${project.theme.btn}`}
                      style={
                        project.theme.brand
                          ? { backgroundColor: project.theme.brand }
                          : undefined
                      }
                    >
                      Visit website
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Image column */}
              <motion.div
                variants={fadeIn}
                className={`relative lg:col-span-7 xl:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] shadow-[0_60px_120px_-80px_rgba(0,0,0,0.9)] ring-1 ring-black/5 lg:aspect-[16/9]">
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div
                    className={`absolute inset-0 ${
                      project.id === "ai-for-asia"
                        ? "bg-gradient-to-t from-[#050505]/70 via-[#050505]/20 to-transparent"
                        : "bg-gradient-to-t from-white/90 via-white/10 to-transparent"
                    }`}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}
    </>
  );
}