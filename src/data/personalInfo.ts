export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
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
  name: "Sai Kiran",
  title: "Full Stack Developer (Major : Front-end)",
  email: "saikiranmadala5555@gmail.com",
  // phone: "+1 (555) 123-4567",
  location: "Bengaluru, KA",
  about: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems through clean, efficient code.",
  tagline: "Crafting digital experiences with code",
  description: "Full-stack developer passionate about building innovative web applications that make a difference. I specialize in JavaScript, React, Next.js, TypeScript, and Node.js, with strong skills in Front end (React.js , typescript, CSS, Tailwind CSS, and API integrations) to deliver scalable, user-friendly solutions.",
  github: "https://github.com/saikiranmadala",
  linkedin: "https://www.linkedin.com/in/sai-kiran-madala-8385a61bb/",
  twitter: "https://twitter.com/saikiranmadala",
  website: "https://saikiranmadala.dev"
};
