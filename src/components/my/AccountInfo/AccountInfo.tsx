import React from 'react';

interface AccountInfoProps {
  nickname: string;
  account: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ nickname, account }) => {
  return (
    <div>
      <div>{nickname}</div>
      <div className='text-14 text-gray03'>{account}</div>
    </div>
  );
};

export default AccountInfo;
