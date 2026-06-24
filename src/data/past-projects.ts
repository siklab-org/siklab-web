export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface PastProject {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  period: string;
  tags: string[];
  category:
    | "Education"
    | "Youth Development"
    | "Governance & Innovation"
    | "International Engagement";
  impacts?: { value: string; label: string }[];
  logos?: PartnerLogo[];
  projectUrl?: string;
  projectLogo?: string;
  images?: string[];
}

export const pastProjects: PastProject[] = [
  {
    slug: "abc-plus-project",
    name: "ABC+ Project",
    subtitle: "Early Grade Literacy and Parent Engagement",
    description:
      "Provides a wide array of support to Early Grade and Primary School learners from highly-vulnerable sectors. The program creates a holistic learning environment by including parents through capacity-building sessions on basic storytelling and literacy, enabling them to support their children's education from home.",
    period: "2023 &mdash; 2024",
    tags: ["Basic Literacy", "Parent Engagement", "Early Childhood"],
    category: "Education",
    projectLogo: "/past-projects/logos/abc-plus.png",
    projectUrl: "https://siklab.org.ph/advanceing-basic-education-philippines",
    logos: [
      { src: "/partners/usaid.png", alt: "USAID" },
      { src: "/partners/deped.png", alt: "Department of Education" },
      { src: "/partners/the-asia-foundation.png", alt: "The Asia Foundation" },
      { src: "/partners/rti.png", alt: "RTI International" },
    ],
    impacts: [
      { value: "25", label: "Communities engaged" },
      { value: "6,000+", label: "Books donated" },
      { value: "600+", label: "Parents trained and organized" },
      { value: "5,000", label: "Children in literacy training" },
    ],
    images: [
      "/abc-plus/DSC_0125.JPG",
      "/abc-plus/DSC_0185.JPG",
    ],
  },
  {
    slug: "community-learning-hub",
    name: "Community Learning Hub",
    subtitle: "Pandemic-Response Tutorial & Literacy Program",
    description:
      "Launched during the height of the COVID-19 lockdown, the CLH provided face-to-face basic tutorial and literacy sessions for underprivileged primary school learners in highly-vulnerable communities. The program also employed newly-licensed teachers as tutors and included a feeding program component.",
    period: "2020 &mdash; 2022",
    tags: ["COVID-19 Response", "Literacy", "Community Development"],
    category: "Education",
    projectLogo: "/past-projects/logos/community-learning-hub.png",
    projectUrl: "https://siklab.org.ph/bayanihan-eskwela/",
    logos: [
      { src: "/partners/who.png", alt: "World Health Organization" },
      {
        src: "/partners/office-of-the-president.png",
        alt: "Office of the President",
      },
      { src: "/partners/roddenberry.png", alt: "Roddenberry Foundation" },
      { src: "/partners/un-foundation.png", alt: "United Nations Foundation" },
      {
        src: "/partners/world-scouts.png",
        alt: "World Organization of the Scout Movement",
      },
      { src: "/partners/ifrc.png", alt: "IFRC" },
      {
        src: "/partners/duke-of-edinburgh.png",
        alt: "The Duke of Edinburgh's International Award",
      },
      {
        src: "/partners/global-youth-mobilization.png",
        alt: "Global Youth Mobilization",
      },
    ],
    impacts: [
      { value: "15,000+", label: "Students supported during Covid" },
      { value: "5,000+", label: "Non-readers impacted" },
      { value: "150+", label: "Teachers employed during Covid" },
      { value: "20", label: "Communities served" },
      { value: "10,000+", label: "Students served annually" },
    ],
    images: [
      "/past-projects/community-learning-hub-1.jpg",
      "/past-projects/community-learning-hub-2.jpg",
      "/past-projects/community-learning-hub-3.jpg",
    ],
  },
  {
    slug: "hack-the-future",
    name: "Hack the Future",
    subtitle: "Young Leaders for Asia Challenge",
    description:
      "A regional youth engagement and innovation challenge bridging digital gaps across Asia. The program mobilized young leaders to design technology-driven solutions addressing pressing social challenges, fostering cross-border collaboration and digital literacy among emerging innovators.",
    period: "2025",
    tags: ["Innovation Challenge", "Regional", "Digital Literacy"],
    category: "Youth Development",
    logos: [
      { src: "/partners/asean.png", alt: "ASEAN" },
      { src: "/partners/european-union.png", alt: "European Union" },
      { src: "/partners/civicus.png", alt: "CIVICUS" },
    ],
    impacts: [
      { value: "4", label: "Teams awarded seed grants" },
      { value: "6", label: "Virtual masterclass series" },
      { value: "Multi-country", label: "ASEAN participation" },
      { value: "$50K", label: "Funding pool" },
    ],
    images: [
      "/past-projects/hack-the-future-3.jpg",
      "/past-projects/hack-the-future-4.jpg",
    ],
  },
  {
    slug: "pathways-fellowship",
    name: "Pathways Fellowship",
    subtitle: "10-Week Venture Launch Intensive",
    description:
      "An intensive fellowship exposing emerging founders to industry veterans and the principles of Industry 4.0. Over ten weeks, participants developed venture concepts, received mentorship from seasoned entrepreneurs, and built foundational skills to launch and scale technology-driven enterprises.",
    period: "2023 &mdash; 2025",
    tags: ["Fellowship", "Mentorship", "Industry 4.0"],
    category: "Youth Development",
    logos: [
      { src: "/partners/unicef.png", alt: "UNICEF" },
      { src: "/partners/ing.png", alt: "ING" },
      {
        src: "/partners/office-of-the-president.png",
        alt: "Office of the President",
      },
    ],
    impacts: [
      { value: "10", label: "Weeks intensive" },
      { value: "Multi-sector", label: "Industry mentors" },
      { value: "Venture Launch", label: "Capstone projects" },
    ],
    images: [
      "/past-projects/pathways-fellowship-1.jpg",
      "/past-projects/pathways-fellowship-2.jpg",
    ],
  },
  {
    slug: "local-youth-assembly",
    name: "Local Youth Assembly",
    subtitle: "Regional Summits for Grassroots Leaders",
    description:
      "A set of regional summits designed to empower young leaders with skills and resources to create impact within their local communities. The summits offered cross-generational mentorship, collaborative opportunities, and diverse panel discussions with speakers from government, the private sector, and youth leadership.",
    period: "2023 &mdash; 2024",
    tags: ["Youth Summits", "Civic Participation", "Mentorship"],
    category: "Youth Development",
    projectUrl: "https://siklab.org.ph/local-youth-assembly",
    // USAID first, last asia foundation
    logos: [
      { src: "/partners/usaid.png", alt: "USAID" },
      {
        src: "/partners/office-of-the-president.png",
        alt: "Office of the President",
      },
      { src: "/partners/dilg.png", alt: "DILG" },
      { src: "/partners/the-asia-foundation.png", alt: "The Asia Foundation" },
    ],
    impacts: [
      { value: "1000+", label: "Youth candidates trained" },
      { value: "10", label: "Regional summits held" },
    ],
    images: [
      "/past-projects/local-youth-assembly-3.jpg",
      "/past-projects/local-youth-assembly-4.jpg",
    ],
  },
  {
    slug: "model-city-council",
    name: "Model City Council",
    subtitle: "Youth-Led Innovation Ecosystems for Local Government",
    description:
      "Works directly with government institutions to create innovation-centered ecosystems for young people, with a focus on Industry 4.0 skills. The venture is designed to secure data, develop priority agenda points for government, and create opportunities for direct youth participation through seed funding, lobbying, and public-private collaboration.",
    period: "2016 &mdash; Present",
    tags: ["Governance", "Innovation Ecosystem", "Public-Private Partnership"],
    category: "Governance & Innovation",
    projectLogo: "/past-projects/logos/model-city-council.png",
    logos: [
      { src: "/partners/dilg.png", alt: "DILG" },
      { src: "/partners/usaid.png", alt: "USAID" },
      { src: "/partners/unicef.png", alt: "UNICEF" },
      { src: "/partners/ing.png", alt: "ING" },
      { src: "/partners/adb.png", alt: "ADB" },
      { src: "/partners/undp.png", alt: "UNDP" },
    ],
    impacts: [
      { value: "$500K", label: "Mobilized in seed funding" },
      { value: "50,000+", label: "Youth surveyed" },
      { value: "15,000", label: "Program participants" },
      {
        value: "150,000+",
        label: "In direct beneficiaries through various ventures",
      },
    ],
    images: [
      "/model-city-council/BOB_0112.JPG",
      "/model-city-council/BOB_0161.JPG",
      "/model-city-council/BOB_5040.JPG",
    ],
  },
  {
    slug: "un-youth-assembly",
    name: "UN Youth Assembly",
    subtitle: "Delegates to the United Nations General Assembly",
    description:
      "Gathers top young leaders from around the world to converse, collaborate, and co-create solutions for the SDGs. Held bi-annually at the UN General Assembly in New York, Siklab has successfully fielded over 200 outstanding young leaders to the summit, co-creating pre-departure programs and preparatory courses.",
    period: "2016 &mdash; 2019",
    tags: ["United Nations", "Global Leadership", "SDGs"],
    category: "International Engagement",
    projectLogo: "/past-projects/logos/un-youth-assembly.png",
    projectUrl: "https://siklab.org.ph/the-youth-assembly/",
    logos: [
      { src: "/partners/united-nations.png", alt: "United Nations" },
      { src: "/partners/world-bank.png", alt: "World Bank" },
    ],
    impacts: [
      { value: "250+", label: "Delegates fielded" },
      { value: "Bi-annual", label: "UN General Assembly" },
      { value: "Global", label: "Network of leaders" },
    ],
    images: [
      "/un-youth-assembly/delegation-1.jpg",
      "/un-youth-assembly/delegation-2.jpg",
    ],
  },
  {
    slug: "aci-youth-leader-summit",
    name: "ACI Youth Leader Summit",
    subtitle: "Cross-Border Youth Leadership Development",
    description:
      "A summit designed to nurture young leaders by providing them with skills and knowledge to address pressing global challenges and make a positive impact in their local communities and globally. Bringing together participants from across Asia for high-level panels and collaborative sessions.",
    period: "2024",
    tags: ["Youth Leadership", "Asia-Pacific", "Cross-Border"],
    category: "International Engagement",
    projectLogo: "/past-projects/logos/aci-youth-leader-summit.png",
    projectUrl: "https://siklab.org.ph/youth-leadership-summit",
    logos: [
      { src: "/partners/osg.png", alt: "Office of the Solicitor General" },
      { src: "/partners/resolute.png", alt: "Resolute" },
      { src: "/partners/asean.png", alt: "ASEAN" },
      { src: "/partners/nyc.png", alt: "National Youth Commission" },
    ],
    impacts: [
      { value: "5,000+", label: "Students" },
      { value: "12", label: "Countries" },
    ],
    images: [
      "/aci-youth-leader/aci-yl-1.jpg",
      "/aci-youth-leader/aci-yl-2.jpg",
      "/aci-youth-leader/aci-yl-3.jpg",
    ],
  },
];

export const categories = [
  {
    id: "Education",
    label: "Education",
    description:
      "Programs that expand access, quality, and equity in learning — from early childhood to digital literacy.",
  },
  {
    id: "Youth Development",
    label: "Youth Development",
    description:
      "Fellowships, challenges, and assemblies that build leadership and entrepreneurial capacity.",
  },
  {
    id: "Governance & Innovation",
    label: "Governance & Innovation",
    description:
      "Building innovation ecosystems and policy frameworks with local and national government.",
  },
  {
    id: "International Engagement",
    label: "International Engagement",
    description:
      "Cross-border programs that connect Asian youth to global platforms and networks.",
  },
] as const;
