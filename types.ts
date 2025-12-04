export type Language = 'en' | 'pt';

export interface Project {
  id: number;
  title: string;
  description: {
    en: string;
    pt: string;
  };
  tags: string[];
  category: 'Software' | 'Data Science';
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: number;
  role: {
    en: string;
    pt: string;
  };
  company: string;
  period: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: {
    en: string;
    pt: string;
  };
  institution: string;
  year: string;
  description: {
    en: string;
    pt: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
