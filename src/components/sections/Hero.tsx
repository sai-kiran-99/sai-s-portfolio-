import React, { useState } from 'react';
import { personalInfo } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
   const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-apple-blue/8 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/8 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-apple-blue/5 to-purple-600/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-600/5 to-apple-blue/5 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-apple-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-600/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-apple-blue/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-600/35 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <AnimatedSection delay={200}>
            <div className="mb-12">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-apple-blue via-purple-600 to-apple-blue p-1.5 shadow-2xl shadow-apple-blue/20">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center backdrop-blur-sm">
                  {!imageError ? (
                    <img
                      src="/profile.png"
                      alt="sai profile pic"
                      className="w-full h-full rounded-full object-cover"
                      onError={() => setImageError(true)}
                      onLoad={() => setImageError(false)}
                    />
                  ) : (
                    <span className="text-5xl font-bold text-gradient">
                      {personalInfo.name.split(' ').map(name => name[0]).join('')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-apple-gray-600 mb-8 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-hero">
                {personalInfo.name.split(' ')[0]}
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-apple-gray-500 mb-8">
              {personalInfo.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <p className="text-2xl sm:text-3xl text-apple-gray-400 mb-10 max-w-4xl mx-auto font-medium leading-relaxed">
              {personalInfo.tagline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1000}>
            <p className="text-xl text-apple-gray-400 mb-16 max-w-5xl mx-auto leading-relaxed">
              {personalInfo.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1100}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button
                onClick={scrollToProjects}
                className="apple-button px-10 py-5 text-lg font-semibold"
              >
                🚀 View My Work
              </button>
              <button
                onClick={scrollToContact}
                className="apple-button-secondary px-10 py-5 text-lg font-semibold"
              >
                💬 Get In Touch
              </button>
              <a
                href="/Sai_kiran_madala_RESUME___Front_end.pdf"
                download="Sai_Kiran_Madala_Resume.pdf"
                className="apple-button-secondary px-10 py-5 text-lg font-semibold flex items-center gap-2 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-all duration-300"
              >
                📄 Download Resume
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1400}>
            <div className="flex justify-center space-x-8 mt-16">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-apple-gray-500 hover:text-apple-blue transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-apple-gray-500 hover:text-apple-blue transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-apple-gray-500 hover:text-apple-blue transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-apple-gray-300 flex justify-center">
            <div className="w-1 h-3 bg-apple-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;