import type { Meta, StoryObj } from '@storybook/react';
import WeeklyPodium from '@/components/statistics/weekly/WeeklyRanking/WeeklyPodium/WeeklyPodium';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking/WeeklyPodium',
  component: WeeklyPodium,
  tags: ['autodocs'],
  argTypes: {
    rank: { control: 'number', description: '순위' },
    nickname: { control: 'text', description: '닉네임' },
    completeCount: { control: 'number', description: '완료된 작업 수' },
  },
} satisfies Meta<typeof WeeklyPodium>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rank: 1,
    nickname: '민재',
    completeCount: 10,
  },
};

export const NotWinner: Story = {
  args: {
    rank: 2,
    nickname: '서준',
    completeCount: 8,
  },
};

export const ThirdPlace: Story = {
  args: {
    rank: 3,
    nickname: '지우',
    completeCount: 6,
  },
};

export const NoCompletions: Story = {
  args: {
    rank: 1,
    nickname: '현우',
    completeCount: 0,
  },
};
