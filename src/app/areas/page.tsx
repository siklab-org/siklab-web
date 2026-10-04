"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { workAreas } from "@/src/data/areas";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease } },
};

const fieldFrames = [
  {
    index: "01",
    src: "/un-youth-assembly/delegation-1.jpg",
    alt: "Siklab delegates at the United Nations Youth Assembly",
    tag: "United Nations Youth Assembly",
    place: "New York",
    caption:
      "Delegates chosen from the national youth assembly take their seats in the General Assembly hall, alongside permanent missions and accredited organizations.",
    tone: "",
  },
  {
    index: "02",
    src: "/past-projects/community-learning-hub-1.jpg",
    alt: "Learners at a Siklab community learning hub",
    tag: "Community Learning Hub",
    place: "Cavite",
    caption:
      "Tutoring, teacher training, and parent capacititation, delivered in barangay-level rooms rather than central schools.",
    tone: "warm",
  },
  {
    index: "03",
    src: "/past-projects/hack-the-future-3.jpg",
    alt: "Young leaders at Hack the Future",
    tag: "Hack the Future",
    place: "Metro Manila",
    caption:
      "Fellows build civic and climate prototypes across a twelve-week sprint, then defend them in front of judges and partner organizations.",
    tone: "cool",
  },
  {
    index: "04",
    src: "/aci-youth-leader/aci-yl-1.jpg",
    alt: "Delegates at the ACI Youth Leader Summit",
    tag: "ACI Youth Leader Summit",
    place: "Asian region",
    caption:
      "A regional convening where young leaders trade practice on climate adaptation, disaster response, and local governance.",
    tone: "",
  },
] as const;

const toneClass: Record<string, string> = {
  warm: "absolute inset-0 bg-amber-800/12 mix-blend-multiply",
  cool: "absolute inset-0 bg-sky-950/14 mix-blend-multiply",
};

