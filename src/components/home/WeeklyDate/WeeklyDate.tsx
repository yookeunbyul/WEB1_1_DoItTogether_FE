import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';
import getWeekDates, { WeekDates } from '@/utils/getWeekDates';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import getWeekText from '@/utils/getWeekText';
import useHomePageStore from '@/store/useHomePageStore';
import { type CarouselApi } from '@/components/common/ui/carousel';

const WeeklyDate = () => {
  const [activeWeek, setActiveWeek] = useState(new Date());
  const [currWeek, setCurrWeek] = useState<WeekDates[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { setWeekText, activeDate, setActiveDate } = useHomePageStore();

  useEffect(() => {
    const weekDates = getWeekDates(activeWeek);
    setCurrWeek(weekDates);
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      const newCurrent = api.selectedScrollSnap();
      if (newCurrent !== current) {
        if (newCurrent === (current + 1) % 3) {
          changeWeek('next');
        } else if (newCurrent === (current + 2) % 3) {
          changeWeek('previous');
        }
      }
      setCurrent(newCurrent);
    });
  }, [api, current]);

  const handleActiveDate = async (date: string) => {
    setActiveDate(date);
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
  };

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {[...Array(3)].map((_, i) => (
          <CarouselItem key={i}>
            <div className='bg-white flex touch-none items-center justify-center gap-3 px-5 py-2'>
              {currWeek.map((week, idx) => (
                <DateItem
                  key={idx}
                  date={week.date.split('-')[2]}
                  day={week.day}
                  pendingCnt={0}
                  isActive={activeDate === week.date && current === i}
                  handleClick={() => handleActiveDate(week.date)}
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default WeeklyDate;
