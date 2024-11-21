import React from 'react';

interface MemberTabProps {
  /** 멤버 이름 */
  memberName: string;
}

const MemberTab: React.FC<MemberTabProps> = ({ memberName }) => {
  return <span className='text-14'>{memberName}</span>;
};

export default MemberTab;
