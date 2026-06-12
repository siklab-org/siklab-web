import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Current initiatives driving youth leadership, innovation, and entrepreneurial action across Asia — AI for Asia and Enactus Philippines.",
  openGraph: {
    title: "Projects | Siklab",
    description:
      "Live initiatives from Siklab: AI for Asia and Enactus Philippines.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
