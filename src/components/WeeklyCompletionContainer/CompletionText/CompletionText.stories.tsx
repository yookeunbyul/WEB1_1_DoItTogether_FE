import type { Meta, StoryObj } from '@storybook/react';
import CompletionText from '@/components/WeeklyCompletionContainer/CompletionText/CompletionText';

const meta = {
  title: 'components/WeeklyCompletionContainer/CompletionText',
  component: CompletionText,
  tags: ['autodocs'],
} satisfies Meta<typeof CompletionText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    completedText: '완료',
    num: 2,
  },
};

export const NotCompleted: Story = {
  args: {
    completedText: '미완료',
    num: 2,
  },
};
