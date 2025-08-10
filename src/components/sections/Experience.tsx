import React from 'react';
import { experience } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-600 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-apple-blue to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-apple-gray-500 mt-4 max-w-2xl mx-auto">
              My journey through different roles and companies, building scalable frontend solutions
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-apple-gray-200"></div>

          {experience.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-apple-blue rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'md:pr-8 ml-12 md:ml-0' 
                    : 'md:pl-8 ml-12 md:ml-0'
                }`}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-apple-gray-600 mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-semibold text-apple-blue mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          exp.type === 'Full-time' 
                            ? 'bg-apple-green/10 text-green-700'
                            : 'bg-apple-blue/10 text-apple-blue'
                        }`}>
                          {exp.type}
                        </span>
                        <span className="text-sm text-apple-gray-400 font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-apple-gray-500 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-apple-gray-600 mb-2 uppercase tracking-wide">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-apple-gray-500">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-apple-gray-600 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-apple-gray-100 text-apple-gray-600 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;