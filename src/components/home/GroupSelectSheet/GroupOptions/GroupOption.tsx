import React from 'react';
import useHomePageStore from '@/store/useHomePageStore';
import { Group } from '@/types/apis/groupApi';
import { useNavigate } from 'react-router-dom';

interface GroupOptionProps {
  /** 그룹(방)  */
  group: Group;
  /** 선택 여부 */
  isSelected?: boolean;
}

const GroupOption: React.FC<GroupOptionProps> = ({ group, isSelected }) => {
  const { setCurrentGroup, setIsGroupSelectSheetOpen } = useHomePageStore();
  const navigate = useNavigate();

  const handleClick = (group: Group) => {
    setCurrentGroup(group);
    setIsGroupSelectSheetOpen(false);
    navigate(`/main/${group.channelId}`);
  };

  return (
    <li className='flex cursor-pointer items-center gap-x-2' onClick={() => handleClick(group)}>
      <div className={`h-6 w-6 rounded-md ${isSelected ? 'bg-black01' : 'bg-gray02'}`}></div>
      <div className={`text-14 ${isSelected ? 'text-black01' : 'text-gray02'}`}>{group.name}</div>
    </li>
  );
};

export default GroupOption;
