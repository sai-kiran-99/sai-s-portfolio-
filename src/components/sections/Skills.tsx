import React from 'react';
import { skills } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-600 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-apple-blue to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-apple-gray-500 mt-4 max-w-2xl mx-auto">
              The tools and technologies I use to build exceptional user experiences
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 card-shadow hover-lift h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-apple-gray-600 mb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-apple-blue to-purple-600 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-between p-3 bg-apple-gray-50 rounded-xl hover:bg-apple-gray-100 transition-colors duration-200"
                    >
                      <span className="text-apple-gray-600 font-medium">{tech}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <div
                            key={starIndex}
                            className={`w-2 h-2 rounded-full ${
                              starIndex < 4 ? 'bg-apple-blue' : 'bg-apple-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 card-shadow">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-apple-gray-600 mb-6">
                Always Learning
              </h3>
              <p className="text-lg text-apple-gray-500 max-w-3xl mx-auto leading-relaxed mb-8">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends 
                and best practices in frontend development. Currently exploring advanced React patterns, 
                Web3 technologies, and performance optimization techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Next.js 14', 'React Server Components', 'Web3', 'GraphQL', 'Micro-frontends'].map((learning, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-apple-blue/10 to-purple-600/10 text-apple-blue border border-apple-blue/20 rounded-full font-medium"
                  >
                    {learning}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;