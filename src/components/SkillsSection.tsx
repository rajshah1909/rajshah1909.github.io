import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function SkillsSection() {
  const { skills } = usePortfolio();
  return (
    <SectionShell id="skills" label="Skills">
      <dl className="border-t border-rule">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <dt className="text-sm font-semibold text-ink">{group.category}</dt>
            <dd className="font-mono text-sm leading-relaxed text-inkMuted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
