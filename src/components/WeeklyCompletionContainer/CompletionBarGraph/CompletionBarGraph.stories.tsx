import type { Meta, StoryObj } from '@storybook/react';
import CompletionBarGraph from '@/components/WeeklyCompletionContainer/CompletionBarGraph/CompletionBarGraph';

const meta = {
  title: 'components/WeeklyCompletionContainer/CompletionBarGraph',
  component: CompletionBarGraph,
  tags: ['autodocs'],
} satisfies Meta<typeof CompletionBarGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { completed: 2, notCompleted: 2 },
};
