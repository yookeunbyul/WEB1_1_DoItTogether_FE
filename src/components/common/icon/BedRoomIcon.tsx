interface BedRoomIconProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const BedRoomIcon: React.FC<BedRoomIconProps> = ({
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
      <rect x='3.13867' y='19.6641' width='1.84588' height='1.33576' fill='#8DE8D7' />
      <rect x='19.0117' y='19.6641' width='1.84588' height='1.33576' fill='#8DE8D7' />
      <path
        d='M2.86523 5C2.86523 3.89543 3.76066 3 4.86523 3H18.8599C19.9644 3 20.8599 3.89543 20.8599 5V11.7272H2.86523V5Z'
        className={fillTwoClass}
      />
      <rect x='1.19922' y='16.252' width='21.6008' height='3.4126' rx='1' fill='#8DE8D7' />
      <path
        d='M1.89453 12.7266C1.89453 12.1743 2.34225 11.7266 2.89453 11.7266H21.1033C21.6556 11.7266 22.1033 12.1743 22.1033 12.7266V16.4858H1.89453V12.7266Z'
        className={fillOneClass}
      />
      <path
        d='M5.58398 9.92481C5.58398 9.64866 5.80784 9.4248 6.08398 9.4248H10.407C10.6831 9.4248 10.907 9.64866 10.907 9.9248V11.7272H5.58398V9.92481Z'
        className={fillOneClass}
      />
      <path
        d='M13.0957 9.92481C13.0957 9.64866 13.3196 9.4248 13.5957 9.4248H17.9187C18.1948 9.4248 18.4187 9.64866 18.4187 9.9248V11.7272H13.0957V9.92481Z'
        className={fillOneClass}
      />
    </svg>
  );
};

export default BedRoomIcon;
