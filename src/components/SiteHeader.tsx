import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/areas", label: "Areas of Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/siklab-logo.png"
            alt="Siklab"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
