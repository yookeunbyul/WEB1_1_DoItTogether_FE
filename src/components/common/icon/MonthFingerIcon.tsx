interface MonthFingerIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const MonthFingerIcon: React.FC<MonthFingerIconProps> = ({
  className = 'text-sub',
  width = 56,
  height = 53,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 56 53'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clip-path='url(#clip0_2477_7681)' filter='url(#filter0_f_2477_7681)'>
        <path
          d='M42.3811 15.5305L42.4161 15.5183C43.8852 15.005 45.4947 15.7866 46.0109 17.2641L50.2927 29.5187C50.809 30.9962 50.0365 32.61 48.5674 33.1234L48.5324 33.1356C47.0633 33.6489 45.4538 32.8673 44.9376 31.3898L40.6558 19.1352C40.1395 17.6577 40.912 16.0439 42.3811 15.5305Z'
          fill='currentColor'
        />
        <path
          d='M38.9388 19.0728C38.219 16.7827 35.7574 15.5385 33.504 16.3258L19.3825 21.2599C17.1789 22.0299 16.0205 24.4506 16.7948 26.6669L21.642 40.5394C22.7918 43.8302 26.5949 45.3189 29.6453 43.6719L40.1029 38.026C42.4812 36.742 43.6113 33.9397 42.7964 31.3468L38.9388 19.0728Z'
          fill='currentColor'
        />
        <path
          d='M9.68403 24.6482L20.3492 20.9217C22.1627 20.2881 24.1494 21.2529 24.7867 23.0767C25.4239 24.9006 24.4704 26.8927 22.6569 27.5264L11.9917 31.2528C10.1783 31.8865 8.19157 30.9216 7.55432 29.0978C6.91706 27.274 7.87057 25.2818 9.68403 24.6482Z'
          fill='currentColor'
        />
        <path
          d='M38.2952 21.5496C39.1301 20.4066 39.0362 18.6253 38.0855 17.571L30.5502 9.21402C29.3164 7.84573 27.4379 7.93895 26.3544 9.42225C25.271 10.9056 25.3928 13.2172 26.6266 14.5855L35.8833 24.8516L38.2952 21.5496Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_2477_7681'
          x='-0.5'
          y='-0.5'
          width='56.6465'
          height='53.3242'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='0.1' result='effect1_foregroundBlur_2477_7681' />
        </filter>
        <clipPath id='clip0_2477_7681'>
          <rect
            width='45.084'
            height='39.6739'
            fill='white'
            transform='matrix(-0.944033 0.32985 0.32985 0.944033 42.5605 0)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MonthFingerIcon;
