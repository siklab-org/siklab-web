export interface BoardMember {
  name: string;
  title: string;
  organization: string;
  contact: string;
  email: string;
  bio: string;
  imageSrc?: string;
}

export interface ProcessedBoardMember extends BoardMember {
  initials: string;
  color: string;
}

const memberColors = [
  "from-amber-200 to-amber-300 text-amber-900",
  "from-teal-200 to-teal-300 text-teal-900",
  "from-rose-200 to-rose-300 text-rose-900",
  "from-indigo-200 to-indigo-300 text-indigo-900",
  "from-emerald-200 to-emerald-300 text-emerald-900",
  "from-orange-200 to-orange-300 text-orange-900",
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
    email: "",
    bio: "A clinician by training with qualifications in nursing, midwifery and public health, Daren Paul has worked in UN consultancy and academia, combining practice, policy and research to advance sexual and reproductive health and rights (SRHR). He is committed to inclusive, ethical youth-centered approaches that reach underserved and marginalised communities, drawing on lived experience to inform equitable and practical solutions. Based in the Philippines, Daren Paul focuses on strengthening partnerships, scaling community-led initiatives, and driving evidence-based advocacy across the Asia-Pacific region. He also brings proven expertise in fundraising, strategic program delivery, and youth engagement, supported by strong board-management experience from his former role as Deputy Chair of Y+ Global and board engagement with other community-based organisations.",
  },
  {
    name: "Ajay Krishnan",
    title: "Senior Consultant",
    organization: "Rain Defense +AI",
    contact: "",
    email: "",
    bio: "Ajay Krishnan is a former fighter pilot with a decade of military experience followed by eight years in the aerospace and defense industry working with the largest contractors in North America and Europe like Cellebrite Inc., Lockheed Martin and Theon Sensors S.A in senior business development, government affairs and program management roles. He has worked extensively with government and public sector agencies across 12 countries in Asia Pacific and the Middle East focusing on large defense and law enforcement programs.\n\nHe is a subject matter expert consultant for multiple deep tech startups, private equity, and research service providers worldwide such as RAIN Defense+AI, McCain Institute, Indigo Edge, Beyond Venture Partners, SlingShot Insights, Third Bridge, GLG, Insight Alpha and HKI Consulting, where he is instrumental in providing his expertise in analyzing startups and established companies working in aerospace and defense, for investments, business combinations, and strategic partnerships, including government engagements across multiple geographies.",
  },
  {
    name: "Michelle Kim-Rissi",
    title: "Co-Founder / Programme Manager / Coordinator",
    organization: "JIVAM Foundation / UN Association Canada / World Federation of United Nations",
    contact: "",
    email: "",
    bio: "Michelle Kim-Rissi is a sustainability, climate, and global development professional working at the intersection of sustainability, education, international cooperation, and community-driven sustainability initiatives. She currently serves in leadership, coordination, and advisory roles with various organizations including the JIVAM Foundation, the United Nations Association in Canada (UNAC), and the World Federation of United Nations Associations (WFUNA). Her broader experience includes collaborations and engagements with UNEP, UNDP initiatives, Harvard sustainability networks, youth climate coalitions, educational institutions, and international civil society organizations focused on climate action, social impact, and sustainable development.\n\nMichelle holds a Master's degree from Harvard University and Harvard alumni awardee for social change. Over the past decade, she has led and contributed to projects related to climate resilience, environmental education, sustainable communities, youth leadership, and health equity across local and international contexts. She has spoken, facilitated, or represented organizations at conferences, forums, and UN-related events in countries including Canada, the United States, South Korea, the United Arab Emirates, Switzerland, UK and Mexico, including engagements connected to COP, UNEA, CSW, UNGA, and many other UN advocacy forums, climate leadership events, and multilateral dialogues.\n\nHer work has included developing sustainability programs, supporting underserved and Indigenous communities, building international partnerships, and creating initiatives that connect local action to global sustainability goals. Michelle continues to advocate for collaborative and forward-thinking approaches that leverage sustainability and innovation to address global challenges. Her leadership emphasizes the importance of multilateral collaboration, community empowerment, and inclusive sustainability in shaping a more equitable and resilient future.",
  },
  {
    name: "Joey Leviste",
    title: "",
    organization: "",
    contact: "",
    email: "",
    bio: "",
  },
  {
    name: "Elin McCallum",
    title: "",
    organization: "",
    contact: "",
    email: "",
    bio: "",
  },
];

export function getProcessedMembers(): ProcessedBoardMember[] {
  return rawMembers.map((member, i) => ({
    ...member,
    initials: getInitials(member.name),
    color: memberColors[i % memberColors.length],
  }));
}
