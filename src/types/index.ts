export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  phone: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveDemo?: string;
  github?: string;
  image: string;
  status: 'Completed' | 'In Development' | 'Planning';
  date: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  type: 'Full-time' | 'Intern' | 'Contract';
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
