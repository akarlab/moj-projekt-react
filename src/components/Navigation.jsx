import React, { useState, useEffect } from 'react';

const Navigation = ({ language, setLanguage, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLangChange = (lang) => {
    setLanguage(lang);
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <img src="/assets/logo.png" alt="AKB CREATIVE HOUSE" className="nav-logo" />
          </a>
          <div className="nav-links">
            <a href="#o-nama">{t.nav_about}</a>
            <a href="#usluge">{t.nav_services}</a>
            <a href="#galerija">{t.nav_gallery}</a>
            <a href="#zasto-mi">{t.nav_why}</a>
            <a href="#api-demo" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>API Demo</a>
            <a href="#kontakt" className="btn-primary-small">{t.nav_contact}</a>
          </div>
          <div className="language-switcher">
            {['hr', 'en', 'es', 'it', 'pt'].map((lang) => (
              <button
                key={lang}
                className={`lang-btn ${language === lang ? 'active' : ''}`}
                onClick={() => handleLangChange(lang)}
                title={lang.toUpperCase()}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#o-nama" onClick={closeMobileMenu}>{t.nav_about}</a>
        <a href="#usluge" onClick={closeMobileMenu}>{t.nav_services}</a>
        <a href="#galerija" onClick={closeMobileMenu}>{t.nav_gallery}</a>
        <a href="#zasto-mi" onClick={closeMobileMenu}>{t.nav_why}</a>
        <a href="#api-demo" onClick={closeMobileMenu} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>API Demo</a>
        <a href="#kontakt" onClick={closeMobileMenu}>{t.nav_contact}</a>
        <div className="mobile-language-switcher">
          {['hr', 'en', 'es', 'it', 'pt'].map((lang) => (
            <button
              key={`mob-${lang}`}
              className={`lang-btn ${language === lang ? 'active' : ''}`}
              onClick={() => handleLangChange(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
