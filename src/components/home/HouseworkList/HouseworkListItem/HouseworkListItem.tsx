import React from 'react';
import ListActionBtn from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';
import { Housework } from '@/types/apis/houseworkApi';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import convertTimeTo12HourFormat from '@/utils/convertTime';
import { ClockIcon } from '@/components/common/icon';
import useHomePageStore from '@/store/useHomePageStore';

/**
 * todo
 * 집안일이 길때 텍스트 크기 조정
 */

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
  userId,
  status,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  const { myInfo } = useHomePageStore();
  const newStatus =
    userId !== myInfo?.userId
      ? status === HOUSEWORK_STATUS.COMPLETE
        ? HOUSEWORK_STATUS.HEART
        : HOUSEWORK_STATUS.FINGER
      : status;

  return (
    <li
      className={`relative flex list-none items-center overflow-hidden rounded-2xl ${status === HOUSEWORK_STATUS.COMPLETE ? `bg-gray4` : `bg-white`} p-4`}
    >
      <ListActionBtn
        status={newStatus}
        handleAction={() => handleAction(houseworkId)}
        id={houseworkId}
      />
      <div className='flex w-full justify-between pl-4'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <div className='flex items-center gap-2'>
            <p
              className={`text-black font-head ${status === HOUSEWORK_STATUS.COMPLETE && 'text-gray2/60 line-through'}`}
            >
              {task}
            </p>
            <HouseworkCategoryTag
              category={category}
              variant={status === HOUSEWORK_STATUS.COMPLETE ? 'disabled' : 'primary'}
            />
          </div>

          <p
            className={`${status === HOUSEWORK_STATUS.COMPLETE ? 'text-gray2/50' : 'text-gray1'} font-caption`}
          >
            {assignee}
          </p>
        </div>
        <div className='z-100 flex flex-col items-end justify-center gap-1'>
          <ControlDropdown
            id={houseworkId}
            handleEdit={() => handleEdit(houseworkId)}
            handleDelete={() => handleDelete(houseworkId)}
          />
          <div className='z-100 flex items-center gap-1'>
            <ClockIcon
              fillClass='fill-black'
              circleStrokeClass='stroke-black'
              handStrokeClass='stroke-white'
              width={16}
              height={16}
            />
            <p className='text-black font-caption'>
              {isAllDay ? '하루 종일' : convertTimeTo12HourFormat(startTime!)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HouseworkListItem;
