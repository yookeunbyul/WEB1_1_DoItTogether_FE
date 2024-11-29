import MemberItem from '@/components/setting/groupSetting/MemberItems/MemberItem';
import React from 'react';

interface Member {
  member_id: number;
  name: string;
  nickname: string;
  role: string;
  profile_image: {
    profile_image_id: number;
    url: string;
    type: string;
  };
}

interface MemberItemsProps {
  leader: boolean;
  members: Member[];
  currentUser: {
    member_id: number;
    name: string;
    nickname: string;
  };
  handleClick?: (member: Member) => void;
}

const MemberItems: React.FC<MemberItemsProps> = ({ leader, members, currentUser, handleClick }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-14'>그룹원 관리</p>
      <div className='flex flex-col gap-2'>
        {members.map(member => (
          <MemberItem
            key={member.member_id}
            leader={leader}
            member={member}
            isCurrentUser={member.member_id === currentUser.member_id}
            handleClick={() => handleClick?.(member)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberItems;
