import useAddHouseWork from '@/hooks/useAddHouseWork';
import { ManagerSelectSheet, TaskAssignmentContent } from '@/components/housework';

const Step2 = () => {
  const {
    userId,
    members,
    handleManagerClick,
    isOpen,
    setIsOpen,
    setSelectedValue,
    selectedValue,
    handleDoneClick,
  } = useAddHouseWork();

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
