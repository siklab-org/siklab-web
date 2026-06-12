import Link from "next/link";
import type { Metadata } from "next";
import { HeroSection } from "@/src/components/HeroSection";

export const metadata: Metadata = {
  title: "Siklab — Leaders of Tomorrow",
  description:
    "Siklab is an internationally recognized development consulting organization focused on high-level partnerships in Asia.",
  openGraph: {
    title: "Siklab — Leaders of Tomorrow",
    description:
      "Developing young leaders across Asia through education, exchange, and innovation.",
  },
};

const partnerLogos: Record<string, string> = {
  "United Nations": "united-nations.png",
  "USAID": "usaid.png",
  "European Union": "european-union.png",
  "ASEAN": "asean.png",
  "ADB": "adb.png",
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
  "Khan Academy": "khan-academy.png",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="relative w-full border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/50 mb-10 text-center">
            In partnership with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/20">
            {Object.entries(partnerLogos).map(([name, file]) => (
              <div
                key={name}
                className="bg-background flex items-center justify-center p-6 md:p-8"
              >
                <img
                  src={`/partners/${file}`}
                  alt={`${name} logo`}
                  className={`object-contain w-auto ${
                    name === "ADB"
                      ? "max-h-28 md:max-h-32 lg:max-h-36"
                      : "max-h-20 md:max-h-24 lg:max-h-28"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/50 mb-4">
            Let&apos;s build together
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground mb-8">
            Get in touch with us
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Whether you&apos;re an organization seeking partnership or a young leader
            ready to grow, we&apos;d love to hear from you.
          </p>
          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/25 px-8 py-3.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact us
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
