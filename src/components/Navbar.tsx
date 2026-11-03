import { useEffect, useState } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { usePortfolio } from "../hooks/usePortfolio";

const nav = [
  { id: "experience", label: "Work", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { profile } = usePortfolio();
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-ground/90 backdrop-blur supports-[backdrop-filter]:bg-ground/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-base font-medium tracking-tight text-ink" aria-label="Back to top">
          Raj Shah
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.id}
              href={l.href}
              aria-current={active === l.id ? "page" : undefined}
              className={
                "font-mono text-sm transition-colors " +
                (active === l.id ? "text-signal" : "text-inkMuted hover:text-ink")
              }
            >
              {l.label}
            </a>
          ))}
          {profile.social.linkedin ? (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-rule px-3 py-1 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
            >
              LinkedIn
            </a>
          ) : null}
        </nav>
        <button
          type="button"
          className="border border-rule p-2 text-inkMuted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path
              d={menuOpen ? "M4 4L14 14M14 4L4 14" : "M2 4H16M2 9H16M2 14H16"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {menuOpen ? (
        <nav
          aria-label="Primary mobile"
          className="flex flex-col gap-1 border-t border-rule px-6 py-3 md:hidden"
        >
          {nav.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              aria-current={active === l.id ? "page" : undefined}
              className={
                "px-2 py-2 font-mono text-sm transition-colors " +
                (active === l.id ? "text-signal" : "text-inkMuted hover:text-ink")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
      <ScrollProgress />
    </header>
  );
}
