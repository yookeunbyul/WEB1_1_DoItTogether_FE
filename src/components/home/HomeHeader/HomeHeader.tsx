import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

import React from 'react';

const HomeHeader: React.FC = ({}) => {
  return (
    <div className='flex items-center justify-between bg-gradient-to-b from-sub2 to-white px-5 py-4'>
      <TitleDate />
      <GroupSelectBtn />
    </div>
  );
};

export default HomeHeader;
