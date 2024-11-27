import React, { useState } from 'react';
import WeeklyStatDate from '@/components/statistics/weekly/WeeklyStatDate/WeeklyStatDate';
import WeeklyCompletion from '@/components/statistics/weekly/WeeklyCompletion/WeeklyCompletion';
import WeeklyStatAction from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatAction';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';
import { DUMMY_RANKING } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking.stories';

const WeeklyStatisticsPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };
  return (
    <div className='flex flex-col gap-4 p-5'>
      <WeeklyStatDate
        currentDate={currentDate}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />
      <WeeklyCompletion groupName='두잇투게더' completed={10} notCompleted={3} />
      <div className='flex justify-between gap-3'>
        <WeeklyStatAction type='compliment' num={10} />
        <WeeklyStatAction type='tease' num={3} />
      </div>
      <WeeklyRanking rankings={DUMMY_RANKING} />
    </div>
  );
};

export default WeeklyStatisticsPage;
