import useAddHouseWork from '@/hooks/useAddHouseWork';
import {
  HouseWorkAddLoading,
  ManagerSelectSheet,
  TaskAssignmentContent,
} from '@/components/housework';

const Step2 = () => {
  const {
    isLoading,
    userId,
    task,
    startDate,
    members,
    category,
    handleManagerClick,
    isOpen,
    setIsOpen,
    setSelectedValue,
    selectedValue,
    handleDoneClick,
  } = useAddHouseWork();

  if (isLoading) {
    return (
      <HouseWorkAddLoading
        member={userId}
        housework={task}
        date={startDate}
        members={members}
        category={category}
      />
    );
  }
  return (
    <>
      <TaskAssignmentContent
        userId={userId}
        members={members}
        handleManagerClick={handleManagerClick}
      />
      <ManagerSelectSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
        handleDoneClick={handleDoneClick}
        members={members}
      />
    </>
  );
};

export default Step2;
