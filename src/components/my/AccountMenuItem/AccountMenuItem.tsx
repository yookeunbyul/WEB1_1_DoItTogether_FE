import React from 'react';
import { OutIcon } from '@/components/common/icon';
import { ArrowRightIcon } from '@/components/common/icon';

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
    <div className='w-full border-b border-solid border-gray3/30'>
      <div className='flex h-12 items-center justify-between px-5'>
        <p className='text-gray1 font-body'>{label}</p>
        {state && <p className='text-gray1 font-label'>{state}</p>}
        {iconType === '로그아웃' && (
          <div className='' onClick={handleClick}>
            <OutIcon fillClass={'text-gray2'} />
          </div>
        )}
        {iconType === '탈퇴' && (
          <div className='' onClick={handleClick}>
            <ArrowRightIcon className='text-gray2' />
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenuItem;
