import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import React from 'react';

interface HeaderProps {
  title: string;
  isNeededDoneBtn: boolean;
  handleBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, isNeededDoneBtn, handleBack }) => {
  return (
    <div className='flex items-center justify-between border-b-2 border-solid border-white01 px-5 py-4'>
      <div className='flex-1 bg-white03'>{handleBack && <BackBtn handleClick={handleBack} />}</div>
      <div className='flex-1 bg-white03 text-center'>{title}</div>
      <div className='flex-1 bg-white03 text-end'>
        {isNeededDoneBtn && <button className='text-black02'>완료</button>}
      </div>
    </div>
  );
};

export default Header;
