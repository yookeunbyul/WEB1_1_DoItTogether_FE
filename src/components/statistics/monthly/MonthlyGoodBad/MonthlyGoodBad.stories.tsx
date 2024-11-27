import type { Meta, StoryObj } from '@storybook/react';
import MonthlyGoodBad from './MonthlyGoodBad';

const meta = {
  title: 'components/statistics/monthly/MonthlyGoodBad',
  component: MonthlyGoodBad,
  tags: ['autodocs'],
} satisfies Meta<typeof MonthlyGoodBad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Good: Story = {
  args: {
    type: '칭찬',
    name: '김철수',
  },
};

export const Bad: Story = {
  args: {
    type: '찌르기',
    name: '박영희',
  },
};
