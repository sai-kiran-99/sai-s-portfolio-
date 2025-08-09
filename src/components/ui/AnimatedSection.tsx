import React from 'react';
import { useInView } from '../../hooks/useInView';
import { AnimatedSectionProps } from '../../types';

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { elementRef, hasBeenInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className={`transition-all duration-1000 ${
        hasBeenInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;