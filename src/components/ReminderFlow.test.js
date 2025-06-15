import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('korisnik može dodati novi podsjetnik', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Naslov/i), {
    target: { value: 'Pregled' }
  });

  fireEvent.change(screen.getByPlaceholderText(/Napomena/i), {
    target: { value: 'Kod zubara' }
  });

  const dateInput = document.querySelector('input[type="date"]'); // 👈 OVO JE VAŽNO
  fireEvent.change(dateInput, {
    target: { value: '2025-06-14' }
  });

  fireEvent.click(screen.getByText(/Dodaj podsjetnik/i));

  expect(screen.getByText(/Pregled/i)).toBeInTheDocument();
  expect(screen.getByText(/2025-06-14/i)).toBeInTheDocument();
  expect(screen.getByText(/Kod zubara/i)).toBeInTheDocument();
});
