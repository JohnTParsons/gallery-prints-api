import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';

test('renders heading', () => {
  const { getByText } = render(<List prints={[]} />);
  expect(getByText(/Title/i)).toBeInTheDocument();
  expect(getByText(/Technique/i)).toBeInTheDocument();
  expect(getByText(/Image/i)).toBeInTheDocument();
});
