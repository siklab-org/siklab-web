import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Siklab for partnerships and programs.",
  openGraph: {
    title: "Contact — Siklab",
    description: "Reach the Siklab team.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
