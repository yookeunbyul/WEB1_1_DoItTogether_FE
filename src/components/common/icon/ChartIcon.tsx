import React from 'react';

interface ChartIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ChartIcon: React.FC<ChartIconProps> = ({
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
      <path
        d='M21.0645 4.25127C21.0645 3.00793 20.0565 2 18.8132 2C17.5698 2 16.5619 3.00793 16.5619 4.25127V17.9538C16.5619 18.1195 16.6962 18.2538 16.8619 18.2538H20.7645C20.9301 18.2538 21.0645 18.1195 21.0645 17.9538V4.25127Z'
        fill='currentColor'
      />
      <path
        d='M14.252 10.2444C14.252 9.00109 13.244 7.99316 12.0007 7.99316C10.7573 7.99316 9.74942 9.00109 9.74942 10.2444V17.955C9.74942 18.1201 9.88322 18.2539 10.0483 18.2539H13.9531C14.1182 18.2539 14.252 18.1201 14.252 17.955V10.2444Z'
        fill='currentColor'
      />
      <path
        d='M7.43945 14.2161C7.43945 12.9728 6.43153 11.9648 5.18819 11.9648C3.94485 11.9648 2.93692 12.9728 2.93692 14.2161V18.0702C2.93692 18.1713 3.01893 18.2533 3.12008 18.2533H7.25629C7.35745 18.2533 7.43945 18.1713 7.43945 18.0702V14.2161Z'
        fill='currentColor'
      />
      <rect x='2.09961' y='19.3262' width='19.7991' height='2.67397' rx='0.8' fill='currentColor' />
    </svg>
  );
};

export default ChartIcon;
