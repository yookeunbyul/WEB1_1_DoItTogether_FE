import React from 'react';

interface GroupOptionProps {
  /** 그룹(방) 이름 */
  groupName: string;
  /** 선택 여부 */
  isSelected?: boolean;
}

const GroupOption: React.FC<GroupOptionProps> = ({ groupName, isSelected }: GroupOptionProps) => {
  return (
    <li className='flex cursor-pointer items-center gap-x-2'>
      <div className={`h-6 w-6 rounded-md ${isSelected ? 'bg-black01' : 'bg-gray02'}`}></div>
      <div className={`text-14 ${isSelected ? 'text-black01' : 'text-gray02'}`}>{groupName}</div>
    </li>
  );
};

export default GroupOption;
