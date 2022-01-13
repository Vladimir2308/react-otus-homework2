import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Field } from './Field';

describe('Field test cases', () => {
  it('Field render correctly, click item work 2x3', () => {
    const { container } = render(<Field horiz_count={20} vertic_count={40} />);
    const elementsByClassName = container.getElementsByClassName('Item')[0];
    expect(screen.queryByText(1)).not.toBeInTheDocument();
    userEvent.click(elementsByClassName);
    expect(screen.getByText(1));
  });
  it('Field render correctly, click item work 5x5', () => {
    const { container } = render(<Field horiz_count={20} vertic_count={40} />);
    const elementsByClassName = container.getElementsByClassName('Item')[0];
    expect(screen.queryByText(1)).not.toBeInTheDocument();
    userEvent.click(elementsByClassName);
    expect(screen.getByText(1));
  });
  it('Field render correctly, click item work 20x40', () => {
    const { container } = render(<Field horiz_count={20} vertic_count={40} />);
    const elementsByClassName = container.getElementsByClassName('Item')[0];
    expect(screen.queryByText(1)).not.toBeInTheDocument();
    userEvent.click(elementsByClassName);
    expect(screen.getByText(1));
  });
});
