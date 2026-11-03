import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function AboutSection() {
  const { profile, education } = usePortfolio();
  return (
    <SectionShell id="about" label="About">
      <p className="max-w-[68ch] whitespace-pre-line leading-relaxed text-inkMuted">{profile.bio}</p>
      <div id="education" className="mt-12 scroll-mt-24">
        <h3 className="font-mono text-xs text-inkFaint">Education</h3>
        {education.map((ed) => (
          <div key={ed.school} className="mt-4 border-t border-rule pt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-semibold text-ink">{ed.school}</p>
              {ed.period ? <span className="tabular font-mono text-sm text-inkFaint">{ed.period}</span> : null}
            </div>
            <p className="mt-1 text-sm text-inkMuted">{ed.degree}</p>
            {ed.details ? <p className="mt-1 font-mono text-xs text-inkFaint">{ed.details}</p> : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
