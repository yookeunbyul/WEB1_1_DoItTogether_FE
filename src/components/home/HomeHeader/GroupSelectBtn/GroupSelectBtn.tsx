import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';

const GroupSelectBtn: React.FC = ({}) => {
  const { currentGroup, setIsGroupSelectSheetOpen } = useHomePageStore();

  return (
    <>
      <button
        className='flex items-center rounded-full bg-gray03 px-2 py-1 text-12 text-white03'
        onClick={() => setIsGroupSelectSheetOpen(true)}
      >
        <div className='h-4 w-4 rounded-full bg-gray01'></div>
        <div className='pl-2'>{currentGroup.name}</div>
      </button>
    </>
  );
};

export default GroupSelectBtn;
