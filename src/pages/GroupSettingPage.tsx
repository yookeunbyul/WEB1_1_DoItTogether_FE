import SettingHeaderContainer from '@/components/common/header/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button/Button';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import ExitSheet from '@/components/setting/ExitSheet/ExitSheet';
import { getGroupUser } from '@/services/group/getGroupUser';
import { User } from '@/types/apis/groupApi';
import { postBanUser } from '@/services/group/postBanUser';
import { deleteGroupUser } from '@/services/group/deleteGroupUser';
import { putChangeGroupName } from '@/services/group/putChangeGroupName';
import { toast } from '@/hooks/use-toast';
import { useParams } from 'react-router-dom';

const GroupSettingPage = () => {
  const navigate = useNavigate();
  const { channelId: strChannelId } = useParams();

  // TODO: group name api에서 받아오기
  const [groupName, setGroupName] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [sheetTitle, setSheetTitle] = useState('');
  const [btnText, setBtnText] = useState('');

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [members, setMembers] = useState<User[]>([]);

  const [selectedMember, setSelectedMember] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const channelId = Number(strChannelId);

  useEffect(() => {
    const fetchGroupMembers = async () => {
      try {
        const response = await getGroupUser({ channelId });

        setGroupName(response.result.name);
        setMembers(response.result.userList);
        // TODO: 나중에는 토큰값으로 확인
        const current = response.result.userList.find(user => user.email === 'gaeun@gmail.com');
        setCurrentUser(current || null);
        setIsLoading(false);
      } catch (error) {
        console.error('멤버 조회 실패:', error);
        setIsLoading(false);
      }
    };

    fetchGroupMembers();
  }, []);

  const handleMovePreset = () => {
    navigate(`/group-setting/${channelId}/preset-setting`);
  };

  const handleGroupNameChange = (value: string) => {
    setGroupName(value);
    setIsEdited(value !== groupName);
  };

  const handleDone = async () => {
    await putChangeGroupName({
      channelId: channelId,
      name: groupName,
    });

    setIsEdited(false);
    toast({
      title: '그룹 이름이 변경되었어요',
    });
  };

  // 바텀시트 문구 체크
  const isAdmin = members.some(
    member => member.role === 'ADMIN' && member.email === 'gaeun@gmail.com'
  );
  const handleSheet = (member: User) => {
    setSelectedMember(member); // 선택된 멤버 저장
    const isCurrentUser = member.email === 'gaeun@gmail.com';
    if (isAdmin && isCurrentUser) {
      // 내가 그룹장일 때
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시나요?`);
    } else if (isAdmin) {
      // 다른 멤버를 선택했을 때
      setBtnText('내보낼래요');
      setSheetTitle(`${member.nickName}님을 정말 내보내시나요?`);
    } else {
      // 내가 일반 멤버일 때
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시나요?`);
    }
    setIsOpen(true);
  };

  // 멤버 방출 or 나가기 처리
  const handleExit = async (member: User) => {
    try {
      // TODO: 나중에는 토큰값으로 확인
      const isCurrentUser = member.email === 'gaeun@gmail.com';

      console.log(member);
      if (isAdmin && !isCurrentUser) {
        // 관리자가 다른 멤버를 방출하는 경우
        await postBanUser({ channelId, email: member.email });
        setMembers(prev => prev.filter(m => m.email !== member.email));
      } else {
        // 자신이 나가는 경우 (관리자든 일반 멤버든)
        await deleteGroupUser({ channelId });
        navigate('/group-select');
      }

      setIsOpen(false);
    } catch (error) {
      console.error('멤버 방출/그룹 나가기 실패:', error);
    }
  };

  // 바텀시트 닫기
  const handleClose = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div>로딩 컴포넌트 나중에 넣자</div>;
  }

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
          members={members}
          currentUser={currentUser}
          handleClick={handleSheet}
        />
        <InviteLinkWithLabel />
        <div className='flex flex-col gap-2 pb-6'>
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
        selectedMember={selectedMember}
        handleExit={handleExit}
        handleClose={handleClose}
      />
    </>
  );
};

export default GroupSettingPage;
