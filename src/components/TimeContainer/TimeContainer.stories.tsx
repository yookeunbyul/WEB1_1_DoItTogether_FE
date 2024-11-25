import type { Meta, StoryObj } from '@storybook/react';
import TimeContainer from './TimeContainer';

const meta: Meta<typeof TimeContainer> = {
  title: 'Components/TimeContainer',
  component: TimeContainer,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimeContainer>;

export const Default: Story = {
  args: {},
};

export const WithDarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
