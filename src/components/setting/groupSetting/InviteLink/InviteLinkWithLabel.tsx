import InviteLink from '@/components/setting/groupSetting/InviteLink/InviteLink';
import React from 'react';

interface InviteLinkWithLabelProps {
  initialLink?: string;
}

const InviteLinkWithLabel: React.FC<InviteLinkWithLabelProps> = ({ initialLink }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-black font-label'>초대 링크</p>
      <InviteLink initialLink={initialLink} />
    </div>
  );
};

export default InviteLinkWithLabel;
