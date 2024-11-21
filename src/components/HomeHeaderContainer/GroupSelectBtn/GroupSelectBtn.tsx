import React from 'react';

interface GroupSelectBtnProps {
  /** 현재 속해있는 그룹명 */
  groupName: string;
}

const GroupSelectBtn: React.FC<GroupSelectBtnProps> = ({ groupName }: GroupSelectBtnProps) => {
  return (
    <button className='bg-gray03 text-12 text-white03 flex items-center rounded-full px-2 py-1'>
      <div className='bg-gray01 h-4 w-4 rounded-full'></div>
      <div className='pl-2'>{groupName}</div>
    </button>
  );
};

export default GroupSelectBtn;
