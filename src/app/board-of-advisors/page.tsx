"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { getProcessedMembers } from "@/src/data/board-of-advisors";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

const members = getProcessedMembers();

export default function BoardOfAdvisors() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">
            Board of Advisors
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl tracking-tight leading-[1.08]">
            Guided by experience.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Our board brings together leaders from across sectors &mdash; public health, defense, sustainability, and social enterprise &mdash; to steer our mission forward.
          </motion.p>
        </motion.div>
      </section>

      <div className="border-t border-foreground/10" />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {members.map((member, i) => (
            <Dialog key={member.name}>
              <DialogTrigger asChild>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{ animate: { transition: { staggerChildren: 0.08, delayChildren: i * 0.04 } } }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    variants={fadeUp}
                    className="relative rounded-2xl overflow-hidden border border-foreground/10 h-full min-h-[360px] md:min-h-[420px] transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
                  >
                    {member.imageSrc ? (
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${member.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                      >
                        <span className="font-display text-6xl md:text-7xl font-bold text-white/30 select-none">
                          {member.initials}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 inset-x-0 p-6 md:p-7">
                      <h2 className="font-display text-xl md:text-2xl text-white mb-1">{member.name}</h2>

                      <div className="flex items-center gap-1.5 text-xs text-white/60 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        See more
                        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shrink-0`}
                  >
                    <span className="font-display text-xl font-semibold">{member.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <DialogTitle className="font-display text-2xl text-left">{member.name}</DialogTitle>
                    {member.title && (
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/70 mt-1.5">
                        {member.title}
                      </p>
                    )}
                    {member.organization && (
                      <p className="text-sm text-muted-foreground/60 mt-0.5">{member.organization}</p>
                    )}
                    {!member.title && !member.organization && (
                      <p className="text-sm text-muted-foreground/40 italic mt-1.5">Details coming soon</p>
                    )}
                  </div>
                </div>
                <div className="border-t border-foreground/10 my-5" />
                <DialogDescription asChild>
                  <div>
                    {member.bio ? (
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {member.bio}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">No bio available.</p>
                    )}
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
}
