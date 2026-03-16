import React from 'react';
import { useInView } from 'react-intersection-observer';

const WhyUs = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="why-us section-padding bg-light" id="zasto-mi">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <h2 className="section-title center">{t.why_title}</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-number">01</div>
            <h3>{t.why_1_title}</h3>
            <p>{t.why_1_desc}</p>
          </div>
          <div className="why-card">
            <div className="why-number">02</div>
            <h3>{t.why_2_title}</h3>
            <p>{t.why_2_desc}</p>
          </div>
          <div className="why-card">
            <div className="why-number">03</div>
            <h3>{t.why_3_title}</h3>
            <p>{t.why_3_desc}</p>
          </div>
          <div className="why-card">
            <div className="why-number">04</div>
            <h3>{t.why_4_title}</h3>
            <p>{t.why_4_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
