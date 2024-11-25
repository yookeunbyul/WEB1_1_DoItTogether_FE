import Button from '@/components/common/ButtonContainer/Button/Button';
import SelectBtn from '@/components/common/SelectBtn/SelectBtn';
import SelectedBtn from '@/components/common/SelectedBtn/SelectedBtn';
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
  const [manager, setManager] = useState(null);
  const [time, setTime] = useState<SelectedTime | null>(null);

  const handleBackClick = () => {
    navigate('/add-housework/step1');
  };

  const handleNextClick = () => {
    navigate('/main');
  };

  const handleManagerClick = () => {
    console.log('바텀시트 올라와!');
  };

  const handleTimeChange = (newTime: SelectedTime | null) => {
    setTime(newTime);
    console.log(time);
  };

  return (
    <div className='flex h-screen flex-col gap-6'>
      <PageHeaderContainer
        title='새로운 집안일을 추가해보세요(2/2)'
        handleClick={handleBackClick}
      />
      <section aria-label='집안일 추가 컨텐츠' className='flex flex-1 flex-col gap-6'>
        {manager ? (
          <SelectedBtn selected={manager} handleClick={handleManagerClick} />
        ) : (
          <SelectBtn text='책임자는 누구인가요?' handleClick={handleManagerClick} />
        )}
        <TimeContainer onTimeChange={handleTimeChange} />
      </section>
      <Button label='다음' variant='full' size='large' />
    </div>
  );
};

export default HouseWorkStepTwoPage;
