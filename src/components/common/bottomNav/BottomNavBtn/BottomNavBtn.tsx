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
      {icon}
      <p className='text-gray3 font-caption'>{name}</p>
    </button>
  );
};

export default BottomNavBtn;
