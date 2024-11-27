import React from 'react';
import WeeklyPodium from '@/components/statistics/weekly/WeeklyRanking/WeeklyPodium/WeeklyPodium';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';
import { Card } from '@/components/common/ui/card';

export interface Ranking {
  /** 등수 */
  place: number;
  /** 프로필 이미지 */
  profile: string;
  /** 이름 */
  name: string;
  /** 완료한 집안일 개수 */
  num: number;
}

interface WeeklyRankingProps {
  rankings: Array<Ranking>;
}

const WeeklyRanking: React.FC<WeeklyRankingProps> = ({ rankings }) => {
  return (
    <Card className='flex flex-col justify-center gap-8 border border-solid p-8'>
      <p className='text-center'>이번주 완료 개수 랭킹</p>
      <div className='flex items-center justify-between'>
        {rankings.slice(0, 3).map(ranker => (
          <WeeklyPodium key={ranker.name} {...ranker} />
        ))}
      </div>
      <div className='flex flex-col justify-center gap-2'>
        {rankings.slice(3).map(ranker => (
          <WeeklyOthers key={ranker.name} {...ranker} />
        ))}
      </div>
    </Card>
  );
};

export default WeeklyRanking;
