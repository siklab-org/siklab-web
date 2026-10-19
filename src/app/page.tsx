"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/src/components/HeroSection";
import { PartnerLogoMarquee } from "@/src/components/PartnerLogoMarquee";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease } },
};

// One shared measure so every band lines up on the same left edge and grows
// with the display instead of sitting in a narrow centered column.
const shell =
  "mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12 2xl:px-16";

const partnerLogos: Record<string, string> = {
  "United Nations": "united-nations.png",
  USAID: "usaid.png",
  "European Union": "european-union.png",
  ASEAN: "asean.png",
  ADB: "adb.png",
  ING: "ing.png",
  "Khan Academy": "khan-academy.png",
  KPMG: "kpmg.svg",
  Enactus: "enactus.png",

  "Resolution Project": "resolution-project.png",
  UNICEF: "unicef.png",
  "World Scouts": "world-scouts.png",
  "Duke of Edinburgh": "duke-of-edinburgh.png",
};
export default function Home() {
  const partnerEntries = Object.entries(partnerLogos).map(([name, file]) => ({
    name,
    file,
  }));

  return (
    <>
      <HeroSection />

      <section className="relative w-full bg-white border-t border-border/40 overflow-hidden">
        <div>
          <div className={`${shell} pt-16 md:pt-24 2xl:pt-28`}>
            <div className="flex items-center gap-5">
              <p className="whitespace-nowrap text-xs uppercase tracking-[0.3em] text-foreground/50 md:text-sm">
                In partnership with
              </p>
              <span className="h-px flex-1 bg-border/70" />
            </div>
          </div>
          <div className="pt-10 pb-16 md:pt-14 md:pb-24 2xl:pb-28">
            <PartnerLogoMarquee logos={partnerEntries} />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-muted/30 border-t border-border/40 overflow-hidden">
        <div
          aria-hidden
          className="absolute left-[-8%] top-1/2 h-[240px] -translate-y-1/2 pointer-events-none lg:left-[4%] 2xl:left-[10%]"
          style={{ width: "min(520px, 80vw)" }}
        >
          <span
            className="animate-breathe block h-full w-full rounded-full will-change-transform"
            style={{
              background:
                "radial-gradient(circle, rgba(217,119,6,0.16) 0%, rgba(234,88,12,0.08) 45%, transparent 72%)",
              filter: "blur(32px)",
            }}
          />
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className={`relative ${shell} py-20 md:py-28 2xl:py-32`}
        >
          <div className="grid items-start gap-10 md:gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/50 md:text-sm"
              >
                Let&apos;s build together
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-[clamp(1.875rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-foreground"
              >
                Get in touch with us
              </motion.h2>
              <motion.div
                variants={fadeIn}
                aria-hidden
                className="mt-7 h-px w-32 md:w-48"
              >
                <span className="animate-breathe-line block h-full w-full rounded-full bg-gradient-to-r from-amber-400/60 to-transparent will-change-transform" />
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="lg:col-span-5 lg:pt-1">
              <p className="max-w-md text-sm leading-relaxed text-foreground/60 sm:text-base lg:text-lg">
                Whether you&apos;re an organization seeking partnership or a
                young leader ready to grow, we&apos;d love to hear from you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-primary/25 px-7 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-[background-color,color,border-color,transform] duration-200 ease-out"
                >
                  Contact us
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}