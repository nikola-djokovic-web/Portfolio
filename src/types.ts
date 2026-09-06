export type Language = 'en' | 'de' | 'sr';

export type Theme = 'dark' | 'light';

export interface ProjectMetric {
  label: Record<Language, string>;
  value: string;
}

export interface DetailedCaseStudy {
  challenge: Record<Language, string>;
  solution: Record<Language, string>;
  architectureHighlights: Record<Language, string[]>;
  impact: Record<Language, string>;
  codeSnippet?: {
    filename: string;
    code: string;
  };
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  badge?: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  metrics: ProjectMetric[];
  caseStudy: DetailedCaseStudy;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'principles' | 'ai';
  experienceYears?: string;
  proficiency?: number; // 1-100
  note?: Record<Language, string>;
  featured?: boolean;
}

export interface StatMetric {
  id: string;
  value: string;
  label: Record<Language, string>;
  subtext: Record<Language, string>;
}

export interface ExperienceItem {
  period: string;
  role: Record<Language, string>;
  company: string;
  location: string;
  description: Record<Language, string>;
  tech: string[];
}
