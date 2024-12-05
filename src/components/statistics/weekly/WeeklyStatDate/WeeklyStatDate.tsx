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

    // 한 주의 시작이 일요일부터 시작되도록 함
    const adjustedDay = date.getDate() + firstDayOfWeek; // 날짜 + 첫 주의 시작 위치 보정
    const weekNumber = Math.ceil(adjustedDay / 7);

    const weekLabels: { [key: number]: string } = {
      1: '첫째 주',
      2: '둘째 주',
      3: '셋째 주',
      4: '넷째 주',
      5: '다섯째 주',
    };

    return `${year}년 ${new Intl.DateTimeFormat('ko-KR', { month: 'long' }).format(date)} ${weekLabels[weekNumber]}`;
  };

  // 다음 주로 이동 금지 조건 (오늘 날짜 기준으로 바로 비활성화)
  const isNextWeekDisabled = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간 초기화 (날짜 비교만)

    const nextWeekStart = new Date(today);
    nextWeekStart.setDate(today.getDate() + 7); // 오늘 기준 다음 주의 시작

    return currentDate >= today; // 오늘 이후 날짜로 넘어갈 수 없도록
  };

  return (
    <div className='mb-4 flex items-center justify-center gap-8'>
      <button onClick={handlePrevWeek}>
        <ArrowLeftIcon className='text-gray2' />
      </button>
      <span className='w-44 text-center text-gray2 font-subhead'>{getWeekText(currentDate)}</span>
      <button onClick={handleNextWeek} disabled={isNextWeekDisabled()}>
        <ArrowRightIcon className={`text-gray2 ${isNextWeekDisabled() ? 'opacity-30' : ''}`} />
      </button>
    </div>
  );
};

export default WeeklyStatDate;
