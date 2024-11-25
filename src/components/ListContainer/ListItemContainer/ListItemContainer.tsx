import React from 'react';
import ListActionBtn, { ListActionBtnProps } from '../ListActionBtn/ListActionBtn';
import HouseworkCategoryTag, {
  HouseworkCategoryTagProps,
} from '@/components/common/HouseworkCatetoryTag/HouseworkCategoryTag';
import ControlDropdown, {
  ControlDropdownProps,
} from '@/components/ControlDropdown/ControlDropdown';

export interface ListItemContainerProps
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

const ListItemContainer: React.FC<ListItemContainerProps> = ({
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
      <ListActionBtn actionStatus={actionStatus} handleAction={handleAction} />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex items-center'>
            <p className={`text-18 ${actionStatus === 'complete' && 'line-through'}`}>
              {listTitle}
            </p>
            <HouseworkCategoryTag category={category} status={actionStatus} isDark={true} />
          </div>

          <p className='text-12'>{charger}</p>
        </div>
        <div className='flex flex-col items-end justify-center'>
          <ControlDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          <div className='flex items-center'>
            <div className='h-5 w-5 border border-solid'></div>
            <p className='text-12'>{time}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItemContainer;
