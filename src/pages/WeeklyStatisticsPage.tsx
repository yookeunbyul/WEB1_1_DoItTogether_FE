import React, { useState } from 'react';
import WeeklyStatDate from '@/components/statistics/weekly/WeeklyStatDate/WeeklyStatDate';
import WeeklyCompletion from '@/components/statistics/weekly/WeeklyCompletion/WeeklyCompletion';
import WeeklyStatActions from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatActions';
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
    <>
      <WeeklyStatDate
        currentDate={currentDate}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />
      <WeeklyCompletion groupName='두잇투게더' completed={10} notCompleted={3} />
      <WeeklyStatActions numOfCompliment={10} numOfTease={3} />
      <WeeklyRanking rankings={DUMMY_RANKING} />
    </>
  );
};

export default WeeklyStatisticsPage;
