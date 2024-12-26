import {
  TaskAssignmentContent,
  ManagerSelectSheet,
  HouseWorkAddLoading,
} from '@/components/housework';

import useHouseworkStepTwo from '@/hooks/useHouseworkStepTwo';
import MetaTags from '@/components/common/metaTags/MetaTags';
import { useParams } from 'react-router-dom';

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
  const { channelId } = useParams();

  if (isMemberLoading) {
    return <></>;
  }

  return (
    <>
      <MetaTags
        title={'두잇투게더 - 집안일 등록'}
        description={'간편하게 집안일을 등록해보세요.'}
        url={`https://doit-together.vercel.app/add-housework/${channelId}/step2/`}
      />
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
