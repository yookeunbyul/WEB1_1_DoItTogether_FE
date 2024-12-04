interface DateIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const DateIcon: React.FC<DateIconProps> = ({
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
        d='M6.54102 2.6C6.54102 2.26863 6.80964 2 7.14102 2H7.87295C8.20433 2 8.47295 2.26863 8.47295 2.6V3.64658H6.54102V2.6Z'
        fill='currentColor'
      />
      <path
        d='M15.5293 2.6C15.5293 2.26863 15.7979 2 16.1293 2H16.8612C17.1926 2 17.4612 2.26863 17.4612 2.6V3.64658H15.5293V2.6Z'
        fill='currentColor'
      />
      <rect x='3.72422' y='4.54648' width='16.5534' height='16.5534' rx='2.1' fill='currentColor' />
      <rect
        x='3.72422'
        y='4.54648'
        width='16.5534'
        height='16.5534'
        rx='2.1'
        stroke='currentColor'
        strokeWidth='1.8'
      />
      <path
        d='M10.7932 17.3232C10.5434 17.3232 10.2936 17.233 10.1271 16.9623L6.29664 12.812C5.88029 12.3608 5.88029 11.7293 6.29664 11.2781C6.71299 10.827 7.29588 10.827 7.71223 11.2781L10.7932 14.6165L16.289 8.66159C16.7054 8.21046 17.2883 8.21046 17.7046 8.66159C18.121 9.11272 18.121 9.7443 17.7046 10.1954L11.5427 16.8721C11.2928 17.233 11.043 17.3232 10.7932 17.3232Z'
        fill='#FDFDFD'
      />
    </svg>
  );
};

export default DateIcon;
