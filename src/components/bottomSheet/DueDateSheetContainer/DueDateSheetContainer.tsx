import { useState } from 'react';
import BottomSheetContainer from '@/components/common/BottomSheetContainer/BottomSheetContainer';
import Button from '@/components/common/ButtonContainer/Button/Button';
import { Calendar } from '@/components/common/Calendar/Calendar';

const DueDateSheetContainer = () => {
  const [isOpen, setOpen] = useState(true);
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setDueDate(date);
  };
  const handleCompleteClick = () => {
    setOpen(false);
  };

  return (
    <BottomSheetContainer isOpen={isOpen} setOpen={setOpen} title='날짜 선택'>
      <div className='mt-4 flex min-h-96 flex-col gap-y-6 pb-6'>
        <section aria-label='집안일 할당 바텀 시트' className='flex flex-1 flex-col gap-6'>
          <Calendar />
        </section>
        <div className='px-5'>
          <Button label='완료' variant='full' size='large' handleClick={handleCompleteClick} />
        </div>
      </div>
    </BottomSheetContainer>
  );
};

export default DueDateSheetContainer;
