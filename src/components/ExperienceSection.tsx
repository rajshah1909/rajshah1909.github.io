import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";
import { Metric } from "./Metric";

export function ExperienceSection() {
  const { experience } = usePortfolio();
  return (
    <SectionShell id="experience" label="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((e) => (
          <div
            key={e.company}
            className="rounded-lg border border-rule bg-surface p-6 transition-colors duration-300 ease-out hover:border-inkFaint/40 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {e.role} · {e.company}
              </h3>
              <span className="tabular font-mono text-sm text-inkFaint">
                {e.period}
                {e.current ? <span className="ml-2 text-signal">current</span> : null}
              </span>
            </div>
            {e.priorRole ? (
              <p className="mt-1 font-mono text-xs text-inkFaint">previously {e.priorRole}</p>
            ) : null}
            <p className="mt-4 max-w-[68ch] text-inkMuted">{e.summary}</p>
            {e.metrics.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-8">
                {e.metrics.map((m) => (
                  <Metric key={m.label} value={m.value} label={m.label} />
                ))}
              </div>
            ) : null}
            {e.stack.length > 0 ? (
              <p className="mt-6 font-mono text-sm text-inkFaint">{e.stack.join(", ")}</p>
            ) : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
