import React from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = ({ translations, language, onOpenContact }) => {
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="footer" id="kontakt">
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="AKB CREATIVE HOUSE" className="footer-logo-img" />
            <p>{t.footer_desc}</p>
          </div>
          <div className="footer-contact">
            <h3>{t.footer_contact_title}</h3>
            <p className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+385994008998">+385 99 400 8998</a>
            </p>
            <p className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="#" className="open-contact-modal" onClick={(e) => { e.preventDefault(); onOpenContact(); }}>
                akbcreativehouse@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AKB CREATIVE HOUSE. <span>{t.footer_rights}</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
