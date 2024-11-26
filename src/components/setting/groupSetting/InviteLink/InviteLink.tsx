import { useState } from 'react';

const InviteLink = () => {
  const [inviteLink, setInviteLink] = useState<string>('');

  const handleGenerateLink = () => {
    // TODO: 나중에 API 호출로 바꾸기
    setInviteLink('https://contents.ohou.contents.ohoucontents.ohou...');
  };

  const handleCopyLink = () => {
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
      alert('복사완료'); //TODO: 토스트로 처리?
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
