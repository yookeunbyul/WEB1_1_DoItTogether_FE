import React from 'react';

interface AccountMenuItemProps {
  label: string;
  state?: string;
  iconType?: string;
  handleClick?: () => void;
}

const AccountMenuItem: React.FC<AccountMenuItemProps> = ({
  label,
  state,
  iconType,
  handleClick,
}) => {
  return (
    <div className='w-full border-b border-solid border-white01'>
      <div className='flex h-12 items-center justify-between px-5'>
        <p className='text-16'>{label}</p>
        {state && <p className='text-14'>{state}</p>}
        {iconType && <i className='h-4 w-4 border border-solid' onClick={handleClick}></i>}
      </div>
    </div>
  );
};

export default AccountMenuItem;
