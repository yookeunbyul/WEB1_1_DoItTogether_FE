import Calendar from 'react-calendar';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/common/icon';
import { useEffect, useState } from 'react';
import { getMonthlyScore } from '@/services/statistics/GetMonthlyScore';
import { CompletionStatus, MonthlyDateScore } from '@/types/apis/statisticsApi';
import { useParams } from 'react-router-dom';

interface MonthlyGrassProps {
  onMonthChange: (monthKey: string) => void;
  onDataChange: (data: MonthlyDateScore[]) => void;
}

const MonthlyGrass: React.FC<MonthlyGrassProps> = ({ onMonthChange, onDataChange }) => {
  const today = new Date();
  const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 1);

  const [currentDate, setCurrentDate] = useState(lastDayPreviousMonth);
  const maxDate = lastDayPreviousMonth;
  const [monthlyData, setMonthlyData] = useState<MonthlyDateScore[]>([]);

  const { channelId: strChannelId } = useParams();
  const channelId = Number(strChannelId);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const year = lastDayPreviousMonth.getFullYear();
        const month = String(lastDayPreviousMonth.getMonth() + 1).padStart(2, '0');
        const monthKey = `${year}-${month}`;

        const response = await getMonthlyScore({
          channelId,
          targetMonth: monthKey,
        });

        setMonthlyData(response.result.monthlyStatistics);
        onDataChange(response.result.monthlyStatistics);
      } catch (error) {
        console.error('초기 데이터 로드 실패:', error);
      }
    };

    fetchInitialData();
  }, []);

  const getStatus = (date: Date): CompletionStatus => {
    const dateString = date.toLocaleDateString('en-CA');
    const dayData = monthlyData.find(data => data.date === dateString);
    if (!dayData?.status) return CompletionStatus.NO_HOUSEWORK;
    return dayData.status as CompletionStatus;
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

  const handleMonthChange = async ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (activeStartDate) {
      const year = activeStartDate.getFullYear();
      const month = String(activeStartDate.getMonth() + 1).padStart(2, '0');
      const monthKey = `${year}-${month}`;

      try {
        const response = await getMonthlyScore({
          channelId,
          targetMonth: monthKey,
        });

        setMonthlyData(response.result.monthlyStatistics);
        onMonthChange(monthKey);
      } catch (error) {
        console.error('월간 데이터 로드 실패:', error);
      }
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
