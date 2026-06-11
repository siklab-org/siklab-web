import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Siklab for partnerships and programs.",
  openGraph: {
    title: "Contact — Siklab",
    description: "Reach the Siklab team.",
  },
};

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Let&apos;s build something together.</h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          For partnerships, press, and program inquiries, get in touch with our team.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-10 border-t border-foreground/10 pt-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <a href="mailto:hello@siklab.org.ph" className="mt-2 block font-display text-2xl text-primary hover:underline">
              hello@siklab.org.ph
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
            <div className="mt-2 font-display text-2xl text-foreground">Manila, Philippines</div>
          </div>
        </div>
      </section>
    </>
  );
}
