import React, { useState } from 'react';

function ContactForm({ setContacts }) {
  const [contact, setContact] = useState({ name: '', company: '', phone: '', email: '' });

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setContacts(prev => [...prev, contact]);
    setContact({ name: '', company: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Ime" value={contact.name} onChange={handleChange} required />
      <input name="company" placeholder="Firma" value={contact.company} onChange={handleChange} />
      <input name="phone" placeholder="Telefon" value={contact.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={contact.email} onChange={handleChange} />
      <button type="submit">Dodaj kontakt</button>
    </form>
  );
}

export default ContactForm;
