import React from 'react';
import GroupOption from '@/components/home/GroupSelectSheet/GroupOptions/GroupOption';
interface GroupOptionsProps {
  groups: Array<string>;
}

const GroupOptions: React.FC<GroupOptionsProps> = ({ groups }) => {
  return (
    <ul className='flex flex-col gap-y-6 px-5 pb-14 pt-8'>
      {groups.map(group => (
        <GroupOption key={group} groupName={group} />
      ))}
    </ul>
  );
};

export default GroupOptions;
