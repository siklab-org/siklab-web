"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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

function MemberCard({
  member,
  index,
}: {
  member: (typeof members)[number];
  index: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            animate: {
              transition: { staggerChildren: 0.08, delayChildren: index * 0.04 },
            },
          }}
          className="group cursor-pointer"
          style={{ "--card-glow": member.glowRgb } as React.CSSProperties}
        >
          <motion.div
            variants={fadeUp}
            className="relative bg-white border border-foreground/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(var(--card-glow),0.15)] hover:border-[rgba(var(--card-glow),0.25)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {member.imageSrc ? (
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.color} flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03]`}
                >
                  <span className="font-display text-7xl md:text-8xl font-bold text-white/15 select-none">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 md:p-5">
              <h2 className="font-display text-lg md:text-xl text-foreground leading-tight">
                {member.name}
              </h2>
              {member.title && (
                <p className="text-xs text-muted-foreground/70 mt-1.5 opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {member.title}
                </p>
              )}
              {!member.title && member.organization && (
                <p className="text-xs text-muted-foreground/50 mt-1.5 opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {member.organization}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0 gap-0">
        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="p-6 md:p-8 pt-8">
            <div className="flex items-start gap-5">
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shrink-0 shadow-lg`}
              >
                <span className="font-display text-lg md:text-xl font-semibold">
                  {member.initials}
                </span>
              </div>
              <div className="min-w-0">
                <DialogTitle className="font-display text-2xl md:text-3xl text-left leading-tight">
                  {member.name}
                </DialogTitle>
                {member.title && (
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/70 mt-2">
                    {member.title}
                  </p>
                )}
                {member.organization && (
                  <p className="text-sm text-muted-foreground/60 mt-0.5">
                    {member.organization}
                  </p>
                )}
                {!member.title && !member.organization && (
                  <p className="text-sm text-muted-foreground/40 italic mt-2">
                    Details coming soon
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 my-6">
              <span className="h-px flex-1 bg-border" />
              <Quote className="w-4 h-4 text-amber-500/40" />
              <span className="h-px flex-1 bg-border" />
            </div>

            <DialogDescription asChild>
              <div>
                {member.bio ? (
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {member.bio}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    No biography available yet. We look forward to sharing more
                    about {member.name.split(" ")[0]}&apos;s background and
                    contributions.
                  </p>
                )}
              </div>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function BoardOfAdvisors() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-2">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
              Board of Advisors
            </p>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]"
          >
            Guided by
            <br />
            experience.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Our board brings together leaders from across sectors &mdash; public
            health, defense, sustainability, and social enterprise &mdash; to
            steer our mission forward.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <span className="h-px w-16 bg-primary/20" />
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {members.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
