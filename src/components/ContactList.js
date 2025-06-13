import React from 'react';

function ContactList({ contacts }) {
  return (
    <ul className="list">
      {contacts.map((c, index) => (
        <li key={index}>
          <strong>{c.name}</strong> ({c.company}) – {c.phone}, {c.email}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
