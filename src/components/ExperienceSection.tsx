import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";
import { Metric } from "./Metric";

export function ExperienceSection() {
  const { experience } = usePortfolio();
  return (
    <SectionShell id="experience" label="Experience">
      <div className="flex flex-col">
        {experience.map((e) => (
          <div
            key={e.company}
            className="border-t border-rule py-8 first:border-t-0 first:pt-0"
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
            {e.contributions && e.contributions.length > 0 ? (
              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {e.contributions.map((c) => (
                  <div key={c.area} className="border-t border-rule pt-4">
                    <dt className="font-mono text-xs text-signal">{c.area}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-inkMuted">{c.detail}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {e.week && e.week.length > 0 ? (
              <div className="mt-8">
                <h4 className="font-mono text-xs text-inkFaint">A typical week</h4>
                <ol className="mt-3 grid gap-4 sm:grid-cols-4">
                  {e.week.map((w) => (
                    <li key={w.label} className="border-l border-rule pl-4">
                      <div className="font-mono text-sm text-ink">{w.label}</div>
                      <p className="mt-1 text-xs leading-relaxed text-inkFaint">{w.detail}</p>
                    </li>
                  ))}
                </ol>
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
