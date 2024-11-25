import ManagerSelectItem from '@/components/ManagerSelectContainer/ManagerSelectItem/ManagerSelectItem';

interface ManagerSelectContainerProps {
  /**선택한 멤버 */
  selectedMember: string;
  /**set 함수 */
  onSelectMember: (member: string) => void;
}

const ManagerSelectContainer: React.FC<ManagerSelectContainerProps> = ({
  selectedMember,
  onSelectMember,
}) => {
  const members = ['김민수', '이영희', '박지수', '최수진'];

  return (
    <ul className='flex flex-col gap-y-4 pb-14 pt-8'>
      {members.map(member => (
        <ManagerSelectItem
          key={member}
          name={member}
          onClick={() => onSelectMember(member)}
          selectState={selectedMember === member ? 'person' : 'default'}
        />
      ))}
    </ul>
  );
};

export default ManagerSelectContainer;
