import React from 'react';
import HeaderWithTitle from '@/components/housework/HeaderWithTitle/HeaderWithTitle';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import Button from '@/components/common/button/Button/Button';
import { ProfileIcon } from '@/components/common/icon';
import { User } from '@/types/apis/groupApi';

interface TaskAssignmentContentProps {
  userId: number | null;
  members: User[];
  handleBackClick: () => void;
  handleManagerClick: () => void;
  handleNextClick: () => void;
}

const TaskAssignmentContent: React.FC<TaskAssignmentContentProps> = ({
  userId,
  members,
  handleBackClick,
  handleManagerClick,
  handleNextClick,
}) => {
  return (
    <>
      <HeaderWithTitle title={`담당자를\n지정해보세요`} handleClick={handleBackClick} />
      <section aria-label='집안일 추가 컨텐츠' className='flex flex-1 flex-col gap-6'>
        {userId ? (
          <OpenSheetBtnWithLabel
            selected={userId}
            handleClick={handleManagerClick}
            members={members}
            icon={<ProfileIcon className='text-main' />}
          />
        ) : (
          <OpenSheetBtn
            text='책임자는 누구인가요?'
            handleClick={handleManagerClick}
            type='housework'
            icon={<ProfileIcon className='text-gray3' />}
          />
        )}
      </section>
      <Button
        label='완료'
        variant='full'
        size='large'
        handleClick={handleNextClick}
        disabled={!userId}
        className='sticky bottom-6'
      />
    </>
  );
};

export default TaskAssignmentContent;
