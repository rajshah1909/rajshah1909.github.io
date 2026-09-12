import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function SkillsSection() {
  const { skills } = usePortfolio();
  return (
    <SectionShell id="skills" label="Skills">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-lg border border-rule bg-surface p-6">
            <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
            <p className="mt-3 font-mono text-sm leading-relaxed text-inkMuted">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
