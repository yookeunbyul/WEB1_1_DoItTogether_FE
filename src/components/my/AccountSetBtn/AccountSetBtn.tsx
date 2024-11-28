import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSetBtn: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/my-page/account-manage');
  };
  return (
    <div className='flex justify-end px-5 py-4'>
      <button className='h-5 w-5 bg-gray01' onClick={handleClick}></button>
    </div>
  );
};

export default AccountSetBtn;
