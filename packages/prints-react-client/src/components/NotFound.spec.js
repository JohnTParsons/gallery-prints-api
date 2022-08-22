import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from './NotFound';

test('renders heading', () => {
  const { getByTestId } = render(<NotFound />);
  expect(getByTestId('not-found-error')).toBeInTheDocument();
});
