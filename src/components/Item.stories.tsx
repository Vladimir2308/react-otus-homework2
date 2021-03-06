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
    onclickItemToField={someFunction}
    order_num={0}
    display_num={null}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = { display_num: 2 };

export const Secondary = Template.bind({});
Secondary.args = { display_num: 5 };

export const Tertiary = Template.bind({});
Tertiary.args = { display_num: 999 };
