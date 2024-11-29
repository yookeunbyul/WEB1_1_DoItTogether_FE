import { useState, useEffect, useRef } from 'react';
import DateItem from './DateItem/DateItem';
import getWeekDates, { WeekDates } from '@/utils/getWeekDates';
import getTodayIdx from '@/utils/getTodayIdx';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import getWeekText from '@/utils/getWeekText';
import useHomePageStore from '@/store/useHomePageStore';

const WeeklyDate = () => {
  const [activeWeek, setActiveWeek] = useState(new Date());
  const [activeDate, setActiveDate] = useState<number>();
  const [currWeek, setCurrWeek] = useState<WeekDates[]>([]);
  const startX = useRef<number | null>(null);
  const { setWeekText } = useHomePageStore();

  useEffect(() => {
    const weekDates = getWeekDates(activeWeek);
    setCurrWeek(weekDates);

    const todayIndex = getTodayIdx(activeWeek, weekDates);
    if (todayIndex !== -1) setActiveDate(todayIndex);
  }, []);

  const handleActiveDate = (idx: number) => {
    setActiveDate(idx);
    // 추후에 해당 날짜 집안일 리스트 불러오기
  };

  const changeWeek = (direction: 'next' | 'previous') => {
    const newDate = new Date(activeWeek);
    if (direction === 'next') {
      newDate.setDate(activeWeek.getDate() + 7);
    } else {
      newDate.setDate(activeWeek.getDate() - 7);
    }
    setActiveWeek(newDate);
    setWeekText(getWeekText(newDate));

    const newWeekDates = getWeekDates(newDate);
    setCurrWeek(newWeekDates);

    const todayIndex = getTodayIdx(newDate, newWeekDates);
    if (todayIndex !== -1) setActiveDate(todayIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current !== null) {
      const endX = e.changedTouches[0].clientX;
      const diffX = startX.current - endX;

      if (diffX > 50) {
        changeWeek('next');
      } else if (diffX < -50) {
        changeWeek('previous');
      }
    }
    startX.current = null; // 리셋
  };

  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem>
          <div
            className='flex touch-none items-center justify-between bg-white03 px-5 py-2'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
        </CarouselItem>
        <CarouselItem>
          <div
            className='flex touch-none items-center justify-between bg-white03 px-5 py-2'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {currWeek.map((week, idx) => (
              <DateItem
                key={idx}
                date={week.date.split('.')[2]}
                day={week.day}
                pendingCnt={1}
                isActive={activeDate === idx}
                handleClick={() => handleActiveDate(idx)}
              />
            ))}
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default WeeklyDate;
