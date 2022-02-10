import React from 'react';
import { render, screen } from '@testing-library/react';

import { Wrapper } from './Wrapper';
import { Field } from './Field';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { fact: 'some test fact' } }),
  })
);

describe('Wrapper', () => {
  test('renders Wrapper component', () => {
    const { container } = render(
      <Field
        horiz_count={5}
        vertic_count={5}
        getMembers={() => [
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ]}
      />
    );

    const elementsByClassName = container.getElementsByClassName('Field');
  });
});

describe('Wrapper', () => {
  test('renders Wrapper component', () => {
    const { container } = render(<Field horiz_count={5} vertic_count={5} />);

    // render(<Wrapper />);

    console.log();
  });
});
