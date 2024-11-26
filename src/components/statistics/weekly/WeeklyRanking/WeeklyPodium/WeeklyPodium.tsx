import React from 'react';

interface WeeklyPodiumProps {
  /** 등수 */
  place: number;
  /** 프로필 이미지 */
  profile: string;
  /** 이름 */
  name: string;
  /** 완료한 집안일 개수 */
  num: number;
}

const WeeklyPodium: React.FC<WeeklyPodiumProps> = ({ place, profile, name, num }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={`relative ${place === 1 ? 'h-24 w-24' : 'h-16 w-16'} flex items-center justify-center rounded-full border border-solid`}
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
