import { useRef, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const { projects } = usePortfolio();
  const [openId, setOpenId] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <SectionShell id="projects" label="Projects">
      <div className="flex flex-col">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i + 1}
            ref={(el) => {
              triggerRefs.current[p.id] = el;
            }}
            onOpen={() => setOpenId(p.id)}
          />
        ))}
      </div>

      {openProject ? (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenId(null)}
          returnFocusRef={{ current: triggerRefs.current[openProject.id] ?? null }}
        />
      ) : null}
    </SectionShell>
  );
}
