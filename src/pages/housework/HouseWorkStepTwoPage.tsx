import {
  TaskAssignmentContent,
  ManagerSelectSheet,
  HouseWorkAddLoading,
} from '@/components/housework';

import useHouseworkStepTwo from '@/hooks/useHouseworkStepTwo';

const HouseWorkStepTwoPage = () => {
  const {
    isOpen,
    setIsOpen,
    isLoading,
    userId,
    selectedValue,
    setSelectedValue,
    members,
    isMemberLoading,
    task,
    startDate,
    category,
    handleBackClick,
    handleNextClick,
    handleManagerClick,
    handleDoneClick,
  } = useHouseworkStepTwo();

  if (isMemberLoading) {
    return <></>;
  }

  return (
    <>
      <div className={`flex h-screen flex-col gap-6 px-5 pb-6`}>
        {isLoading ? (
          <HouseWorkAddLoading
            member={userId}
            housework={task}
            date={startDate}
            members={members}
            category={category}
          />
        ) : (
          <TaskAssignmentContent
            userId={userId}
            members={members}
            handleBackClick={handleBackClick}
            handleManagerClick={handleManagerClick}
            handleNextClick={handleNextClick}
          />
        )}
      </div>

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

export default HouseWorkStepTwoPage;
