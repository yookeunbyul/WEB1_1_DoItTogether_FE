import Header from '@/components/common/header/Header';
import GroupCreateStep1 from '@/components/group/create/GroupCreateStep1';
import GroupCreateStep2 from '@/components/group/create/GroupCreateStep2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type StepType = 'roomName' | 'invite';

const GroupCreatePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<StepType>('roomName');
  const [roomName, setRoomName] = useState('');
  const [inviteLink, setInviteLink] = useState('sadsad');

  const handleNext = () => {
    if (roomName.trim()) {
      setInviteLink('임시 링크~~~');
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
    </div>
  );
};

export default GroupCreatePage;
