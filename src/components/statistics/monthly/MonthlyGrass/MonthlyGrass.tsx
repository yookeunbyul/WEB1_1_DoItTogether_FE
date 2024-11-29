import Calendar from 'react-calendar';

enum CompletionStatus {
  DONE = 'done',
  SOSO = 'soso',
  NO = 'no',
}

interface DailyTask {
  date: string;
  totalTasks: number;
  completedTasks: number;
  status: CompletionStatus;
}

interface MonthlyGrassProps {
  completionData: { [key: string]: DailyTask };
  onMonthChange: (monthKey: string) => void;
}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({ completionData, onMonthChange }) => {
  const today = new Date();
  const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);

  const getStatus = (date: Date): CompletionStatus => {
    const dateString = date.toLocaleDateString('en-CA');
    const dayData = completionData[dateString];
    return dayData?.status || CompletionStatus.NO;
  };

  const getTileClassName = ({ date }: { date: Date }): string => {
    const status = getStatus(date);
    switch (status) {
      case CompletionStatus.DONE:
        return 'bg-[#989393] text-[#D9D9D9] rounded-full';
      case CompletionStatus.SOSO:
        return 'bg-[#D8D8D8] text-[#ACACAC] rounded-full';
      default:
        return 'bg-white03 text-[#ACACAC] rounded-full';
    }
  };

  // TODO: 나중에 여기서 api 호출 -> 현재 달 기준으로 전과 후
  const handleMonthChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (activeStartDate) {
      const year = activeStartDate.getFullYear();
      const month = String(activeStartDate.getMonth() + 1).padStart(2, '0');
      const monthKey = `${year}-${month}`;
      onMonthChange(monthKey);
    }
  };

  return (
    <Calendar
      defaultActiveStartDate={lastDayPreviousMonth}
      maxDate={lastDayPreviousMonth}
      tileClassName={getTileClassName}
      view='month'
      locale='ko'
      minDetail='month'
      maxDetail='month'
      onActiveStartDateChange={handleMonthChange}
      navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      formatDay={(_locale, date) => date.getDate().toString()}
    />
  );
};
export default MonthlyGrass;
