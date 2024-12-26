import React from 'react';
import Button from '@/components/common/button/Button/Button';
import {
  HeaderWithTitle,
  HouseWorkSheet,
  DueDateSheet,
  HouseworkForm,
} from '@/components/housework';
import useHouseworkStepOne from '@/hooks/useHouseworkStepOne';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

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
  } = useHouseworkStepOne();
  const { channelId } = useParams();

  return (
    <div className={`flex h-screen flex-col gap-4 px-5 pb-6`}>
      <MetaTags
        title={'두잇투게더 - 집안일 등록'}
        description={'간편하게 집안일을 등록해보세요.'}
        url={`https://doit-together.vercel.app/add-housework/${channelId}/step1/`}
      />
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
