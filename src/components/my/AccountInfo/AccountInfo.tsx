import React from 'react';

interface AccountInfoProps {
  nickname: string;
  account: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ nickname, account }) => {
  return (
    <div>
      <div className='font-body'>{nickname}</div>
      <div className='text-gray3 font-label'>{account}</div>
    </div>
  );
};

export default AccountInfo;
