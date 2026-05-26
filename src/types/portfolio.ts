export type Social = {
  github?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  phone?: string;
  website?: string;
};

export type Profile = {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location?: string;
  yearsOfExperience?: string;
  bio: string;
  avatarImage?: string;
  social: Social;
  resumeUrl?: string;
};


export type Capability = {
  id: string;
  title: string;
  focus: string;
  tools: string[];
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  stack: string[];
  role?: string;
  year?: string;
  link?: string;
  repoLink?: string;
  demoLink?: string;
  period?: string;
  image?: string;
  highlight?: boolean;
  metrics?: string;
};

export type Education = {
  school: string;
  degree: string;
  period?: string;
  details?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor?: string;
};

export type PortfolioData = {
  profile: Profile;
  capabilities: Capability[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  testimonials: Testimonial[];
};

