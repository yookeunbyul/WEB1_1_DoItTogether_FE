import type { Meta, StoryObj } from '@storybook/react';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking',
  component: WeeklyRanking,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyRanking>;

export default meta;

type Story = StoryObj<typeof meta>;

const DUMMY_RANKING = [
  {
    place: 1,
    profile: 'https://example.com/profile1.jpg',
    name: '홍길동',
    num: 5,
  },
  {
    place: 2,
    profile: 'https://example.com/profile2.jpg',
    name: '김철수',
    num: 4,
  },
  {
    place: 3,
    profile: 'https://example.com/profile3.jpg',
    name: '이영희',
    num: 3,
  },
  {
    place: 4,
    profile: 'https://example.com/profile4.jpg',
    name: '박지민',
    num: 2,
  },
  {
    place: 5,
    profile: 'https://example.com/profile5.jpg',
    name: '최민수',
    num: 1,
  },
  {
    place: 6,
    profile: 'https://example.com/profile6.jpg',
    name: '정유진',
    num: 0,
  },
];

export const Default: Story = {
  args: {
    rankings: DUMMY_RANKING,
  },
  render: args => <WeeklyRanking {...args} />,
};
