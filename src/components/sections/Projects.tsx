import React from 'react';
import { projects } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-apple-gray-600 mb-6">
              🎯 Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-apple-blue to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-apple-gray-500 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and passion projects that demonstrate my skills and creativity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        

        <AnimatedSection delay={500}>
          <div className="text-center">
            <div className="glass-card rounded-3xl p-10 sm:p-16">
              <h3 className="text-3xl font-bold text-apple-gray-600 mb-6">
                🔮 More Projects Coming Soon
              </h3>
              <p className="text-xl text-apple-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm always working on new projects and exploring innovative technologies. 
                Check out my GitHub for more repositories and contributions.
              </p>
              <a
                href="https://github.com/sai-kiran-99"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center px-8 py-4 text-lg font-semibold"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                📂 View All Projects
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;