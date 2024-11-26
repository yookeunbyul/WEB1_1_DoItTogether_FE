import React from 'react';

interface BottomSheetTitleProps {
  title: string;
}

const BottomSheetTitle: React.FC<BottomSheetTitleProps> = ({ title }: BottomSheetTitleProps) => {
  return (
    <div className='border-0 border-b border-solid border-gray03 py-5 text-center'>{title}</div>
  );
};

export default BottomSheetTitle;
