import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Siklab is a development consulting organization focused on partnerships in Asia.",
  openGraph: {
    title: "About — Siklab",
    description: "Our mission, work, and the people behind Siklab.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
