import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import Button from '@/components/common/ButtonContainer/Button/Button';
import SelectBtn from '@/components/common/SelectBtn/SelectBtn';
import SelectedBtn from '@/components/common/SelectedBtn/SelectedBtn';
import MaganerSelectContainer from '@/components/ManagerSelectContainer/ManagerSelectContainer';
import PageHeaderContainer from '@/components/PageHeaderContainer/PageHeaderContainer';
import TimeContainer from '@/components/TimeContainer/TimeContainer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SelectedTime {
  hour: string;
  minute: string;
  dayPart: 'AM' | 'PM';
}

const HouseWorkStepTwoPage = () => {
  const navigate = useNavigate();
  const [manager, setManager] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [time, setTime] = useState<SelectedTime | null>(null);

  const handleBackClick = () => {
    navigate('/add-housework/step1');
  };

  const handleNextClick = () => {
    navigate('/main');
  };

  const handleManagerClick = () => {
    setOpen(true);
  };

  const handleDoneClick = () => {
    setOpen(false);
    setManager(selectedMember);
  };

  const handleTimeChange = (newTime: SelectedTime | null) => {
    setTime(newTime);
    console.log(time);
  };

  return (
    <>
      <div className='flex h-screen flex-col gap-6 px-5'>
        <PageHeaderContainer
          title='새로운 집안일을 추가해보세요(2/2)'
          handleClick={handleBackClick}
        />
        <section aria-label='집안일 추가 컨텐츠' className='flex flex-1 flex-col gap-6'>
          {manager ? (
            <SelectedBtn title='담당자' selected={manager} handleClick={handleManagerClick} />
          ) : (
            <SelectBtn text='책임자는 누구인가요?' handleClick={handleManagerClick} />
          )}
          <TimeContainer onTimeChange={handleTimeChange} />
        </section>
        <Button label='다음' variant='full' size='large' handleClick={handleNextClick} />
      </div>

      <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='담당자 고르기'>
        <div className='flex flex-col gap-y-6 px-5 pb-6'>
          <MaganerSelectContainer
            selectedMember={selectedMember}
            handleSelectMember={setSelectedMember}
          />
          <Button label='완료' variant='full' size='large' handleClick={handleDoneClick} />
          <button className='text-14 underline'>AI가 딱 맞는 사람을 선택할게요</button>
        </div>
      </BottomSheetContainer>
    </>
  );
};

export default HouseWorkStepTwoPage;
