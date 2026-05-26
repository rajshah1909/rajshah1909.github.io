import { GitBranch, ExternalLink, Mail, Globe } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

function Pill(props: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
    >
      <span className="opacity-80">{props.icon}</span>
      <span>{props.label}</span>
    </a>
  );
}

export function SocialLinks() {
  const { profile } = usePortfolio();
  const s = profile.social;

  return (
    <div className="flex flex-wrap gap-3">
      {s.github ? (
        <Pill href={s.github} label="GitHub" icon={<GitBranch size={16} />} />
      ) : null}
      {s.linkedin ? (
        <Pill href={s.linkedin} label="LinkedIn" icon={<ExternalLink size={16} />} />
      ) : null}
      {s.email ? (
        <Pill href={`mailto:${s.email}`} label="Email" icon={<Mail size={16} />} />
      ) : null}
      {s.website ? (
        <Pill href={s.website} label="Website" icon={<Globe size={16} />} />
      ) : null}
    </div>
  );
}

