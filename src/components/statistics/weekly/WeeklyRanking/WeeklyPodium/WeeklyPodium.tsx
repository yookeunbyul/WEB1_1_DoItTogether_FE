import React from 'react';
import { Ranking } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

interface WeeklyPodiumProps extends Ranking {}

const WeeklyPodium: React.FC<WeeklyPodiumProps> = ({ place, profile, name, num }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${place === 2 && 'order-first'}`}>
      <div
        className={`relative ${place === 1 ? 'h-24 w-24' : 'h-16 w-16'} flex items-center justify-center rounded-full border border-solid bg-white03`}
      >
        <img src={profile} alt='profile' className='w-full rounded-full' />
        <div
          className={`absolute ${place === 1 ? '-left-0' : '-left-2'} top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray02 text-14`}
        >
          {place}
        </div>
      </div>
      <p>
        <strong>{name}</strong>
      </p>
      <p className='rounded-full bg-gray01 px-2 text-14 text-white03'>{num}개</p>
    </div>
  );
};

export default WeeklyPodium;
