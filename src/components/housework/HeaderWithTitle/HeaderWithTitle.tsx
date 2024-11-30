import BackBtn, { BackBtnProps } from '@/components/common/button/BackBtn/BackBtn';
import React from 'react';

export interface HeaderWithTitleProps extends BackBtnProps {
  /** 타이틀 */
  title: React.ReactNode;
}

const HeaderWithTitle: React.FC<HeaderWithTitleProps> = ({ title, handleClick }) => {
  return (
    <div className='mt-5 flex flex-col gap-5'>
      <BackBtn handleClick={handleClick} />
      <p className='whitespace-pre-line pt-2 text-24 text-gray01'>{title}</p>
    </div>
  );
};

export default HeaderWithTitle;
