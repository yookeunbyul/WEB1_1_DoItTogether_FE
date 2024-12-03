import { useState } from 'react';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import useHomePageStore from '@/store/useHomePageStore';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';
import { LinkIcon } from '@/components/common/icon';

interface InviteLinkProps {
  initialLink?: string;
}

const InviteLink: React.FC<InviteLinkProps> = ({ initialLink }) => {
  const [inviteLink, setInviteLink] = useState<string>(initialLink || '');
  const { currentGroup } = useHomePageStore();
  const { toast } = useToast();

  const handleGenerateLink = async () => {
    const channelId = currentGroup.channelId;
    const response = await postCreateInviteLink({ channelId: channelId });
    setInviteLink(`${response.result.inviteLink}`);
  };

  const handleCopyLink = () => {
    toast({
      title: '링크가 복사되었어요!',
    });
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
    }
  };

  return (
    <div className='flex h-14 items-center justify-between gap-4 border-b-2 border-solid border-gray5 border-opacity-30 bg-white px-2 text-gray2 font-label'>
      {inviteLink ? (
        <>
          <LinkIcon className='fill-gray2' />
          <div className='min-w-0 flex-1 overflow-hidden'>
            <p className='truncate text-gray2'>{inviteLink}</p>
          </div>
          <button
            className='shrink-0 underline underline-offset-2 font-caption'
            onClick={handleCopyLink}
          >
            링크복사
          </button>
        </>
      ) : (
        <>
          <p className='flex-1'>유효한 코드가 없습니다</p>
          <button
            onClick={handleGenerateLink}
            className='underline underline-offset-2 font-caption'
          >
            발급받기
          </button>
        </>
      )}
    </div>
  );
};

export default InviteLink;
