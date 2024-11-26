import GroupMemberManage from '@/components/GroupMemberManagerContainer/GroupMemberManage/GroupMemberManage';
import React from 'react';

interface GroupMemberManageContainerProps {
  leader: boolean;
  members: string[];
  currentUser: string;
  handleClick?: (member: string) => void;
}

const GroupMemberManageContainer: React.FC<GroupMemberManageContainerProps> = ({
  leader,
  members,
  currentUser,
  handleClick,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-14'>그룹원 관리</p>
      <div className='flex flex-col gap-2'>
        {members.map((member, index) => (
          <GroupMemberManage
            key={index}
            leader={leader}
            member={member}
            isCurrentUser={member === currentUser}
            handleClick={() => handleClick?.(member)}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupMemberManageContainer;
