import type { Meta, StoryObj } from '@storybook/react';
import WeeklyCompletionContainer from '@/components/WeeklyCompletionContainer/WeeklyCompletionContainer';

const meta = {
  title: 'components/WeeklyCompletionContainer',
  component: WeeklyCompletionContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyCompletionContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupName: '우리집',
    completed: 2,
    notCompleted: 2,
  },
};
