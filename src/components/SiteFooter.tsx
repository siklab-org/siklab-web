import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/past-projects", label: "Past Projects" },
  { href: "/areas", label: "Areas of Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

const socials = [
  {
    href: "https://web.facebook.com/SiklabPHL",
    src: "/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/siklab-pilipinas-inc/",
    src: "/linkedin.svg",
    alt: "LinkedIn",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/15 bg-linear-to-b from-transparent to-blue-50/40 dark:to-blue-950/25 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/siklab-logo.png"
                alt="Siklab"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/65 leading-relaxed max-w-xs">
              A youth-led organization developing the next generation of Filipino leaders through service and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm text-foreground/75 hover:text-primary transition-colors"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@siklab.org.ph"
                  className="text-sm text-foreground/75 hover:text-primary transition-colors"
                >
                  hello@siklab.org.ph
                </a>
              </li>
              <li className="text-sm text-foreground/65">Manila, Philippines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src={s.src} alt={s.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 text-xs text-foreground/50 text-center">
          &copy; {new Date().getFullYear()} Siklab Pilipinas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
