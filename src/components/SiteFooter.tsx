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
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/siklab-logo.png"
                alt="Siklab"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/65 leading-relaxed max-w-xs">
              An internationally recognized development and impact consulting firm rooted in Asia.
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
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-foreground/50 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:secretariat@siklab.org.ph"
                    className="text-sm text-foreground/75 hover:text-primary transition-colors break-words"
                  >
                    secretariat@siklab.org.ph
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
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 text-xs text-foreground/50 text-center">
          &copy; {new Date().getFullYear()} Siklab Pilipinas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
