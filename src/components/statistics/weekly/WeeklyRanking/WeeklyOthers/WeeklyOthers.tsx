import React from 'react';
import { Ranking } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

interface WeeklyOthersProps extends Ranking {}

const WeeklyOthers: React.FC<WeeklyOthersProps> = ({ place, profile, name, num }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <p>{place}</p>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-solid bg-white03'>
          <img src={profile} alt='' />
        </div>
        <p>{name}</p>
      </div>
      <p>{num}개</p>
    </div>
  );
};

export default WeeklyOthers;
