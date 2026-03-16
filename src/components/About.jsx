import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about section-padding" id="o-nama">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">{t.about_title}</h2>
            <p className="lead" dangerouslySetInnerHTML={{ __html: t.about_desc }}></p>
            
            <div className="mission-vision">
              <div className="mv-box">
                <h3>{t.about_mission_title}</h3>
                <p>{t.about_mission_desc}</p>
              </div>
              <div className="mv-box">
                <h3>{t.about_vision_title}</h3>
                <p>{t.about_vision_desc}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/assets/o_nama.jpg" alt="O nama - AKB Creative House" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
