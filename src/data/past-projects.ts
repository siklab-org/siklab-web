export interface PastProject {
  name: string;
  subtitle: string;
  description: string;
  period: string;
  tags: string[];
  category: "Education" | "Youth Development" | "Governance & Innovation" | "International Engagement";
  impacts?: { value: string; label: string }[];
}

export const pastProjects: PastProject[] = [
  {
    name: "ABC+ Project",
    subtitle: "Early Grade Literacy and Parent Engagement",
    description:
      "Provides a wide array of support to Early Grade and Primary School learners from highly-vulnerable sectors. The program creates a holistic learning environment by including parents through capacity-building sessions on basic storytelling and literacy, enabling them to support their children's education from home.",
    period: "2023 &mdash; 2024",
    tags: ["Basic Literacy", "Parent Engagement", "Early Childhood"],
    category: "Education",
    impacts: [
      { value: "25", label: "Communities engaged" },
      { value: "3,000+", label: "Books donated" },
      { value: "300", label: "Parents in literacy program" },
      { value: "300", label: "Children supported" },
    ],
  },
  {
    name: "Community Learning Hub",
    subtitle: "Pandemic-Response Tutorial & Literacy Program",
    description:
      "Launched during the height of the COVID-19 lockdown, the CLH provided face-to-face basic tutorial and literacy sessions for underprivileged primary school learners in highly-vulnerable communities. The program also employed newly-licensed teachers as tutors and included a feeding program component.",
    period: "2020 &mdash; 2022",
    tags: ["COVID-19 Response", "Literacy", "Community Development"],
    category: "Education",
    impacts: [
      { value: "5,000+", label: "Students supported" },
      { value: "2,000+", label: "Non-readers impacted" },
      { value: "120", label: "Teachers employed" },
      { value: "9", label: "Communities served" },
    ],
  },
  {
    name: "Hack the Future",
    subtitle: "Young Leaders for Asia Challenge",
    description:
      "A regional youth engagement and innovation challenge bridging digital gaps across Asia. The program mobilized young leaders to design technology-driven solutions addressing pressing social challenges, fostering cross-border collaboration and digital literacy among emerging innovators.",
    period: "2022 &mdash; 2024",
    tags: ["Innovation Challenge", "Regional", "Digital Literacy"],
    category: "Youth Development",
    impacts: [
      { value: "6", label: "Teams awarded seed grants" },
      { value: "4+", label: "Virtual masterclass series" },
      { value: "Multi-country", label: "ASEAN participation" },
      { value: "USD 10K", label: "Seed grants per team" },
    ],
  },
  {
    name: "Pathways Fellowship",
    subtitle: "10-Week Venture Launch Intensive",
    description:
      "An intensive fellowship exposing emerging founders to industry veterans and the principles of Industry 4.0. Over ten weeks, participants developed venture concepts, received mentorship from seasoned entrepreneurs, and built foundational skills to launch and scale technology-driven enterprises.",
    period: "2023 &mdash; 2024",
    tags: ["Fellowship", "Mentorship", "Industry 4.0"],
    category: "Youth Development",
    impacts: [
      { value: "10", label: "Weeks intensive" },
      { value: "Multi-sector", label: "Industry mentors" },
      { value: "Venture Launch", label: "Capstone projects" },
    ],
  },
  {
    name: "Local Youth Assembly",
    subtitle: "Regional Summits for Grassroots Leaders",
    description:
      "A set of regional summits designed to empower young leaders with skills and resources to create impact within their local communities. The summits offered cross-generational mentorship, collaborative opportunities, and diverse panel discussions with speakers from government, the private sector, and youth leadership.",
    period: "2018 &mdash; 2023",
    tags: ["Youth Summits", "Civic Participation", "Mentorship"],
    category: "Youth Development",
  },
  {
    name: "Model City Council",
    subtitle: "Youth-Led Innovation Ecosystems for Local Government",
    description:
      "Works directly with government institutions to create innovation-centered ecosystems for young people, with a focus on Industry 4.0 skills. The venture is designed to secure data, develop priority agenda points for government, and create opportunities for direct youth participation through seed funding, lobbying, and public-private collaboration.",
    period: "2019 &mdash; 2023",
    tags: ["Governance", "Innovation Ecosystem", "Public-Private Partnership"],
    category: "Governance & Innovation",
    impacts: [
      { value: "Multi-city", label: "Government partners" },
      { value: "Seed funded", label: "Best teams" },
      { value: "Localized", label: "Impact per city" },
    ],
  },
  {
    name: "UN Youth Assembly",
    subtitle: "Delegates to the United Nations General Assembly",
    description:
      "Gathers top young leaders from around the world to converse, collaborate, and co-create solutions for the SDGs. Held bi-annually at the UN General Assembly in New York, Siklab has successfully fielded over 200 outstanding young leaders to the summit, co-creating pre-departure programs and preparatory courses.",
    period: "2017 &mdash; 2024",
    tags: ["United Nations", "Global Leadership", "SDGs"],
    category: "International Engagement",
    impacts: [
      { value: "200+", label: "Delegates fielded" },
      { value: "Bi-annual", label: "UN General Assembly" },
      { value: "Global", label: "Network of leaders" },
    ],
  },
  {
    name: "ACI Youth Leader Summit",
    subtitle: "Cross-Border Youth Leadership Development",
    description:
      "A summit designed to nurture young leaders by providing them with skills and knowledge to address pressing global challenges and make a positive impact in their local communities and globally. Bringing together participants from across Asia for high-level panels and collaborative sessions.",
    period: "2018 &mdash; 2023",
    tags: ["Youth Leadership", "Asia-Pacific", "Cross-Border"],
    category: "International Engagement",
    impacts: [
      { value: "5,000+", label: "Students" },
      { value: "12", label: "Countries" },
    ],
  },
];

export const categories = [
  { id: "Education", label: "Education", description: "Programs that expand access, quality, and equity in learning — from early childhood to digital literacy." },
  { id: "Youth Development", label: "Youth Development", description: "Fellowships, challenges, and assemblies that build leadership and entrepreneurial capacity." },
  { id: "Governance & Innovation", label: "Governance & Innovation", description: "Building innovation ecosystems and policy frameworks with local and national government." },
  { id: "International Engagement", label: "International Engagement", description: "Cross-border programs that connect Asian youth to global platforms and networks." },
] as const;
