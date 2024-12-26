import { DueDateSheet, HouseworkForm, HouseWorkSheet } from '@/components/housework';
import useAddHouseWork from '@/hooks/useAddHouseWork';

const Step1 = () => {
  const {
    task,
    startDate,
    handleHouseWorkClick,
    handleDueDateClick,
    handleTimeChange,
    isHouseWorkSheetOpen,
    setHouseWorkSheetOpen,
    isDueDateSheetOpen,
    setDueDateSheetOpen,
  } = useAddHouseWork();
  return (
    <>
      <HouseworkForm
        task={task}
        startDate={startDate}
        handleHouseWorkClick={handleHouseWorkClick}
        handleDueDateClick={handleDueDateClick}
        onTimeChange={handleTimeChange}
      />

      <HouseWorkSheet isOpen={isHouseWorkSheetOpen} setOpen={setHouseWorkSheetOpen} />
      <DueDateSheet isOpen={isDueDateSheetOpen} setOpen={setDueDateSheetOpen} />
    </>
  );
};

export default Step1;
