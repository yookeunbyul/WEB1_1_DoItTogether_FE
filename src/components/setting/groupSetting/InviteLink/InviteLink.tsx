import { useState } from 'react';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import useHomePageStore from '@/store/useHomePageStore';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';

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
    // setInviteLink(`http://121.88.130.215/${response.result.inviteLink}`);
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
    <div className='flex h-12 items-center justify-between rounded-full border border-solid border-white01 px-4 py-1 text-16 shadow-sm'>
      {inviteLink ? (
        <>
          <div className='min-w-0 flex-1 overflow-hidden'>
            <p className='truncate'>{inviteLink}</p>
          </div>
          <button className='shrink-0 pl-4 text-14 text-gray01' onClick={handleCopyLink}>
            링크복사
          </button>
        </>
      ) : (
        <>
          <p className='flex-1 text-gray01'>유효한 코드가 없습니다</p>
          <button className='text-14 text-gray01' onClick={handleGenerateLink}>
            발급받기
          </button>
        </>
      )}
    </div>
  );
};

export default InviteLink;
