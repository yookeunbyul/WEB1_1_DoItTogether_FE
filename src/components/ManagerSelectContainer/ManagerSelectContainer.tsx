import ManagerSelectItem from '@/components/ManagerSelectContainer/ManagerSelectItem/ManagerSelectItem';

const MaganerSelectContainer = () => {
  const members = ['김민수', '이영희', '박지수', '최수진'];
  return (
    <ul className='flex flex-col gap-y-4 px-5 pb-14 pt-8'>
      {members.map(member => (
        <ManagerSelectItem key={member} name={member} />
      ))}
    </ul>
  );
};

export default MaganerSelectContainer;
