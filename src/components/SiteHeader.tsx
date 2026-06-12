"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas of Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

const projectsDropdown = {
  label: "Projects",
  items: [
    { href: "/projects", label: "Projects" },
    { href: "/past-projects", label: "Past Projects" },
  ] as const,
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setProjectsOpen(false), 150);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="block transition-opacity hover:opacity-80">
            <Image
              src="/siklab-logo.png"
              alt="Siklab"
              width={200}
              height={60}
              className="h-12 w-auto"
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
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-background border-l p-6 shadow-lg"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <div className="flex flex-col gap-4 mt-16">
              {/* Projects sub-items first */}
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 mt-2 mb-1">Projects</p>
              {projectsDropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-foreground/10 my-2" />
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
