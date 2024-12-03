import React from 'react';

interface HeartIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  className = 'text-main',
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
      <rect x='1' y='1' width='22' height='22' rx='11' fill='currentColor' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.3606 17.5574C11.7491 17.8141 12.2502 17.8141 12.6381 17.5574C13.8719 16.7431 16.5581 14.7965 17.7155 12.6183C19.2409 9.74482 17.4495 6.87891 15.0811 6.87891C13.7313 6.87891 12.9193 7.58416 12.4701 8.19024C12.4162 8.26447 12.3454 8.32488 12.2637 8.36654C12.1819 8.40819 12.0915 8.4299 11.9997 8.4299C11.9079 8.4299 11.8175 8.40819 11.7357 8.36654C11.6539 8.32488 11.5832 8.26447 11.5292 8.19024C11.0801 7.58416 10.2681 6.87891 8.91823 6.87891C6.5499 6.87891 4.75848 9.74482 6.28448 12.6183C7.44065 14.7965 10.1281 16.7431 11.3606 17.5574Z'
        fill='#FDFDFD'
      />
    </svg>
  );
};

export default HeartIcon;
