import React, { useState } from 'react';
import { translations } from './translations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import Gallery from './components/Gallery';
import BrandBanner from './components/BrandBanner';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import AiGenerator from './components/AiGenerator';
import ContactModal from './components/ContactModal';

function App() {
  const [language, setLanguage] = useState('hr');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} translations={translations} />
      <Hero language={language} translations={translations} />
      <About language={language} translations={translations} />
      <Services language={language} translations={translations} />
      <TargetAudience language={language} translations={translations} />
      <Gallery language={language} translations={translations} />
      <BrandBanner language={language} translations={translations} />
      <WhyUs language={language} translations={translations} />
      <AiGenerator language={language} translations={translations} />
      <Footer  
        language={language} 
        translations={translations} 
        onOpenContact={() => setIsModalOpen(true)} 
      />
      <ContactModal 
        language={language} 
        translations={translations} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default App;
