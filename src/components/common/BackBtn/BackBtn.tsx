import React from 'react';

export interface BackBtnProps {
  /** 뒤로가기 */
  handleClick: () => void;
}

const BackBtn: React.FC<BackBtnProps> = ({ handleClick }) => {
  return (
    <div
      className='h-5 w-5 cursor-pointer border border-solid border-black02'
      onClick={handleClick}
    ></div>
  );
};

export default BackBtn;
