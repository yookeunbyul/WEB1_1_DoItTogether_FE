import type { Meta, StoryObj } from '@storybook/react';
import MonthlyGrass from './MonthlyGrass';

enum CompletionStatus {
  ALL_DONE = 'ALL_DONE',
  INCOMPLETE_REMAINING = 'INCOMPLETE_REMAINING',
  NO_HOUSEWORK = 'NO_HOUSEWORK',
}

interface DailyTask {
  date: string;
  totalTasks: number;
  completedTasks: number;
  status: CompletionStatus;
}

const meta = {
  title: 'components/statistics/monthly/MonthlyGrass',
  component: MonthlyGrass,
  tags: ['autodocs'],
  argTypes: {
    completionData: { control: 'object' },
    onMonthChange: { action: 'monthChanged' },
  },
} satisfies Meta<typeof MonthlyGrass>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCompletionData: DailyTask[] = [
  { date: '2024-11-01', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  { date: '2024-11-02', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  { date: '2024-11-03', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  {
    date: '2024-11-04',
    totalTasks: 3,
    completedTasks: 2,
    status: CompletionStatus.INCOMPLETE_REMAINING,
  },
  { date: '2024-11-05', totalTasks: 3, completedTasks: 3, status: CompletionStatus.ALL_DONE },
  {
    date: '2024-11-06',
    totalTasks: 3,
    completedTasks: 1,
    status: CompletionStatus.INCOMPLETE_REMAINING,
  },
  { date: '2024-11-07', totalTasks: 0, completedTasks: 0, status: CompletionStatus.NO_HOUSEWORK },
  // ... 더 많은 날짜 데이터를 추가할 수 있습니다.
];

export const Default: Story = {
  args: {
    completionData: sampleCompletionData,
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
  },
};

export const EmptyCalendar: Story = {
  args: {
    completionData: [],
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
  },
};

export const AllDone: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.ALL_DONE,
      completedTasks: data.totalTasks,
    })),
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
  },
};

export const AllIncomplete: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.INCOMPLETE_REMAINING,
      completedTasks: Math.max(0, data.totalTasks - 1),
    })),
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
  },
};

export const AllNoHousework: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.NO_HOUSEWORK,
      totalTasks: 0,
      completedTasks: 0,
    })),
    onMonthChange: (monthKey: string) => console.log('Month changed:', monthKey),
  },
};
