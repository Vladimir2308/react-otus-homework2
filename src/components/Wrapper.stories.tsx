import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Wrapper } from './Wrapper';

export default {
  component: Wrapper,
  title: 'Wrapper',
} as Meta;

const Template: Story = (args) => <Wrapper {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { color: 'black' };
