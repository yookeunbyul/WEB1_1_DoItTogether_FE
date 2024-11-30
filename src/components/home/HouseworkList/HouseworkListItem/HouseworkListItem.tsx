import React from 'react';
import ListActionBtn from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';
import { Housework } from '@/types/apis/houseworkApi';

export interface HouseworkListItemProps extends Housework {
  handleAction: (id: number) => void;
  handleEdit: () => void;
  handleDelete: (id: number) => void;
}

const HouseworkListItem: React.FC<HouseworkListItemProps> = ({
  houseworkId,
  category,
  task,
  startTime,
  assignee,
  status,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li
      className={`flex list-none items-center rounded-2xl border border-solid ${status === 'complete' ? `bg-gray03` : `bg-black02`} p-5 text-white01`}
    >
      <ListActionBtn
        actionStatus={status}
        handleAction={() => handleAction(houseworkId)}
        id={houseworkId}
      />
      <div className='flex w-full justify-between pl-4'>
        <div className='flex flex-col items-start justify-center gap-2'>
          <div className='flex items-center gap-2'>
            <p className={`text-18 ${status === 'COMPLETE' && 'line-through'}`}>{task}</p>
            <HouseworkCategoryTag category={category} status={status} isDark={true} />
          </div>

          <p className='text-12'>{assignee}</p>
        </div>
        <div className='flex flex-col items-end justify-center gap-2'>
          <ControlDropdown
            id={houseworkId}
            handleEdit={handleEdit}
            handleDelete={() => handleDelete(houseworkId)}
          />
          <div className='flex items-center gap-1'>
            <div className='h-5 w-5 border border-solid'></div>
            <p className='text-12'>{startTime}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HouseworkListItem;
