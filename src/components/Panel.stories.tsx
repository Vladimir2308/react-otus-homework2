import React from 'react';
import { Story, Meta } from '@storybook/react';
import Panel from './Panel';

export default {
  component: Panel,
  title: 'Panel',
} as Meta;

const Template: Story = (args) => (
  <Panel selected_size={1} selected_speed={11} {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { selected_size: 2, selected_speed: 12 };

export const Secondary = Template.bind({});
Secondary.args = { selected_size: 3, selected_speed: 13 };
