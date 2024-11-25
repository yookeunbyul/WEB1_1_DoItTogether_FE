import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';

const WeeklyDateContainer = () => {
  const dummyItems = [
    { date: 25, day: '월', pendingCnt: 2 },
    { date: 26, day: '화', pendingCnt: 0 },
    { date: 27, day: '수', pendingCnt: 1 },
    { date: 28, day: '목', pendingCnt: 4 },
    { date: 29, day: '금', pendingCnt: 3 },
    { date: 30, day: '토', pendingCnt: 0 },
    { date: 1, day: '일', pendingCnt: 4 },
  ];

  const [activeDate, setActiveDate] = useState<number>();

  useEffect(() => {
    const today = new Date();
    const currentDate = today.getDate();

    const todayIndex = dummyItems.findIndex(item => item.date === currentDate);

    if (todayIndex !== -1) {
      setActiveDate(todayIndex);
    }
  }, []);

  const handleActiveDate = (idx: number) => {
    setActiveDate(idx);
  };

  console.log(activeDate);

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
