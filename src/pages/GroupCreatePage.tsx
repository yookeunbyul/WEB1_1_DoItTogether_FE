import Header from '@/components/common/header/Header';
import { Toaster } from '@/components/common/ui/toaster';
import GroupCreateStep1 from '@/components/group/create/GroupCreateStep1';
import GroupCreateStep2 from '@/components/group/create/GroupCreateStep2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postCreateGroup } from '@/services/groupSelect/postCreateGroup';
import { postCreateInviteLink } from '@/services/common/postCreateInviteLink';

type StepType = 'roomName' | 'invite';

const GroupCreatePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('roomName');
  const [roomName, setRoomName] = useState('');
  const [inviteLink, setInviteLink] = useState('sadsad');

  const handleNext = async () => {
    if (roomName.trim()) {
      const createResult = await postCreateGroup(roomName);
      const createLink = await postCreateInviteLink({ channelId: createResult.result.channelId });
      setInviteLink(createLink.result.inviteLink);
      setStep('invite');
    }
  };

  const handleBack = () => {
    step === 'invite' ? setStep('roomName') : navigate('/group-select');
  };

  const handleSubmit = () => {
    if (inviteLink.trim()) {
      console.log({
        roomName,
        inviteLink,
      });
    }
    navigate('/main');
  };

  return (
    <div className='flex h-screen flex-col'>
      <Header title='방 만들기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1'>
        {step === 'roomName' && (
          <GroupCreateStep1 handleNext={handleNext} roomName={roomName} setRoomName={setRoomName} />
        )}
        {step === 'invite' && (
          <GroupCreateStep2 inviteLink={inviteLink} onSubmit={handleSubmit} roomName={roomName} />
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default GroupCreatePage;
