import Header from '@/components/common/header/Header';
import GroupCreateStep1 from '@/components/group/create/GroupCreateStep1';
import GroupCreateStep2 from '@/components/group/create/GroupCreateStep2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateGroup } from '@/services/group/postCreateGroup';
import { postCreateInviteLink } from '@/services/group/postCreateInviteLink';
import MetaTags from '@/components/common/metaTags/MetaTags';

type StepType = 'roomName' | 'invite';

/**
 * todo
 * 1. channelId를 전역으로 관리
 */

const GroupCreatePage = () => {
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

  return (
    <div className={`flex h-screen flex-col`}>
      <MetaTags
        title={'두잇투게더 - 그룹 생성'}
        description={'새로운 그룹을 만들어 가사를 분담하세요.'}
        url={'https://doit-together.vercel.app/group/create/'}
      />
      <Header title='방만들기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1'>
        {step === 'roomName' && (
          <GroupCreateStep1 handleNext={handleNext} roomName={roomName} setRoomName={setRoomName} />
        )}
        {step === 'invite' && (
          <GroupCreateStep2 inviteLink={inviteLink} onSubmit={handleSubmit} roomName={roomName} />
        )}
      </div>
    </div>
  );
};

export default GroupCreatePage;
