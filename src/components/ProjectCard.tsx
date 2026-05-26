import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

export function ProjectCard(props: { project: Project; index: number }) {
  const p = props.project;
  const repoLink = (p.repoLink || p.link || "").trim();
  const demoLink = (p.demoLink || "").trim();
  const hasRepo = repoLink.length > 0;
  const hasDemo = demoLink.length > 0;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0F0F0F] p-7 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold tracking-[0.16em] text-white/45">
          {String(props.index).padStart(2, "0")}
        </div>
        {p.highlight ? (
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
            Highlight
          </div>
        ) : null}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
      {p.subtitle ? <p className="mt-2 text-white/65">{p.subtitle}</p> : null}
      {p.period ? <p className="mt-1 text-xs text-white/45">{p.period}</p> : null}

      <p className="mt-4 text-white/70 leading-relaxed break-normal">{p.description}</p>

      {p.metrics ? (
        <div className="mt-4 inline-flex rounded-full bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80">
          {p.metrics}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      {(hasDemo || hasRepo) ? (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {hasDemo ? (
            <a
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black"
              href={demoLink}
              target="_blank"
              rel="noopener"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>
          ) : null}
          {hasRepo ? (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/85 hover:text-white"
              href={repoLink}
              target="_blank"
              rel="noopener"
            >
              Repository <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
