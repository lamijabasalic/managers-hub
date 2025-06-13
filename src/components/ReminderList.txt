import React from 'react';

function ReminderList({ reminders }) {
  return (
    <ul className="list">
      {reminders.map((r, index) => (
        <li key={index}>
          <strong>{r.title}</strong> – {r.date} <br /> {r.note}
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
