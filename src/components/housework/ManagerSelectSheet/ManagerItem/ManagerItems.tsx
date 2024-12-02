import ManagerItem from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItem';
import { Dispatch, SetStateAction } from 'react';
import { User } from '@/types/apis/groupApi';

interface ManagerItemsProps {
  isAiCardOpen: boolean;
  setSelectedValue: Dispatch<SetStateAction<number | null>>;
  selectedValue: number | null;
  members: User[];
}

const ManagerItems: React.FC<ManagerItemsProps> = ({
  isAiCardOpen,
  setSelectedValue,
  selectedValue,
  members,
}) => {
  const handleClick = (id: number) => {
    if (selectedValue === id) {
      setSelectedValue(null); // 같은 아이템 클릭 시 선택 해제
    } else {
      setSelectedValue(id); // 다른 아이템 클릭 시 선택
    }
  };

  return (
    <ul
      className={`flex ${isAiCardOpen ? 'mb-8 mt-4 h-[160px]' : 'my-4 h-[220px]'} flex-col gap-4 overflow-y-auto pt-2 no-scrollbar`}
    >
      {members.map(member => (
        <ManagerItem
          key={member.userId}
          name={member.nickName}
          handleClick={() => handleClick(member.userId)}
          selectState={selectedValue === member.userId ? 'person' : 'default'}
        />
      ))}
    </ul>
  );
};

export default ManagerItems;
