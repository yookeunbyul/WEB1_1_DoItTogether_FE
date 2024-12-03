import React from 'react';

interface MetalIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const MetalIcon: React.FC<MetalIconProps> = ({
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
        d='M18.4523 2.91315C16.367 1.91406 13.7918 2.27849 12.0639 4.00645C10.4958 5.57456 10.0506 7.84037 10.7283 9.80463L4.22325 16.3097C3.26606 17.2669 3.26606 18.8188 4.22325 19.776C5.18044 20.7332 6.73235 20.7332 7.68953 19.776L14.1941 13.2714C16.1587 13.9499 18.4253 13.5049 19.9938 11.9364C21.7203 10.2099 22.0856 7.63756 21.0896 5.55317C21.0318 5.4323 20.8725 5.4088 20.7778 5.50353L17.7249 8.55643C17.6995 8.58565 17.6589 8.60171 17.6052 8.59552L15.85 8.39328C15.7367 8.38022 15.6257 8.26924 15.6126 8.15591L15.4104 6.40074C15.4048 6.35248 15.4172 6.31483 15.441 6.28925C15.4414 6.28874 15.4414 6.28795 15.4409 6.28746C15.4404 6.28697 15.4404 6.28616 15.4409 6.28566L18.5017 3.22485C18.5964 3.13018 18.573 2.97099 18.4523 2.91315Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default MetalIcon;
