import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types/portfolio";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { FomcChart } from "./FomcChart";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-rule py-6 first:border-t-0 first:pt-0">
      <h3 className="font-mono text-xs text-inkFaint">{label}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
  returnFocusRef,
}: {
  project: Project;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLElement | null>;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      returnFocusRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-ground shadow-2xl outline-none sm:border-l sm:border-rule"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule px-6 py-5 sm:px-10">
          <div className="min-w-0">
            <h2 id="project-modal-title" className="text-xl font-semibold text-ink">
              {project.title}
            </h2>
            {project.subtitle ? <p className="mt-1 text-sm text-inkMuted">{project.subtitle}</p> : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="shrink-0 rounded-md border border-rule px-3 py-2 font-mono text-xs text-inkMuted transition-colors hover:border-signal hover:text-ink"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-2 sm:px-10">
          <Section label="The Problem">
            <p className="max-w-[68ch] text-inkMuted">{project.problem}</p>
          </Section>

          <Section label="The Idea">
            <p className="max-w-[68ch] text-inkMuted">{project.idea}</p>
          </Section>

          <Section label="How It Works">
            <ArchitectureDiagram steps={project.architecture} />
            {project.interactive === "fomc-rmse" ? <FomcChart /> : null}
          </Section>

          <Section label="Engineering">
            <p className="max-w-[68ch] text-inkMuted">{project.engineering}</p>
          </Section>

          {project.team && project.contribution ? (
            <Section label="My Part">
              <p className="max-w-[68ch] text-inkMuted">{project.contribution}</p>
            </Section>
          ) : null}

          <Section label="Technology">
            <p className="font-mono text-sm text-inkMuted">{project.stack.join(", ")}</p>
          </Section>

          <Section label="Outcome">
            <p className="max-w-[68ch] text-inkMuted">{project.outcome}</p>
          </Section>

          <Section label="Repository">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-inkMuted underline underline-offset-4 hover:text-ink"
                >
                  GitHub
                  {project.repoOwnerNote ? ` (${project.repoOwnerNote})` : ""}
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
          </Section>
          <div className="h-6" />
        </div>
      </div>
    </div>,
    document.body,
  );
}
