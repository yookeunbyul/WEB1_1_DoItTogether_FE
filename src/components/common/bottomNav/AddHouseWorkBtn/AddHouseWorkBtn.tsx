import React from 'react';

interface AddHouseWorkBtnProps {
  handleClick?: () => void;
}

const AddHouseWorkBtn: React.FC<AddHouseWorkBtnProps> = ({ handleClick }) => {
  return (
    <button
      className='h-12 w-12 rounded-full bg-custom-gradient text-white01'
      onClick={handleClick}
    >
      +
    </button>
  );
};

export default AddHouseWorkBtn;
