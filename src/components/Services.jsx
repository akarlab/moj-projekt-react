import React from 'react';
import { useInView } from 'react-intersection-observer';

const Services = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="services section-padding bg-light" id="usluge">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <h2 className="section-title center">{t.services_title}</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="emoji-icon">⚓</span>
            <h3 dangerouslySetInnerHTML={{ __html: t.srv_social }}></h3>
          </div>
          <div className="service-card">
            <span className="emoji-icon">⚓</span>
            <h3 dangerouslySetInnerHTML={{ __html: t.srv_email }}></h3>
          </div>
          <div className="service-card">
            <span className="emoji-icon">⚓</span>
            <h3 dangerouslySetInnerHTML={{ __html: t.srv_photo }}></h3>
          </div>
          <div className="service-card">
            <span className="emoji-icon">⚓</span>
            <h3 dangerouslySetInnerHTML={{ __html: t.srv_web }}></h3>
          </div>
          <div className="service-card">
            <span className="emoji-icon">⚓</span>
            <h3 dangerouslySetInnerHTML={{ __html: t.srv_events }}></h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
