import Button from '@/components/common/button/Button/Button';
import GroupSelectTitle from '@/components/groupSelect/GroupSelectTitle/GroupSelectTitle';
import Logo from '@/components/groupSelect/Logo/Logo';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupSelectPage = () => {
  const [groups] = useState(['우리집', '회사']);
  const navigate = useNavigate();

  const handleMakeGroupBtnClick = () => {
    navigate('/group/create');
  };
  const handleInvitedBtnClick = () => {
    navigate('/group/invite-receive');
  };
  const handleClick = () => {
    navigate('/main');
  };
  return (
    <div className='flex min-h-screen flex-col'>
      <Logo />
      <GroupSelectTitle />
      <div className='flex flex-1 flex-col gap-y-4 px-5 py-4'>
        {groups.length > 0 ? (
          groups.map(group => (
            <OpenSheetBtn key={group} text={group} handleClick={handleClick} type='groupSelect' />
          ))
        ) : (
          <div className='flex flex-1 items-center justify-center whitespace-pre-line text-center text-gray03'>
            {'현재 방이 없어요\n새로운 방을 만들어보세요'}
          </div>
        )}
      </div>
      <div className='flex gap-x-4 px-5 pt-6'>
        <Button
          label='방만들기'
          variant='full'
          size='large'
          handleClick={handleMakeGroupBtnClick}
          className={'flex-1 rounded-2xl bg-white01 py-12 text-black01 hover:bg-white01'}
        />
        <Button
          label='초대받기'
          variant='full'
          size='large'
          handleClick={handleInvitedBtnClick}
          className={'flex-1 rounded-2xl bg-white01 py-12 text-black01 hover:bg-white01'}
        />
      </div>
    </div>
  );
};

export default GroupSelectPage;
