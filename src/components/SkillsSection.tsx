import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function SkillsSection() {
  const { skills } = usePortfolio();
  return (
    <SectionShell id="skills" title="Technical Stack" subtitle="A quick scan of tools I ship with.">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.categories.map((c) => (
          <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">{c.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

