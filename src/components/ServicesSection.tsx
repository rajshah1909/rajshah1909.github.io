import { BrainCircuit, Cloud, Database, Server } from "lucide-react";
import { SectionShell } from "./SectionShell";

const services = [
  {
    title: "Backend",
    icon: <Server size={18} />,
    items: ["FastAPI / Flask APIs", "Batch pipelines", "Validation layers", "SQL analytics"],
  },
  {
    title: "AI / LLM",
    icon: <BrainCircuit size={18} />,
    items: ["RAG architectures", "Evaluation pipelines", "Failure-mode analysis", "Deterministic validation"],
  },
  {
    title: "Data",
    icon: <Database size={18} />,
    items: ["ETL/ELT", "Parquet datasets", "Data quality checks", "Stakeholder-ready outputs"],
  },
  {
    title: "Cloud",
    icon: <Cloud size={18} />,
    items: ["Dockerized deployment", "CI/CD via GitHub Actions", "Monitoring mindset", "Reliable iteration loops"],
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      title="What I Build"
      subtitle="A production-first skill set: pipelines, evaluation, and reliable deployment."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, idx) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-[0.16em] text-white/45">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-white/55">{s.icon}</div>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.items.map((i) => (
                <li key={i} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

