import SettingHeaderContainer from '@/components/common/header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import ExitSheet from '@/components/setting/ExitSheet/ExitSheet';

const GroupSettingPage = () => {
  const dummyData = {
    groupName: '우리집 꾸미기 모임',
    isLeader: true,
    currentUser: '영희',
    members: ['영희', '철수', '민수', '지영', '수진'],
  };

  const navigate = useNavigate();
  const [groupName, setGroupName] = useState(dummyData.groupName);
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('');
  const [sheetTitle, setSheetTitle] = useState('');
  const [btnText, setBtnText] = useState('');

  const handleMovePreset = () => {
    navigate('/group-setting/preset-setting');
  };

  const handleGroupNameChange = (value: string) => {
    setGroupName(value);
    setIsEdited(value !== dummyData.groupName);
  };

  const handleExit = (name: string) => {
    if (dummyData.isLeader && dummyData.currentUser === name) {
      setBtnText('나갈래요');
      setTag(dummyData.groupName);
      setSheetTitle(`에서 정말 나가시나요?`);
    } else if (dummyData.isLeader) {
      setBtnText('내보낼래요');
      setTag(name);
      setSheetTitle(`님을 정말 내보내시나요?`);
    } else {
      setBtnText('나갈래요');
      setTag(dummyData.groupName);
      setSheetTitle(`에서 정말 나가시나요?`);
    }
    console.log(name);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='fixed left-0 right-0 top-0 z-10 m-auto max-w bg-white03'>
        <SettingHeaderContainer title='그룹 설정' isNeededDoneBtn={isEdited} />
      </div>
      <div className='flex flex-col gap-6 px-5 pt-20'>
        <InputWithLabel
          label='공간 이름'
          value={groupName}
          disabled={!dummyData.isLeader}
          handleChange={handleGroupNameChange}
        />
        <MemberItems
          leader={dummyData.isLeader}
          members={dummyData.members}
          currentUser={dummyData.currentUser}
          handleClick={handleExit}
        />
        <InviteLinkWithLabel />
        <div className='flex flex-col gap-2'>
          <p className='text-14'>프리셋 관리</p>
          <Button
            variant='full'
            size='large'
            label='프리셋 수정하기'
            handleClick={handleMovePreset}
          />
        </div>
      </div>
      <ExitSheet
        tag={tag}
        sheetTitle={sheetTitle}
        btnText={btnText}
        isOpen={isOpen}
        setOpen={setIsOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default GroupSettingPage;
