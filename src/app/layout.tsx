import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import "./globals.css";

const LoadingScreen = dynamic(
  () =>
    import("@/src/components/LoadingScreen").then((m) => m.LoadingScreen)
);

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siklab.org"),
  title: {
    default: "Siklab",
    template: "%s | Siklab",
  },
  description:
    "Siklab is an internationally recognized development consulting organization focused on high-level partnerships in Asia.",
  authors: [{ name: "Siklab" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Siklab",
    description:
      "Developing young leaders across Asia through education, exchange, and innovation.",
    type: "website",
    url: "https://siklab.org",
    siteName: "Siklab",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Siklab",
    title: "Siklab",
    description:
      "Developing young leaders across Asia through education, exchange, and innovation.",
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
      <head>
        <link rel="preload" as="image" href="/hero.webp" />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster
            position="top-center"
            toastOptions={{
              style: { fontFamily: "var(--font-sans)" },
            }}
          />
        </LoadingScreen>
      </body>
    </html>
  );
}
