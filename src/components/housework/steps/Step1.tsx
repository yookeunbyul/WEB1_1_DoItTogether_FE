import { DueDateSheet, HouseworkForm, HouseWorkSheet } from '@/components/housework';
import useAddHouseWork, { SelectedTime } from '@/hooks/useAddHouseWork';

interface Step1Props {
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
}

const Step1 = ({
  setTime,
  time,
  task,
  setTask,
  setCategory,
  startDate,
  setStartDate,
}: Step1Props) => {
  const {
    handleHouseWorkClick,
    handleDueDateClick,
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
        setTime={setTime}
        time={time}
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
