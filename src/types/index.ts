export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI Assistant' | 'Computer Vision & Fraud' | 'Vibe Coded Product' | 'Mobile & Web';
  description: string;
  fullOverview: string;
  problemStatement?: string;
  architectureHighlights: string[];
  techStack: string[];
  demoUrl?: string;
  sourceUrl: string;
  status: 'Production MVP' | 'Live Demo' | 'Active Development';
  icon: string;
  featuredBadge?: string;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  category: 'Core AI & Languages' | 'Frontend & Design' | 'Systems, Data & Tools';
  level: number; // 1 to 100
  iconName: string;
  highlight?: boolean;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  collaborator: string;
  date: string;
  certificateId: string;
  recipient: string;
  venue: string;
  signatory: string;
  signatoryRole: string;
  description: string;
  skillsLearned: string[];
}
