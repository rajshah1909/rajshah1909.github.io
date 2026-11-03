import { usePortfolio } from "../hooks/usePortfolio";

export function Footer() {
  const { profile } = usePortfolio();
  const links: { label: string; href: string }[] = [];
  if (profile.social.email) links.push({ label: "Email", href: `mailto:${profile.social.email}` });
  if (profile.social.linkedin) links.push({ label: "LinkedIn", href: profile.social.linkedin });
  if (profile.social.github) links.push({ label: "GitHub", href: profile.social.github });
  if (profile.resumeUrl) links.push({ label: "Resume (PDF)", href: profile.resumeUrl });

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-16 md:grid md:grid-cols-[8rem_1fr] md:gap-8">
        <div className="mb-6 font-mono text-sm text-inkFaint md:mb-0">Contact</div>
        <div className="min-w-0">
          <h2 className="max-w-[32ch] text-2xl font-semibold text-ink">
            Building agents or automation that have to be right?
          </h2>
          <p className="mt-3 max-w-[60ch] text-inkMuted">
            I'm glad to talk about agentic AI, workflow automation, and the data and evaluation
            work that makes them dependable. Email is the fastest way to reach me.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-inkMuted underline underline-offset-4 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
