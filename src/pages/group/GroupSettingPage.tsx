import SettingHeaderContainer from '@/components/common/header/Header';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import ExitSheet from '@/components/setting/ExitSheet/ExitSheet';
import { INPUT_VALIDATION } from '@/constants/validation';
import useGroupSetting from '@/hooks/useGroupSetting';
import PresetSettingBtn from '@/components/setting/groupSetting/PresetSettingBtn/PresetSettingBtn';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';

const GroupSettingPage = () => {
  const {
    groupName,
    isEdited,
    isOpen,
    sheetTitle,
    btnText,
    currentUser,
    members,
    selectedMember,
    isLoading,
    error,
    isAdmin,
    handleMovePreset,
    handleGroupNameChange,
    handleDone,
    handleSheet,
    handleExit,
    handleClose,
    setIsOpen,
  } = useGroupSetting();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <div className='fixed left-0 right-0 top-0 z-10 m-auto max-w bg-white'>
        <SettingHeaderContainer
          title='그룹 설정'
          isNeededDoneBtn={isEdited && !error}
          handleDone={handleDone}
        />
      </div>
      <div className='flex flex-col gap-8 px-5 pt-20'>
        <div className='flex flex-col gap-1'>
          <InputWithLabel
            label='공간 이름'
            value={groupName}
            disabled={!isAdmin}
            handleChange={handleGroupNameChange}
          />
          {error && <ErrorMessage message={INPUT_VALIDATION.roomName.errorMessage} />}
        </div>
        <MemberItems
          leader={isAdmin}
          members={members}
          currentUser={currentUser}
          handleClick={handleSheet}
        />
        <InviteLinkWithLabel />
        <PresetSettingBtn handleClick={handleMovePreset} />
      </div>
      <ExitSheet
        sheetTitle={sheetTitle}
        btnText={btnText}
        isOpen={isOpen}
        setOpen={setIsOpen}
        selectedMember={selectedMember}
        handleExit={handleExit}
        handleClose={handleClose}
      />
    </>
  );
};

export default GroupSettingPage;
