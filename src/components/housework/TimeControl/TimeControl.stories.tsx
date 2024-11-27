import type { Meta, StoryObj } from '@storybook/react';
import TimeControl from '@/components/housework/TimeControl/TimeControl';

const meta: Meta<typeof TimeControl> = {
  title: 'components/housework/TimeControl/TimeControl',
  component: TimeControl,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimeControl>;

export const Default: Story = {
  args: {},
};
