import ManagerItem from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItem';

interface ManagerItemsProps {
  /**선택한 멤버 */
  selectedMember: string;
  /**set 함수 */
  handleSelectMember: (member: string) => void;
}

const ManagerItems: React.FC<ManagerItemsProps> = ({ selectedMember, handleSelectMember }) => {
  const members = ['김민수', '이영희', '박지수', '최수진'];

  return (
    <ul className='flex flex-col gap-y-4 pb-14 pt-8'>
      {members.map(member => (
        <ManagerItem
          key={member}
          name={member}
          handleClick={() => handleSelectMember(member)}
          selectState={selectedMember === member ? 'person' : 'default'}
        />
      ))}
    </ul>
  );
};

export default ManagerItems;
