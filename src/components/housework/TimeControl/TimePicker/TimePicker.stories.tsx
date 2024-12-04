import TimePicker from '@/components/housework/TimeControl/TimePicker/TimePicker';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimePicker> = {
  title: 'components/housework/TimeControl/TimePicker/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {},
};

export const CustomInitialTime: Story = {
  args: {},
  render: args => <TimePicker {...args} />,
};

export const WithDarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
