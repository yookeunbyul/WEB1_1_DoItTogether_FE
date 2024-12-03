import React from 'react';

interface HomeIconProps {
  fillClass?: string;
  width?: string | number;
  height?: string | number;
}

const HomeIcon: React.FC<HomeIconProps> = ({
  fillClass = 'text-main',
  width = '18',
  height = '18',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={fillClass}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.5477 2.18888C12.2114 1.93704 11.7889 1.93704 11.4526 2.18888L3.35489 8.25265C3.31969 8.27729 3.28531 8.30304 3.25182 8.32983L3.00762 8.5127C2.66188 8.7716 2.50436 9.18088 2.50045 9.58872C2.49948 9.68986 2.50038 9.79119 2.50038 9.89233V19.9999C2.50038 21.1045 3.39581 21.9999 4.50037 21.9999H8.41303C8.96531 21.9999 9.41303 21.5522 9.41303 20.9999V15.6601C9.41303 14.7764 10.1294 14.0601 11.013 14.0601H12.9901C13.8737 14.0601 14.5901 14.7764 14.5901 15.6601V20.9999C14.5901 21.5522 15.0378 21.9999 15.5901 21.9999H19.4999C20.6045 21.9999 21.4999 21.1045 21.4999 19.9999V9.89233C21.4999 9.79119 21.5008 9.68987 21.4999 9.58874C21.496 9.18089 21.3384 8.7716 20.9927 8.5127L20.7485 8.32985C20.715 8.30304 20.6806 8.27729 20.6454 8.25264L12.5477 2.18888Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default HomeIcon;
