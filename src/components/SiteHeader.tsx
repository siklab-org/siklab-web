"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas of Work" },
  { href: "/partners", label: "Partners" },
  { href: "/board-of-advisors", label: "Board of Advisors" },
  { href: "/contact", label: "Contact" },
] as const;

const projectsDropdown = {
  label: "Projects",
  items: [
    { href: "/projects", label: "Projects" },
    { href: "/past-projects", label: "Past Projects" },
  ] as const,
};

type NavEntry = { href: string; label: string };

function MobileNavRow({
  item,
  active,
  delay,
}: {
  item: NavEntry;
  active: boolean;
  delay: number;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={item.href}
        style={{ animationDelay: `${delay}ms` }}
        className={`tap animate-nav-item flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-lg font-medium transition-[color,background-color,transform] duration-200 ease-out-ui active:scale-[0.98] ${
          active
            ? "bg-primary/10 text-primary"
            : "text-foreground/75 active:bg-foreground/5 active:text-foreground"
        }`}
      >
        {item.label}
        {active ? (
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        ) : (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/30" />
        )}
      </Link>
    </SheetClose>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest < 120) setHidden(false);
    else if (latest - prev > 8) setHidden(true);
    else if (prev - latest > 8) setHidden(false);
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProjectsOpen(false), 150);
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md"
        initial={false}
        animate={{
          transform: hidden && !open && !projectsOpen && !reduce ? "translateY(-100%)" : "translateY(0%)",
        }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      >
        <div className="flex w-full items-center justify-between px-5 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] md:px-6 md:pb-4 md:pt-4">
          <Link href="/" className="block shrink-0 pl-1 transition-opacity hover:opacity-80">
            <Image
              src="/siklab-logo.png"
              alt="Siklab"
              width={200}
              height={60}
              className="h-9 w-auto md:h-12"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {/* Projects dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`relative flex items-center gap-1 pb-1 transition-colors cursor-pointer
                  after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-primary
                  after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${projectsOpen || pathname.startsWith('/projects') || pathname.startsWith('/past-projects') ? 'text-primary after:scale-x-100' : 'text-foreground/70 hover:text-primary'}`}
              >
                {projectsDropdown.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 8, scaleY: 1 }}
                    exit={{ opacity: 0, y: 4, scaleY: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full min-w-48 rounded-xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-lg overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    {projectsDropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-5 py-3 text-sm transition-colors hover:bg-foreground/5 ${
                          pathname === item.href
                            ? "text-primary font-medium"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                        onClick={() => setProjectsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors
                  after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-primary
                  after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${pathname === item.href ? 'text-primary after:scale-x-100' : 'text-foreground/70 hover:text-primary'}`}
              >
                {item.label}
              </Link>
            ))}
            <motion.a
              href="https://www.philippineyouthsummit.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-[background-color,color] duration-200 ease hover:bg-primary hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/PYIS.png"
                alt="PYIS logo"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              PYIS
            </motion.a>
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="tap -mr-1.5 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] transition-[background-color,transform] duration-200 ease-out-ui hover:bg-foreground/[0.06] active:scale-90 md:hidden"
              >
                <span className="relative block h-3.5 w-5">
                  <span className="absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-foreground" />
                  <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-foreground/55" />
                  <span className="absolute inset-x-0 bottom-0 h-[1.5px] rounded-full bg-foreground" />
                </span>
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              overlayProps={{ className: "bg-black/55 backdrop-blur-[3px]" }}
              className="tap w-[86vw] border-l border-foreground/10 bg-background/95 p-0 shadow-[-32px_0_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur-2xl"
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="flex h-full flex-col overflow-y-auto overscroll-contain pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] pt-[calc(1.25rem+env(safe-area-inset-top,0px))]">
                <div className="flex items-center justify-between gap-4 px-6 pb-8">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/siklab-logo.png"
                      alt="Siklab"
                      width={132}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <SheetClose
                    className="animate-control-in inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/60 transition-[color,background-color,transform] duration-200 ease-out-ui hover:bg-foreground/[0.06] hover:text-foreground active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close menu</span>
                  </SheetClose>
                </div>

                <nav className="flex flex-col px-3">
                  <p
                    className="animate-nav-item px-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70"
                    style={{ animationDelay: "60ms" }}
                  >
                    Projects
                  </p>
                  {projectsDropdown.items.map((item, i) => (
                    <MobileNavRow
                      key={item.href}
                      item={item}
                      active={pathname === item.href}
                      delay={100 + i * 45}
                    />
                  ))}

                  <div
                    className="animate-nav-item mx-4 my-4 h-px bg-foreground/10"
                    style={{ animationDelay: "190ms" }}
                  />

                  <p
                    className="animate-nav-item px-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70"
                    style={{ animationDelay: "215ms" }}
                  >
                    Explore
                  </p>
                  {nav.map((item, i) => (
                    <MobileNavRow
                      key={item.href}
                      item={item}
                      active={pathname === item.href}
                      delay={250 + i * 45}
                    />
                  ))}
                </nav>

                <div className="mt-auto px-6 pt-10">
                  <SheetClose asChild>
                    <a
                      href="https://www.philippineyouthsummit.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ animationDelay: "480ms" }}
                      className="animate-nav-item group flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/[0.07] px-4 py-3.5 transition-[background-color,transform] duration-200 ease-out-ui hover:bg-primary/15 active:scale-[0.98]"
                    >
                      <Image
                        src="/PYIS.png"
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full bg-white object-contain p-0.5"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-primary">
                          Philippine Youth Summit
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          Our external partner site
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary/50 transition-transform duration-200 ease-out-ui group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
}
