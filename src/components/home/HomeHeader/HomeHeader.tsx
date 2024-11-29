import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

import React from 'react';

const HomeHeader: React.FC = ({}) => {
  return (
    <div className='flex items-center justify-between bg-white02 p-5'>
      <TitleDate />
      <GroupSelectBtn />
    </div>
  );
};

export default HomeHeader;
