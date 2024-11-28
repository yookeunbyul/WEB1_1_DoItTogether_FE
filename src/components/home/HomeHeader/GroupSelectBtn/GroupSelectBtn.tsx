import React from 'react';

interface GroupSelectBtnProps {
  /** 현재 속해있는 그룹명 */
  groupName: string;
  /**시트 열기 위한 함수 */
  handleSetOpen: (value: boolean) => void;
}

const GroupSelectBtn: React.FC<GroupSelectBtnProps> = ({
  groupName,
  handleSetOpen,
}: GroupSelectBtnProps) => {
  return (
    <>
      <button
        className='flex items-center rounded-full bg-gray03 px-2 py-1 text-12 text-white03'
        onClick={() => handleSetOpen(true)}
      >
        <div className='h-4 w-4 rounded-full bg-gray01'></div>
        <div className='pl-2'>{groupName}</div>
      </button>
    </>
  );
};

export default GroupSelectBtn;
