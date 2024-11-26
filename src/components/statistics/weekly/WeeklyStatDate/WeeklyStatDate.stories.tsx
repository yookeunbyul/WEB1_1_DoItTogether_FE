import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WeeklyStatDate from './WeeklyStatDate'; // 경로에 맞게 수정

const meta = {
  title: 'components/WeeklyStatDate',
  component: WeeklyStatDate,
  tags: ['autodocs'],
} satisfies Meta<typeof WeeklyStatDate>;

export default meta;

type Story = StoryObj<typeof WeeklyStatDate>;

export const Default: Story = {
  render: () => {
    // 상태 관리
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevWeek = () => {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() - 7);
        return newDate;
      });
    };

    const handleNextWeek = () => {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() + 7);
        return newDate;
      });
    };

    return (
      <WeeklyStatDate
        currentDate={currentDate}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />
    );
  },
};
