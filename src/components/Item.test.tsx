import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from './Item';

describe('Item test cases', () => {
  it('Item render correctly', () => {
    const order_num = 999;
    const display_num = 888;
    const onclickItemToField = () => undefined;
    const { container } = render(
      <Item
        onclickItemToField={onclickItemToField}
        order_num={order_num}
        display_num={display_num}
      />
    );
    const cell = container.firstChild;
    expect(cell).not.toBeNull();
    if (!cell) return;
    expect(cell.textContent).toEqual('888');
    const element = screen.getByText(display_num);
    expect(parseInt(element.id) === order_num);
  });
});
