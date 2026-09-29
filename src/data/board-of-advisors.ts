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
    name: "Roberto G. Manabat",
    title: "Lead Independent Director",
    organization: "KPMG",
    contact: "",
    email: "",
    imageSrc: "/board/Robert.png",
    companyLogoSrc: "/board/logos/KPMG.webp",
    bio: "Roberto G. Manabat has more than 50 years of track record in the field of accounting and has been an adviser to a number of corporations on financial reporting, internal audit and good corporate governance. He is a recipient of many awards in recognition of his achievements in the accounting profession and in the business community.",
  },
  {
    name: "Ms. Geraldine Acuña-Sunshine",
    title: "President and Chief Executive Officer",
    organization: "Khan Academy Philippines",
    contact: "",
    email: "",
    imageSrc: "/board/Geraldine.png",
    companyLogoSrc: "/board/logos/KhanAcademy.png",
    bio: "A corporate lawyer turned social-impact leader, she serves as President and CEO of Khan Academy Philippines, the platform's first international licensee, which she has scaled to millions of learners across thousands of public schools. A graduate of Harvard College, the Harvard Kennedy School, and Columbia Law School, she was the first Filipino to serve on the Harvard Board of Overseers. She also founded the Sunshine Care Foundation and a Massachusetts General Hospital research center devoted to X-Linked Dystonia Parkinsonism, a rare disease affecting people of Filipino descent.",
  },
  {
    name: "Daren Paul Katigbak",
    title: "Vice-Chair, Board of Trustees",
    organization: "International Planned Parenthood Federation (IPPF)",
    contact: "",
    email: "ajaykrishnan.office@gmail.com",
    imageSrc: "/board/Daren.png",
    companyLogoSrc: "/board/logos/ippf.png",
    bio: "A clinician by training with qualifications in nursing, midwifery and public health, Daren Paul has worked in UN consultancy and academia, combining practice, policy and research to advance sexual and reproductive health and rights (SRHR). He is committed to inclusive, ethical youth-centered approaches that reach underserved and marginalised communities, drawing on lived experience to inform equitable and practical solutions. Based in the Philippines, Daren Paul focuses on strengthening partnerships, scaling community-led initiatives, and driving evidence-based advocacy across the Asia-Pacific region. He also brings proven expertise in fundraising, strategic program delivery, and youth engagement, supported by strong board-management experience from his former role as Deputy Chair of Y+ Global and board engagement with other community-based organisations.",
  },
  {
    name: "Ajay Krishnan",
    title: "Senior Consultant",
    organization: "RAIN Defense +AI",
    contact: "",
    email: "ajaykrishnan.office@gmail.com",
    imageSrc: "/board/Ajay.png",
    companyLogoSrc: "/board/logos/rain-defense-ai.png",
    bio: "Ajay Krishnan is a former fighter pilot with a decade of military experience followed by eight years in the aerospace and defense industry working with the largest contractors in North America and Europe like Cellebrite Inc., Lockheed Martin and Theon Sensors S.A in senior business development, government affairs and program management roles. He has worked extensively with government and public sector agencies across 12 countries in Asia Pacific and the Middle East focusing on large defense and law enforcement programs.\n\nHe is a subject matter expert consultant for multiple deep tech startups, private equity, and research service providers worldwide such as RAIN Defense+AI, McCain Institute, Indigo Edge, Beyond Venture Partners, SlingShot Insights, Third Bridge, GLG, Insight Alpha and HKI Consulting, where he is instrumental in providing his expertise in analyzing startups and established companies working in aerospace and defense, for investments, business combinations, and strategic partnerships, including government engagements across multiple geographies.",
  },
  {
    name: "Michelle Kim-Rissi",
    title: "Co-Founder / Programme Manager / Coordinator",
    organization: "JIVAM Foundation / UN Association Canada / WFUNA",
    contact: "",
    email: "michelle.kim0620@gmail.com",
    imageSrc: "/board/Michelle.png",
    companyLogoSrc: "/board/logos/wfuna.svg",
    bio: "Michelle Kim-Rissi is a sustainability, climate, and global development professional working at the intersection of sustainability, education, international cooperation, and community-driven sustainability initiatives. She currently serves in leadership, coordination, and advisory roles with various organizations including the JIVAM Foundation, the United Nations Association in Canada (UNAC), and the World Federation of United Nations Associations (WFUNA). Her broader experience includes collaborations and engagements with UNEP, UNDP initiatives, Harvard sustainability networks, youth climate coalitions, educational institutions, and international civil society organizations focused on climate action, social impact, and sustainable development.\n\nMichelle holds a Master's degree from Harvard University and Harvard alumni awardee for social change. Over the past decade, she has led and contributed to projects related to climate resilience, environmental education, sustainable communities, youth leadership, and health equity across local and international contexts. She has spoken, facilitated, or represented organizations at conferences, forums, and UN-related events in countries including Canada, the United States, South Korea, the United Arab Emirates, Switzerland, UK and Mexico, including engagements connected to COP, UNEA, CSW, UNGA, and many other UN advocacy forums, climate leadership events, and multilateral dialogues.\n\nHer work has included developing sustainability programs, supporting underserved and Indigenous communities, building international partnerships, and creating initiatives that connect local action to global sustainability goals. Michelle continues to advocate for collaborative and forward-thinking approaches that leverage sustainability and innovation to address global challenges. Her leadership emphasizes the importance of multilateral collaboration, community empowerment, and inclusive sustainability in shaping a more equitable an... (line truncated to 2000 chars)",
  },
  {
    name: "Elin McCallum",
    title: "Executive Director",
    organization: "Bantani Education",
    contact: "",
    email: "elin@bantani.com",
    imageSrc: "/board/Elin.png",
    companyLogoSrc: "/board/logos/bantani.png",
    bio: "Elin McCallum is founder and executive director of Bantani Education, a Belgium-based non-profit working on entrepreneurial and creative learning across Europe and internationally. She has more than twenty years in entrepreneurship education, educator capacity-building and education reform, and has authored both research and policy guidance including the European Commission's EntreComp into Action guide - the practical handbook for the EU entrepreneurship competence framework now used well beyond Europe. She co-founded the EntreComp Community, a network of more than 3,000 educators and organisations across 90 countries.  Her core work is capacity-building in diverse settings: delivering expert training, building change-maker curricula and programmes, or helping ministries embed entrepreneurship and life skills across schools, employment and start-up, from Central Asia to the Western Balkans, Palestine and Namibia. She is a senior expert to the European Commission, European Institute of Technology, the European Training Foundation, CEDEFOP and the OECD, favours experiential and simulation-based methods and gives candid counsel rather than easy agreement.",
  },
  {
    name: "Mrwan Mohey",
    title: "Co-Founder & COO",
    organization: "Advanced Rocket Technologies",
    contact: "",
    email: "mrwanmohey@art-tech.space",
    imageSrc: "/board/Mrwan.png",
    companyLogoSrc: "/board/logos/art.png",
    bio: "Mrwan is a space entrepreneur dedicated to accelerating the aerospace ecosystem across the Middle East and Africa. He is the Co-Founder and Chief Operating Officer of Advanced Rocket Technologies, the first space launch company in the MENA region, and appointed judge at the Global Space Awards. In addition to his executive leadership at A.R.T., Mrwan serves as the Egypt Expansion Lead for SpacePoint, driving the regional deployment of hands-on educational satellite programs.",
  },
  {
    name: "Natalia Fareti",
    title: "Director Strategy & Policy",
    organization: "Land Information New Zealand",
    contact: "",
    email: "",
    imageSrc: "/board/Natalia.png",
    companyLogoSrc: "/board/logos/Toitu.svg",
    bio: "Natalia's career has been about keeping economic, strategic and policy advice simple to understand and practical to implement.\n\nWith practical entrepreneurial experience, she helped grow her family's small food businesses; worked as an economist in the private sector; and held various advisory and managerial roles in economic development, policy, and strategy, across various local and central government agencies, and the Reserve Bank of New Zealand.\n\nNatalia is the Chair of the Government Economics Network in New Zealand. She is also a board member of the Wellington Pasifika Business Network, seeking to increase the number of Pacific owned businesses in the region. She advocates for women and girls as a board member of Y Greater Wellington (YWCA), and is a current member, and former President, of her local branch of PACIFICA Inc, a national women's NGO.\n\nShe has represented NZ in various international programs, and is a facilitator and speaker on multiple topics.\n\nAn avid reader, she enjoys creative writing, good chocolate, and has been learning to play pickleball.",
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
