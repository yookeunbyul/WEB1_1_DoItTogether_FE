import React from 'react';

interface BathRoomIconGroupProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const BathRoomIconGroup: React.FC<BathRoomIconGroupProps> = ({
  fillOneClass = 'fill-main',
  fillTwoClass = 'fill-sub',
  width = 127,
  height = 80,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 127 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.7'>
        <rect
          x='122.449'
          y='72.0693'
          width='5.79192'
          height='4.39921'
          transform='rotate(-30 122.449 72.0693)'
          className={fillTwoClass}
        />
        <rect
          x='30.1387'
          y='71.9824'
          width='111'
          height='7.37938'
          rx='3.68969'
          transform='rotate(-30 30.1387 71.9824)'
          className={fillTwoClass}
        />
        <path
          d='M39.6855 74.9961L124.098 26.2605L130.139 36.7246C138.138 50.5788 133.391 68.294 119.537 76.2927L85.295 96.0624C71.4409 104.061 53.7257 99.3143 45.727 85.4602L39.6855 74.9961Z'
          fill='#8DE8D7'
        />
        <rect
          x='21.7441'
          y='31.8174'
          width='7.61659'
          height='44.3161'
          rx='3.80829'
          transform='rotate(-30 21.7441 31.8174)'
          className={fillTwoClass}
        />
        <path
          d='M55.0731 11.9849C56.3458 10.5663 56.4598 8.33732 54.9732 7.16632C53.999 6.39899 52.9296 5.79915 51.5366 5.11878C49.0074 3.88343 46.2207 3.20823 43.3539 3.13616C40.4871 3.06409 37.603 3.59673 34.8851 4.70017C32.1672 5.80361 29.675 7.45368 27.5673 9.54537C25.4595 11.6371 23.7823 14.1246 22.6423 16.8495C21.5024 19.5745 20.9247 22.4773 20.946 25.3731C20.9673 28.269 21.6919 30.2205 23.0746 33.8121C24.0709 35.9847 24.8824 37.2827 25.6778 38.2469C26.782 39.5853 28.7754 39.5659 30.1431 38.4994C31.6015 37.362 32.0172 35.2844 31.2536 33.5888C30.6769 32.3083 30.1367 31.0222 29.7025 30.1063C28.9766 28.2403 28.4543 26.7377 28.4407 24.8893C28.4271 23.0408 28.7959 21.1879 29.5235 19.4485C30.2512 17.7091 31.3218 16.1213 32.6672 14.7862C34.0126 13.451 35.6034 12.3977 37.3383 11.6934C39.0731 10.9891 40.9141 10.6491 42.744 10.6951C44.574 10.7411 46.3527 11.1721 47.9672 11.9606C48.2567 12.102 48.5397 12.2544 48.8159 12.4172C50.8065 13.5914 53.5155 13.7211 55.0731 11.9849Z'
          className={fillTwoClass}
        />
        <ellipse
          cx='77.3567'
          cy='27.3538'
          rx='7.70605'
          ry='7.70605'
          transform='rotate(-30 77.3567 27.3538)'
          className={fillOneClass}
        />
        <ellipse
          cx='90.7648'
          cy='13.6899'
          rx='5.12661'
          ry='5.1266'
          transform='rotate(-30 90.7648 13.6899)'
          className={fillOneClass}
        />
        <circle
          cx='61.1971'
          cy='19.9988'
          r='2.62214'
          transform='rotate(-30 61.1971 19.9988)'
          className={fillOneClass}
        />
        <circle
          cx='60.0699'
          cy='37.9757'
          r='4.52782'
          transform='rotate(-30 60.0699 37.9757)'
          className={fillOneClass}
        />
      </g>
    </svg>
  );
};

export default BathRoomIconGroup;
