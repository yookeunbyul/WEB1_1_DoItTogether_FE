import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

import React from 'react';

const HomeHeader: React.FC = ({}) => {
  return (
    <div className='flex items-center justify-between bg-white02 p-5'>
      <TitleDate dateText='2024년 11월 둘째 주' />
      <GroupSelectBtn />
    </div>
  );
};

export default HomeHeader;
