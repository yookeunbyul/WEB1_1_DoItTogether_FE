import React from 'react';
import WeeklyPodium from '@/components/WeeklyRankingContainer/WeeklyPodium/WeeklyPodium';
import WeeklyOthers from '@/components/WeeklyRankingContainer/WeeklyOthers/WeeklyOthers';

const DUMMY_RANKING = [{}];

interface WeeklyRankingContainerProps {}

const WeeklyRankingContainer: React.FC<WeeklyRankingContainerProps> = ({}) => {
  return (
    <div>
      <p>이번주 완료 개수 랭킹</p>
    </div>
  );
};

export default WeeklyRankingContainer;
