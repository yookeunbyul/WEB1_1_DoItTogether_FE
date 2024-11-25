import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/ButtonContainer/Button/Button';
import SelectBtn from '@/components/common/SelectBtn/SelectBtn';
import SelectedBtn from '@/components/common/SelectedBtn/SelectedBtn';
import PageHeaderContainer from '@/components/PageHeaderContainer/PageHeaderContainer';

const HouseWorkStepOnePage = () => {
  const navigate = useNavigate();
  const [houseWork, setHouseWork] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleHouseWorkClick = () => {
    console.log('bottom sheet open!');
  };
  const handleDueDateClick = () => {
    console.log('bottom sheet open!');
  };
  const handleNextClick = () => {
    navigate('/add-housework/step2');
  };

  return (
    <div className='flex h-screen flex-col gap-6 px-5'>
      <PageHeaderContainer
        title='새로운 집안일을 추가해보세요(1/2)'
        handleClick={handleBackClick}
      />
      <section className='flex flex-1 flex-col gap-6' aria-label='집안일 추가 컨텐츠'>
        {houseWork ? (
          <SelectedBtn title='집안일' selected='houseWork' handleClick={handleHouseWorkClick} />
        ) : (
          <SelectBtn text='어떤 집안일인가요?' handleClick={handleHouseWorkClick} />
        )}
        {dueDate ? (
          <SelectedBtn title='날짜' selected='dueDate' handleClick={handleDueDateClick} />
        ) : (
          <SelectBtn text='언제 해야 하나요?' handleClick={handleDueDateClick} />
        )}
      </section>
      <Button variant='full' size='large' label='다음' handleClick={handleNextClick} />
    </div>
  );
};

export default HouseWorkStepOnePage;
