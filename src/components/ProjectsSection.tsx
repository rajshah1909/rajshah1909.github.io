import { SectionShell } from "./SectionShell";
import { usePortfolio } from "../hooks/usePortfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { projects } = usePortfolio();
  const sorted = [...projects].sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)));

  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Production-minded systems: RAG, evaluation loops, pipelines, and deployment."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {sorted.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 1} />
        ))}
      </div>
    </SectionShell>
  );
}

