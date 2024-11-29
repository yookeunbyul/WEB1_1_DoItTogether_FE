export enum CompletionStatus {
  DONE = 'done', // 전부 완료
  SOSO = 'soso', // 일부 완료
  NO = 'no', // 미완료
}

export interface DailyTask {
  date: string;
  totalTasks: number; // 그날의 전체 할 일 개수
  completedTasks: number; // 완료한 일의 개수
  status: CompletionStatus;
}

export interface MonthlyStatistics {
  dates: { [key: string]: DailyTask };
  monthlyStats: {
    [key: string]: {
      // YYYY-MM 형식의 키
      completionRate: number;
      completedDays: number;
    };
  };
}

export const monthlyGrassData: MonthlyStatistics = {
  dates: {
    '2024-08-01': {
      date: '2024-08-01',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.DONE,
    },
    '2024-09-01': {
      date: '2024-09-01',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.DONE,
    },
    '2024-10-01': {
      date: '2024-10-01',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-02': {
      date: '2024-10-02',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.DONE,
    },
    '2024-10-03': {
      date: '2024-10-03',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.DONE,
    },
    '2024-10-04': {
      date: '2024-10-04',
      totalTasks: 6,
      completedTasks: 6,
      status: CompletionStatus.DONE,
    },
    '2024-10-05': {
      date: '2024-10-05',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.DONE,
    },
    '2024-10-06': {
      date: '2024-10-06',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-07': {
      date: '2024-10-07',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.SOSO,
    },
    '2024-10-08': {
      date: '2024-10-08',
      totalTasks: 3,
      completedTasks: 0,
      status: CompletionStatus.NO,
    },
    '2024-10-09': {
      date: '2024-10-09',
      totalTasks: 5,
      completedTasks: 3,
      status: CompletionStatus.SOSO,
    },
    '2024-10-10': {
      date: '2024-10-10',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.SOSO,
    },
    '2024-10-11': {
      date: '2024-10-11',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.DONE,
    },
    '2024-10-12': {
      date: '2024-10-12',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-13': {
      date: '2024-10-13',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.DONE,
    },
    '2024-10-14': {
      date: '2024-10-14',
      totalTasks: 6,
      completedTasks: 6,
      status: CompletionStatus.DONE,
    },
    '2024-10-15': {
      date: '2024-10-15',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.SOSO,
    },
    '2024-10-16': {
      date: '2024-10-16',
      totalTasks: 3,
      completedTasks: 1,
      status: CompletionStatus.SOSO,
    },
    '2024-10-17': {
      date: '2024-10-17',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-18': {
      date: '2024-10-18',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.SOSO,
    },
    '2024-10-19': {
      date: '2024-10-19',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.DONE,
    },
    '2024-10-20': {
      date: '2024-10-20',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-21': {
      date: '2024-10-21',
      totalTasks: 4,
      completedTasks: 2,
      status: CompletionStatus.SOSO,
    },
    '2024-10-22': {
      date: '2024-10-22',
      totalTasks: 3,
      completedTasks: 3,
      status: CompletionStatus.DONE,
    },
    '2024-10-23': {
      date: '2024-10-23',
      totalTasks: 5,
      completedTasks: 5,
      status: CompletionStatus.DONE,
    },
    '2024-10-24': {
      date: '2024-10-24',
      totalTasks: 4,
      completedTasks: 4,
      status: CompletionStatus.DONE,
    },
    '2024-10-25': {
      date: '2024-10-25',
      totalTasks: 6,
      completedTasks: 6,
      status: CompletionStatus.DONE,
    },
  },
  monthlyStats: {
    '2024-08': {
      completionRate: 80,
      completedDays: 22,
    },
    '2024-09': {
      completionRate: 75,
      completedDays: 19,
    },
    '2024-10': {
      completionRate: 68,
      completedDays: 17,
    },
  },
};
