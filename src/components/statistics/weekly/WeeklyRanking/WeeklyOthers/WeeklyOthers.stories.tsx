import type { Meta, StoryObj } from '@storybook/react';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking/WeeklyOthers',
  component: WeeklyOthers,
  tags: ['autodocs'],
  argTypes: {
    rank: { control: 'number', description: '순위' },
    nickname: { control: 'text', description: '닉네임' },
    completeCount: { control: 'number', description: '완료된 작업 수' },
  },
} satisfies Meta<typeof WeeklyOthers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rank: 4,
    nickname: '준희',
    completeCount: 1,
  },
};

export const Flex: Story = {
  args: {
    rank: 4,
    nickname: '민지',
    completeCount: 1,
  },
  render: args => (
    <div className='flex flex-col gap-2'>
      <WeeklyOthers {...args} />
      <WeeklyOthers rank={5} nickname='준희' completeCount={0} />
      <WeeklyOthers rank={6} nickname='지원' completeCount={0} />
    </div>
  ),
};
