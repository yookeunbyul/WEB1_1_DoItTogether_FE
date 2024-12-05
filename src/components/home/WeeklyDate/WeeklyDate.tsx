import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import getWeekText from '@/utils/getWeekText';
import useHomePageStore from '@/store/useHomePageStore';
import { type CarouselApi } from '@/components/common/ui/carousel';
import { IncompleteScoreResponse } from '@/types/apis/houseworkApi';
import { getWeeklyIncomplete } from '@/services/housework/getWeeklyIncomplete';
import { useParams } from 'react-router-dom';
import getFormattedDate from '@/utils/getFormattedDate';

interface WeeklyDates extends IncompleteScoreResponse {
  day: string;
}

const WeeklyDate = () => {
  const [activeWeek, setActiveWeek] = useState(new Date());
  const [currWeek, setCurrWeek] = useState<WeeklyDates[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { setWeekText, activeDate, setActiveDate } = useHomePageStore();
  const { channelId } = useParams();

  useEffect(() => {
    setActiveDate(getFormattedDate(new Date()));
    setActiveWeek(new Date());
    fetchCurrWeek(activeDate);
  }, [channelId]);

  useEffect(() => {
    fetchCurrWeek(getFormattedDate(activeWeek));
  }, [activeWeek]);

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

  const fetchCurrWeek = async (newDate: string) => {
    const newChannelId = Number(channelId);
    const currWeekResult = await getWeeklyIncomplete({
      channelId: newChannelId,
      targetDate: newDate,
    });
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const newWeekDates = (weekData: IncompleteScoreResponse[]) => {
      return weekData.map(data => {
        const date = new Date(data.date);
        const weekdayIndex = date.getDay();
        const day = weekdays[weekdayIndex];

        return {
          ...data,
          day,
        };
      });
    };

    setCurrWeek(newWeekDates(currWeekResult.result.incompleteScoreResponses));
  };

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
  };

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {[...Array(3)].map((_, i) => (
          <CarouselItem key={i}>
            <div className='flex touch-none items-center justify-center gap-3 bg-white px-5 py-2'>
              {currWeek.map((week, idx) => (
                <DateItem
                  key={idx}
                  date={week.date.split('-')[2]}
                  day={week.day}
                  pendingCnt={week.houseworkIncompleteCount}
                  solvedMatters={week.solvedMatters}
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
