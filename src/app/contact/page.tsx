"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const socials = [
  {
    href: "https://web.facebook.com/SiklabPHL",
    src: "/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/siklab-pilipinas-inc/",
    src: "/linkedin.svg",
    alt: "LinkedIn",
  },
] as const;

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            Contact
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl tracking-tight">
            Let&apos;s build something together.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            For partnerships, press, and program inquiries, get in touch with our team.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="mt-12 grid md:grid-cols-2 gap-10 border-t border-foreground/10 pt-10"
        >
          <motion.div variants={fadeUp}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <a href="mailto:secretariat@siklab.org.ph" className="mt-2 block font-display text-2xl text-primary hover:underline">
              secretariat@siklab.org.ph
            </a>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
            <div className="mt-2 font-display text-2xl text-foreground">Manila, Philippines</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 flex items-center gap-4 border-t border-foreground/10 pt-10"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-muted-foreground">
            Follow us
          </motion.span>
          {socials.map((s) => (
            <motion.a
              key={s.alt}
              variants={fadeUp}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={s.src} alt={s.alt} width={28} height={28} />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
