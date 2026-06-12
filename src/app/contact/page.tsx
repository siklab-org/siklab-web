"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface FormData {
  firstName: string;
  lastName: string;
  message: string;
  honeypot: string;
}

export default function Contact() {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<string | null>(null);
  const mountTime = useRef(Date.now());
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const initTurnstile = useCallback(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileRef.current) return;
    if (typeof window === "undefined") return;
    const w = window as unknown as { turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => void; reset: (el: HTMLElement) => void } };
    if (w.turnstile) {
      w.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          tokenRef.current = token;
        },
        "expired-callback": () => {
          tokenRef.current = null;
        },
      });
      setTurnstileReady(true);
    }
  }, []);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      setTurnstileReady(true);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="turnstile"]'
    );
    if (existing) {
      existing.addEventListener("load", initTurnstile);
      return () => existing.removeEventListener("load", initTurnstile);
    }
    if ((window as unknown as { turnstile?: unknown }).turnstile) {
      initTurnstile();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = initTurnstile;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [initTurnstile]);

  const onSubmit = async (data: FormData) => {
    if (submitting) return;
    setSubmitting(true);

    let turnstileToken = tokenRef.current;
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      const widgetId = turnstileRef.current?.getAttribute("data-widget-id");
      if (widgetId && typeof window !== "undefined") {
        const w = window as unknown as { turnstile?: { getResponse: (el: HTMLElement) => string } };
        turnstileToken = w.turnstile?.getResponse(turnstileRef.current!) ?? null;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          message: data.message,
          honeypot: data.honeypot,
          timestamp: mountTime.current.toString(),
          turnstileToken,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.error ?? "Something went wrong.");
        return;
      }

      toast.success("Message sent! We'll get back to you soon.");
      reset();
      tokenRef.current = null;
      if (TURNSTILE_SITE_KEY && typeof window !== "undefined") {
        const w = window as unknown as { turnstile?: { reset: (el: HTMLElement) => void } };
        w.turnstile?.reset(turnstileRef.current!);
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
          variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 border-t border-foreground/10 pt-10"
        >
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="max-w-xl space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                  First name
                </label>
                <input
                  id="firstName"
                  {...register("firstName", { required: "First name is required." })}
                  className="w-full px-4 py-2.5 bg-muted/30 border border-foreground/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Maria"
                />
                {errors.firstName && (
                  <p className="text-[11px] text-red-500/80 mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                  Last name
                </label>
                <input
                  id="lastName"
                  {...register("lastName", { required: "Last name is required." })}
                  className="w-full px-4 py-2.5 bg-muted/30 border border-foreground/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Santos"
                />
                {errors.lastName && (
                  <p className="text-[11px] text-red-500/80 mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required." })}
                className="w-full px-4 py-2.5 bg-muted/30 border border-foreground/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-y"
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="text-[11px] text-red-500/80 mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="hidden" aria-hidden>
              <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            <div ref={turnstileRef} className="min-h-[65px]" />

            <button
              type="submit"
              disabled={submitting || !turnstileReady}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/90 disabled:opacity-40 disabled:pointer-events-none"
            >
              {submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send message
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </>
              )}
            </button>
          </motion.form>
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
