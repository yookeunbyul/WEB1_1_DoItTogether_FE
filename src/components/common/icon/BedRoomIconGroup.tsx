interface BedRoomIconGroupProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const BedRoomIconGroup: React.FC<BedRoomIconGroupProps> = ({
  fillOneClass = 'fill-main',
  fillTwoClass = 'fill-sub',
  width = 124,
  height = 80,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 124 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.6'>
        <path
          d='M14.0844 24.6478C11.0078 19.3189 12.8336 12.5049 18.1624 9.42832L85.6776 -29.5516C91.0065 -32.6282 97.8204 -30.8024 100.897 -25.4736L119.635 6.98071L32.8219 57.102L14.0844 24.6478Z'
          className={fillTwoClass}
        />
        <rect
          x='37.1367'
          y='83.1504'
          width='120'
          height='20'
          rx='5.5707'
          transform='rotate(-30 37.1367 83.1504)'
          className={fillTwoClass}
        />
        <path
          d='M30.9143 64.6271C29.3759 61.9627 30.2889 58.5557 32.9533 57.0174L120.799 6.29963C123.463 4.76133 126.87 5.67423 128.409 8.33865L140.068 28.5328L42.5734 84.8212L30.9143 64.6271Z'
          className={fillOneClass}
        />
        <path
          d='M40.6544 47.6641C39.8852 46.3319 40.3417 44.6284 41.6739 43.8593L62.5295 31.8183C63.8617 31.0491 65.5652 31.5056 66.3344 32.8378L71.3547 41.5333L45.6747 56.3596L40.6544 47.6641Z'
          className={fillOneClass}
        />
        <path
          d='M57.8398 22.0363C57.8398 20.498 59.0869 19.251 60.6252 19.251H84.7072C86.2455 19.251 87.4925 20.498 87.4925 22.0363V32.077H60.6745C59.109 32.077 57.8398 30.8079 57.8398 29.2424V22.0363Z'
          className={fillOneClass}
        />
      </g>
    </svg>
  );
};

export default BedRoomIconGroup;
