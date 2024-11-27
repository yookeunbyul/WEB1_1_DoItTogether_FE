import React from 'react';

interface BottomNavBtnProps {
  icon: React.ReactNode;
  name: string;
  handleClick?: () => void;
}

const BottomNavBtn: React.FC<BottomNavBtnProps> = ({
  /** 아이콘 */
  icon,
  /** menu name */
  name,
  /** click */
  handleClick,
}) => {
  return (
    <button className='flex flex-col items-center gap-1 px-3' onClick={handleClick}>
      {/* <div>{icon}</div> */}
      <div className='h-6 w-6 rounded-full border-2 bg-gray01'></div>
      <p className='text-12'>{name}</p>
    </button>
  );
};

export default BottomNavBtn;
