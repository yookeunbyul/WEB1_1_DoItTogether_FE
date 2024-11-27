import React from 'react';
import WeeklyPodium from '@/components/statistics/weekly/WeeklyRanking/WeeklyPodium/WeeklyPodium';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';

const DUMMY_RANKING = [{}];

interface WeeklyRankingProps {}

const WeeklyRanking: React.FC<WeeklyRankingProps> = ({}) => {
  return (
    <div>
      <p>이번주 완료 개수 랭킹</p>
    </div>
  );
};

export default WeeklyRanking;
