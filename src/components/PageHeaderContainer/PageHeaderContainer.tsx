import React from 'react';
import BackBtn, { BackBtnProps } from '@/components/common/BackBtn/BackBtn';

export interface PageHeaderContainerProps extends BackBtnProps {
  /** 타이틀 */
  title: string;
}

const PageHeaderContainer: React.FC<PageHeaderContainerProps> = ({ title, handleClick }) => {
  return (
    <div className='mt-5 flex flex-col gap-5'>
      <BackBtn handleClick={handleClick} />
      <p className='text-18 text-gray01'>{title}</p>
    </div>
  );
};

export default PageHeaderContainer;
