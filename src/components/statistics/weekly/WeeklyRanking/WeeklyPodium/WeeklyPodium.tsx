import React from 'react';
import { MemberScoreCount } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

interface WeeklyPodiumProps extends MemberScoreCount {
  rank: number;
}

const WeeklyPodium: React.FC<WeeklyPodiumProps> = ({ rank, nickname, completeCount }) => {
  // TODO 프로필 이미지 저장 후 변경
  const profile = `https://fakeimg.pl/200x200/1FCFBA,128/000,255?text=Doto`;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${rank === 2 && 'order-first'}`}
    >
      <div
        className={`relative ${rank === 1 ? 'h-24 w-24' : 'h-16 w-16'} flex items-center justify-center rounded-full border border-solid`}
      >
        <img src={profile} alt='profile' className='w-full rounded-full' />
        <div
          className={`absolute ${rank === 1 ? '-left-0' : '-left-2'} top-0 flex h-6 w-6 items-center justify-center rounded-full ${
            rank === 1 ? 'bg-rank1' : rank === 2 ? 'bg-rank2' : rank === 3 ? 'bg-rank3' : 'bg-gray3'
          } text-white font-label`}
        >
          {rank}
        </div>
      </div>
      <p>
        <strong>{nickname}</strong>
      </p>
      <p className='rounded-full bg-main px-3 py-1 text-white font-label'>
        {completeCount === 0 ? '-' : `${completeCount}개`}
      </p>
    </div>
  );
};

export default WeeklyPodium;
