import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateGroup } from '@/services/group/postCreateGroup';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';

type StepType = 'roomName' | 'invite';

export const useGroupCreate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('roomName');
  const [roomName, setRoomName] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [channelId, setChannelId] = useState(-1);

  const handleNext = async () => {
    if (roomName.trim()) {
      try {
        const createResult = await postCreateGroup({ name: roomName });

        try {
          const createLink = await postCreateInviteLink({
            channelId: createResult.result.channelId,
          });
          setInviteLink(createLink.result.inviteLink);
          setChannelId(createResult.result.channelId);
          setStep('invite');
        } catch (error) {
          console.error('초대 링크 생성 실패:', error);
        }
      } catch (error) {
        console.error('그룹 생성 실패:', error);
      }
    }
  };

  const handleBack = () => {
    step === 'invite' ? setStep('roomName') : navigate('/group-select');
  };

  const handleSubmit = () => {
    navigate(`/main/${channelId}`);
  };

  return {
    step,
    roomName,
    setRoomName,
    inviteLink,
    handleNext,
    handleBack,
    handleSubmit,
  };
};
