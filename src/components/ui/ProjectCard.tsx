import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden card-shadow h-full flex flex-col group">
      {/* Enhanced header with dynamic gradient */}
      <div className="relative h-56 bg-gradient-to-br from-apple-blue/5 via-purple-600/5 to-apple-blue/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="text-7xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">💻</div>
        
        {/* Featured badge with glow effect */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-300 ${
            project.featured 
              ? 'bg-apple-blue/20 text-apple-blue border border-apple-blue/30 shadow-lg shadow-apple-blue/20'
              : 'bg-white/20 text-apple-gray-600 border border-white/30'
          }`}>
            {project.featured ? '⭐ Featured' : '📁 Project'}
          </span>
        </div>
        
        {/* Subtle animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-apple-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-600/40 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-apple-gray-600 mb-3 group-hover:text-apple-blue transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-apple-gray-500 leading-relaxed text-base">
            {project.description}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm text-apple-gray-600 text-sm rounded-full font-medium border border-white/50 hover:bg-apple-blue/10 hover:text-apple-blue hover:border-apple-blue/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-white/30">
          <div className="flex items-center justify-between">
            <span className="text-sm text-apple-gray-400 font-medium">
              {project.featured ? '🌟 Featured Project' : '📁 Personal Project'}
            </span>
            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button text-sm"
                >
                  🌐 Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-secondary text-sm"
                >
                  📂 GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;