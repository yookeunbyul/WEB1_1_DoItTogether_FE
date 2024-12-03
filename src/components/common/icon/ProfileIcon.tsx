interface ProfileIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({
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
      <ellipse cx='11.9999' cy='6.91791' rx='4.71674' ry='4.71674' fill='currentColor' />
      <path
        d='M3.50977 20.2547C3.50977 15.9913 6.96594 12.5352 11.2294 12.5352H12.7704C17.0338 12.5352 20.49 15.9913 20.49 20.2547C20.49 21.1074 19.7988 21.7987 18.9461 21.7987H5.05368C4.201 21.7987 3.50977 21.1074 3.50977 20.2547Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default ProfileIcon;
