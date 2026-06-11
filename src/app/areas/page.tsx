import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Work",
  description:
    "Education, international exchange, public-private partnerships, development consulting, AI, and social innovation.",
  openGraph: {
    title: "Areas of Work — Siklab",
    description: "Where Siklab focuses its work.",
  },
};

const areas = [
  { t: "Education", d: "Programs that expand access, quality, and equity in learning." },
  { t: "International Exchange", d: "Bridging youth across borders through global mobility." },
  { t: "Public-Private Partnership", d: "Bringing governments and industry together for shared outcomes." },
  { t: "Development Consulting", d: "Strategy and program design for institutions across Asia." },
  { t: "AI Application", d: "Applied AI literacy and tooling for the next generation." },
  { t: "Social Innovation", d: "Backing ventures that solve real community problems." },
];

export default function Areas() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">Areas of Work</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Where we focus.</h1>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-x-12 gap-y-2 divide-y md:divide-y-0 divide-foreground/10">
        {areas.map((a) => (
          <div key={a.t} className="py-8 border-b border-foreground/10">
            <h2 className="font-display text-2xl text-foreground">{a.t}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{a.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
