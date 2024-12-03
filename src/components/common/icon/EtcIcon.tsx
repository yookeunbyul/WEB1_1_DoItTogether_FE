import React from 'react';

interface EtcIconProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const EtcIcon: React.FC<EtcIconProps> = ({
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
        d='M10.8008 4.20037C10.8008 3.53743 11.3382 3 12.0012 3C12.6641 3 13.2015 3.53743 13.2015 4.20037V11.694H10.8008V4.20037Z'
        className={fillTwoClass}
      />
      <path
        d='M8.62305 12.6943C8.62305 12.1421 9.07076 11.6943 9.62305 11.6943H14.3788C14.9311 11.6943 15.3788 12.1421 15.3788 12.6943V13.2237H8.62305V12.6943Z'
        className={fillOneClass}
      />
      <path
        d='M7.00852 13.8743C7.08025 13.4968 7.41022 13.2236 7.79445 13.2236H16.0996C16.4795 13.2236 16.8071 13.4909 16.8833 13.8632L18.148 20.0399C18.2496 20.5359 17.8706 21.0003 17.3643 21.0003H6.62065C6.11894 21.0003 5.74104 20.5439 5.83471 20.051L7.00852 13.8743Z'
        className={fillTwoClass}
      />
      <path
        d='M8.66797 17.6687C8.66797 17.3689 8.91094 17.126 9.21066 17.126C9.51038 17.126 9.75336 17.3689 9.75336 17.6687V20.9994H8.66797V17.6687Z'
        className={fillOneClass}
      />
      <path
        d='M11.4531 17.6687C11.4531 17.3689 11.6961 17.126 11.9958 17.126C12.2955 17.126 12.5385 17.3689 12.5385 17.6687V20.9994H11.4531V17.6687Z'
        className={fillOneClass}
      />
      <path
        d='M14.2402 17.6687C14.2402 17.3689 14.4832 17.126 14.7829 17.126C15.0826 17.126 15.3256 17.3689 15.3256 17.6687V20.9994H14.2402V17.6687Z'
        className={fillOneClass}
      />
    </svg>
  );
};

export default EtcIcon;
