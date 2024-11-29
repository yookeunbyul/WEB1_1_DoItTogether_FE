import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';
import getWeekDates, { WeekDates } from '@/utils/getWeekDates';
import getTodayIdx from '@/utils/getTodayIdx';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import getWeekText from '@/utils/getWeekText';
import useHomePageStore from '@/store/useHomePageStore';
import { type CarouselApi } from '@/components/common/ui/carousel';

const WeeklyDate = () => {
  const [activeWeek, setActiveWeek] = useState(new Date());
  const [activeDate, setActiveDate] = useState<number>();
  const [currWeek, setCurrWeek] = useState<WeekDates[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const { setWeekText } = useHomePageStore();

  useEffect(() => {
    const weekDates = getWeekDates(activeWeek);
    setCurrWeek(weekDates);

    const todayIndex = getTodayIdx(activeWeek, weekDates);
    if (todayIndex !== -1) setActiveDate(todayIndex);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
      const curr = current;
      const next = api.selectedScrollSnap() + 1;

      if (next > curr && next - curr === 1) console.log('현재', current);
      console.log('다음', api.selectedScrollSnap() + 1);
    });
  }, [api, current]);

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

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <div className='flex touch-none items-center justify-between bg-white03 px-5 py-2'>
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
          <div className='flex touch-none items-center justify-between bg-white03 px-5 py-2'>
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
        <CarouselItem>
          <div className='flex touch-none items-center justify-between bg-white03 px-5 py-2'>
            {currWeek.map((week, idx) => (
              <DateItem
                key={idx}
                date={week.date.split('.')[2]}
                day={week.day}
                pendingCnt={2}
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
