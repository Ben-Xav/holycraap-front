import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Ben & Xav', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ben & Xav/i);
  expect(linkElement).toBeInTheDocument();
});
