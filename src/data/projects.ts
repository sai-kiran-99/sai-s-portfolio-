export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/images/project1.jpg",
    githubUrl: "https://github.com/saikiranmadala/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/images/project2.jpg",
    githubUrl: "https://github.com/saikiranmadala/task-manager",
    liveUrl: "https://task-manager-app.netlify.app",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions and forecasts for multiple locations with interactive maps.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    image: "/images/project3.jpg",
    githubUrl: "https://github.com/saikiranmadala/weather-dashboard",
    liveUrl: "https://weather-dashboard.vercel.app",
    featured: false
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and clean design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project4.jpg",
    githubUrl: "https://github.com/saikiranmadala/portfolio",
    liveUrl: "https://saikiranmadala.dev",
    featured: false
  },
  {
    id: "5",
    title: "TODO List App",
    description: "A simple and intuitive TODO list application built with JavaScript. Features include adding, completing, and managing daily tasks with a clean user interface.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    image: "/images/project5.jpg",
    githubUrl: "https://github.com/sai-kiran-99/TO-DO-app",
    liveUrl: "https://sai-kiran-99.github.io/TO-DO-app/",
    featured: true
  }
];
