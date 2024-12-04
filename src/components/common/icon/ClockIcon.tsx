import React from 'react';

interface ClockIconProps {
  fillClass?: string;
  circleStrokeClass?: string;
  handStrokeClass?: string;
  width?: string | number;
  height?: string | number;
}

const ClockIcon: React.FC<ClockIconProps> = ({
  fillClass = 'fill-main',
  circleStrokeClass = 'stroke-main',
  handStrokeClass = 'stroke-white',
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
    >
      <path
        d='M20.9 12C20.9 16.9153 16.9153 20.9 12 20.9C7.08467 20.9 3.1 16.9153 3.1 12C3.1 7.08467 7.08467 3.1 12 3.1C16.9153 3.1 20.9 7.08467 20.9 12Z'
        className={`${fillClass} ${circleStrokeClass}`}
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 7V12L15.3333 13.6667'
        className={handStrokeClass}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ClockIcon;
