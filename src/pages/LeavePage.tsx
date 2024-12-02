import Button from '@/components/common/button/Button/Button';
import Header from '@/components/common/header/Header';
import { Checkbox } from '@/components/common/ui/checkbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const LeavePage = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  const handleBack = () => {
    navigate(`/my-page/account-manage/${channelId}`);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDone = () => {
    console.log('가지마 ㅜㅜㅜㅜ 😈');
  };

  return (
    <div className='flex h-screen flex-col gap-6'>
      <Header title='탈퇴하기' handleBack={handleBack} isNeededDoneBtn={false} />
      <div className='flex flex-1 flex-col gap-4 px-5'>
        <div className='flex h-24 w-full items-center justify-center'>우리의 로고</div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <p>두잇투게더 탈퇴 전 꼭 확인하세요</p>
          <div className='flex flex-col items-center justify-center text-12'>
            <p>계정 탈퇴 시 개인 정보를 비롯한 이용 중인 모든 기록이 삭제됩니다.</p>
            <p>이전 기록에 대한 어떠한 사후처리도 도와드릴 수 없게 됩니다</p>
          </div>
        </div>
        <div className='rounded-lg border border-solid bg-white03 p-4'>
          <ul className='flex list-disc flex-col gap-2 rounded-lg pl-5 text-10'>
            <li>개인과 관련된 모든 계정 정보가 삭제됩니다</li>
            <li>집안일 담당업무 및 저장 내역도 모두 삭제되니 탈퇴 전 다시 확인해주세요</li>
          </ul>
        </div>
        <div className='my-4 flex items-center gap-2 text-10'>
          <Checkbox id='check' onCheckedChange={handleCheckboxChange} />
          <label htmlFor='check'>모두 확인하였으며, 계속 진행합니다.</label>
        </div>
      </div>
      <div className='px-5'>
        <Button
          label='완료'
          variant='full'
          size='large'
          handleClick={handleDone}
          disabled={!isChecked}
        />
      </div>
    </div>
  );
};

export default LeavePage;
