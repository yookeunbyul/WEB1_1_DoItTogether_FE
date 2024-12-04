import React from 'react';
import GroupOption from '@/components/home/GroupSelectSheet/GroupOptions/GroupOption';
import useHomePageStore from '@/store/useHomePageStore';
import { useParams } from 'react-router-dom';

const GroupOptions: React.FC = ({}) => {
  const { groups } = useHomePageStore();
  const { channelId } = useParams();

  return (
    <ul className='flex flex-col gap-y-6 px-5 pb-14 pt-8'>
      {groups.map(group => (
        <GroupOption
          key={group.channelId}
          group={group}
          isSelected={group.channelId === Number(channelId)}
        />
      ))}
    </ul>
  );
};

export default GroupOptions;
