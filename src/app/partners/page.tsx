import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Siklab partners with global institutions including the UN, USAID, ASEAN, and more.",
  openGraph: {
    title: "Partners — Siklab",
    description: "Our partners across institutions worldwide.",
  },
};

const partners = [
  "United Nations", "USAID", "European Union", "ASEAN", "ING", "UNICEF",
  "UNDP", "National Youth Commission", "IFRC", "United Nations Foundation",
  "Enactus", "World Scouts", "Duke of Edinburgh", "The Asia Foundation",
  "RTI", "Resolution Project", "Global Youth Mobilization", "World YMCA",
];

export default function Partners() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">Partners</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">In good company.</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          We work alongside multilateral institutions, governments, foundations, and
          industry leaders to deliver programs at scale across Asia.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-foreground/10">
          {partners.map((p) => (
            <div
              key={p}
              className="border-b border-r border-foreground/10 p-8 font-display text-lg text-foreground/80 hover:text-primary transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
