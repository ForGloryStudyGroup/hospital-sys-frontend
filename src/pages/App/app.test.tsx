import { render, screen } from '@testing-library/react';
import App from '.';

test('renders Base', () => {
  render(<App />);
  const linkElement = screen.getByText(/Base/i);
  expect(linkElement).toBeInTheDocument();
});
