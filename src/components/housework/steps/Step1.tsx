import { DueDateSheet, HouseworkForm, HouseWorkSheet } from '@/components/housework';
import { SelectedTime } from '@/hooks/useAddHouseWork';
import React, { useState } from 'react';

interface Step1Props {
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  isAllday: boolean;
  setIsAllday: React.Dispatch<React.SetStateAction<boolean>>;
}

const Step1 = ({
  setTime,
  time,
  task,
  setTask,
  setCategory,
  startDate,
  setStartDate,
  isAllday,
  setIsAllday,
}: Step1Props) => {
  const [isHouseWorkSheetOpen, setHouseWorkSheetOpen] = useState(false);
  const [isDueDateSheetOpen, setDueDateSheetOpen] = useState(false);

  //바텀 시트 여는 함수들
  const handleHouseWorkClick = () => {
    setHouseWorkSheetOpen(true);
  };

  const handleDueDateClick = () => {
    setDueDateSheetOpen(true);
  };
  return (
    <>
      <HouseworkForm
        task={task}
        startDate={startDate}
        handleHouseWorkClick={handleHouseWorkClick}
        handleDueDateClick={handleDueDateClick}
        setTime={setTime}
        time={time}
        isAllday={isAllday}
        setIsAllday={setIsAllday}
      />

      <HouseWorkSheet
        isOpen={isHouseWorkSheetOpen}
        setOpen={setHouseWorkSheetOpen}
        setTask={setTask}
        setCategory={setCategory}
      />
      <DueDateSheet
        isOpen={isDueDateSheetOpen}
        setOpen={setDueDateSheetOpen}
        setStartDate={setStartDate}
      />
    </>
  );
};

export default Step1;
