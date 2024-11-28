import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import React from 'react';

interface HeaderProps {
  title: string;
  isNeededBackBtn: boolean;
  isNeededDoneBtn: boolean;
  handleBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, isNeededBackBtn, isNeededDoneBtn, handleBack }) => {
  return (
    <div className='flex items-center justify-between border-b-2 border-solid border-white01 px-5 py-4'>
      {isNeededBackBtn && <BackBtn handleClick={handleBack} />}
      <div className='flex-1 text-center'>{title}</div>
      {isNeededDoneBtn && <button className='text-black02'>완료</button>}
    </div>
  );
};

export default Header;
