import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Siklab partners with global institutions including the UN, USAID, ASEAN, and more.",
  openGraph: {
    title: "Partners — Siklab",
    description: "Our partners across institutions worldwide.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
