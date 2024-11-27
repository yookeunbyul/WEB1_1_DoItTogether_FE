import React from 'react';
import WeeklyPodium from '@/components/statistics/weekly/WeeklyRanking/WeeklyPodium/WeeklyPodium';
import WeeklyOthers from '@/components/statistics/weekly/WeeklyRanking/WeeklyOthers/WeeklyOthers';

const DUMMY_RANKING = [
  {
    place: 1,
    profile: 'https://example.com/profile1.jpg',
    name: '홍길동',
    num: 5,
  },
  {
    place: 2,
    profile: 'https://example.com/profile2.jpg',
    name: '김철수',
    num: 4,
  },
  {
    place: 3,
    profile: 'https://example.com/profile3.jpg',
    name: '이영희',
    num: 3,
  },
  {
    place: 4,
    profile: 'https://example.com/profile4.jpg',
    name: '박지민',
    num: 2,
  },
  {
    place: 5,
    profile: 'https://example.com/profile5.jpg',
    name: '최민수',
    num: 1,
  },
  {
    place: 6,
    profile: 'https://example.com/profile6.jpg',
    name: '정유진',
    num: 0,
  },
];

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
    <div>
      <p>이번주 완료 개수 랭킹</p>
    </div>
  );
};

export default WeeklyRanking;
