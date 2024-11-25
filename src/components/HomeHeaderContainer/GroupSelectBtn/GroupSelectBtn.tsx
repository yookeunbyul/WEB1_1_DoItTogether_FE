import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import GroupOptionContainer from '@/components/GroupOptionContainer/GroupOptionContainer';
import React, { useState } from 'react';

interface GroupSelectBtnProps {
  /** 현재 속해있는 그룹명 */
  groupName: string;
}

const GroupSelectBtn: React.FC<GroupSelectBtnProps> = ({ groupName }: GroupSelectBtnProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <button
        className='text-12 flex items-center rounded-full bg-gray03 px-2 py-1 text-white03'
        onClick={handleClick}
      >
        <div className='h-4 w-4 rounded-full bg-gray01'></div>
        <div className='pl-2'>{groupName}</div>
      </button>

      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='그룹 변경'>
        <GroupOptionContainer />
      </BottomSheetContainer>
    </>
  );
};

export default GroupSelectBtn;
