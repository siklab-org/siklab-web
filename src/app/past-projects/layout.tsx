import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Projects",
  description:
    "Archived flagship programs from Siklab — completed initiatives whose impact continues through the communities they built.",
  openGraph: {
    title: "Past Projects | Siklab",
    description:
      "Completed initiatives from Siklab that have shaped communities across Asia.",
  },
};

export default function PastProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
