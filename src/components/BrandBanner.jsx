import React from 'react';
import { useInView } from 'react-intersection-observer';

const BrandBanner = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className={`brand-banner reveal ${inView ? 'active' : ''}`}
      style={{ opacity: inView ? 1 : 0, transition: 'all 0.8s ease' }}
    >
      <video autoPlay muted loop playsInline className="banner-video">
        <source src="/assets/videos/video3_mali.mp4" type="video/mp4" />
      </video>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h2>{t.banner_title}</h2>
      </div>
    </section>
  );
};

export default BrandBanner;
