import React from 'react';
import { render } from '@testing-library/react';
import { AboutContainer } from './AboutContainer';

test('renders heading', () => {
  const { getByText } = render(<AboutContainer />);
  const heading = getByText(/Demo exercise/i);
  expect(heading).toBeInTheDocument();
});
