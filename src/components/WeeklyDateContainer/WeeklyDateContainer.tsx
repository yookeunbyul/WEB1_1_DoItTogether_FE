import { useState } from 'react';
import DateItem from './DateItem/DateItem';

const WeeklyDateContainer = () => {
  const dummyItems = [
    { date: 18, day: '월', pendingCnt: 2 },
    { date: 19, day: '화', pendingCnt: 0 },
    { date: 20, day: '수', pendingCnt: 1 },
    { date: 21, day: '목', pendingCnt: 4 },
    { date: 22, day: '금', pendingCnt: 3 },
    { date: 23, day: '토', pendingCnt: 0 },
    { date: 24, day: '일', pendingCnt: 4 },
  ];

  const [activeDate, setActiveDate] = useState<number>();
  const handleActiveDate = (idx: number) => {
    setActiveDate(idx);
  };

  return (
    <div className='flex items-center justify-between bg-white03 px-5 py-2'>
      {dummyItems.map((item, idx) => (
        <DateItem
          key={idx}
          date={item.date}
          day={item.day}
          pendingCnt={item.pendingCnt}
          isActive={activeDate === idx}
          handleClick={() => handleActiveDate(idx)}
        />
      ))}
    </div>
  );
};

export default WeeklyDateContainer;
