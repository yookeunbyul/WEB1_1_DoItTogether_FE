import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import InputBox from '@/components/common/input/InputBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJoinGroup } from '@/services/groupSelect/postJoinGroup';
import { useToast } from '@/hooks/use-toast';

const GroupInviteReceivePage = () => {
  const [inviteLink, setInviteLink] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBack = () => {
    navigate('/group-select');
  };

  const handleGoIn = async () => {
    try {
      const joinResult = await postJoinGroup({ inviteLink });
      navigate(`/main/${joinResult.result.channelId}`);
    } catch (error) {
      if (error instanceof Error) {
        toast({ title: '에러가 발생했습니다 ㅠㅠ', description: error.message });
      }
    }
  };

  return (
    <div className='flex h-screen flex-col'>
      <Header title='초대받기' isNeededDoneBtn={false} handleBack={handleBack} />
      <div className='flex-1 p-5'>
        <InputBox
          placeholder='공유받은 링크를 입력해주세요'
          disabled={false}
          value={inviteLink}
          handleChange={setInviteLink}
        />
      </div>
      <div className='p-5'>
        <Button
          label='입장하기'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleGoIn}
          disabled={!inviteLink.trim()}
        />
      </div>
    </div>
  );
};

export default GroupInviteReceivePage;
