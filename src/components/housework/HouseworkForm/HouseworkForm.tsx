import React from 'react';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import TimeControl from '@/components/housework/TimeControl/TimeControl';
import { DateIcon, EtcIcon } from '@/components/common/icon';
import { SelectedTime } from '@/hooks/useHouseworkStepOne';

interface HouseworkFormProps {
  task: string;
  startDate: string;
  handleHouseWorkClick: () => void;
  handleDueDateClick: () => void;
  onTimeChange: (newTime: SelectedTime | null) => void;
}

const HouseworkForm: React.FC<HouseworkFormProps> = ({
  task,
  startDate,
  handleHouseWorkClick,
  handleDueDateClick,
  onTimeChange,
}) => {
  return (
    <section className='flex flex-col flex-1 gap-4' aria-label='집안일 추가 컨텐츠'>
      {task ? (
        <OpenSheetBtnWithLabel
          selected={task}
          handleClick={handleHouseWorkClick}
          icon={<EtcIcon />}
        />
      ) : (
        <OpenSheetBtn
          text='어떤 집안일인가요?'
          handleClick={handleHouseWorkClick}
          type='housework'
          icon={<EtcIcon fillOneClass='fill-gray2' fillTwoClass='fill-gray3' />}
        />
      )}
      {startDate ? (
        <OpenSheetBtnWithLabel
          selected={startDate}
          handleClick={handleDueDateClick}
          icon={<DateIcon className='text-main' />}
        />
      ) : (
        <OpenSheetBtn
          text='언제 해야 하나요?'
          handleClick={handleDueDateClick}
          type='housework'
          icon={<DateIcon className='text-gray3' />}
        />
      )}
      <TimeControl onTimeChange={onTimeChange} />
    </section>
  );
};

export default HouseworkForm;
