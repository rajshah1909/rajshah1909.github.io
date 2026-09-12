import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

export function AboutSection() {
  const { profile } = usePortfolio();
  return (
    <SectionShell id="about" label="About">
      <p className="max-w-[68ch] whitespace-pre-line text-inkMuted leading-relaxed">
        {profile.bio}
      </p>
    </SectionShell>
  );
}
