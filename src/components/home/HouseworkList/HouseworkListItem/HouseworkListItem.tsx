import React from 'react';
import ListActionBtn from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';
import { Housework } from '@/types/apis/houseworkApi';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import convertTimeTo12HourFormat from '@/utils/convertTime';

export interface HouseworkListItemProps extends Housework {
  handleAction: (houseworkId: number) => void;
  handleEdit: (houseworkId: number) => void;
  handleDelete: (houseworkId: number) => void;
}

const HouseworkListItem: React.FC<HouseworkListItemProps> = ({
  houseworkId,
  category,
  task,
  startTime,
  isAllDay,
  assignee,
  status,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li
      className={`flex list-none items-center rounded-2xl border border-solid ${status === HOUSEWORK_STATUS.COMPLETE ? `bg-gray03` : `bg-main`} p-5 text-white01`}
    >
      <ListActionBtn
        status={status}
        handleAction={() => handleAction(houseworkId)}
        id={houseworkId}
      />
      <div className='flex w-full justify-between pl-4'>
        <div className='flex flex-col items-start justify-center gap-2'>
          <div className='flex items-center gap-2'>
            <p
              className={`text-white03 font-head ${status === HOUSEWORK_STATUS.COMPLETE && 'line-through'}`}
            >
              {task}
            </p>
            <HouseworkCategoryTag
              category={category}
              variant={status === HOUSEWORK_STATUS.COMPLETE ? 'disabled' : 'primary'}
            />
          </div>

          <p className='text-white font-caption'>{assignee}</p>
        </div>
        <div className='flex flex-col items-end justify-center gap-2'>
          <ControlDropdown
            id={houseworkId}
            handleEdit={() => handleEdit(houseworkId)}
            handleDelete={() => handleDelete(houseworkId)}
          />
          <div className='flex items-center gap-1'>
            <div className='h-5 w-5 border border-solid'></div>
            <p className='text-12'>
              {isAllDay ? '하루 종일' : convertTimeTo12HourFormat(startTime!)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HouseworkListItem;
