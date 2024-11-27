import GroupOption from '@/components/home/GroupSelectSheet/GroupOptions/GroupOption';

const GroupOptions = () => {
  const groups = ['우리집', '회사'];
  return (
    <ul className='flex flex-col gap-y-6 px-5 pb-14 pt-8'>
      {groups.map(group => (
        <GroupOption key={group} groupName={group} />
      ))}
    </ul>
  );
};

export default GroupOptions;
