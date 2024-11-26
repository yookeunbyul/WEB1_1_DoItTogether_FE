import type { Meta, StoryObj } from '@storybook/react';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';

const meta = {
  title: 'components/statistics/weekly/WeeklyRanking/WeeklyOthers',
  component: WeeklyOthers,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyOthers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    place: 4,
    profile: 'none',
    name: '준희',
    num: 1,
  },
  render: args => <WeeklyOthers {...args} />,
};

const args2 = {
  place: 5,
  profile: 'none',
  name: '준희',
  num: 0,
};

const args3 = {
  place: 6,
  profile: 'none',
  name: '지원',
  num: 0,
};

export const Flex: Story = {
  args: {
    place: 4,
    profile: 'none',
    name: '민지',
    num: 1,
  },

  render: args => (
    <div className='flex flex-col gap-2'>
      <WeeklyOthers {...args} />
      <WeeklyOthers {...args2} />
      <WeeklyOthers {...args3} />
    </div>
  ),
};
