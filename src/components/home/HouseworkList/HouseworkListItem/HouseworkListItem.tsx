import React from 'react';
import ListActionBtn, { ListActionBtnProps } from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/tag/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown, {
  ControlDropdownProps,
} from '@/components/home/ControlDropdown/ControlDropdown';

export interface HouseworkListItemProps
  extends ListActionBtnProps,
    HouseworkCategoryTagProps,
    ControlDropdownProps {
  /** 집안일 ID */
  id: number;
  /** 집안일 */
  listTitle: string;
  /** 담당자 */
  charger: string;
  /** 시작 시간 */
  time: string;
}

const HouseworkListItem: React.FC<HouseworkListItemProps> = ({
  id,
  actionStatus,
  handleAction,
  listTitle,
  charger,
  time,
  category,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li
      className={`flex list-none items-center rounded-2xl border border-solid ${actionStatus === 'complete' ? `bg-gray03` : `bg-black02`} p-5 text-white01`}
    >
      <ListActionBtn actionStatus={actionStatus} handleAction={() => handleAction(id)} id={id} />
      <div className='flex w-full justify-between pl-4'>
        <div className='flex flex-col items-start justify-center gap-2'>
          <div className='flex items-center gap-2'>
            <p className={`text-18 ${actionStatus === 'complete' && 'line-through'}`}>
              {listTitle}
            </p>
            <HouseworkCategoryTag category={category} status={actionStatus} isDark={true} />
          </div>

          <p className='text-12'>{charger}</p>
        </div>
        <div className='flex flex-col items-end justify-center gap-2'>
          <ControlDropdown id={id} handleEdit={handleEdit} handleDelete={() => handleDelete(id)} />
          <div className='flex items-center gap-1'>
            <div className='h-5 w-5 border border-solid'></div>
            <p className='text-12'>{time}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HouseworkListItem;
