import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title and cards', () => {
  render(<App />);

  expect(screen.getByText(/quem somos/i)).toBeInTheDocument();
  expect(screen.getByText(/leitura em foco/i)).toBeInTheDocument();
  expect(screen.getByText(/análise literária/i)).toBeInTheDocument();
});
