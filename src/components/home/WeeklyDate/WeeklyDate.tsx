import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';
import getWeekDates, { WeekDates } from '@/utils/getWeekDates';
import getTodayIdx from '@/utils/getTodayIdx';

const WeeklyDate = () => {
  const [activeDate, setActiveDate] = useState<number>();
  const [currWeek, setCurrWeek] = useState<WeekDates[]>([]);

  useEffect(() => {
    const today = new Date();
    const weekDates = getWeekDates(today);
    setCurrWeek(weekDates);

    const todayIndex = getTodayIdx(today, weekDates);

    if (todayIndex !== -1) setActiveDate(todayIndex);
  }, []);

  const handleActiveDate = (idx: number) => {
    setActiveDate(idx);
    /**
     * todo
     * 추후에 해당 날짜 집안일 리스트 불러오기
     */
  };

  return (
    <div className='flex items-center justify-between bg-white03 px-5 py-2'>
      {currWeek.map((week, idx) => (
        <DateItem
          key={idx}
          date={week.date.split('.')[2]}
          day={week.day}
          pendingCnt={0}
          isActive={activeDate === idx}
          handleClick={() => handleActiveDate(idx)}
        />
      ))}
    </div>
  );
};

export default WeeklyDate;
