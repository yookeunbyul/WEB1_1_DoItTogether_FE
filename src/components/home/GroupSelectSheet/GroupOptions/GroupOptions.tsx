import React from 'react';
import GroupOption from '@/components/home/GroupSelectSheet/GroupOptions/GroupOption';
import useHomePageStore from '@/store/useHomePageStore';

const GroupOptions: React.FC = ({}) => {
  const { groups } = useHomePageStore();

  return (
    <ul className='flex flex-col gap-y-6 px-5 pb-14 pt-8'>
      {groups.map(group => (
        <GroupOption key={group.channelId} group={group} />
      ))}
    </ul>
  );
};

export default GroupOptions;
