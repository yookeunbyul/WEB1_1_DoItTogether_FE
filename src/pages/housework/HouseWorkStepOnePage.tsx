import React from 'react';
import Button from '@/components/common/button/Button/Button';
import {
  HeaderWithTitle,
  HouseWorkSheet,
  DueDateSheet,
  HouseworkForm,
} from '@/components/housework';
import { useHouseWorkStepOne } from '@/hooks/useHouseworkStepOne';

const HouseWorkStepOnePage: React.FC = () => {
  const {
    task,
    startDate,
    isHouseWorkSheetOpen,
    isDueDateSheetOpen,
    handleBackClick,
    handleHouseWorkClick,
    handleDueDateClick,
    handleNextClick,
    handleTimeChange,
    setHouseWorkSheetOpen,
    setDueDateSheetOpen,
  } = useHouseWorkStepOne();

  return (
    <div className={`flex h-screen flex-col gap-4 px-5 pb-6`}>
      <HeaderWithTitle title={`새로운 집안일을\n추가해보세요`} handleClick={handleBackClick} />
      <HouseworkForm
        task={task}
        startDate={startDate}
        handleHouseWorkClick={handleHouseWorkClick}
        handleDueDateClick={handleDueDateClick}
        onTimeChange={handleTimeChange}
      />
      <Button
        variant='full'
        size='large'
        label='다음'
        handleClick={handleNextClick}
        disabled={!task || !startDate}
        className='sticky bottom-6'
      />

      <HouseWorkSheet isOpen={isHouseWorkSheetOpen} setOpen={setHouseWorkSheetOpen} />
      <DueDateSheet isOpen={isDueDateSheetOpen} setOpen={setDueDateSheetOpen} />
    </div>
  );
};

export default HouseWorkStepOnePage;
