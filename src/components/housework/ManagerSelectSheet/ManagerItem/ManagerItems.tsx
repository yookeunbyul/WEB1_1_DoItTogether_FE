import ManagerItem from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItem';
import { members } from '@/mock/addHousework';
import { Dispatch, SetStateAction } from 'react';

interface ManagerItemsProps {
  isAiCardOpen: boolean;
  setSelectedValue: Dispatch<SetStateAction<number | null>>;
  selectedValue: number | null;
}

const ManagerItems: React.FC<ManagerItemsProps> = ({
  isAiCardOpen,
  setSelectedValue,
  selectedValue,
}) => {
  const handleClick = (id: number) => {
    console.log(id);
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
          key={member.id}
          name={member.name}
          handleClick={() => handleClick(member.id)}
          selectState={selectedValue === member.id ? 'person' : 'default'}
        />
      ))}
    </ul>
  );
};

export default ManagerItems;
