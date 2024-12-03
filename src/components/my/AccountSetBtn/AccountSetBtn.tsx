import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SettingIcon } from '@/components/common/icon';

const AccountSetBtn: React.FC = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const handleClick = () => {
    navigate(`/my-page/account-manage/${channelId}`);
  };
  return (
    <div className='flex justify-end px-5 py-4'>
      <button onClick={handleClick}>
        <SettingIcon />
      </button>
    </div>
  );
};

export default AccountSetBtn;
