import BackBtn from '@/components/common/BackBtn/BackBtn';
import React from 'react';

interface GroupSettingHeaderContainerProps {
  title: string;
  isNeededBackBtn: boolean;
  isNeededDoneBtn: boolean;
}

const GroupSettingHeaderContainer: React.FC<GroupSettingHeaderContainerProps> = ({
  title,
  isNeededBackBtn,
  isNeededDoneBtn,
}) => {
  const handleClick = () => {
    console.log('뒤로가기');
  };
  return (
    <div className='flex items-center justify-between border-b-2 border-solid border-white01 px-5 py-4'>
      {isNeededBackBtn && <BackBtn handleClick={handleClick} />}
      <div className='flex-1 text-center'>{title}</div>
      {isNeededDoneBtn && <button className='text-black02'>완료</button>}
    </div>
  );
};

export default GroupSettingHeaderContainer;
