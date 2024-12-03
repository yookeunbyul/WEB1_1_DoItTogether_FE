import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking',
  component: WeeklyRanking,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyRanking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DUMMY_RANKING = [
  {
    nickname: '엄마',
    completeCount: 8,
  },
  {
    nickname: '아빠',
    completeCount: 6,
  },
  {
    nickname: '첫째',
    completeCount: 4,
  },
  {
    nickname: '둘째',
    completeCount: 2,
  },
];

export const Default: Story = {
  args: {
    rankings: DUMMY_RANKING,
  },
  render: args => <WeeklyRanking {...args} />,
};
