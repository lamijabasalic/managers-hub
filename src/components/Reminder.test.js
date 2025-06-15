// src/components/ReminderList.test.js
import { render, screen } from '@testing-library/react';
import ReminderList from './ReminderList';

test('prikazuje podsjetnik s naslovom, datumom i napomenom', () => {
  const reminders = [{
    title: 'Sastanak',
    date: '2024-06-13',
    note: 'Napomena neka'
  }];

  render(<ReminderList reminders={reminders} />);

  expect(screen.getByText(/Sastanak/i)).toBeInTheDocument();
  expect(screen.getByText(/2024-06-13/i)).toBeInTheDocument();
  expect(screen.getByText(/Napomena neka/i)).toBeInTheDocument();
});
