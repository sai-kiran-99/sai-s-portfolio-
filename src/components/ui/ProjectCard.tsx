import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-apple-blue/10 to-purple-600/10 flex items-center justify-center">
        <div className="text-6xl opacity-20">💻</div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            project.featured 
              ? 'bg-apple-blue/10 text-apple-blue'
              : 'bg-apple-gray-200 text-apple-gray-600'
          }`}>
            {project.featured ? 'Featured' : 'Project'}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-apple-gray-600 mb-2">
            {project.title}
          </h3>
          <p className="text-apple-gray-500 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-apple-gray-100 text-apple-gray-600 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-apple-gray-400 font-medium">
              {project.featured ? 'Featured' : 'Project'}
            </span>
            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-apple-blue text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-apple-gray-300 text-apple-gray-600 text-sm font-medium rounded-full hover:border-apple-blue hover:text-apple-blue transition-colors duration-200"
                >
                  GitHub
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