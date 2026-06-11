import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Flagship programs from Siklab: Enactus, AI for Asia, Hack the Future, and the Pathways Fellowship.",
  openGraph: {
    title: "Programs — Siklab",
    description: "Flagship initiatives developing youth across Asia.",
  },
};

const programs = [
  { name: "Enactus", desc: "Team-based experiential learning and competition that catalyzes young people to take positive entrepreneurial action in their communities, advancing the Global Goals." },
  { name: "AI for Asia", desc: "A regional capacity-building initiative empowering ASEAN youth with the knowledge, skills, and networks to thrive in an AI-driven future." },
  { name: "Hack the Future", desc: "Young Leaders for Asia Challenge — a regional youth engagement and innovation challenge bridging digital gaps across Asia." },
  { name: "Pathways Fellowship", desc: "A 10-week intensive that exposes emerging founders to industry veterans and the principles of Industry 4.0 to launch and scale ventures." },
];

export default function Programs() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6">Programs</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Flagship initiatives.</h1>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 divide-y divide-foreground/10">
        {programs.map((p, i) => (
          <article key={p.name} className="py-12 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-2 text-muted-foreground font-mono text-sm pt-2">0{i + 1}</div>
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl text-foreground">{p.name}</h2>
            </div>
            <p className="md:col-span-6 text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
