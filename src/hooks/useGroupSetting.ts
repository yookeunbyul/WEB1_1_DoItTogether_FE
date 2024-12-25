import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '@/types/apis/groupApi';
import { getGroupUser } from '@/services/group/getGroupUser';
import { postBanUser } from '@/services/group/postBanUser';
import { deleteGroupUser } from '@/services/group/deleteGroupUser';
import { putChangeGroupName } from '@/services/group/putChangeGroupName';
import { toast } from '@/hooks/use-toast';
import { INPUT_VALIDATION } from '@/constants/validation';

const useGroupSetting = () => {
  const navigate = useNavigate();
  const { channelId: strChannelId } = useParams();
  const channelId = Number(strChannelId);

  const [groupName, setGroupName] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sheetTitle, setSheetTitle] = useState('');
  const [btnText, setBtnText] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [selectedMember, setSelectedMember] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGroupMembers = async () => {
      try {
        const response = await getGroupUser({ channelId });
        setGroupName(response.result.name);
        setMembers(response.result.userList);
        const current = response.result.userList.find(user => user.currentUser);
        setCurrentUser(current || null);
        setIsLoading(false);
      } catch (error) {
        console.error('그룹 사용자 조회 실패:', error);
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
    if (
      value.length <= INPUT_VALIDATION.roomName.maxLength &&
      INPUT_VALIDATION.roomName.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDone = async () => {
    try {
      await putChangeGroupName({
        channelId: channelId,
        name: groupName,
      });
      setIsEdited(false);
      toast({
        title: '그룹 이름이 변경되었어요',
      });
    } catch (error) {
      console.error('그룹 이름 변경 실패:', error);
    }
  };

  const handleSheet = (member: User) => {
    setSelectedMember(member);
    const isCurrentUserSelected = member.currentUser;
    if (isAdmin && isCurrentUserSelected) {
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시겠습니까?`);
    } else if (isAdmin) {
      setBtnText('내보낼래요');
      setSheetTitle(`${member.nickName}님을 내보내시겠습니까?`);
    } else {
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시겠습니까?`);
    }
    setIsOpen(true);
  };

  // const handleExit = async (member: User) => {
  //   try {
  //     const isCurrentUserSelected = member.currentUser;

  //     if (isAdmin && !isCurrentUserSelected) {
  //       await postBanUser({ channelId, email: member.email });
  //       setMembers(prev => prev.filter(m => m.email !== member.email));
  //       toast({ title: '탈퇴되었습니다' });
  //     } else {
  //       await deleteGroupUser({ channelId });
  //       navigate('/group-select');
  //     }

  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error('멤버 방출/그룹 나가기 실패:', error);
  //   }
  // };

  const handleExit = async (member: User) => {
    const isCurrentUserSelected = member.currentUser;

    if (isAdmin && !isCurrentUserSelected) {
      try {
        await postBanUser({ channelId, email: member.email });
        setMembers(prev => prev.filter(m => m.email !== member.email));
        toast({ title: '탈퇴되었습니다' });
      } catch (error) {
        console.error('멤버 방출 실패:', error);
      }
    } else {
      try {
        await deleteGroupUser({ channelId });
        navigate('/group-select');
      } catch (error) {
        console.error('그룹 나가기 실패:', error);
      }
    }

    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isAdmin = currentUser?.role === 'ADMIN';

  return {
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
  };
};

export default useGroupSetting;
