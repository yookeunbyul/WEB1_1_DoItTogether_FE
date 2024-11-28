import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

import React from 'react';

interface HomeHeaderProps {
  /**시트 열기 위한 함수 */
  handleSetOpen: (value: boolean) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ handleSetOpen }) => {
  return (
    <div className='flex items-center justify-between bg-white02 p-5'>
      <TitleDate dateText='2024년 11월 둘째 주' />
      <GroupSelectBtn groupName='우리집' handleSetOpen={handleSetOpen} />
    </div>
  );
};

export default HomeHeader;
