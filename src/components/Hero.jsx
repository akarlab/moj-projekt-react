import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <header className="hero" id="pocetna">
      <div className="hero-overlay"></div>
      <div 
        ref={ref} 
        className={`hero-content ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <h1 className="hero-title">{t.hero_title}</h1>
        <p className="hero-subtitle">{t.hero_subtitle}</p>
        <a href="#o-nama" className="scroll-down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Hero;
