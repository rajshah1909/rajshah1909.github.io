import { forwardRef } from "react";
import type { Project } from "../types/portfolio";
import { Metric } from "./Metric";

export const ProjectCard = forwardRef<HTMLButtonElement, { project: Project; index: number; onOpen: () => void }>(
  function ProjectCard({ project, index, onOpen }, ref) {
    return (
      <article className="group border-t border-rule py-10 first:border-t-0 first:pt-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-ink">
            <span className="tabular mr-3 font-mono text-sm text-signal">{String(index).padStart(2, "0")}</span>
            {project.title}
          </h3>
          {project.period ? (
            <span className="tabular font-mono text-sm text-inkFaint">{project.period}</span>
          ) : null}
        </div>
        {project.subtitle ? <p className="mt-1 text-inkMuted">{project.subtitle}</p> : null}

        <p className="mt-4 max-w-[62ch] text-sm text-inkMuted line-clamp-3">{project.problem}</p>

        <p className="mt-4 font-mono text-xs text-inkFaint">{project.primarySkills.join(" · ")}</p>

        {project.metrics.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-8">
            {project.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        ) : null}

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
          <button
            ref={ref}
            type="button"
            onClick={onOpen}
            className="border border-signal px-3 py-1.5 text-signal transition-colors hover:bg-signal hover:text-ground"
          >
            Read case study →
          </button>
          {project.repoLink ? (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="text-inkMuted underline underline-offset-4 hover:text-ink"
            >
              GitHub
            </a>
          ) : null}
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-inkMuted underline underline-offset-4 hover:text-ink"
            >
              {project.demoLabel ?? "Demo"}
            </a>
          ) : null}
        </div>
      </article>
    );
  },
);