function AreaIndex() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-foreground/10"
      />
      <motion.div
        aria-hidden
        style={{ scaleY: reduce ? 1 : progress }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-amber-600"
      />

      <ol ref={listRef} className="pl-6 md:pl-10">
        {workAreas.map((area, i) => (
          <motion.li
            key={area.title}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ animate: { transition: { staggerChildren: 0.07 } } }}
            className="group -ml-6 border-t border-foreground/10 py-8 pl-6 pr-1 transition-colors duration-300 ease-out last:border-b hover:bg-foreground/[0.02] active:bg-foreground/[0.03] md:py-12"
          >
            <div className="grid gap-4 md:grid-cols-12 md:gap-8">
              <div className="flex items-baseline gap-3 md:contents">
                <motion.span
                  variants={fadeUp}
                  aria-hidden
                  className="font-display text-3xl leading-none text-foreground/15 transition-colors duration-300 group-hover:text-amber-600 group-active:text-amber-600 md:col-span-1 md:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                <div className="md:col-span-7">
                  <motion.h3
                    variants={fadeUp}
                    className="font-display text-2xl tracking-tight text-foreground md:text-3xl"
                  >
                    {area.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                    {area.description}
                  </motion.p>
                </div>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid gap-2 md:col-span-4 md:justify-self-end md:text-right"
              >
                {area.subareas.map((sub) => (
                  <li
                    key={sub}
                    className="flex items-center gap-2 text-sm text-muted-foreground/85 md:justify-end"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 shrink-0 rounded-[1px] bg-amber-600/70"
                    />
                    {sub}
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function FieldNotes() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const heroShift = useTransform(scrollYProgress, [0, 1], ["-3%", "7%"]);
  const heroZoom = useTransform(scrollYProgress, [0, 1], [1.06, 1.15]);

  const [lead, portrait, ...stacked] = fieldFrames;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-foreground/10 bg-muted/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <div className="mx-auto h-full max-w-6xl px-6">
          <div className="grid h-full grid-cols-12 gap-8">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-l border-foreground/[0.05]" />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[26rem] w-[34rem] rounded-full bg-amber-500/[0.07] blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-[22rem] w-[22rem] rounded-full bg-sky-900/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-8 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-3">
            <div className="flex items-center gap-4 md:block">
              <span
                aria-hidden
                className="h-px w-10 bg-amber-600/70 md:mb-6 md:block md:w-16"
              />
              <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/50">
                Field Notes
              </p>
            </div>
            <p className="mt-6 hidden max-w-[24ch] text-sm leading-relaxed text-muted-foreground md:block">
              Four frames drawn from the six fields above, selected out of program
              documentation and partner archives.
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-[24ch] font-display text-[1.7rem] leading-[1.18] tracking-tight text-foreground text-pretty md:col-span-7 md:col-start-4 md:max-w-[26ch] md:text-[2.5rem] lg:text-[2.85rem]"
          >
            These six fields show up in classrooms, local government offices, and
            at the United Nations. The setting changes, the practice does not.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative mt-14 border-y border-foreground/10 md:mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
            {workAreas.map((area, i) => (
              <li key={area.title} className="flex items-center gap-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-amber-700/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-foreground/55">
                  {area.title}
                </span>
                {i < workAreas.length - 1 && (
                  <span aria-hidden className="h-3 w-px bg-foreground/15" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-10 md:pt-14">
        <figure className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="relative aspect-[4/3] overflow-hidden border-y border-foreground/10 bg-muted sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[2.5/1]">
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease }}
              className="absolute inset-0"
            >
              <motion.div
                style={{ y: reduce ? 0 : heroShift }}
                className="absolute inset-x-0 -inset-y-[12%]"
              >
                <motion.div
                  style={{ scale: reduce ? 1 : heroZoom }}
                  className="absolute inset-0"
                >
                  <Image
                    src={lead.src}
                    alt={lead.alt}
                    fill
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            />

            <div className="absolute inset-x-0 top-0">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-5 md:px-6 md:pt-6">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 border-l border-t border-white/60"
                  />
                  <span className="font-mono text-[10px] tracking-[0.24em] text-white/75">
                    FIG. {lead.index}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 border-r border-t border-white/60"
                />
              </div>
            </div>

            <figcaption className="absolute inset-x-0 bottom-0">
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-5 md:flex-row md:items-end md:justify-between md:gap-12 md:px-6 md:pb-7">
                <div className="max-w-[56ch]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                    {lead.tag}
                    <span aria-hidden className="px-2 text-white/40">
                      /
                    </span>
                    {lead.place}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-pretty text-white/90 md:text-[0.95rem]">
                    {lead.caption}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.24em] text-white/50">
                  {lead.index} / {String(fieldFrames.length).padStart(2, "0")}
                </span>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <motion.figure
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-[900ms] motion-safe:ease-out group-hover:scale-[1.04]"
                />
                <div aria-hidden className={toneClass[portrait.tone]} />
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-foreground/10"
                />
                <span
                  aria-hidden
                  className="absolute left-4 top-4 h-2.5 w-2.5 border-l border-t border-white/70"
                />
                <span
                  aria-hidden
                  className="absolute right-4 top-4 h-2.5 w-2.5 border-r border-t border-white/70"
                />
              </div>
              <figcaption className="mt-4 flex gap-4 border-t border-foreground/10 pt-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-amber-700/70">
                  {portrait.index}
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                    {portrait.tag}
                    <span aria-hidden className="px-1.5 text-foreground/25">
                      /
                    </span>
                    {portrait.place}
                  </p>
                  <p className="mt-1.5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                    {portrait.caption}
                  </p>
                </div>
              </figcaption>
            </motion.figure>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="mt-8 border-t border-foreground/10 pt-5 md:mt-10"
            >
              <span aria-hidden className="block h-px w-10 bg-amber-600/70" />
              <p className="mt-5 max-w-[30ch] font-display text-lg leading-snug font-light tracking-tight text-foreground/85 text-pretty md:text-xl">
                Much of this work happens in rooms that were not built for it: a
                barangay hall after hours, a classroom lent for an evening, a hotel
                ballroom for one week.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:mt-36">
            {stacked.map((frame, i) => (
              <motion.figure
                key={frame.src}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.08 + i * 0.1, ease }}
                className={`group ${i === stacked.length - 1 ? "" : "mb-10 md:mb-14"}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 92vw, 46vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-[900ms] motion-safe:ease-out group-hover:scale-[1.04]"
                  />
                  {frame.tone && <div aria-hidden className={toneClass[frame.tone]} />}
                  <div
                    aria-hidden
                    className="absolute inset-0 ring-1 ring-inset ring-foreground/10"
                  />
                  <span
                    aria-hidden
                    className="absolute left-4 top-4 h-2.5 w-2.5 border-l border-t border-white/70"
                  />
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 h-2.5 w-2.5 border-r border-t border-white/70"
                  />
                </div>
                <figcaption className="mt-4 flex gap-4 border-t border-foreground/10 pt-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber-700/70">
                    {frame.index}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                      {frame.tag}
                      <span aria-hidden className="px-1.5 text-foreground/25">
                        /
                      </span>
                      {frame.place}
                    </p>
                    <p className="mt-1.5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                      {frame.caption}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
            Siklab field documentation
          </p>
          <Link
            href="/past-projects"
            className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-200 ease-out hover:text-amber-700"
          >
            Browse the project archive
            <span
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Areas() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-24 md:pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="grid items-center gap-8 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-7">
            <motion.p
              variants={fadeUp}
              className="mb-5 text-xs uppercase tracking-[0.3em] text-foreground/50"
            >
              Areas of Work
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Six areas, one practice.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Education, exchange, partnerships, consulting, applied AI, and
              social innovation. These are the fields where we design and
              deliver programs across Asia.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative md:col-span-5"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/un-youth-assembly/delegation-1.jpg"
                alt="Siklab delegates at the United Nations Youth Assembly"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent"
              />
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-full w-full rounded-2xl border border-amber-600/25"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            className="mb-12 md:mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-[18ch] font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
            >
              The fields, and what sits inside them.
            </motion.h2>
          </motion.div>

          <AreaIndex />
        </div>
      </section>

      <FieldNotes />

      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12"
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-[20ch] font-display text-2xl leading-tight tracking-tight text-foreground md:col-span-8 md:text-4xl"
            >
              Bringing one of these areas to your organization?
            </motion.h2>
            <motion.div variants={fadeUp} className="md:col-span-4 md:justify-self-end">
              <Link
                href="/contact"
                className="group tap inline-flex items-center gap-2 rounded-full bg-amber-700 px-7 py-3 text-sm font-medium whitespace-nowrap text-white transition-[background-color,transform] duration-200 ease-out hover:bg-amber-800 active:scale-[0.97]"
              >
                Contact us
                <span
                  aria-hidden
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}