import type { Meta, StoryObj } from '@storybook/react';
import WeeklyPodium from '@/components/WeeklyRankingContainer/WeeklyPodium/WeeklyPodium';

const meta = {
  title: 'components/WeeklyRankingContainer/WeeklyPodium',
  component: WeeklyPodium,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyPodium>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    place: 1,
    profile: 'none',
    name: '민재',
    num: 10,
  },
  render: args => <WeeklyPodium {...args} />,
};

export const NotWinner: Story = {
  args: {
    place: 2,
    profile: 'none',
    name: '서준',
    num: 8,
  },
  render: args => <WeeklyPodium {...args} />,
};
