export enum CompletionStatus {
  ALL_DONE = 'ALL_DONE',
  INCOMPLETE_REMAINING = 'INCOMPLETE_REMAINING',
  NO_HOUSEWORK = 'NO_HOUSEWORK',
}

export interface DailyTask {
  date: string;
  totalTasks: number;
  completedTasks: number;
  status: CompletionStatus;
}

export interface MonthlyStatistics {
  dates: DailyTask[];
}

export const monthlyGrassData: MonthlyStatistics = {
  dates: [
    {
      date: '2024-09-01',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-09-02',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
    {
      date: '2024-09-03',
      totalTasks: 3,
      completedTasks: 0,
      status: CompletionStatus.NO_HOUSEWORK,
    },
    {
      date: '2024-09-14',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-09-15',
      totalTasks: 3,
      completedTasks: 1,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
    {
      date: '2024-09-26',
      totalTasks: 5,
      completedTasks: 0,
      status: CompletionStatus.NO_HOUSEWORK,
    },
    // 10월 데이터
    {
      date: '2024-10-01',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-10-12',
      totalTasks: 3,
      completedTasks: 1,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
    {
      date: '2024-10-13',
      totalTasks: 5,
      completedTasks: 0,
      status: CompletionStatus.NO_HOUSEWORK,
    },
    {
      date: '2024-10-16',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-10-19',
      totalTasks: 6,
      completedTasks: 3,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
    // 11월 데이터
    {
      date: '2024-11-01',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-11-12',
      totalTasks: 5,
      completedTasks: 2,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
    {
      date: '2024-11-13',
      totalTasks: 4,
      completedTasks: 0,
      status: CompletionStatus.NO_HOUSEWORK,
    },
    {
      date: '2024-11-24',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.ALL_DONE,
    },
    {
      date: '2024-11-25',
      totalTasks: 5,
      completedTasks: 2,
      status: CompletionStatus.INCOMPLETE_REMAINING,
    },
  ],
};
