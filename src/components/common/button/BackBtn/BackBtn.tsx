import { ArrowLeftIcon } from '@/components/common/icon';
import React from 'react';

export interface BackBtnProps {
  /** 뒤로가기 */
  handleClick?: () => void;
}

const BackBtn: React.FC<BackBtnProps> = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <ArrowLeftIcon className='text-gray6 cursor-pointer' />
    </div>
  );
};

export default BackBtn;
