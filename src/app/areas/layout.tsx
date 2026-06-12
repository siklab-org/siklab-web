import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Work",
  description:
    "Education, international exchange, public-private partnerships, development consulting, AI, and social innovation.",
  openGraph: {
    title: "Areas of Work — Siklab",
    description: "Where Siklab focuses its work.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
