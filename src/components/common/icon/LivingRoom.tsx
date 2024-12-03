import React from 'react';

interface LivingRoomProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const LivingRoom: React.FC<LivingRoomProps> = ({
  fillOneClass = 'fill-main',
  fillTwoClass = 'fill-sub',
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
        d='M2.95312 5.09961C2.95312 3.99504 3.84856 3.09961 4.95312 3.09961H19.0544C20.159 3.09961 21.0544 3.99504 21.0544 5.09961V13.5075H2.95312V5.09961Z'
        className={fillOneClass}
      />
      <path
        d='M3.58203 14.4873C3.58203 13.3827 4.47746 12.4873 5.58203 12.4873H18.4155C19.5201 12.4873 20.4155 13.3827 20.4155 14.4873V19.7921H3.58203V14.4873Z'
        className={fillTwoClass}
      />
      <path
        d='M4.46484 20.2324L4.46484 9.15502C4.46484 8.18463 3.67819 7.39797 2.70779 7.39797C1.7374 7.39797 0.950745 8.18463 0.950745 9.15502L0.950745 18.2324C0.950745 19.337 1.84618 20.2324 2.95074 20.2324H4.46484Z'
        className={fillTwoClass}
      />
      <path
        d='M19.5352 20.2324V9.15502C19.5352 8.18463 20.3218 7.39797 21.2922 7.39797C22.2626 7.39797 23.0493 8.18463 23.0493 9.15502V18.2324C23.0493 19.337 22.1538 20.2324 21.0493 20.2324H19.5352Z'
        className={fillTwoClass}
      />
      <rect x='3.58203' y='19.5664' width='1.75378' height='1.33306' className={fillTwoClass} />
      <rect x='18.666' y='19.5664' width='1.75378' height='1.33306' className={fillTwoClass} />
      <circle cx='7.86133' cy='8.67285' r='0.75' fill='#FDFDFD' />
      <circle cx='12.0078' cy='8.67285' r='0.75' fill='#FDFDFD' />
      <circle cx='16.1484' cy='8.67285' r='0.75' fill='#FDFDFD' />
    </svg>
  );
};

export default LivingRoom;
