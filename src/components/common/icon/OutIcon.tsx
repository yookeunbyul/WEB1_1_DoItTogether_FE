import React from 'react';

interface OutIconProps {
  fillClass?: string;
}

const OutIcon: React.FC<OutIconProps> = ({ fillClass = 'text-main' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={fillClass}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.5 5.71563H11.0639C11.5057 5.71563 11.8639 6.07379 11.8639 6.51563V7.69324C11.8639 8.30075 12.3564 8.79324 12.9639 8.79324C13.5714 8.79324 14.0639 8.30075 14.0639 7.69324V6.51563C14.0639 4.85877 12.7207 3.51562 11.0639 3.51562H5.5C3.84315 3.51562 2.5 4.85877 2.5 6.51562V17.4852C2.5 19.142 3.84314 20.4852 5.5 20.4852H11.0639C12.7207 20.4852 14.0639 19.142 14.0639 17.4852V16.3076C14.0639 15.7 13.5714 15.2076 12.9639 15.2076C12.3564 15.2076 11.8639 15.7 11.8639 16.3076V17.4852C11.8639 17.927 11.5057 18.2852 11.0639 18.2852H5.5C5.05817 18.2852 4.7 17.927 4.7 17.4852V6.51562C4.7 6.0738 5.05817 5.71563 5.5 5.71563Z'
        fill='currentColor'
      />
      <rect
        x='9.17969'
        y='11.1328'
        width='9.49831'
        height='1.73374'
        rx='0.866869'
        fill='currentColor'
      />
      <rect
        width='7.07063'
        height='2'
        rx='1'
        transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 21.5 11.9609)'
        fill='currentColor'
      />
      <rect
        width='7.07063'
        height='2'
        rx='1'
        transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 16.5 17.0391)'
        fill='currentColor'
      />
    </svg>
  );
};

export default OutIcon;
