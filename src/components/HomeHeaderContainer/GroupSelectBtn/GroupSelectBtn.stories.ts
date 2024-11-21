import type { Meta, StoryObj } from '@storybook/react';
import GroupSelectBtn from './GroupSelectBtn';

const meta = {
  title: 'GroupSelectBtn',
  component: GroupSelectBtn,
  tags: ['autodocs'],
} satisfies Meta<typeof GroupSelectBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: '우리집',
  },
};
