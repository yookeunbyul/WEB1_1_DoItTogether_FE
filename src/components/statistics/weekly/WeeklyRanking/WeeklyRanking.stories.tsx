import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking',
  component: WeeklyRanking,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyRanking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <WeeklyRanking {...args} />,
};
