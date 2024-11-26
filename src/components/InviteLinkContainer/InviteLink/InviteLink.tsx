import { useState } from 'react';

const InviteLink = () => {
  const [inviteLink, setInviteLink] = useState<string>('');

  const handleGenerateLink = () => {
    // TODO: 나중에 API 호출로 바꾸기
    setInviteLink('https://contents.ohou....');
  };

  const handleCopyLink = () => {
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
      alert('복사완료'); //TODO: 토스트로 처리?
    }
  };

  return (
    <div className='flex h-9 items-center justify-between rounded-full border border-gray02 px-2 py-1 text-16'>
      {inviteLink ? (
        <>
          <p className='flex-1 truncate px-2'>{inviteLink}</p>
          <button className='text-14 text-gray01' onClick={handleCopyLink}>
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
