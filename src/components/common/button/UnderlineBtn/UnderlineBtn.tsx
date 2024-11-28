import React from 'react';

interface UnderlineBtnProps {
  text: string;
  handleClick: () => void;
}

const UnderlineBtn: React.FC<UnderlineBtnProps> = ({ text, handleClick }) => {
  return (
    <button className='text-14 underline' onClick={handleClick}>
      {text}
    </button>
  );
};

export default UnderlineBtn;
