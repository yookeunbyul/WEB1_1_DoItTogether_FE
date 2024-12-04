import React from 'react';
import { MemberScoreCount } from '@/components/statistics/weekly/WeeklyRanking/WeeklyRanking';

interface WeeklyOthersProps extends MemberScoreCount {
  rank: number;
}

const WeeklyOthers: React.FC<WeeklyOthersProps> = ({ rank, nickname, completeCount }) => {
  // TODO 프로필 이미지 저장 후 변경
  const profile = `https://fakeimg.pl/200x200/1FCFBA,128/000,255?text=Doto`;
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <p>{rank}</p>
        <div className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-solid bg-white'>
          <img src={profile} alt='' />
        </div>
        <p>{nickname}</p>
      </div>
      <p>{completeCount}개</p>
    </div>
  );
};

export default WeeklyOthers;
