import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name from goblin form', () => {
  render(<App />);
  const goblinFormName = screen.getByText(/name/i);
  expect(goblinFormName).toBeInTheDocument();
});
