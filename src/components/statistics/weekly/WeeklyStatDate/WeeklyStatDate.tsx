import { ArrowLeftIcon, ArrowRightIcon } from '@/components/common/icon';
import React from 'react';

export interface WeeklyStatDateProps {
  /** 현재 날짜 */
  currentDate: Date;
  /** 이전 주 */
  handlePrevWeek: () => void;
  /** 다음 주 */
  handleNextWeek: () => void;
}

const WeeklyStatDate: React.FC<WeeklyStatDateProps> = ({
  currentDate,
  handlePrevWeek,
  handleNextWeek,
}) => {
  // todo
  // utils에 분리
  const getWeekText = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0부터 시작하므로 11월은 10
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // 한 주의 시작이 월요일부터 시작되도록 함
    const weekNumber = Math.ceil((date.getDate() + firstDayOfWeek - 1) / 7);
    const weekLabels: { [key: number]: string } = {
      1: '첫째주',
      2: '둘째주',
      3: '셋째주',
      4: '넷째주',
      5: '다섯째주',
    };

    return `${year}년 ${new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(date)} ${weekLabels[weekNumber]}`;
  };

  const isCurrentDateFuture = currentDate > new Date();

  return (
    <div className='mb-4 flex items-center justify-center gap-8'>
      <button onClick={handlePrevWeek}>
        <ArrowLeftIcon className='text-gray1' />
      </button>
      <span className='w-44 text-center text-black font-subhead'>{getWeekText(currentDate)}</span>
      <button onClick={handleNextWeek} disabled={isCurrentDateFuture}>
        <ArrowRightIcon className={`text-gray1 ${isCurrentDateFuture ? 'opacity-30' : ''}`} />
      </button>
    </div>
  );
};

export default WeeklyStatDate;
