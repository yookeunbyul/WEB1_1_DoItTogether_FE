import React from 'react';

interface GroupMemberManageProps {
  leader: boolean;
  member: string;
  isCurrentUser: boolean;
  handleClick: () => void;
}

const GroupMemberManage: React.FC<GroupMemberManageProps> = ({
  leader,
  member,
  handleClick,
  isCurrentUser,
}) => {
  const showButton = leader || isCurrentUser;

  return (
    <div
      className={`flex h-9 items-center justify-between rounded-full border border-gray02 px-2 py-1 text-16 ${!showButton ? 'bg-white02' : ''}`}
    >
      {member}
      {showButton && <i className='h-4 w-4 border border-black02' onClick={handleClick}></i>}
    </div>
  );
};

export default GroupMemberManage;
