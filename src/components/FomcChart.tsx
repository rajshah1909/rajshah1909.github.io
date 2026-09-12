import { useEffect, useState } from "react";
import fomcData from "../data/fomc-rmse.json";

type ModelRow = {
  model: string;
  rmseBps: number;
  stdBps: number;
  nFeatures: number;
  isBaseline: boolean;
};

type Target = {
  id: string;
  tenor: string;
  horizon: string;
  label: string;
  baselineBps: number;
  bestModel: string;
  bestBps: number;
  improvementPct: number;
  withinNoise: boolean;
  models: ModelRow[];
};

const data = fomcData as { unit: string; note: string; targets: Target[] };

const TENORS = ["2Y", "10Y", "2s10s"] as const;
const HORIZONS = ["1d", "3d", "5d"] as const;

const LABEL_WIDTH = 190;
const RIGHT_PAD = 70;
const CHART_WIDTH = 700;
const PLOT_WIDTH = CHART_WIDTH - LABEL_WIDTH - RIGHT_PAD;
const ROW_HEIGHT = 40;
const TOP_MARGIN = 36;
const BOTTOM_MARGIN = 12;

function useGrown() {
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setGrown(true);
      return;
    }
    const frame = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return grown;
}

function barColor(row: ModelRow, target: Target) {
  if (row.isBaseline) return "var(--chart-cool)";
  if (row.model === target.bestModel) return "var(--chart-signal)";
  if (row.rmseBps > target.baselineBps) return "var(--chart-warn)";
  return "var(--chart-grey)";
}

export function FomcChart() {
  const [tenor, setTenor] = useState<(typeof TENORS)[number]>("2Y");
  const [horizon, setHorizon] = useState<(typeof HORIZONS)[number]>("1d");
  const grown = useGrown();

  const target = data.targets.find((t) => t.tenor === tenor && t.horizon === horizon);
  if (!target) return null;

  const models = target.models;
  const maxVal = Math.max(...models.map((m) => m.rmseBps + m.stdBps), target.baselineBps) * 1.08;
  const scale = (v: number) => (v / maxVal) * PLOT_WIDTH;

  const svgHeight = TOP_MARGIN + models.length * ROW_HEIGHT + BOTTOM_MARGIN;
  const baselineX = LABEL_WIDTH + scale(target.baselineBps);

  const bestModel = models.find((m) => m.model === target.bestModel);
  const bestStd = bestModel?.stdBps ?? 0;

  const caption = `${target.bestModel} reaches ${target.bestBps.toFixed(1)} bps vs. ${target.baselineBps.toFixed(1)} bps for the macro-only baseline — a ${target.improvementPct}% improvement, against ±${bestStd.toFixed(1)} bps of fold-to-fold standard deviation. ${
    target.withinNoise
      ? "The whiskers overlap: this gain is not distinguishable from baseline noise."
      : "The whiskers do not overlap."
  }`;

  const ariaLabel = `Bar chart of walk-forward RMSE in basis points for ${target.label}. Baseline (macro only): ${target.baselineBps.toFixed(
    1,
  )} bps. Best model: ${target.bestModel} at ${target.bestBps.toFixed(1)} bps, a ${target.improvementPct}% improvement. ${models.length} models shown, each with a whisker of plus or minus one standard deviation across walk-forward folds.`;

  return (
    <div className="mt-8 border border-rule bg-panel p-6">
      <style>{`
        .fomc-chart { --chart-signal: #FFB000; --chart-cool: #6E97B8; --chart-warn: #D9604A; --chart-grey: #7C868E; }
      `}</style>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-1 font-mono text-xs" role="group" aria-label="Tenor">
          {TENORS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={t === tenor}
              onClick={() => setTenor(t)}
              className={
                "border px-2 py-1 transition-colors " +
                (t === tenor
                  ? "border-signal text-signal"
                  : "border-rule text-inkFaint hover:text-inkMuted")
              }
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-1 font-mono text-xs" role="group" aria-label="Horizon">
          {HORIZONS.map((h) => (
            <button
              key={h}
              type="button"
              aria-pressed={h === horizon}
              onClick={() => setHorizon(h)}
              className={
                "border px-2 py-1 transition-colors " +
                (h === horizon
                  ? "border-signal text-signal"
                  : "border-rule text-inkFaint hover:text-inkMuted")
              }
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          className="fomc-chart min-w-[600px]"
          viewBox={`0 0 ${CHART_WIDTH} ${svgHeight}`}
          width={CHART_WIDTH}
          height={svgHeight}
          role="img"
          aria-label={ariaLabel}
        >
          <line
            x1={baselineX}
            x2={baselineX}
            y1={TOP_MARGIN - 20}
            y2={svgHeight - BOTTOM_MARGIN}
            stroke="var(--chart-cool)"
            strokeDasharray="3 3"
            strokeWidth={1}
          />
          <text
            x={baselineX}
            y={TOP_MARGIN - 24}
            textAnchor="middle"
            className="fill-inkFaint font-mono"
            fontSize={10}
          >
            baseline {target.baselineBps.toFixed(1)} bps
          </text>

          {models.map((m, i) => {
            const y = TOP_MARGIN + i * ROW_HEIGHT + ROW_HEIGHT / 2;
            const barHeight = 14;
            const barWidth = grown ? scale(m.rmseBps) : 0;
            const whiskerLo = LABEL_WIDTH + scale(Math.max(m.rmseBps - m.stdBps, 0));
            const whiskerHi = LABEL_WIDTH + scale(m.rmseBps + m.stdBps);
            const color = barColor(m, target);

            return (
              <g key={m.model}>
                <text
                  x={LABEL_WIDTH - 10}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-inkMuted font-mono"
                  fontSize={11}
                >
                  {m.model}
                </text>
                <rect
                  x={LABEL_WIDTH}
                  y={y - barHeight / 2}
                  width={barWidth}
                  height={barHeight}
                  fill={color}
                  style={{ transition: "width 700ms ease-out" }}
                />
                {grown ? (
                  <g stroke="var(--chart-grey)" strokeWidth={1}>
                    <line x1={whiskerLo} x2={whiskerHi} y1={y} y2={y} />
                    <line x1={whiskerLo} x2={whiskerLo} y1={y - 4} y2={y + 4} />
                    <line x1={whiskerHi} x2={whiskerHi} y1={y - 4} y2={y + 4} />
                  </g>
                ) : null}
                <text
                  x={whiskerHi + 8}
                  y={y}
                  dominantBaseline="middle"
                  className="fill-ink font-mono tabular"
                  fontSize={11}
                >
                  {m.rmseBps.toFixed(1)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-6 max-w-[68ch] text-sm text-inkMuted">{caption}</p>
      <p className="mt-3 font-mono text-xs text-inkFaint">
        Source: ds-project — outputs/results/20260502_2304__model_results.csv
      </p>
    </div>
  );
}
