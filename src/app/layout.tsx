import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Siklab — Leaders of Tomorrow",
    template: "%s — Siklab",
  },
  description:
    "Siklab is an internationally recognized development consulting organization focused on high-level partnerships in Asia.",
  authors: [{ name: "Siklab" }],
  openGraph: {
    title: "Siklab — Leaders of Tomorrow",
    description:
      "Developing young leaders across Asia through education, exchange, and innovation.",
    type: "website",
    images:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e5cc12f1-c6d3-4dd7-95a1-8a680c6490ac/id-preview-43303485--70c5df59-2f12-43af-a28a-cccf6fc2e7fd.lovable.app-1781159719416.png",
  },
  twitter: {
    card: "summary",
    site: "@Siklab",
    title: "Siklab — Leaders of Tomorrow",
    description:
      "Developing young leaders across Asia through education, exchange, and innovation.",
    images:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e5cc12f1-c6d3-4dd7-95a1-8a680c6490ac/id-preview-43303485--70c5df59-2f12-43af-a28a-cccf6fc2e7fd.lovable.app-1781159719416.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
