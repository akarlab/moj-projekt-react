import React from 'react';
import { useInView } from 'react-intersection-observer';

const Gallery = ({ translations, language }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="gallery section-padding bg-light" id="galerija">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <h2 className="section-title center">{t.gallery_title}</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="/assets/projekt_1e01.jpeg" alt="Projekt 1" /></div>
          <div className="gallery-item"><img src="/assets/projekt_430f.jpeg" alt="Projekt 2" /></div>
          <div className="gallery-item"><img src="/assets/projekt_5d58.jpeg" alt="Projekt 3" /></div>
          <div className="gallery-item"><img src="/assets/projekt_5f4f.jpeg" alt="Projekt 4" /></div>
          <div className="gallery-item"><img src="/assets/projekt_cf91.jpeg" alt="Projekt 5" /></div>
          <div className="gallery-item">
            <video autoPlay muted loop playsInline className="gallery-video">
              <source src="/assets/videos/video1_mali.mp4" type="video/mp4" />
              Vaš preglednik ne podržava video oznaku.
            </video>
          </div>
          <div className="gallery-item">
            <video autoPlay muted loop playsInline className="gallery-video">
              <source src="/assets/videos/video2_mali.mp4" type="video/mp4" />
              Vaš preglednik ne podržava video oznaku.
            </video>
          </div>
          <div className="gallery-item">
            <video autoPlay muted loop playsInline className="gallery-video">
              <source src="/assets/videos/video3_mali.mp4" type="video/mp4" />
              Vaš preglednik ne podržava video oznaku.
            </video>
          </div>
          <div className="gallery-item">
            <video autoPlay muted loop playsInline className="gallery-video">
              <source src="/assets/videos/video4_mali.mp4" type="video/mp4" />
              Vaš preglednik ne podržava video oznaku.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
