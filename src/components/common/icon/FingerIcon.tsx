import React from 'react';

interface FingerIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const FingerIcon: React.FC<FingerIconProps> = ({
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
      <rect x='1' y='1' width='22' height='22' rx='11' fill='currentColor' />
      <rect x='5.36523' y='10.1523' width='2.01317' height='6.58071' rx='1' fill='#FDFDFD' />
      <path
        d='M7.94573 10.9315C7.91879 10.0848 8.59785 9.38379 9.44497 9.38379H14.7537C15.5821 9.38379 16.2536 10.0554 16.2536 10.8838V16.0693C16.2536 17.2994 15.1537 18.238 13.9389 18.0444L9.77439 17.3808C8.82728 17.2299 8.12062 16.4279 8.09012 15.4693L7.94573 10.9315Z'
        fill='#FDFDFD'
      />
      <rect x='13.1562' y='9.38379' width='6.4782' height='2.4688' rx='1.2344' fill='#FDFDFD' />
      <path
        d='M8.45184 11.6824C8.03833 11.3988 7.86127 10.7945 8.05636 10.3326L9.60265 6.6716C9.85582 6.07218 10.4961 5.88458 11.0327 6.2526C11.5693 6.62062 11.7991 7.40489 11.546 8.00432L9.64643 12.5017L8.45184 11.6824Z'
        fill='#FDFDFD'
      />
    </svg>
  );
};

export default FingerIcon;