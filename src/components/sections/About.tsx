import React from 'react';
import { personalInfo } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';

const About: React.FC = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '3', label: 'Companies' },
    { number: '100%', label: 'Passion Driven' },
  ];

  return (
    <section id="about" className="section-padding bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-600 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-apple-blue to-purple-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={200}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-apple-gray-600 mb-6">
                Passionate Frontend Developer
              </h3>
              <div className="space-y-4 text-lg text-apple-gray-500 leading-relaxed">
                <p>
                  I'm a Frontend Developer with a genuine passion for creating beautiful, 
                  responsive user interfaces. Currently working at <span className="font-semibold text-apple-blue">Unacademy</span> on 
                  the Graphy platform, where I focus on building creator tools and AI integrations.
                </p>
                <p>
                  My journey started with a curiosity about how websites work, and it has evolved 
                  into a deep love for React.js, TypeScript, and modern JavaScript. I particularly 
                  enjoy the problem-solving aspect of frontend development and the satisfaction 
                  of seeing clean, error-free code in action.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or diving deep into Chrome DevTools to optimize performance. 
                  I believe in writing code that not only works but is also maintainable and scalable.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-apple-gray-600 mb-4">What I Love About Development:</h4>
                <ul className="space-y-2 text-apple-gray-500">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-apple-blue rounded-full mr-3"></span>
                    Building clean, responsive UIs with React and TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-apple-blue rounded-full mr-3"></span>
                    Debugging with Chrome DevTools and console.log()
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-apple-blue rounded-full mr-3"></span>
                    Seeing clean 200s instead of 404s in the network tab
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-apple-blue rounded-full mr-3"></span>
                    Creating scalable architecture and reusable components
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center card-shadow hover-lift"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-apple-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 card-shadow">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-apple-gray-600 mb-4">
                My Development Philosophy
              </h3>
              <p className="text-lg text-apple-gray-500 max-w-3xl mx-auto leading-relaxed">
                "I believe in developing for people, not just for code. Every component I build, 
                every API I integrate, and every optimization I make is driven by the goal of 
                creating exceptional user experiences. Clean code is not just about functionality—it's 
                about building something that users love to interact with."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;