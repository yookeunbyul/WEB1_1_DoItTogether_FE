interface PencilIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const PencilIcon: React.FC<PencilIconProps> = ({
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.0957 5.41895C11.0957 4.86666 10.648 4.41895 10.0957 4.41895H5.77734C4.12049 4.41895 2.77734 5.76209 2.77734 7.41895V18.0524C2.77734 19.7093 4.12049 21.0524 5.77734 21.0524H16.4113C18.0681 21.0524 19.4113 19.7093 19.4113 18.0524V13.7356C19.4113 13.1833 18.9635 12.7356 18.4113 12.7356H18.2113C17.659 12.7356 17.2113 13.1833 17.2113 13.7356V18.0524C17.2113 18.4942 16.8531 18.8524 16.4113 18.8524H5.77734C5.33552 18.8524 4.97734 18.4942 4.97734 18.0524V7.41895C4.97734 6.97712 5.33552 6.61895 5.77734 6.61895H10.0957C10.648 6.61895 11.0957 6.17123 11.0957 5.61895V5.41895Z'
        fill='currentColor'
      />
      <path
        d='M9.73977 14.3571C9.37797 14.4115 9.07791 14.0906 9.15653 13.7333L9.7168 11.1867C9.80827 10.771 10.3286 10.6227 10.6163 10.9304L12.6345 13.0892C12.9221 13.3968 12.7392 13.9061 12.3182 13.9694L9.73977 14.3571Z'
        fill='currentColor'
      />
      <rect
        x='17.4707'
        y='3.80664'
        width='3.99875'
        height='10.3383'
        transform='rotate(46.9279 17.4707 3.80664)'
        fill='currentColor'
      />
      <path
        d='M18.0484 3.26584C18.7379 2.62121 19.8195 2.65762 20.4641 3.34716L20.8605 3.77117C21.5051 4.46071 21.4687 5.54227 20.7792 6.18691L18.0484 3.26584Z'
        fill='currentColor'
      />
      <rect
        x='18.0684'
        y='3.24609'
        width='4.00118'
        height='0.87643'
        transform='rotate(46.9279 18.0684 3.24609)'
        fill='currentColor'
      />
    </svg>
  );
};

export default PencilIcon;
