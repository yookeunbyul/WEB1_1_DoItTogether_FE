import SettingHeaderContainer from '@/components/common/header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import ExitSheet from '@/components/setting/ExitSheet/ExitSheet';
import { groupSettingMockData } from '@/mock/groupSettingMockData';

const GroupSettingPage = () => {
  const navigate = useNavigate();

  const [groupName, setGroupName] = useState(groupSettingMockData.group.group_name);
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [sheetTitle, setSheetTitle] = useState('');
  const [btnText, setBtnText] = useState('');

  const handleMovePreset = () => {
    navigate('/group-setting/preset-setting');
  };

  const handleGroupNameChange = (value: string) => {
    setGroupName(value);
    setIsEdited(value !== groupSettingMockData.group.group_name);
  };

  // 여기서 그룹 이름 수정 시 저장 처리
  const handleDone = () => {
    console.log(groupName);
    console.log('완료');
  };

  // 그룹장인지 체크
  const isAdmin =
    groupSettingMockData.members.find(
      m => m.member_id === groupSettingMockData.currentUser.member_id
    )?.role === 'ADMIN';

  // 바텀시트 문구 체크
  const handleSheet = (member: (typeof groupSettingMockData.members)[0]) => {
    if (isAdmin && member.member_id === groupSettingMockData.currentUser.member_id) {
      setBtnText('나갈래요');
      setSheetTitle(`${groupSettingMockData.group.group_name}에서 정말 나가시나요?`);
    } else if (isAdmin) {
      setBtnText('내보낼래요');
      setSheetTitle(`${member.name}님을 정말 내보내시나요?`);
    } else {
      setBtnText('나갈래요');
      setSheetTitle(`${groupSettingMockData.group.group_name}에서 정말 나가시나요?`);
    }
    setIsOpen(true);
  };

  // 멤버 방출 or 나가기 처리
  const handleExit = () => {
    console.log('잘있어');
    setIsOpen(false);
  };

  // 바텀시트 닫기
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='fixed left-0 right-0 top-0 z-10 m-auto max-w bg-white03'>
        <SettingHeaderContainer
          title='그룹 설정'
          isNeededDoneBtn={isEdited}
          handleDone={handleDone}
        />
      </div>
      <div className='flex flex-col gap-6 px-5 pt-20'>
        <InputWithLabel
          label='공간 이름'
          value={groupName}
          disabled={!isAdmin}
          handleChange={handleGroupNameChange}
        />
        <MemberItems
          leader={isAdmin}
          members={groupSettingMockData.members}
          currentUser={groupSettingMockData.currentUser}
          handleClick={handleSheet}
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
        sheetTitle={sheetTitle}
        btnText={btnText}
        isOpen={isOpen}
        setOpen={setIsOpen}
        handleExit={handleExit}
        handleClose={handleClose}
      />
    </>
  );
};

export default GroupSettingPage;
