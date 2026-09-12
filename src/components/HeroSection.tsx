import { usePortfolio } from "../hooks/usePortfolio";
import { Metric } from "./Metric";

const NODES = ["Software", "Data", "AI", "Cloud"];

function SystemVisual() {
  const width = 560;
  const height = 72;
  const step = width / (NODES.length - 1);
  const y = height / 2;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mt-10 h-16 w-full max-w-xl"
      role="img"
      aria-label="Diagram: software, data, AI, and cloud infrastructure connected as one system"
    >
      <line x1={0} y1={y} x2={width} y2={y} stroke="var(--rule)" strokeWidth={1} />
      {NODES.map((label, i) => {
        const x = i * step;
        const isAi = label === "AI";
        return (
          <g key={label}>
            <circle
              cx={x}
              cy={y}
              r={7}
              fill={isAi ? "var(--signal)" : "var(--ground)"}
              stroke={isAi ? "var(--signal)" : "var(--rule)"}
              strokeWidth={1.5}
            />
            <text
              x={x}
              y={y + 26}
              textAnchor={i === 0 ? "start" : i === NODES.length - 1 ? "end" : "middle"}
              className="fill-inkFaint font-mono"
              fontSize={11}
            >
              {label}
            </text>
          </g>
        );
      })}
      <style>{`svg { --rule: #262E36; --ground: #0E1114; --signal: #FFB000; }`}</style>
    </svg>
  );
}

export function HeroSection() {
  const { profile, experience } = usePortfolio();
  const metrics = experience.flatMap((e) => e.metrics).slice(0, 3);

  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        {profile.avatarImage ? (
          <img
            src={profile.avatarImage}
            alt={profile.name}
            width={192}
            height={192}
            className="h-40 w-40 rounded-lg object-cover sm:h-48 sm:w-48"
          />
        ) : null}

        <p className="mt-8 font-mono text-sm text-signal">{profile.standfirst}</p>
        <h1 className="mt-4 max-w-[32ch] text-3xl font-semibold leading-snug text-ink md:text-4xl">
          {profile.thesis}
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
          <a
            href="#projects"
            className="rounded-md border border-signal/50 px-4 py-2 text-signal transition-colors hover:bg-signal/10"
          >
            Explore My Work
          </a>
          <a
            href="#experience"
            className="rounded-md border border-rule px-4 py-2 text-inkMuted transition-colors hover:border-inkMuted hover:text-ink"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="rounded-md border border-rule px-4 py-2 text-inkMuted transition-colors hover:border-inkMuted hover:text-ink"
          >
            Let's Connect
          </a>
        </div>

        <SystemVisual />

        <div className="mt-10 grid max-w-xl grid-cols-2 justify-items-center gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <Metric key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
