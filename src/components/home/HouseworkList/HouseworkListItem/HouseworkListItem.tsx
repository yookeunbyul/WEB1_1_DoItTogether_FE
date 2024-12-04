import React from 'react';
import ListActionBtn from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown from '@/components/home/ControlDropdown/ControlDropdown';
import { Housework } from '@/types/apis/houseworkApi';
import { HOUSEWORK_STATUS } from '@/constants/homePage';
import convertTimeTo12HourFormat from '@/utils/convertTime';
import { ClockIcon } from '@/components/common/icon';
import LivingRoomIcon from '../../../common/icon/LivingRoomIconGroup';
import KitchenIconGroup from '@/components/common/icon/KitchenIconGroup';
import BathRoomIconGroup from '@/components/common/icon/BathRoomIconGroup';
import BedRoomIconGroup from '@/components/common/icon/BedRoomIconGroup';
import { Category } from '@/constants';

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
  status,
  handleAction,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li
      className={`relative flex list-none items-center overflow-hidden rounded-2xl ${status === HOUSEWORK_STATUS.COMPLETE ? `bg-sub2` : `bg-sub1`} p-4 text-white`}
    >
      <ListActionBtn
        status={status}
        handleAction={() => handleAction(houseworkId)}
        id={houseworkId}
      />
      <div className='flex w-full justify-between pl-4'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <div className='flex items-center gap-2'>
            <p
              className={`text-white font-head ${status === HOUSEWORK_STATUS.COMPLETE && 'text-sub1 line-through'} ${task.length > 12 && 'font-subhead'}`}
            >
              {task}
            </p>
            <HouseworkCategoryTag
              category={category}
              variant={status === HOUSEWORK_STATUS.COMPLETE ? 'disabled' : 'primary'}
            />
          </div>

          <p
            className={`${status === HOUSEWORK_STATUS.COMPLETE ? 'text-sub1' : 'text-white'} font-caption`}
          >
            {assignee}
          </p>
        </div>
        <div className='z-10 flex flex-col items-end justify-center gap-1'>
          <ControlDropdown
            id={houseworkId}
            handleEdit={() => handleEdit(houseworkId)}
            handleDelete={() => handleDelete(houseworkId)}
          />
          <div className='z-10 flex items-center gap-1'>
            <ClockIcon
              fillClass='fill-white'
              circleStrokeClass='stroke-white'
              handStrokeClass='stroke-main'
              width={16}
              height={16}
            />
            <p className='text-white font-caption'>
              {isAllDay ? '하루 종일' : convertTimeTo12HourFormat(startTime!)}
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-0'>
        {category === Category.BED_ROOM && <BedRoomIconGroup />}
        {category === Category.BATH_ROOM && <BathRoomIconGroup />}
        {category === Category.KITCHEN && <KitchenIconGroup />}
        {category === Category.LIVING_ROOM && <LivingRoomIcon />}
      </div>
    </li>
  );
};

export default HouseworkListItem;
