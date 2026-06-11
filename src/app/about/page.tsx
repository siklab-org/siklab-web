import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Siklab is a development consulting organization focused on partnerships in Asia.",
  openGraph: {
    title: "About — Siklab",
    description: "Our mission, work, and the people behind Siklab.",
  },
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">About</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.05]">
          A development organization rooted in <em className="text-primary not-italic">Asia</em>.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Siklab partners with governments, multilateral institutions, the private sector,
          and grassroots communities to design and deliver programs that develop the next
          generation of leaders. We work where policy meets practice — translating ambition
          into measurable change.
        </p>
      </section>
      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-foreground">Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To catalyze young leaders across Asia through experiential learning,
              international exchange, and entrepreneurial action.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground">Recognition</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Siklab was awarded the Misk 20 Under 30 at the Misk Global Forum in
              Riyadh by the Mohammed Bin Salman (Misk) Foundation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
