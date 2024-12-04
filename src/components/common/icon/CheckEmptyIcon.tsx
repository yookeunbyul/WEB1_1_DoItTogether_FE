import React from 'react';

interface CheckEmptyIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const CheckEmptyIcon: React.FC<CheckEmptyIconProps> = ({
  className = 'text-sub2',
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect x='2' y='2' width='20' height='20' rx='4' fill='currentColor' />
    </svg>
  );
};

export default CheckEmptyIcon;
