import { useEffect, useState } from "react";
import { ScrollProgress } from "./ScrollProgress";

const nav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
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
        <a href="#home" className="font-mono text-sm text-ink" aria-label="Home">
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
        </nav>
        <button
          type="button"
          className="rounded-md border border-rule p-2 text-inkMuted md:hidden"
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
                "rounded-md px-2 py-2 font-mono text-sm transition-colors " +
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
