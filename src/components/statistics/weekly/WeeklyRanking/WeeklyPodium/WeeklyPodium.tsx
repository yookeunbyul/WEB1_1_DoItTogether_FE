import React from 'react';
import { MemberScoreCount } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

interface WeeklyPodiumProps extends MemberScoreCount {
  rank: number;
}

const WeeklyPodium: React.FC<WeeklyPodiumProps> = ({ rank, nickname, completeCount }) => {
  // TODO 프로필 이미지 저장 후 변경
  const profile = `https://fakeimg.pl/200x200/1FCFBA,128/000,255?text=Doto`;
  return (
    <div className={`flex flex-col items-center justify-center ${rank === 2 && 'order-first'}`}>
      <div
        className={`relative ${rank === 1 ? 'h-24 w-24' : 'h-16 w-16'} flex items-center justify-center rounded-full border border-solid bg-white03`}
      >
        <img src={profile} alt='profile' className='w-full rounded-full' />
        <div
          className={`absolute ${rank === 1 ? '-left-0' : '-left-2'} top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray02 text-14`}
        >
          {rank}
        </div>
      </div>
      <p>
        <strong>{nickname}</strong>
      </p>
      <p className='rounded-full bg-gray01 px-2 text-14 text-white03'>
        {completeCount === 0 ? '-' : `${completeCount}개`}
      </p>
    </div>
  );
};

export default WeeklyPodium;
