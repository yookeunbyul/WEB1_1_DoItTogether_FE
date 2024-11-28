import GroupSelectBtn from './GroupSelectBtn/GroupSelectBtn';
import TitleDate from './TitleDate/TitleDate';

import React from 'react';

interface HomeHeaderProps {
  /**시트 열기 위한 함수 */
  handleSetOpen: (value: boolean) => void;
  /** 그룹 이름 */
  groupName: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ handleSetOpen, groupName }) => {
  return (
    <div className='flex items-center justify-between bg-white02 p-5'>
      <TitleDate dateText='2024년 11월 둘째 주' />
      <GroupSelectBtn groupName={groupName} handleSetOpen={handleSetOpen} />
    </div>
  );
};

export default HomeHeader;
