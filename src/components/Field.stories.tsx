import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from './Field';

export default {
  component: Field,
  title: 'Field',
} as Meta;

const Template: Story = (args) => (
  <Field horiz_count={0} vertic_count={0} {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { horiz_count: 2, vertic_count: 3 };

export const Secondary = Template.bind({});
Secondary.args = { horiz_count: 5, vertic_count: 5 };

export const Tertiary = Template.bind({});
Tertiary.args = { horiz_count: 20, vertic_count: 40 };
