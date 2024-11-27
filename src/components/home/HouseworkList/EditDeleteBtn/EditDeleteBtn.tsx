import React from 'react';

/**
 * ! 삭제
 */

export interface EditDeleteBtnProps {
  /** 수정 또는 삭제 함수 */
  handleEditOrDelete: () => void;
}

const EditDeleteBtn: React.FC<EditDeleteBtnProps> = ({ handleEditOrDelete }) => {
  return (
    <div className='h-5 w-5 cursor-pointer border border-solid' onClick={handleEditOrDelete}></div>
  );
};

export default EditDeleteBtn;
