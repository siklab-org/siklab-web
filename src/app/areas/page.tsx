"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { workAreas } from "@/src/data/areas";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease } },
};

const fieldImages = [
  {
    src: "/past-projects/community-learning-hub-1.jpg",
    alt: "Learners at a Siklab community learning hub",
  },
  {
    src: "/past-projects/hack-the-future-3.jpg",
    alt: "Young leaders at Hack the Future",
  },
  {
    src: "/aci-youth-leader/aci-yl-1.jpg",
    alt: "Delegates at the ACI Youth Leader Summit",
  },
];

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

export default function Areas() {
  const reduce = useReducedMotion();

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

      <section className="relative w-full overflow-hidden border-t border-foreground/10 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-12"
          >
            <motion.p
              variants={fadeUp}
              className="max-w-[34ch] font-display text-2xl leading-snug text-foreground md:col-span-5 md:text-3xl"
            >
              These six fields show up in classrooms, local government offices,
              and at the United Nations. The setting changes, the practice does
              not.
            </motion.p>

            <motion.div variants={fadeUp} className="min-w-0 md:col-span-7">
              <div className="-mx-6 flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
                {fieldImages.map((img, i) => (
                  <motion.figure
                    key={img.src}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.09,
                      ease,
                    }}
                    className={`w-[72vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-muted sm:w-[56vw] md:w-auto md:shrink ${
                      i === 1 ? "md:-translate-y-6" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] md:aspect-[3/4]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 72vw, 22vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.figure>
                ))}
                <span aria-hidden className="w-px shrink-0 md:hidden" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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