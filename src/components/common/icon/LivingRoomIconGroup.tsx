import React from 'react';

interface LivingRoomIconProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const LivingRoomIcon: React.FC<LivingRoomIconProps> = ({
  fillOneClass = 'fill-main',
  fillTwoClass = 'fill-sub',
  width = 126,
  height = 80,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 126 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.5'>
        <path
          d='M61.211 3.26621C65.1848 -3.61664 73.9859 -5.97488 80.8687 -2.00106L155.973 41.3601C162.855 45.3339 165.214 54.135 161.24 61.0178L135.229 106.07L35.2001 48.3185L61.211 3.26621Z'
          fill={fillOneClass}
        />
        <path
          d='M34.7306 57.15C38.7044 50.2671 47.5054 47.9089 54.3883 51.8827L122.486 91.199C129.369 95.1729 131.727 103.974 127.753 110.857L111.643 138.761L18.6201 85.0542L34.7306 57.15Z'
          fill={fillTwoClass}
        />
        <path
          d='M22.0977 90.3086L57.4398 29.0942C60.5358 23.7317 58.6985 16.8748 53.3361 13.7788C47.9736 10.6828 41.1167 12.5201 38.0207 17.8825L9.87374 66.6345C5.89993 73.5173 8.25817 82.3184 15.141 86.2922L22.0977 90.3086Z'
          fill={fillTwoClass}
        />
        <path
          d='M105.371 138.389L140.713 77.1742C143.809 71.8118 150.666 69.9745 156.029 73.0705C161.391 76.1665 163.228 83.0234 160.132 88.3859L131.985 137.138C128.012 144.021 119.211 146.379 112.328 142.405L105.371 138.389Z'
          fill={fillTwoClass}
        />
      </g>
    </svg>
  );
};

export default LivingRoomIcon;
