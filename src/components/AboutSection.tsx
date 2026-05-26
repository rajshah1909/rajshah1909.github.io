import { SectionShell } from "./SectionShell";
import { usePortfolio } from "../hooks/usePortfolio";

export function AboutSection() {
  const { profile } = usePortfolio();
  return (
    <SectionShell id="about" title="About" subtitle="A quick snapshot recruiters can scan.">
      <p className="max-w-3xl text-white/70 leading-relaxed">
        {profile.bio}
      </p>
    </SectionShell>
  );
}

