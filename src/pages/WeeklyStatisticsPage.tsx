import React from 'react';
import WeeklyStatDate from '@/components/statistics/weekly/WeeklyStatDate/WeeklyStatDate';
import WeeklyCompletion from '@/components/statistics/weekly/WeeklyCompletion/WeeklyCompletion';
import WeeklyStatActions from '@/components/statistics/weekly/WeeklyStatAction/WeeklyStatActions';
import WeeklyRanking from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';
import { DUMMY_RANKING } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking.stories';
import useWeeklyStateStore from '@/store/useWeeklyStatisticsStore';
import useWeeklyStatistics from '@/hooks/useWeeklyStatistics';
import useHomePageStore from '@/store/useHomePageStore';

const WeeklyStatisticsPage: React.FC = () => {
  const { currentDate, totalCountData } = useWeeklyStateStore();
  const { handlePrevWeek, handleNextWeek } = useWeeklyStatistics();
  const { currentGroup } = useHomePageStore();

  return (
    <>
      <WeeklyStatDate
        currentDate={currentDate}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
      />
      <WeeklyCompletion
        groupName={currentGroup.name}
        completed={totalCountData.completeCount}
        notCompleted={totalCountData.notCompleteCount}
      />
      <WeeklyStatActions
        numOfCompliment={totalCountData.complimentCount}
        numOfTease={totalCountData.pokeCount}
      />
      <WeeklyRanking rankings={DUMMY_RANKING} />
    </>
  );
};

export default WeeklyStatisticsPage;
