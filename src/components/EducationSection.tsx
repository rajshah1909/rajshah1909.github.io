import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function EducationSection() {
  const { education } = usePortfolio();
  return (
    <SectionShell id="education" label="Education">
      {education.map((ed) => (
        <div key={ed.school} className="border-t border-rule py-6 first:border-t-0 first:pt-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-ink">{ed.school}</h3>
            {ed.period ? (
              <span className="tabular font-mono text-sm text-inkFaint">{ed.period}</span>
            ) : null}
          </div>
          <p className="mt-1 text-inkMuted">{ed.degree}</p>
          {ed.details ? (
            <p className="mt-2 font-mono text-xs text-inkFaint">{ed.details}</p>
          ) : null}
        </div>
      ))}
    </SectionShell>
  );
}
