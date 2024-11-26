import type { Meta, StoryObj } from '@storybook/react';
import WeeklyStatDate, { WeeklyStatDateProps } from '@/components/WeeklyStatDate/WeeklyStatDate';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'components/WeeklyStatDate',
  component: WeeklyStatDate,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyStatDate>;

export default meta;

type Story = StoryObj<WeeklyStatDateProps>;

export const Default: Story = {
  args: {
    currentDate: new Date(),
    handlePrevWeek: action('prev-btn-clicked'),
    handleNextWeek: action('next-btn-clicked'),
  },
};
