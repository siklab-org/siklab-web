"use client";

import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const aiForAsiaSlides = Array.from({ length: 10 }, (_, i) => ({
  src: `/AIFORASIASLIDESHOW/${i + 1}.jpg`,
  alt: `AI for Asia fellowship moment ${i + 1}`,
}));

const SLIDE_DURATION = 4500;

const aiForAsia = {
  id: "ai-for-asia",
  number: "02",
  name: "AI for Asia",
  tagline: "Unlocking Asia's future with AI.",
  description:
    "A regional capacity-building initiative empowering ASEAN youth with the knowledge, skills, and networks to thrive in an AI-driven future. The 12-week fellowship brings together emerging leaders from across Southeast Asia for intensive learning sessions with world-class speakers, industry leaders, and policy experts — culminating in capstone projects that apply AI to real-world challenges.",
  url: "https://aiforasean.org",
  logoSrc: "/ai-for-asia-logo.png",
  logoAlt: "AI for Asia logo",
  metrics: [
    { value: "12", label: "Weeks intensive" },
    { value: "11", label: "ASEAN nations" },
    { value: "57", label: "Fellows across Asia" },
    { value: "1", label: "Annual Asia-wide summit" },
  ],
};

const enactus = {
  id: "enactus",
  number: "01",
  name: "Enactus Philippines",
  tagline: "Entrepreneurial action for others.",
  description:
    "A team-based experiential learning platform that catalyzes students to take entrepreneurial action for their communities. Operating across partner universities nationwide, Enactus Philippines supports student-led ventures spanning tech-enabled innovation, climate-positive enterprise, and community-inclusive projects — co-built with farmers, MSMEs, and out-of-school youth across Luzon, Visayas, and Mindanao.",
  url: "https://enactus.ph",
  logoSrc: "/enactus-logo.webp",
  logoAlt: "Enactus Philippines logo",
  metrics: [
    { value: "33", label: "Countries in network" },
    { value: "800+", label: "Partner universities" },
    { value: "60,000+", label: "Filipino students" },
    { value: "15", label: "Years of impact" },
  ],
};

const enactusSlides = Array.from({ length: 10 }, (_, i) => ({
  src: `/ENACTUSSLIDESHOW/${i + 1}.jpg`,
  alt: `Enactus Philippines photo journal, photo ${i + 1}`,
}));

const ENACTUS_SLIDE_DURATION = 5000;

function AiForAsiaShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const resetProgress = () => {
    progressRef.current = 0;
    if (barRef.current) barRef.current.style.transform = "scaleX(0)";
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % aiForAsiaSlides.length);
    resetProgress();
  };
  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + aiForAsiaSlides.length) % aiForAsiaSlides.length,
    );
    resetProgress();
  };

  useEffect(() => {
    if (isPaused) return;
    let raf = 0;
    const start = performance.now() - progressRef.current * SLIDE_DURATION;

    const tick = (now: number) => {
      const p = Math.min((now - start) / SLIDE_DURATION, 1);
      progressRef.current = p;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (p >= 1) {
        progressRef.current = 0;
        if (barRef.current) barRef.current.style.transform = "scaleX(0)";
        setCurrentSlide((prev) => (prev + 1) % aiForAsiaSlides.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, currentSlide]);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#050505] text-white"
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed slideshow backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.9, 0.25, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.06, x: 4 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 1.02, x: -2 }}
              transition={{ duration: 1.2, ease: [0.25, 0.9, 0.25, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={aiForAsiaSlides[currentSlide].src}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority={currentSlide === 0}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Legibility scrims: strong left, soft bottom, light top */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/30 lg:via-[#050505]/75 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />

        {/* Ambient accents */}
        <div className="absolute -left-[10%] top-[-20%] h-[55%] w-[40%] rounded-full bg-[#336fcf]/20 blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-8%] h-[50%] w-[35%] rounded-full bg-[#8561c5]/15 blur-[130px]" />
      </div>

      {/* Slide progress */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-white/15">
        <div
          ref={barRef}
          style={{ transform: "scaleX(0)" }}
          className="h-full origin-left bg-gradient-to-r from-[#4d9bff] via-[#9d7bff] to-[#ff8fa3]"
        />
      </div>

      {/* Slideshow controls */}
      <div className="absolute right-6 top-12 z-20 flex items-center gap-1 rounded-full border border-white/15 bg-black/30 p-1 backdrop-blur-md md:right-10">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous photo"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="min-w-[3.5rem] text-center text-[11px] tabular-nums tracking-[0.2em] text-white/70">
          {String(currentSlide + 1).padStart(2, "0")}
          <span className="mx-1 text-white/30">—</span>
          {String(aiForAsiaSlides.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next photo"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:scale-95"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        className="relative z-10 mx-auto flex min-h-[92dvh] w-full max-w-[clamp(80rem,92vw,150rem)] flex-col px-6 pt-16 md:px-10 md:pt-20"
      >
        {/* Editorial text block */}
        <div className="flex flex-1 flex-col justify-center py-10 md:py-14">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="mb-6">
              <Image
                src={aiForAsia.logoSrc}
                alt={aiForAsia.logoAlt}
                width={140}
                height={56}
                className="h-9 w-auto object-contain md:h-12"
              />
            </div>
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/50">
              <span className="text-white/30">{aiForAsia.number}</span>
              <span className="h-px w-8 bg-white/20" />
              Flagship Initiative
            </p>
            <h2 className="font-display text-4xl tracking-tighter leading-[1.05] md:text-5xl lg:text-6xl 2xl:text-7xl">
              {aiForAsia.name}
            </h2>
            <p
              className={`${spaceGrotesk.className} mt-4 text-xl leading-[1.15] tracking-tight text-white/85 md:text-2xl`}
            >
              {aiForAsia.tagline}
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-300/90">
              {aiForAsia.description}
            </p>
            <div className="mt-8">
              <Link
                href={aiForAsia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0060ba] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-15px_rgba(0,96,186,0.9)] transition-all duration-300 hover:bg-[#1a7ae6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4d9bff] active:scale-[0.98]"
              >
                Visit website
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Metrics rail pinned to the bottom */}
        <motion.div
          variants={fadeUp}
          className="-mx-6 border-t border-white/10 bg-[#050505]/40 backdrop-blur-xl md:-mx-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {aiForAsia.metrics.map((m, idx) => (
              <div
                key={idx}
                className={`px-6 py-6 md:px-10 md:py-8 ${
                  idx % 2 === 1 ? "border-l border-white/10" : ""
                } ${idx >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
                  idx > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <p
                  className={`${spaceGrotesk.className} text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#4d9bff] via-[#9d7bff] to-[#ff8fa3] md:text-4xl`}
                >
                  {m.value}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-neutral-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EnactusShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(
      () =>
        setCurrentSlide((prev) => (prev + 1) % enactusSlides.length),
      ENACTUS_SLIDE_DURATION,
    );
    return () => window.clearInterval(id);
  }, [isPaused]);

  const goToPrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + enactusSlides.length) % enactusSlides.length,
    );
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % enactusSlides.length);

  return (
    <section
      id={enactus.id}
      className="relative isolate overflow-hidden bg-[#faf8f3] text-[#0f0f0f]"
    >
      {/* Ambient accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[45%] w-[40%] rounded-full bg-[#EEAD2E]/25 blur-[130px]" />
        <div className="absolute -bottom-40 right-[15%] h-[40%] w-[30%] rounded-full bg-[#0D8546]/12 blur-[120px]" />
      </div>

      {/* Oversized index watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 select-none font-display text-[10rem] font-bold leading-none text-[#EEAD2E]/10 md:text-[17rem] lg:text-[21rem]"
      >
        {enactus.number}
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ animate: { transition: { staggerChildren: 0.14 } } }}
        className="relative z-10 grid lg:min-h-[88dvh] lg:grid-cols-12"
      >
        {/* Editorial column */}
        <motion.div
          variants={fadeUp}
          className="relative z-10 order-1 flex flex-col justify-center px-6 py-14 md:px-10 lg:order-2 lg:col-span-5 lg:py-20 lg:pl-14 lg:pr-10 xl:pl-20"
        >
          <div className="mb-6">
            <Image
              src={enactus.logoSrc}
              alt={enactus.logoAlt}
              width={140}
              height={56}
              className="h-9 w-auto object-contain md:h-11"
            />
          </div>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#0D8546]">
            <span className="text-[#0D8546]/45">{enactus.number}</span>
            <span className="h-px w-8 bg-[#0D8546]/25" />
            Flagship Initiative
          </p>
          <h2
            id={`${enactus.id}-heading`}
            className="font-display mt-4 text-4xl leading-[1.04] tracking-tight md:text-5xl xl:text-6xl"
          >
            {enactus.name}
          </h2>
          <p
            className={`${montserrat.className} mt-4 text-xl leading-[1.15] tracking-tight text-[#242424] md:text-2xl`}
          >
            {enactus.tagline}
          </p>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-[#5f5f5f]">
            {enactus.description}
          </p>
          <div className="mt-8">
            <Link
              href={enactus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#EEAD2E] px-6 py-3 text-sm font-semibold text-[#201701] shadow-[0_14px_40px_-16px_rgba(184,131,10,0.9)] transition-all duration-300 hover:bg-[#f3bd4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D8546] active:scale-[0.98]"
            >
              Visit website
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Stats plaque straddling the split */}
          <div className="relative mt-10 rounded-2xl border border-[#EEAD2E]/40 bg-white/85 p-2 shadow-[0_30px_60px_-30px_rgba(146,105,15,0.5)] backdrop-blur-xl lg:-ml-36 xl:-ml-44">
            <div className="grid grid-cols-2">
              {enactus.metrics.map((m, idx) => (
                <div
                  key={m.label}
                  className={`px-4 py-4 md:px-5 md:py-5 ${
                    idx % 2 === 1 ? "border-l border-[#EEAD2E]/30" : ""
                  } ${idx >= 2 ? "border-t border-[#EEAD2E]/30" : ""}`}
                >
                  <p
                    className={`${montserrat.className} text-2xl font-semibold tabular-nums text-[#0D8546] md:text-[1.65rem]`}
                  >
                    {m.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-[#6f6f6f]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full-height photo panel */}
        <motion.div
          variants={fadeIn}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative order-2 aspect-[4/3] overflow-hidden bg-[#17110a] sm:aspect-[16/10] lg:order-1 lg:col-span-7 lg:aspect-auto lg:min-h-[88dvh]"
        >
          {/* Slideshow */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.9, 0.25, 1] }}
                className="absolute inset-0"
              >
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.015 }}
                  transition={{ duration: 1.4, ease: [0.25, 0.9, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={enactusSlides[currentSlide].src}
                    alt={enactusSlides[currentSlide].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    loading={currentSlide === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Legibility scrims */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60" />

          {/* Slideshow controls */}
          <div className="absolute bottom-6 right-5 z-20 flex items-center gap-1 rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-md md:bottom-8 md:right-7">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous photo"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[3.5rem] text-center text-[11px] tabular-nums tracking-[0.2em] text-white/80">
              {String(currentSlide + 1).padStart(2, "0")}
              <span className="mx-1 text-white/35">—</span>
              {String(enactusSlides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Slide progress */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/15">
            <motion.div
              key={currentSlide}
              className="h-full origin-left bg-[#EEAD2E]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: ENACTUS_SLIDE_DURATION / 1000,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[50dvh] w-full max-w-[clamp(80rem,92vw,150rem)] items-center px-6 pt-10 pb-10 md:px-10 md:pt-12">
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
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl tracking-tighter leading-[1.05] md:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            Live. <span className="text-primary">Active.</span> Growing.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Two flagship initiatives driving youth leadership, innovation, and
            entrepreneurial action across Asia.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      <EnactusShowcase />

      <div className="border-t border-foreground/10" />

      <AiForAsiaShowcase />
    </>
  );
}
