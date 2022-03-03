import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HeaderPanel } from './HeaderPanel';

export default {
  component: HeaderPanel,
  title: 'HeaderPanel',
} as Meta;

const someFunction = (): void => {
  return;
};

const Template: Story = (args) => (
  <HeaderPanel
    generation={0}
    onclickItemToField={someFunction}
    isTimerPause={true}
    {...args}
  />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { generaion: 11 };

export const Secondary = Template.bind({});
Secondary.args = { generaion: 99999, isTimerPause: false };
