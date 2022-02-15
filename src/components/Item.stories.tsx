import React from 'react';
import { Story, Meta } from '@storybook/react';

import Item from './Item';

export default {
  component: Item,
  title: 'Item',
} as Meta;

const someFunction = (): void => {
  return;
};

const Template: Story = (args) => (
  <Item
    // onclickItemToField={someFunction}
    // order_num={0}
    value={1}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = { value: 1 };

export const Secondary = Template.bind({});
Secondary.args = { value: 2 };
