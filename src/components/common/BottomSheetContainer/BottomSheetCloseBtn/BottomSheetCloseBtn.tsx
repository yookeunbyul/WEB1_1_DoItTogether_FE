import React from 'react';

interface BottomSheetCloseBtnProps {
  /** 모달 닫는 액션 */
  handleClick: () => void;
}

const BottomSheetCloseBtn: React.FC<BottomSheetCloseBtnProps> = ({ handleClick }) => {
  return (
    <button
      className='absolute right-1/2 top-[-70px] z-50 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-black01 bg-opacity-25 text-white03'
      onClick={handleClick}
    >
      <div className='h-5 w-5 rounded-full bg-white02'></div>
    </button>
  );
};

export default BottomSheetCloseBtn;
