import React from 'react';
import { render, screen } from '@testing-library/react';

import { Wrapper } from './Wrapper';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { fact: 'some test fact' } }),
  })
);

describe('Wrapper', () => {
  test('renders Wrapper component', async () => {
    render(<Wrapper />);
    expect(screen.getByTestId('loading'));
    expect(screen.getAllByRole('button'));
    console.log();
  });
});
