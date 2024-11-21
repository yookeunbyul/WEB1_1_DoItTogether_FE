import React from 'react';

interface BottomNavBtnProps {
  icon: React.ReactNode;
  name: string;
}

const BottomNavBtn: React.FC<BottomNavBtnProps> = ({
  /** 아이콘 */
  icon,
  /** menu name */
  name,
}) => {
  return (
    <button
      className='flex flex-col items-center gap-1 px-3'
      onClick={() => console.log(name, icon)}
    >
      {/* <div>{icon}</div> */}
      <div className='bg-gray01 h-6 w-6 rounded-full border-2'></div>
      <p className='text-12'>{name}</p>
    </button>
  );
};

export default BottomNavBtn;
