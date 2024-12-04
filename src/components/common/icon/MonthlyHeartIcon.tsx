import React from 'react';

interface MonthlyHeartIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const MonthlyHeartIcon: React.FC<MonthlyHeartIconProps> = ({
  className = 'text-sub',
  width = 28,
  height = 28,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g filter='url(#filter0_f_2477_7684)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.58211 24.502C3.86516 25.4679 4.6923 26.1673 5.69089 26.2851C8.86409 26.6629 16.0153 27.1991 20.966 25.2189C27.4948 22.6048 28.5379 15.3736 24.6284 12.0679C22.4003 10.1838 20.0755 10.2146 18.4881 10.5881C18.2954 10.6353 18.0943 10.6363 17.9012 10.5909C17.7081 10.5456 17.5285 10.4552 17.377 10.3271C17.2255 10.199 17.1065 10.0369 17.0297 9.85399C16.9528 9.67111 16.9204 9.47263 16.9349 9.2748C17.0394 7.64739 16.6834 5.34985 14.4552 3.46578C10.5458 0.1601 3.5885 2.39047 2.09671 9.26375C0.964957 14.473 2.6841 21.4373 3.58211 24.502Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_2477_7684'
          x='0.722656'
          y='0.960938'
          width='27.1895'
          height='26.6865'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.1' result='effect1_foregroundBlur_2477_7684' />
        </filter>
      </defs>
    </svg>
  );
};

export default MonthlyHeartIcon;
