export type Social = {
  github?: string;
  linkedin?: string;
  email?: string;
  website?: string;
};

/**
 * A single quantified result. Kept as a structured pair so the renderer can
 * typeset `value` large in tabular figures with `label` small beneath it.
 * Never pre-format these into one string with separators — that was the old
 * `metrics: string` and it cannot be typeset.
 */
export type Metric = {
  value: string;
  label: string;
};

export type Profile = {
  name: string;
  shortName: string;
  /** The one-line positioning claim. This is the page's <h1>. */
  thesis: string;
  role: string;
  /** Mono-set line under the thesis: current role + employer. */
  standfirst: string;
  location?: string;
  bio: string;
  avatarImage?: string;
  social: Social;
  resumeUrl?: string;
};

/**
 * Credibility band entry. Deliberately narrow: one summary sentence, at most
 * two metrics. If you find yourself wanting `highlights: string[]` back, that
 * content belongs in the resume PDF, not on the page.
 */
export type Experience = {
  company: string;
  role: string;
  /** Earlier title at the same employer, if promoted internally. */
  priorRole?: string;
  period: string;
  location?: string;
  current?: boolean;
  /** One sentence. Not a paragraph. */
  summary: string;
  metrics: Metric[];
  stack: string[];
};

/** Identifier for an embedded interactive module. Absent = static card. */
export type InteractiveModule = "fomc-rmse";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  /** Why this exists. What was broken or missing. */
  problem: string;
  /** What you built, and the key technical decision. */
  approach: string;
  /** What it produced. Honest — this layer must never be walked back by detail. */
  outcome: string;
  metrics: Metric[];
  stack: string[];
  repoLink?: string;
  /** Set when the repo is not under your own account. */
  repoOwnerNote?: string;
  demoLink?: string;
  demoLabel?: string;
  /** Your specific contribution. Required when `team` is true. */
  contribution?: string;
  team?: boolean;
  featured?: boolean;
  interactive?: InteractiveModule;
};

export type Education = {
  school: string;
  degree: string;
  period?: string;
  details?: string;
};

export type PortfolioData = {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  education: Education[];
};
