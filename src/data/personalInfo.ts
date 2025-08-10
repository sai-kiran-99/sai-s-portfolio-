export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  tagline: string;
  description: string;
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sai Kiran Madala",
  title: "Full Stack Developer",
  email: "saikiranmadala@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  about: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems through clean, efficient code.",
  tagline: "Crafting digital experiences with code",
  description: "Passionate about creating innovative web solutions that make a difference. I specialize in React, Node.js, and modern web technologies to build scalable and user-friendly applications.",
  github: "https://github.com/saikiranmadala",
  linkedin: "https://linkedin.com/in/saikiranmadala",
  twitter: "https://twitter.com/saikiranmadala",
  website: "https://saikiranmadala.dev"
};
