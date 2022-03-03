import React from 'react';
import { render } from '@testing-library/react';

import { Wrapper } from './Wrapper';

describe('Wrapper', () => {
  test('renders Wrapper component', () => {
    render(<Wrapper />);
  });
});
