import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Advisors",
  description:
    "Our board brings together leaders from public health, defense, sustainability, finance, and social enterprise.",
  openGraph: {
    title: "Board of Advisors — Siklab",
    description: "Guided by experience. The leaders steering our mission.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
