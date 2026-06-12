export interface WorkArea {
  title: string;
  description: string;
  subareas: string[];
}

export const workAreas: WorkArea[] = [
  {
    title: "Education",
    description: "Programs that expand access, quality, and equity in learning.",
    subareas: ["Early Childhood Education", "Basic Literacy", "Parent Capacitation", "Digital Literacy"],
  },
  {
    title: "International Exchange",
    description: "Bridging youth across borders through global mobility.",
    subareas: ["Youth Mobility Programs", "Cross-Border Leadership Summits", "Pre-Departure Training"],
  },
  {
    title: "Public-Private Partnership",
    description: "Bringing governments and industry together for shared outcomes.",
    subareas: ["CSR Program Design", "Multi-Sectoral Collaboration", "Industry-Academe Partnerships"],
  },
  {
    title: "Development Consulting",
    description: "Strategy and program design for institutions across Asia.",
    subareas: ["Program Strategy & Design", "Monitoring & Evaluation", "Policy Development", "Development Communication", "Organizational Finance"],
  },
  {
    title: "AI Application",
    description: "Applied AI literacy and tooling for the next generation.",
    subareas: ["AI Literacy & Training", "Digital Transformation", "Capstone Project Mentorship"],
  },
  {
    title: "Social Innovation",
    description: "Backing ventures that solve real community problems.",
    subareas: ["Social Entrepreneurship", "Climate & Disaster Resilience", "Civic Engagement", "Youth-Led Ventures"],
  },
];
