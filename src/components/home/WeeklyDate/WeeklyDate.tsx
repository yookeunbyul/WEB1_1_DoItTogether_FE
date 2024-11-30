import { useState, useEffect } from 'react';
import DateItem from './DateItem/DateItem';
import getWeekDates, { WeekDates } from '@/utils/getWeekDates';
import getFormattedDate from '@/utils/getFormattedDate';
import { Carousel, CarouselContent, CarouselItem } from '@/components/common/ui/carousel';
import getWeekText from '@/utils/getWeekText';
import useHomePageStore from '@/store/useHomePageStore';
import { type CarouselApi } from '@/components/common/ui/carousel';
import { getHouseworks } from '@/services/housework/getHouseworks';
import { PAGE_SIZE } from '@/constants/common';
import { useParams } from 'react-router-dom';

const WeeklyDate = () => {
  const [activeWeek, setActiveWeek] = useState(new Date());
  const [activeDate, setActiveDate] = useState<string>(getFormattedDate(new Date()));
  const [currWeek, setCurrWeek] = useState<WeekDates[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const { setWeekText, setHouseworks } = useHomePageStore();
  const { channelId } = useParams();

  useEffect(() => {
    const weekDates = getWeekDates(activeWeek);
    setCurrWeek(weekDates);
    fetchHouseworks(activeDate);
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

  const fetchHouseworks = async (date: string) => {
    const newChannelId = Number(channelId);
    const getHouseworksResult = await getHouseworks({
      channelId: newChannelId,
      targetDate: date,
      pageNumber: pageNumber,
      pageSize: PAGE_SIZE,
    });
    console.log(getHouseworksResult);
    setHouseworks(getHouseworksResult.result.responses);
  };

  const handleActiveDate = async (date: string) => {
    setActiveDate(date);
    // 추후에 해당 날짜 집안일 리스트 불러오기
    fetchHouseworks(date);
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
            <div className='flex touch-none items-center justify-between bg-white03 px-5 py-2'>
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
