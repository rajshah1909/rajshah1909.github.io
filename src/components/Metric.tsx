import type { Metric as MetricType } from "../types/portfolio";

export function Metric({ value, label }: MetricType) {
  return (
    <div className="border-l border-rule pl-4">
      <div className="tabular font-mono text-2xl leading-tight text-ink">{value}</div>
      <div className="mt-1 text-xs text-inkFaint">{label}</div>
    </div>
  );
}
