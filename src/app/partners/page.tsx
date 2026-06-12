"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

interface Partner {
  name: string;
  file: string;
  description: string;
}

const partners: Partner[] = [
  {
    name: "United Nations",
    file: "united-nations.png",
    description:
      "Global partner through the various UN bodies that have funded and supported our programs.",
  },
  {
    name: "ASEAN",
    file: "asean.png",
    description:
      "Supported and recognized our work on skills, education, and public-private partnerships across the region.",
  },
  {
    name: "European Union",
    file: "european-union.png",
    description:
      "Funded digital innovation programs across Southeast Asia that provided seed funding to various startups focusing on addressing the digital divide in their countries.",
  },
  {
    name: "USAID",
    file: "usaid.png",
    description:
      "Funded catalytic programs on democracy, education, and public-private partnerships centered around youth and local communities.",
  },
  {
    name: "Enactus",
    file: "enactus.png",
    description:
      "Empowering student social entrepreneurship with Siklab on SDG-aligned programs.",
  },

  {
    name: "Khan Academy",
    file: "khan-academy.png",
    description: "Co-presenter for Enactus Philippines.",
  },
  {
    name: "KPMG",
    file: "kpmg.png",
    description: "Partner for Enactus.",
  },
  {
    name: "ING",
    file: "ing.png",
    description:
      "Funded catalytic programs on providing adolescents access to government funding and creating national ecosystems for innovation and entrepreneurship in the Philippines.",
  },
  {
    name: "UNICEF",
    file: "unicef.png",
    description:
      "Funded catalytic programs on providing adolescents access to government funding and creating national ecosystems for innovation and entrepreneurship in the Philippines.",
  },
  {
    name: "UNDP",
    file: "undp.png",
    description:
      "Funded social innovation programs that supported local access to government funding for youth.",
  },
  {
    name: "National Youth Commission",
    file: "nyc.png",
    description: "Primary funder for AI for Asia.",
  },
  {
    name: "ADB",
    file: "adb.png",
    description: "Technical partner for AI for Asia",
  },

  {
    name: "IFRC",
    file: "ifrc.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
  {
    name: "United Nations Foundation",
    file: "un-foundation.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
  {
    name: "World Scouts",
    file: "world-scouts.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
  {
    name: "Duke of Edinburgh",
    file: "duke-of-edinburgh.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
  {
    name: "The Asia Foundation",
    file: "the-asia-foundation.png",
    description:
      "Development partner for programs across Asia focused on governance and education.",
  },
  {
    name: "RTI",
    file: "rti.png",
    description:
      "Research and institutional partner for evidence-based education programs.",
  },
  {
    name: "Resolution Project",
    file: "resolution-project.png",
    description:
      "Partnered on social venture support for young leaders across the region.",
  },
  {
    name: "Global Youth Mobilization",
    file: "global-youth-mobilization.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
  {
    name: "World YMCA",
    file: "world-ymca.png",
    description:
      "Funded educational hubs launched during the COVID-19 pandemic covering 12 communities and over 10,000+ learners and teachers.",
  },
];

export default function Partners() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6"
          >
            Partners
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl tracking-tight"
          >
            In good company.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-muted-foreground leading-relaxed"
          >
            We work alongside multilateral institutions, governments,
            foundations, and industry leaders to deliver programs at scale
            across Asia.
          </motion.p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ animate: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-2 md:grid-cols-3"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              className="p-8 flex flex-col items-center justify-center"
            >
              <div className="h-28 md:h-36 flex items-center justify-center mb-4 w-full">
                <img
                  src={`/partners/${partner.file}`}
                  alt={`${partner.name} logo`}
                  className={`object-contain w-auto ${
                    partner.name === "ADB" ||
                    partner.name === "United Nations" ||
                    partner.name === "Khan Academy"
                      ? "max-h-28 md:max-h-36"
                      : "max-h-24 md:max-h-28"
                  }`}
                />
              </div>
              <p className="text-xs text-center text-muted-foreground/70 leading-relaxed max-w-[220px]">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
