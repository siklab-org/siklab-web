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

const partners = [
  "United Nations", "USAID", "European Union", "ASEAN", "ING", "UNICEF",
  "UNDP", "National Youth Commission", "IFRC", "United Nations Foundation",
  "Enactus", "World Scouts", "Duke of Edinburgh", "The Asia Foundation",
  "RTI", "Resolution Project", "Global Youth Mobilization", "World YMCA",
];

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
            {partners.map((p) => (
              <div
                key={p}
                className="bg-background flex items-center justify-center p-6 md:p-8 text-sm md:text-base text-foreground/60 font-medium"
              >
                {p}
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
              className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
