import React from 'react';

interface AccountInfoProps {
  nickname: string;
  account: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ nickname, account }) => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='font-body'>{nickname}</div>
      <div className='text-gray4 font-label'>{account}</div>
    </div>
  );
};

export default AccountInfo;
