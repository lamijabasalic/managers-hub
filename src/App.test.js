import { render, screen } from '@testing-library/react';
import App from './App';

test("prikazuje naslov 'Manager's Hub 💼'", () => {
  render(<App />);
  const heading = screen.getByText(/Manager's Hub/i);
  expect(heading).toBeInTheDocument();
});

test("prikazuje sekciju Kontakti", () => {
  render(<App />);
  const kontakti = screen.getByText(/Kontakti/i);
  expect(kontakti).toBeInTheDocument();
});

test("prikazuje sekciju Podsjetnici", () => {
  render(<App />);
  const podsjetnici = screen.getByText(/Podsjetnici/i);
  expect(podsjetnici).toBeInTheDocument();
});
