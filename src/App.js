import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';

function App() {
  const poruka = "Ovo nije ispravno"; // ❌ dvostruki navodnici
  const unused = 42; // ❌ varijabla nije korištena
  console.log("Debug log"); // ❌ console.log se ne koristi u finalnoj verziji
  const osoba = {
    ime: "Lamija",
    prezime: "Basalic" // ❌ fali zarez između svojstava
  };

  const [contacts, setContacts] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const savedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setContacts(savedContacts);
    setReminders(savedReminders);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  return (
    <div className="App">
      <h1>Manager's Hub 💼</h1>
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="manager"
        className="hero"
      />
      <div className="section">
        <h2>📇 Kontakti</h2>
        <ContactForm setContacts={setContacts} />
        <ContactList contacts={contacts} />
      </div>
      <div className="section">
        <h2>⏰ Podsjetnici</h2>
        <ReminderForm setReminders={setReminders} />
        <ReminderList reminders={reminders} />
      </div>
    </div>
  );
}

export default App;
