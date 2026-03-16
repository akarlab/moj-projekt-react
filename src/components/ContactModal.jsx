import React from 'react';

const ContactModal = ({ translations, language, isOpen, onClose }) => {
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div id="contact-modal" className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2 className="section-title center" style={{ marginBottom: '2rem', fontSize: '2rem' }}>
          {t.modal_title}
        </h2>
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3709a7e2-a528-408f-9b8c-36ae7b892d7a" />
          <input type="hidden" name="subject" value="Novi upit s weba - AKB CREATIVE HOUSE" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <div className="form-group">
            <label htmlFor="c-name">{t.modal_name}</label>
            <input type="text" id="c-name" name="Ime" required placeholder={t.modal_name_ph} />
          </div>
          <div className="form-group">
            <label htmlFor="c-contact">{t.modal_contact}</label>
            <input type="text" id="c-contact" name="Kontakt" required placeholder={t.modal_contact_ph} />
          </div>
          <div className="form-group radio-group">
            <label>{t.modal_type}</label>
            <div className="radio-options">
              <label className="radio-label">
                <input type="radio" name="Tip_upita" value="Regularno" defaultChecked />
                <span className="radio-custom"></span>
                <span>{t.modal_reg}</span>
              </label>
              <label className="radio-label priority-high">
                <input type="radio" name="Tip_upita" value="Hitno" />
                <span className="radio-custom"></span>
                <span>{t.modal_urg}</span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="c-message">{t.modal_msg}</label>
            <textarea id="c-message" name="Poruka" rows="4" required placeholder={t.modal_msg_ph}></textarea>
          </div>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button type="submit" className="btn-primary-small submit-btn">{t.modal_submit}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
