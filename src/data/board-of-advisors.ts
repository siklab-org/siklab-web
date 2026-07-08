export interface BoardMember {
  name: string;
  title: string;
  organization: string;
  contact: string;
  email: string;
  bio: string;
  imageSrc?: string;
  companyLogoSrc?: string;
}

export interface ProcessedBoardMember extends BoardMember {
  initials: string;
  color: string;
  glowRgb: string;
}

const memberColors = [
  "from-amber-200 to-amber-300 text-amber-900",
  "from-teal-200 to-teal-300 text-teal-900",
  "from-rose-200 to-rose-300 text-rose-900",
  "from-indigo-200 to-indigo-300 text-indigo-900",
  "from-emerald-200 to-emerald-300 text-emerald-900",
  "from-orange-200 to-orange-300 text-orange-900",
  "from-amber-200 to-amber-300 text-amber-900",
  "from-teal-200 to-teal-300 text-teal-900",
  "from-rose-200 to-rose-300 text-rose-900",
  "from-indigo-200 to-indigo-300 text-indigo-900",
  "from-emerald-200 to-emerald-300 text-emerald-900",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export const rawMembers: BoardMember[] = [
  {
    name: "Daren Paul Katigbak",
    title: "Vice-Chair, Board of Trustees",
    organization: "International Planned Parenthood Federation (IPPF)",
    contact: "",
    email: "ajaykrishnan.office@gmail.com",
    imageSrc: "/board/daren.webp",
    companyLogoSrc: "/board/logos/ippf.png",
    bio: "A clinician by training with qualifications in nursing, midwifery and public health, Daren Paul has worked in UN consultancy and academia, combining practice, policy and research to advance sexual and reproductive health and rights (SRHR). He is committed to inclusive, ethical youth-centered approaches that reach underserved and marginalised communities, drawing on lived experience to inform equitable and practical solutions. Based in the Philippines, Daren Paul focuses on strengthening partnerships, scaling community-led initiatives, and driving evidence-based advocacy across the Asia-Pacific region. He also brings proven expertise in fundraising, strategic program delivery, and youth engagement, supported by strong board-management experience from his former role as Deputy Chair of Y+ Global and board engagement with other community-based organisations.",
  },
  {
    name: "Ajay Krishnan",
    title: "Senior Consultant",
    organization: "RAIN Defense +AI",
    contact: "",
    email: "ajaykrishnan.office@gmail.com",
    imageSrc: "/board/ajay.webp",
    companyLogoSrc: "/board/logos/rain-defense-ai.png",
    bio: "Ajay Krishnan is a former fighter pilot with a decade of military experience followed by eight years in the aerospace and defense industry working with the largest contractors in North America and Europe like Cellebrite Inc., Lockheed Martin and Theon Sensors S.A in senior business development, government affairs and program management roles. He has worked extensively with government and public sector agencies across 12 countries in Asia Pacific and the Middle East focusing on large defense and law enforcement programs.\n\nHe is a subject matter expert consultant for multiple deep tech startups, private equity, and research service providers worldwide such as RAIN Defense+AI, McCain Institute, Indigo Edge, Beyond Venture Partners, SlingShot Insights, Third Bridge, GLG, Insight Alpha and HKI Consulting, where he is instrumental in providing his expertise in analyzing startups and established companies working in aerospace and defense, for investments, business combinations, and strategic partnerships, including government engagements across multiple geographies.",
  },
  {
    name: "Michelle Kim-Rissi",
    title: "Co-Founder / Programme Manager / Coordinator",
    organization: "JIVAM Foundation / UN Association Canada / WFUNA",
    contact: "",
    email: "michelle.kim0620@gmail.com",
    imageSrc: "/board/michelle.webp",
    companyLogoSrc: "/board/logos/wfuna.svg",
    bio: "Michelle Kim-Rissi is a sustainability, climate, and global development professional working at the intersection of sustainability, education, international cooperation, and community-driven sustainability initiatives. She currently serves in leadership, coordination, and advisory roles with various organizations including the JIVAM Foundation, the United Nations Association in Canada (UNAC), and the World Federation of United Nations Associations (WFUNA). Her broader experience includes collaborations and engagements with UNEP, UNDP initiatives, Harvard sustainability networks, youth climate coalitions, educational institutions, and international civil society organizations focused on climate action, social impact, and sustainable development.\n\nMichelle holds a Master's degree from Harvard University and Harvard alumni awardee for social change. Over the past decade, she has led and contributed to projects related to climate resilience, environmental education, sustainable communities, youth leadership, and health equity across local and international contexts. She has spoken, facilitated, or represented organizations at conferences, forums, and UN-related events in countries including Canada, the United States, South Korea, the United Arab Emirates, Switzerland, UK and Mexico, including engagements connected to COP, UNEA, CSW, UNGA, and many other UN advocacy forums, climate leadership events, and multilateral dialogues.\n\nHer work has included developing sustainability programs, supporting underserved and Indigenous communities, building international partnerships, and creating initiatives that connect local action to global sustainability goals. Michelle continues to advocate for collaborative and forward-thinking approaches that leverage sustainability and innovation to address global challenges. Her leadership emphasizes the importance of multilateral collaboration, community empowerment, and inclusive sustainability in shaping a more equitable an... (line truncated to 2000 chars)",
  },
  {
    name: "Elin McCallum",
    title: "Executive Director",
    organization: "Bantani Education",
    contact: "",
    email: "elin@bantani.com",
    imageSrc: "/board/elin.webp",
    companyLogoSrc: "/board/logos/bantani.png",
    bio: "",
  },
  {
    name: "Mrwan Mohey",
    title: "Co-Founder & COO",
    organization: "Advanced Rocket Technologies",
    contact: "",
    email: "mrwanmohey@art-tech.space",
    imageSrc: "/board/mrwan.webp",
    companyLogoSrc: "/board/logos/art.png",
    bio: "Mrwan is a space entrepreneur dedicated to accelerating the aerospace ecosystem across the Middle East and Africa. He is the Co-Founder and Chief Operating Officer of Advanced Rocket Technologies, the first space launch company in the MENA region, and appointed judge at the Global Space Awards. In addition to his executive leadership at A.R.T., Mrwan serves as the Egypt Expansion Lead for SpacePoint, driving the regional deployment of hands-on educational satellite programs.",
  },
  // {
  //   name: "Wandile Mthiyane",
  //   title: "Founder and CEO",
  //   organization: "Ubuntu Design Group & Anti-Racist Hot Dog",
  //   contact: "",
  //   email: "wandilemthiyane94@gmail.com",
  //   companyLogoSrc: "/board/logos/ubuntu-design-group.png",
  //   bio: "",
  // },
  // {
  //   name: "Emee Valdeheusa",
  //   title: "Sexual and Reproductive Health Expert",
  //   organization: "",
  //   contact: "",
  //   email: "emeelei@gmail.com",
  //   bio: "",
  // },
  // {
  //   name: "Edward Yee",
  //   title: "Founder",
  //   organization: "Givfunds",
  //   contact: "",
  //   email: "yyfedward@gmail.com",
  //   imageSrc: "/board/edward.png",
  //   companyLogoSrc: "/board/logos/givfunds.png",
  //   bio: "Head of Strategy and Growth at FAR.AI, one of the world's leading independent safety testing organizations for frontier AI models. A serial social entrepreneur (Givfunds, nsave), Rhodes Scholar, Forbes 30 Under 30 honoree, Obama Leader, Commonwealth Youth Award recipient, and co-founder of AI for Asia.",
  // },
  {
    name: "Sherwin Pelayo",
    title: "Executive Director",
    organization: "Analytics and AI Association of the Philippines",
    contact: "",
    email: "sherwin.pelayo@aap.ph",
    imageSrc: "/board/sherwin.png",
    companyLogoSrc: "/board/logos/aap.jpg",
    bio: "Sherwin Pelayo is the Executive Director of the Analytics & Artificial Intelligence Association of the Philippines (AAP) and the Skills Development Lead of the Private Sector Jobs and Skills Corporation (PCORP). He is also the Chair of CHED's Technical Panel on AI and Data Analytics. In these roles, he drives national strategies on AI, analytics, education, and workforce development. He leads initiatives that shape industry standards, support policy development, and position the Philippines as a global leader in technology and innovation. He also champions programs such as the Philippine Skills Framework for Analytics & AI and the National AI Upskilling Roadmap to equip Filipinos with the skills needed to thrive in an AI-powered world.",
  },
  // {
  //   name: "Roger Chao",
  //   title: "Director for Youth and Sports",
  //   organization: "ASEAN",
  //   contact: "",
  //   email: "rylimchao@yahoo.com",
  //   companyLogoSrc: "/partners/asean.png",
  //   bio: "",
  // },
];

const glowRgbMap: Record<string, string> = {
  amber: "217,119,6",
  teal: "13,148,136",
  rose: "225,29,72",
  indigo: "79,70,229",
  emerald: "5,150,105",
  orange: "234,88,12",
};

export function getProcessedMembers(): ProcessedBoardMember[] {
  return rawMembers.map((member, i) => {
    const color = memberColors[i % memberColors.length];
    const colorName = color.split("-")[1];
    return {
      ...member,
      initials: getInitials(member.name),
      color,
      glowRgb: glowRgbMap[colorName] ?? "100,140,220",
    };
  });
}
