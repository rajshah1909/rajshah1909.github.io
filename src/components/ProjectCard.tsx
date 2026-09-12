import { forwardRef } from "react";
import type { Project } from "../types/portfolio";
import { Metric } from "./Metric";

export const ProjectCard = forwardRef<HTMLButtonElement, { project: Project; onOpen: () => void }>(
  function ProjectCard({ project, onOpen }, ref) {
    return (
      <article className="group rounded-lg border border-rule bg-surface p-6 shadow-card transition-colors duration-300 ease-out hover:border-signal/40 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
          {project.period ? (
            <span className="tabular font-mono text-sm text-inkFaint">{project.period}</span>
          ) : null}
        </div>
        {project.subtitle ? <p className="mt-1 text-inkMuted">{project.subtitle}</p> : null}

        <p className="mt-4 max-w-[62ch] text-sm text-inkMuted line-clamp-2">{project.problem}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.primarySkills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-rule px-2 py-1 font-mono text-xs text-inkMuted"
            >
              {skill}
            </span>
          ))}
        </div>

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
            className="rounded-md border border-signal/50 px-3 py-1.5 text-signal transition-colors hover:bg-signal/10"
          >
            View Case Study
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
