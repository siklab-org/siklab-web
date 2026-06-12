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

const partnerLogos: Record<string, string> = {
  "United Nations": "united-nations.png",
  "USAID": "usaid.png",
  "European Union": "european-union.png",
  "ASEAN": "asean.png",
  "ING": "ing.png",
  "UNICEF": "unicef.png",
  "UNDP": "undp.png",
  "National Youth Commission": "nyc.png",
  "IFRC": "ifrc.png",
  "United Nations Foundation": "un-foundation.png",
  "Enactus": "enactus.png",
  "World Scouts": "world-scouts.png",
  "Duke of Edinburgh": "duke-of-edinburgh.png",
  "The Asia Foundation": "the-asia-foundation.png",
  "RTI": "rti.png",
  "Resolution Project": "resolution-project.png",
  "Global Youth Mobilization": "global-youth-mobilization.png",
  "World YMCA": "world-ymca.png",
};

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
          {Object.entries(partnerLogos).map(([name, file]) => (
            <div
              key={name}
              className="border-b border-r border-foreground/10 p-8"
            >
              <img
                src={`/partners/${file}`}
                alt={`${name} logo`}
                className="object-contain max-h-16 md:max-h-20 w-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
