import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AiGenerator = ({ translations, language }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = translations[language];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // U ovoj funkciji mi zapravo "sastavljamo API" poziv
  const callAPI = async (e) => {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      /* 
       * OVDJE "SASTAVLJAMO API":
       * Povezujemo se na vanjski server (u ovom slucaju testni 'jsonplaceholder' koji oponasa pravi API).
       * Šaljemo mu tvoj upisani tekst (Prompt) unutar 'body' atributa.
       * Kad bi imali pravi ChatGPT (OpenAI) API kljuc, link bi bio https://api.openai.com/...
       */
      const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Ovdje šaljemo tvoj PROMPT na server!
          user_prompt: prompt, 
          userId: 1,
        }),
      });

      // Zatim čekamo odgovor od API-ja 
      const data = await apiResponse.json();
      
      // Simuliramo pametan odgovor API-ja nakon sekunde
      setTimeout(() => {
        setResponse(`Uspješno! API je primio tvoj prompt: "${data.user_prompt}". Ovo dokazuje da je pogađanje pravog servera i prosljeđivanje prompta uspješno integrirano u React aplikaciju!`);
        setIsLoading(false);
      }, 1500);

    } catch (error) {
      console.error("Greška pri spajanju na API:", error);
      setResponse("Došlo je do greške pri pozivanju API-ja.");
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding" id="api-demo" style={{ backgroundColor: '#f0f4f8' }}>
      <div 
        ref={ref} 
        className={`container reveal ${inView ? 'active' : ''}`}
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}
      >
        <h2 className="section-title center">1. API & Prompt Demo</h2>
        
        <div style={{ maxWidth: '700px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <strong>Upiši svoj "Prompt"</strong> (naredbu ili pitanje) i klikni gumb kako bi poslao podatke putem <strong>API-ja</strong> na udaljeni server. Oponašamo komunikaciju s AI modelom.
          </p>

          <form onSubmit={callAPI} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Unesite svoj prompt ovdje (npr. Napiši mi marketinšku strategiju...)"
              rows="4"
              required
              style={{ 
                padding: '1.2rem', 
                borderRadius: '10px', 
                border: '2px solid #e1e4e8', 
                fontFamily: 'inherit',
                fontSize: '1rem',
                resize: 'none',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = '#e1e4e8'}
            />
            <button type="submit" className="btn-primary" disabled={isLoading} style={{ width: '100%', border: 'none', cursor: 'pointer', opacity: isLoading ? 0.7 : 1 }}>
              {isLoading ? 'Slanje prompta preko API-ja...' : 'Pošalji prompt (Testiraj API)'}
            </button>
          </form>

          {response && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: 'rgba(52, 152, 219, 0.05)', 
              borderRadius: '10px', 
              borderLeft: '5px solid var(--primary)',
              animation: 'fadeIn 0.5s ease'
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Odgovor servera putem API-ja:</h4>
              <p style={{ margin: '0', color: '#333', lineHeight: '1.5' }}>{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiGenerator;
