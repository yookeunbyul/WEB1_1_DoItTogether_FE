import type { Meta, StoryObj } from '@storybook/react';
import MonthlyGrass from './MonthlyGrass';

enum CompletionStatus {
  DONE = 'done',
  SOSO = 'soso',
  NO = 'no',
}

const meta = {
  title: 'components/statistics/monthly/MonthlyGrass',
  component: MonthlyGrass,

  tags: ['autodocs'],
} satisfies Meta<typeof MonthlyGrass>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCompletionData = [
  { date: '2024-11-01', status: CompletionStatus.DONE },
  { date: '2024-11-02', status: CompletionStatus.DONE },
  { date: '2024-11-03', status: CompletionStatus.DONE },
  { date: '2024-11-04', status: CompletionStatus.DONE },
  { date: '2024-11-05', status: CompletionStatus.DONE },
  { date: '2024-11-06', status: CompletionStatus.DONE },
  { date: '2024-11-07', status: CompletionStatus.SOSO },
  { date: '2024-11-07', status: CompletionStatus.NO },
  { date: '2024-11-09', status: CompletionStatus.SOSO },
  { date: '2024-11-10', status: CompletionStatus.SOSO },
  { date: '2024-11-11', status: CompletionStatus.DONE },
  { date: '2024-11-12', status: CompletionStatus.DONE },
  { date: '2024-11-13', status: CompletionStatus.DONE },
  { date: '2024-11-14', status: CompletionStatus.DONE },
  { date: '2024-11-16', status: CompletionStatus.SOSO },
  { date: '2024-11-17', status: CompletionStatus.SOSO },
  { date: '2024-11-18', status: CompletionStatus.DONE },
  { date: '2024-11-19', status: CompletionStatus.SOSO },
  { date: '2024-11-20', status: CompletionStatus.DONE },
  { date: '2024-11-21', status: CompletionStatus.DONE },
  { date: '2024-11-23', status: CompletionStatus.SOSO },
  { date: '2024-11-24', status: CompletionStatus.DONE },
  { date: '2024-11-26', status: CompletionStatus.DONE },
  { date: '2024-11-27', status: CompletionStatus.DONE },
  { date: '2024-11-28', status: CompletionStatus.DONE },
];

export const Default: Story = {
  args: {
    completionData: sampleCompletionData,
  },
};

export const EmptyCalendar: Story = {
  args: {
    completionData: [],
  },
};

export const AllDone: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.DONE,
    })),
  },
};

export const AllSoso: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.SOSO,
    })),
  },
};

export const AllNo: Story = {
  args: {
    completionData: sampleCompletionData.map(data => ({
      ...data,
      status: CompletionStatus.NO,
    })),
  },
};
