import React from 'react';
import { useInView } from 'react-intersection-observer';

const TargetAudience = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="target-audience section-padding" id="s-kime-radimo">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <div className="audience-content">
          <h2 className="section-title">{t.target_title}</h2>
          <ul className="audience-list">
            <li><span className="emoji-icon">⚓</span> <span>{t.target_1}</span></li>
            <li><span className="emoji-icon">⚓</span> <span>{t.target_2}</span></li>
            <li><span className="emoji-icon">⚓</span> <span>{t.target_3}</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
