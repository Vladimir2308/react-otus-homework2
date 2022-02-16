import React from 'react';
import { Story, Meta } from '@storybook/react';
import BottomPanel from './BottomPanel';

export default {
  component: BottomPanel,
  title: 'BottomPanel',
} as Meta;

const someFunction = (): void => {
  return;
};

const Template: Story = (args) => (
  <BottomPanel
    selected_size={1}
    selected_speed={25}
    onclickItemToField={someFunction}
    {...args}
  />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { selected_size: 2, selected_speed: 150 };

export const Secondary = Template.bind({});
Secondary.args = { selected_size: 3, selected_speed: 50 };
