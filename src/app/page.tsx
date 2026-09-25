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
  const half = Math.ceil(partnerEntries.length / 2);

  return (
    <>
      <HeroSection />

      <section className="relative w-full bg-white border-t border-border/40 overflow-hidden">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/50 mb-10 text-center"
          >
            In partnership with
          </motion.p>
          <motion.div variants={fadeIn}>
            <PartnerLogoMarquee
              rows={[partnerEntries.slice(0, half), partnerEntries.slice(half)]}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative w-full bg-muted/30 border-t border-border/40 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: "min(680px, 90vw)", height: "360px" }}
        >
          <span
            className="animate-breathe block h-full w-full rounded-full will-change-transform"
            style={{
              background:
                "radial-gradient(circle, rgba(217,119,6,0.16) 0%, rgba(234,88,12,0.08) 45%, transparent 72%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/50 mb-4"
          >
            Let&apos;s build together
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground mb-8"
          >
            Get in touch with us
          </motion.h2>
          <motion.div
            variants={fadeIn}
            aria-hidden
            className="mx-auto -mt-2 mb-8 h-px w-[70%]"
          >
            <span className="animate-breathe-line block h-full w-full rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent will-change-transform" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-foreground/60 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          >
            Whether you&apos;re an organization seeking partnership or a young
            leader ready to grow, we&apos;d love to hear from you.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/25 px-8 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-[background-color,color,border-color,transform] duration-200 ease-out"
            >
              Contact us
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}