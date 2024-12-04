import GroupOption from '@/components/home/GroupSelectSheet/GroupOptions/GroupOption';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/home/GroupSelectSheet/GroupOption',
  component: GroupOption,
  tags: ['autodocs'],
} satisfies Meta<typeof GroupOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    group: { name: '우리집', channelId: 0 },
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    group: { name: '우리집', channelId: 0 },
    isSelected: true,
  },
};
