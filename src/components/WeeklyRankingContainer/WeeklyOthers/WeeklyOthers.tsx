import React from 'react';

interface WeeklyOthersProps {
  /** 등수 */
  place: number;
  /** 프로필 이미지 */
  profile: string;
  /** 이름 */
  name: string;
  /** 완료한 집안일 개수 */
  num: number;
}

const WeeklyOthers: React.FC<WeeklyOthersProps> = ({ place, profile, name, num }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <p>{place}</p>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-solid'>
          <img src={profile} alt='' />
        </div>
        <p>{name}</p>
      </div>
      <p>{num}개</p>
    </div>
  );
};

export default WeeklyOthers;
