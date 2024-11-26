import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRankingContainer from '@/components/WeeklyRankingContainer/WeeklyRankingContainer';

const meta = {
  title: 'components/WeeklyRankingContainer',
  component: WeeklyRankingContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyRankingContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <WeeklyRankingContainer {...args} />,
};
