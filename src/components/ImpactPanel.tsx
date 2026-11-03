import type { Metric } from "../types/portfolio";

/**
 * Featured result with a before/after bar, then the remaining metrics as a
 * ruled readout grid. Bars are drawn to scale from `bar.ratio`.
 */
export function ImpactPanel({ metrics }: { metrics: Metric[] }) {
  const featured = metrics.find((m) => m.bar);
  const rest = metrics.filter((m) => m !== featured);

  return (
    <div className="mt-8 border border-rule">
      {featured && featured.bar ? (
        <div className="grid gap-6 border-b border-rule p-6 md:grid-cols-[minmax(10rem,auto)_1fr] md:items-center md:gap-10">
          <div>
            <div className="tabular font-mono text-5xl leading-none text-signal">{featured.value}</div>
            <div className="mt-3 max-w-[22ch] text-sm text-inkMuted">{featured.label}</div>
          </div>
          <figure aria-label={`${featured.bar.before} versus ${featured.bar.after}, drawn to scale`}>
            <ScaleBar label={featured.bar.before} width={1} tone="muted" />
            <ScaleBar label={featured.bar.after} width={featured.bar.ratio} tone="signal" />
            <figcaption className="mt-3 font-mono text-[11px] text-inkFaint">
              time per run, drawn to scale
            </figcaption>
          </figure>
        </div>
      ) : null}

      {rest.length > 0 ? (
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {rest.map((m, i) => (
            <div
              key={m.label}
              className={
                "flex flex-col p-5 " +
                (i % 2 === 1 ? "border-l border-rule " : "") +
                (i >= 2 ? "border-t border-rule lg:border-t-0 " : "") +
                (i > 0 ? "lg:border-l lg:border-rule" : "")
              }
            >
              <dd className="order-1 tabular font-mono text-2xl leading-tight text-ink">{m.value}</dd>
              <dt className="order-2 mt-2 text-xs leading-snug text-inkFaint">{m.label}</dt>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

function ScaleBar({ label, width, tone }: { label: string; width: number; tone: "muted" | "signal" }) {
  return (
    <div className="mt-3 grid grid-cols-[5.5rem_1fr] items-center gap-3 first:mt-0">
      <span className="font-mono text-xs text-inkMuted">{label}</span>
      <div className="h-3 w-full bg-panel">
        <div
          className={"h-full " + (tone === "signal" ? "bg-signal" : "bg-inkFaint/50")}
          style={{ width: `${Math.max(width * 100, 1.5)}%` }}
        />
      </div>
    </div>
  );
}
