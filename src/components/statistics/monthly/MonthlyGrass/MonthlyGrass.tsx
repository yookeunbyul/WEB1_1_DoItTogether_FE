import Calendar from 'react-calendar';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/common/icon';
import { useState } from 'react';

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

interface MonthlyGrassProps {
  completionData: DailyTask[];
  onMonthChange: (monthKey: string) => void;
}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({ completionData, onMonthChange }) => {
  const today = new Date();
  const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);

  const [currentDate, setCurrentDate] = useState(lastDayPreviousMonth);
  const maxDate = lastDayPreviousMonth;

  const getStatus = (date: Date): CompletionStatus => {
    const dateString = date.toLocaleDateString('en-CA');
    const dayData = completionData.find(data => data.date === dateString);
    return dayData?.status || CompletionStatus.NO_HOUSEWORK;
  };

  const getTileClassName = ({ date }: { date: Date }): string => {
    const status = getStatus(date);
    switch (status) {
      case CompletionStatus.ALL_DONE:
        return 'bg-[#1FCFBA] text-[#FDFDFD] rounded-lg font-body';
      case CompletionStatus.INCOMPLETE_REMAINING:
        return 'bg-[#8DE8D7] text-[#FDFDFD] rounded-full font-body';
      default:
        return 'text-[#B4B4B5] font-body';
    }
  };

  // TODO: 여기서 api 처리
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
      onActiveStartDateChange={props => {
        if (props.activeStartDate) {
          setCurrentDate(props.activeStartDate);
          handleMonthChange(props);
        }
      }}
      navigationLabel={({ date }) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      formatDay={(_locale, date) => date.getDate().toString()}
      prevLabel={<ArrowLeftIcon className='text-gray1' />}
      nextLabel={
        <ArrowRightIcon
          className={`text-gray1 transition-colors ${
            currentDate.getFullYear() === maxDate.getFullYear() &&
            currentDate.getMonth() >= maxDate.getMonth()
              ? 'opacity-30'
              : ''
          }`}
        />
      }
    />
  );
};
export default MonthlyGrass;
