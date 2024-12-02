import React from 'react';
import { CheckEmptyIcon, CheckFillIcon } from '@/components/common/icon';
import { HOUSEWORK_STATUS } from '@/constants/homePage';

/**
 * todo: 추후 기능 추가
 * - 아이콘
 * 3. 찌르기 상태
 * 4. 칭찬 상태
 */

export interface ListActionBtnProps {
  /** 상태 */
  status: string;
  /** 액션 */
  handleAction: (id: number) => void;
  /** 아이디 */
  id: number;
}

const ListActionBtn: React.FC<ListActionBtnProps> = ({ status, handleAction, id }) => {
  return (
    <div
      className='flex cursor-pointer items-center justify-center rounded-[4px] bg-sub2'
      onClick={() => handleAction(id)}
    >
      {status === HOUSEWORK_STATUS.COMPLETE ? <CheckFillIcon /> : <CheckEmptyIcon />}
    </div>
  );
};

export default ListActionBtn;
