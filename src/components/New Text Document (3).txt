import React, { useState } from 'react';

function ReminderForm({ setReminders }) {
  const [reminder, setReminder] = useState({ title: '', date: '', note: '' });

  const handleChange = e => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setReminders(prev => [...prev, reminder]);
    setReminder({ title: '', date: '', note: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Naslov" value={reminder.title} onChange={handleChange} required />
      <input type="date" name="date" value={reminder.date} onChange={handleChange} required />
      <input name="note" placeholder="Napomena" value={reminder.note} onChange={handleChange} />
      <button type="submit">Dodaj podsjetnik</button>
    </form>
  );
}

export default ReminderForm;
