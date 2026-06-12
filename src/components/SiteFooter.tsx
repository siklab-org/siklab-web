import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/areas", label: "Areas of Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/15 bg-linear-to-b from-transparent to-blue-50/40 dark:to-blue-950/25 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link href="/" className="block mb-1">
            <Image
              src="/siklab-logo.png"
              alt="Siklab"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/75 dark:text-foreground/80">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-primary transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-foreground/50 dark:text-foreground/60">
          &copy; {new Date().getFullYear()} Siklab
        </div>
      </div>
    </footer>
  );
}
