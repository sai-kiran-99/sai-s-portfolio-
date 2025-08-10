import React from 'react';
import { skills } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
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
              <div className="glass-card rounded-3xl p-8 card-shadow hover-lift h-full group">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-apple-gray-600 mb-3 group-hover:text-apple-blue transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-apple-blue to-purple-600 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 border border-white/50 hover:border-apple-blue/30 group/item"
                    >
                      <span className="text-apple-gray-600 font-medium group-hover/item:text-apple-blue transition-colors duration-300">{tech}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <div
                            key={starIndex}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              starIndex < 4 
                                ? 'bg-gradient-to-r from-apple-blue to-purple-600 shadow-sm' 
                                : 'bg-apple-gray-200'
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
          <div className="mt-16 glass-card rounded-3xl p-10 sm:p-16 card-shadow">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-apple-gray-600 mb-8">
                🚀 Always Learning
              </h3>
              <p className="text-xl text-apple-gray-500 max-w-4xl mx-auto leading-relaxed mb-10">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends 
                and best practices in frontend development. Currently exploring advanced React patterns, 
                Web3 technologies, and performance optimization techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Next.js 14', 'React Server Components', 'Web3', 'GraphQL', 'Micro-frontends'].map((learning, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white/60 backdrop-blur-sm text-apple-blue border border-apple-blue/30 rounded-full font-medium hover:bg-apple-blue/10 hover:border-apple-blue/50 transition-all duration-300"
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