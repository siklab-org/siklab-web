"use client";

import { motion } from "framer-motion";
import { Quote, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
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
              <div className="mt-1.5 space-y-1">
                {member.title && (
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70 font-medium">
                    {member.title}
                  </p>
                )}
                {member.organization && (
                  <div className="flex items-center gap-2 mt-1">
                    {member.companyLogoSrc && (
                      <img
                        src={member.companyLogoSrc}
                        alt={member.organization}
                        className="h-5 w-auto object-contain grayscale opacity-60"
                      />
                    )}
                    <p className="text-[11px] text-muted-foreground/50">
                      {member.organization}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent
        hideCloseButton
        className="w-[calc(100%-1rem)] max-w-3xl max-h-[80dvh] overflow-hidden p-0 gap-0 sm:rounded-2xl"
      >
        <DialogClose className="absolute right-3 top-3 z-30 flex items-center justify-center w-7 h-7 rounded-full border border-border/70 bg-background/95 text-muted-foreground/80 shadow-sm opacity-90 hover:opacity-100 hover:bg-background cursor-pointer transition-all duration-200">
          <X className="h-3.5 w-3.5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className={`flex overflow-hidden ${member.imageSrc ? 'items-start' : 'items-stretch'}`}>
          {member.imageSrc ? (
            <div className="hidden sm:block shrink-0 overflow-hidden bg-muted/30">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="max-h-[80dvh] w-auto max-w-[30vw] object-contain"
              />
            </div>
          ) : (
            <div
              className={`hidden sm:flex w-48 shrink-0 self-stretch items-center justify-center bg-gradient-to-br ${member.color}`}
            >
              <span className="font-display text-5xl font-bold text-white/15 select-none">
                {member.initials}
              </span>
            </div>
          )}

          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.06 } },
            }}
            className="flex flex-col justify-center overflow-y-auto p-5 md:p-6 min-w-0 min-h-0 flex-1 self-stretch"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <div>
                <DialogTitle className="font-display text-2xl md:text-3xl text-left leading-tight">
                  {member.name}
                </DialogTitle>
                {(member.title || member.organization) && (
                  <div className="mt-2 space-y-1">
                    {member.title && (
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/70">
                        {member.title}
                      </p>
                    )}
                    {member.organization && (
                      <div className="flex items-center gap-2 mt-1">
                        {member.companyLogoSrc && (
                          <img
                            src={member.companyLogoSrc}
                            alt={member.organization}
                            className="h-6 w-auto object-contain"
                          />
                        )}
                        <p className="text-sm text-muted-foreground/60">
                          {member.organization}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {!member.title && !member.organization && (
                  <p className="text-sm text-muted-foreground/40 italic mt-2">
                    Details coming soon
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <Quote className="w-4 h-4 text-amber-500/40 shrink-0" />
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
                      No biography available yet. We look forward to sharing
                      more about {member.name.split(" ")[0]}&apos;s background
                      and contributions.
                    </p>
                  )}
                </div>
              </DialogDescription>
            </motion.div>
          </motion.div>
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
