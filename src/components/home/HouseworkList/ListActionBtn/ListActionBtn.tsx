import React from 'react';

/**
 * todo: 추후 기능 추가
 * - 아이콘
 * 1. 집안일 미완료 상태
 * 2. 집안일 완료 상태
 * 3. 찌르기 상태
 * 4. 칭찬 상태
 */

export interface ListActionBtnProps {
  /** 상태 */
  actionStatus: string;
  /** 액션 */
  handleAction: () => void;
}

const ListActionBtn: React.FC<ListActionBtnProps> = ({ actionStatus, handleAction }) => {
  return <div className='h-5 w-5 cursor-pointer border border-solid' onClick={handleAction}></div>;
};

export default ListActionBtn;
